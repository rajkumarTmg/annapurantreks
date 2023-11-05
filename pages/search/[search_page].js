import Image from "next/image";
import React, { useState } from "react";
import { nextNavigationDownYellow, searchIcon } from "../../public";
import Footer from "../../src/annapurna/components/header_footer/Footer";
import NavBar from "../../src/annapurna/components/header_footer/NavBar";
import NavToggleBar from "../../src/annapurna/components/header_footer/NavToggleBar";
import SearchPage from "../../src/annapurna/components/searchPage/SearchPage";
import SliderTypeOne from "../../src/annapurna/components/slider/slickSlide/SliderTypeOne";
import {
  fetchMainSearchDatas,
  fetchRecommendedTripsData,
} from "../api/wordpress_API";

const index = ({
  recommendedTripsDatas,
  query,
  fetchFirstFourSearchesDatas,
}) => {
  // Show and Hide Nav Bar
  const [showNavBar, setShowNavBar] = useState(false);
  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  // Initial Search datas
  // const [initialSearchDatas, setInitialSearchDatas] =useState();

  // useEffect(() => {
  //   const fetchFirstFourSearchDatas = async () => {
  //     const nextPage = 1;
  //     // Fetch First four Searches
  //     const getFetchFirstFourSearchesDatas = await fetchMainSearchDatas(
  //       query,
  //       nextPage
  //     );
  //     const fetchFirstFourSearchesDatas = getFetchFirstFourSearchesDatas?.data;
  //     setInitialSearchDatas
  //   };

  //   fetchFirstFourSearchDatas();
  // }, []);

  // Hold search title data
  const [searchTitle, setSearchTitle] = useState(query);

  // new query to search data
  const [newQuery, setNewQuery] = useState("");

  // console.log("query", query);
  // console.log("fetchFirstFourSearchesDatas", fetchFirstFourSearchesDatas);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [allSearchPostsLoaded, setAllSearPostsLoaded] = useState(
    fetchFirstFourSearchesDatas.length < 4
  );

  const [searchDatas, setSearchDatas] = useState(fetchFirstFourSearchesDatas);

  const loadMoreSearchPosts = async () => {
    if (loading || allSearchPostsLoaded) return;
    setLoading(true);
    const nextPage = currentPage + 1;
    const res = await fetchMainSearchDatas(query, nextPage);
    const newSearchPosts = await res.data;
    if (newSearchPosts.length < 4) {
      setAllSearPostsLoaded(true);
      setSearchDatas([...searchDatas, ...newSearchPosts]);
    } else {
      setCurrentPage(nextPage);
      setSearchDatas([...searchDatas, ...newSearchPosts]);
    }
    setLoading(false);
  };

  // handle search submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchTitle(newQuery);
    setNewQuery("");

    // Fetch first Four Search Datas
    try {
      const res = await fetchMainSearchDatas(newQuery, 1);
      const datas = await res?.data;
      setSearchDatas(datas);
      if (datas.length < 4) {
        setAllSearPostsLoaded(true);
      }
    } catch (error) {
      // console.log("Error", error);
    }
  };

  return (
    <>
      {showNavBar ? (
        <div>
          <NavToggleBar handleShowNavBar={handleShowNavBar} />
        </div>
      ) : (
        <div className="relative">
          <NavBar
            handleShowNavBar={handleShowNavBar}
            logoColorBlue
            contactColorBlack
            globeColorBlack
          />

          <div className="container py-32 ">
            {/* Search input field */}
            <div className=" py-32">
              <div className=" relative  md:w-fit ">
                <form onSubmit={handleSearchSubmit}>
                  <input
                    type="text"
                    value={newQuery}
                    onChange={(e) => setNewQuery(e.target.value)}
                    className="border-2 border-black text-black py-8 px-4 flex w-full   md:w-[25vw] rounded-2xl outline-none border-none shadow-md"
                    placeholder="Annapurna"
                  />
                </form>

                <div className="absolute z-30 top-1/2  right-3 md:-right-3 -translate-x-1/2 -translate-y-1/2">
                  <Image
                    onClick={handleSearchSubmit}
                    src={searchIcon}
                    className=" cursor-pointer h-11 w-11 lg:h-16 lg:w-16"
                  />
                </div>
              </div>
            </div>

            {/* Category, search and readmore start */}
            <div className="  border-2 rounded-2xl border-black    ">
              <div className="font-amithen py-10 flex flex-col space-y-3 md:space-y-0 md:space-x-3 text-center justify-center items-center md:flex md:flex-row    ">
                <p className="font-amithen text-3xl md:text-5xl">
                  Search Results for
                </p>
                <p className="font-amithen text-3xl md:text-5xl ml-2 text-secondary-orange">
                  {searchTitle}{" "}
                </p>
              </div>

              {/* Show blogs cards */}

              <div className="mt-5">
                <SearchPage datas={searchDatas} />
              </div>
              {/* Read more button  */}
              <div className="flex justify-center items-center my-10">
                {allSearchPostsLoaded ? (
                  <p className="font-amithen text-5xl text-center">
                    All Posts Are Loaded
                  </p>
                ) : (
                  <>
                    <button
                      onClick={loadMoreSearchPosts}
                      disabled={loading}
                      className="font-amithen text-5xl "
                    >
                      {loading ? (
                        "Loading..."
                      ) : (
                        <div className="flex justify-center items-center space-x-4">
                          <p className="font-amithen text-3xl md:text-5xl">
                            Load more
                          </p>
                          <div>
                            <Image
                              src={nextNavigationDownYellow}
                              className="cursor-pointer"
                            />
                          </div>
                        </div>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
            {/* Category, search and readmore end */}
          </div>

          {/* Recommended packages section start */}
          <div className="bg-primary-blue py-32 ">
            <div className=" pl-20 flex flex-col ">
              <div>
                <p className="space-x-2 text-lg mb-10">
                  <span className="text-secondary-orange font-amithen text-5xl">
                    Recommended
                  </span>{" "}
                  <span className="text-white font-amithen text-5xl">
                    packages
                  </span>
                </p>
              </div>

              {/* Card Sections */}

              <div>
                {recommendedTripsDatas?.length > 0 && (
                  <SliderTypeOne
                    datas={recommendedTripsDatas}
                    slidesToShow={4.5}
                  />
                )}
              </div>
            </div>
          </div>
          {/* Recommended packages section end */}

          {/* Footer section */}
          <Footer />
        </div>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { query } = context.query;
  const nextPage = 1;

  // Fetch First four Searches and Recommended posts concurrently
  const [fetchFirstFourSearchesDatas, recommendedTripsDatas] =
    await Promise.all([
      fetchMainSearchDatas(query, nextPage),
      fetchRecommendedTripsData(),
    ]);

  return {
    props: {
      recommendedTripsDatas: recommendedTripsDatas.data,
      query,
      fetchFirstFourSearchesDatas: fetchFirstFourSearchesDatas.data,
    },
  };
};

export default React.memo(index);
