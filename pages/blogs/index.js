import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { blogImage1, nextNavigationDownYellow, searchIcon } from "../../public";
import BlogsCard from "../../src/annapurna/components/cards/BlogsCard";
import ExperienceForm from "../../src/annapurna/components/forms/ExperienceForm";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import {
  fetchBlogPostsLoadMore,
  fetchBlogsByCategoriesLoadMore,
  fetchBlogsCategories,
  fetchDatasAccordingToCategoriesId,
  fetchFirstFourBlogPosts,
  fetchSearchBlogsResultsLoadMore,
  fetchSearchFirstFourBlogsResults,
} from "../api/wordpress_API";
import Section from "../../src/annapurna/components/containers/Section";
import { AnimatePresence } from "framer-motion";
import AnimatedMainContent from "../../src/annapurna/Animations/AnimatedMainContent";
import AnimatedNavBar from "../../src/annapurna/Animations/AnimatedNavBar";
import SocialMediaPostsShow from "../../src/annapurna/components/slider/SocialMedia/SocialMediaPostsShow";
import Head from "next/head";

const index = ({ blogsCategories, initialBlogsDatas }) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // State for query
  const [searchQuery, setSearchQuery] = useState("");

  // Show search Title
  const [showSearchTitle, setShowSearchTitle] = useState(false);

  //Hold search title query
  const [searchHoldTitleQuery, setSearchHoldTitleQuery] = useState("");

  // console.log(blogsDatas);
  // console.log(blogsCategories);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allBlogsLoaded, setAllBlogsLoaded] = useState(
    initialBlogsDatas.length < 4
  );
  const [blogsDatas, setBlogsDatas] = useState(initialBlogsDatas);

  const [fetchBlogsByCategory, setFetchBlogsByCategory] = useState(false);
  const [onClickCategoryId, setOnClickCategoryId] = useState("");

  // check whether state is in all blogs or in any categories by slug
  const [slugBlogAndCategoriesClicked, setSlugBlogAndCategoriesClicked] =
    useState("allBlogs");

  const loadMoreBlogs = async () => {
    try {
      if (loading || allBlogsLoaded) return;
      setLoading(true);
      const nextPage = currentPage + 1;
      const res = await fetchBlogPostsLoadMore(nextPage);
      const newBlogs = await res.data;
      if (newBlogs.length < 4) {
        setAllBlogsLoaded(true);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      } else {
        setCurrentPage(nextPage);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      }
      setLoading(false);
    } catch (error) {
      setAllBlogsLoaded(true);
    }
  };

  // Fetch Blogs datas according to categories id
  const handleFetchBlogsByCategories = async (id) => {
    // console.log(id);
    const res = await fetchDatasAccordingToCategoriesId(id);
    const blogsDatas = res.data;
    setBlogsDatas(blogsDatas);
    if (blogsDatas.length < 4) setAllBlogsLoaded(true);
    setOnClickCategoryId(id);
    setFetchBlogsByCategory(true);
  };

  // Load more blogs by categories
  const loadMoreBlogsByCategory = async () => {
    try {
      if (loading || allBlogsLoaded) return;
      setLoading(true);
      const nextPage = currentPage + 1;
      const res = await fetchBlogsByCategoriesLoadMore(
        onClickCategoryId,
        nextPage
      );
      const newBlogs = await res.data;
      if (newBlogs.length <= 4) {
        setAllBlogsLoaded(true);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      } else {
        setCurrentPage(nextPage);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      }
      setLoading(false);
    } catch (error) {
      setAllBlogsLoaded(true);
    }
  };

  // handle all blogs button clicked
  const handleAllBlogsFilterClicked = async () => {
    setBlogsDatas(initialBlogsDatas);
    setCurrentPage(1);
    setAllBlogsLoaded(false);
    setLoading(false);
    setFetchBlogsByCategory(false);
    setSlugBlogAndCategoriesClicked("allBlogs");
  };

  // handle categories button clicked
  const handleCategoriesFilterClicked = (category) => {
    handleFetchBlogsByCategories(category?.id);
    setAllBlogsLoaded(false);
    setCurrentPage(1);
    setSlugBlogAndCategoriesClicked(category?.slug);
    setShowSearchTitle(false);
    setSearchQuery("");
    setSearchHoldTitleQuery("");
  };

  // Handle Search blogs
  const handleSearchBlogs = async (e) => {
    e.preventDefault();
    const res = await fetchSearchFirstFourBlogsResults(searchQuery);
    const datas = await res.data;
    // console.log("search datas", datas);
    setShowSearchTitle(true);

    setBlogsDatas(datas);
    setSearchQuery("");
    setSearchHoldTitleQuery(searchQuery);
    if (datas.length <= 4) {
      setAllBlogsLoaded(true);
    }
    // setSlugBlogAndCategoriesClicked("searchBlogs");
  };

  // Fetch more blogs by search
  const loadMoreBlogsBySearch = async () => {
    try {
      if (loading || allBlogsLoaded) return;
      setLoading(true);
      const nextPage = currentPage + 1;
      const res = await fetchSearchBlogsResultsLoadMore(
        searchHoldTitleQuery,
        nextPage
      );
      const newBlogs = await res.data;
      if (newBlogs.length <= 4) {
        setAllBlogsLoaded(true);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      } else {
        setCurrentPage(nextPage);
        setBlogsDatas([...blogsDatas, ...newBlogs]);
      }
      setLoading(false);
    } catch (error) {
      setAllBlogsLoaded(true);
    }
  };

  return (
    <>
      <Head>
        <title>Blogs | Annapurnatreks</title>
        <meta name="description" content="Annapurnatreks Blogs" />
      </Head>
      <>
        {/* Nav toggle bar */}
        <AnimatePresence>
          {showNavBar && (
            <AnimatedNavBar>
              <NavToggleBar handleShowNavBar={handleShowNavBar} />
            </AnimatedNavBar>
          )}
        </AnimatePresence>
        {/* Nav toggle bar end */}
        {/* Main content start */}
        <AnimatePresence>
          {!showNavBar && (
            <AnimatedMainContent>
              <div>
                <NavBar
                  handleShowNavBar={handleShowNavBar}
                  logoColorBlue
                  contactColorBlack
                  globeColorBlack
                />
                <Section>
                  <div className="container flex flex-col justify-center items-center pt-28  md:pt-32 ">
                    <p className="font-amithen text-3xl md:text-5xl">
                      What are you{" "}
                      <span className="text-secondary-orange font-amithen text-3xl md:text-5xl ">
                        looking
                      </span>{" "}
                      for?
                    </p>
                    <p className="text-xs md:text-base font-normal mt-2">
                      Read stories and get inspired
                    </p>
                  </div>
                </Section>

                {/* Show blogs Section */}
                <Section>
                  <div className="container">
                    {/* Recommended and search section start */}
                    <div className="flex justify-between items-center pb-3 md:pb-6  mx-4 md:mx-28">
                      {/* Recommended and search */}
                      <div className="flex  items-center space-x-1">
                        <p className="text-xs md:text-base">Recommended </p>
                        {/* Dropdown icon */}
                        <div className="flex items-center justify-center">
                          <Image
                            src={nextNavigationDownYellow}
                            className="cursor-pointer h-7 w-7 md:h-12 md:w-12"
                          />
                        </div>
                      </div>

                      {/* Search section */}
                      <form
                        onSubmit={handleSearchBlogs}
                        className="flex justify-center items-center space-x-2"
                      >
                        {/* <p>Search</p> */}
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search"
                          className="px-4 py-2 border-b-2 w-40  border-gray-200 outline-none rounded-md"
                        />
                        <button type="submit" className="">
                          <label htmlFor="">
                            <Image
                              src={searchIcon}
                              alt="Search Ico"
                              className="h-8 w-8 md:h-12 md:w-12 cursor-pointer"
                            />
                          </label>
                        </button>
                      </form>
                    </div>
                    {/* Recommended and search section end */}

                    {/* Category, search and readmore start */}
                    <div className="border-2 rounded-2xl border-black py-10  ">
                      {/* show Categories start */}
                      <div className="flex flex-wrap   md:space-x-4 justify-center items-center">
                        <div
                          onClick={() => handleAllBlogsFilterClicked()}
                          className={
                            slugBlogAndCategoriesClicked === "allBlogs"
                              ? "px-4  py-2 mt-4 md:mt-0 text-xs md:text-base  bg-secondary-orange rounded-3xl cursor-pointer  text-white"
                              : "px-4  py-2 mt-4 md:mt-0 text-xs md:text-base  bg-secondary-light-shade rounded-3xl cursor-pointer hover:bg-secondary-orange hover:text-white"
                          }
                        >
                          <p>All blogs</p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center  mt-4  md:mt-0  md:space-x-4">
                          {blogsCategories?.map((category) => (
                            <div
                              key={category?.id}
                              onClick={() =>
                                handleCategoriesFilterClicked(category)
                              }
                              className="flex justify-center items-center mx-2 my-2 md:my-0 md:mx-0"
                            >
                              <div
                                className={
                                  slugBlogAndCategoriesClicked ===
                                  category?.slug
                                    ? "px-4  py-2  text-xs md:text-base bg-secondary-orange rounded-3xl cursor-pointer  text-white"
                                    : "px-4  py-2  text-xs md:text-base bg-secondary-light-shade rounded-3xl cursor-pointer hover:bg-secondary-orange hover:text-white"
                                }
                              >
                                <p className="text-center">{category?.name}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* show Categories end */}
                      {/* show serach title */}
                      {showSearchTitle && (
                        <div className="my-20 flex justify-center items-center  text-3xl md:text-5xl font-amithen ">
                          Search Result for{" "}
                          <p className="text-3xl md:text-5xl font-amithen text-secondary-orange ml-2">
                            {searchHoldTitleQuery}
                          </p>
                        </div>
                      )}

                      {/* Show blogs cards */}

                      <BlogsCard datas={blogsDatas} />

                      {/* Read more button  */}
                      <div className="flex justify-center items-center">
                        {allBlogsLoaded ? (
                          <p className="font-amithen text-3xl md:text-5xl text-center">
                            All Blogs Are Loaded
                          </p>
                        ) : (
                          <>
                            {searchHoldTitleQuery ? (
                              <button
                                onClick={loadMoreBlogsBySearch}
                                disabled={loading}
                                className="font-amithen text-3xl md:text-5xl "
                              >
                                {loading ? (
                                  "Loading..."
                                ) : (
                                  <div className="flex justify-center items-center space-x-4">
                                    <p className="font-amithen text-3xl md:text-5xl">
                                      Search more{" "}
                                    </p>
                                    <div>
                                      <Image
                                        src={nextNavigationDownYellow}
                                        className="cursor-pointer h-7 w-7 md:h-12 md:w-12"
                                      />
                                    </div>
                                  </div>
                                )}
                              </button>
                            ) : (
                              <button
                                onClick={
                                  fetchBlogsByCategory
                                    ? loadMoreBlogsByCategory
                                    : loadMoreBlogs
                                }
                                disabled={loading}
                                className="font-amithen text-3xl md:text-5xl "
                              >
                                {loading ? (
                                  "Loading..."
                                ) : (
                                  <div className="flex justify-center items-center space-x-4">
                                    <p className="font-amithen text-3xl md:text-5xl">
                                      Read more
                                    </p>
                                    <div>
                                      <Image
                                        src={nextNavigationDownYellow}
                                        className="cursor-pointer h-7 w-7 md:h-12 md:w-12"
                                      />
                                    </div>
                                  </div>
                                )}
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Category, search and readmore end */}
                  </div>
                </Section>

                {/* Message Section Start  */}
                <Section className="bg-primary-blue text-white">
                  <div className=" container flex  flex-col lg:flex lg:flex-row  justify-center items-center ">
                    <div className="flex w-full pb-8 md:pb-20 2xl:pb-36  items-center justify-center md:justify-start  ">
                      <div className=" flex lg:flex-col space-x-2 md:space-x-4 lg:space-x-0">
                        <div className="flex space-x-2 md:space-x-4">
                          <p className="font-amithen text-3xl md:text-5xl">
                            We'd
                          </p>{" "}
                          <p className="font-amithen text-3xl md:text-5xl text-secondary-orange">
                            love
                          </p>
                        </div>
                        <p className="font-amithen text-3xl md:text-5xl">
                          {" "}
                          to hear from you
                        </p>
                      </div>
                    </div>

                    <div>
                      <ExperienceForm />
                    </div>
                  </div>
                </Section>
                {/* Message Section end  */}

                {/* Social media posts show section */}
                <SocialMediaPostsShow />

                {/* Footer section */}
                <Footer />
              </div>
            </AnimatedMainContent>
          )}
        </AnimatePresence>
        {/* Main content end */}
      </>
    </>
  );
};

// Fetch Datas details
export const getServerSideProps = async () => {
  //  Fetch First Four Blogs
  const getBlogs = await fetchFirstFourBlogPosts();
  const initialBlogsDatas = getBlogs.data;

  // Fetch Blogs Categories
  const getCategories = await fetchBlogsCategories();
  const blogsCategories = getCategories.data;

  return {
    props: {
      initialBlogsDatas,
      blogsCategories,
    },
  };
};

export default React.memo(index);
