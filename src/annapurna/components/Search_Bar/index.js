import React, { useState } from "react";
import { MdNearMe, MdSearch, MdAccessTimeFilled } from "react-icons/md";
import { HiViewList } from "react-icons/hi";
import { LocationArrow, searchIcon } from "../../../../public";
import Image from "next/image";
import { fetchMainSearchDatas } from "../../../../pages/api/wordpress_API";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [showHideSearchInput, setShowHideSearchInput] = useState(false);

  const router = useRouter();

  // Input search state
  const [searchQuery, setSearchQuery] = useState("");
  // console.log(searchQuery);

  // handle search
  const handleSearch = async (e) => {
    e.preventDefault();

    // Fetch search result data
    try {
      router.push({
        pathname: "/search/[search_page]",
        query: {
          search_page: "results",
          query: searchQuery,
        },
      });
    } catch (error) {
      // console.log("error", error);
    }
  };
  return (
    <>
      <div className="container flex justify-center items-center  ">
        <div className="w-full md:w-fit flex justify-center items-center z-40 -mt-56 md:-mt-24 shadow-md bg-white  md:px-16 rounded-xl py-3 md:py-10 space-x-2 md:space-x-10 ">
          {/* Destination */}
          <div className="flex items-center justify-center  ">
            {showHideSearchInput ? (
              <p>Search field</p>
            ) : (
              <>
                <div className="flex justify-center items-center space-x-2 md:space-x-4">
                  <div className=" ">
                    <Image
                      src={LocationArrow}
                      className="h-6 w-6  md:h-8 md:w-8 "
                    />
                  </div>
                  {/* <p className=" flex flex-col">
                  <span className="font-semibold  text-lg">Destination</span>
                  <span className="text-xs text-secondary-light-gray">
                    Where are you going?
                  </span>
                </p> */}
                  <form onSubmit={handleSearch} className="">
                    <input
                      type="text"
                      placeholder="Destination, Tours, Trips..."
                      className="focus:outline-none pl-1"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </form>
                </div>{" "}
              </>
            )}
          </div>

          {/* Category */}
          {/* <div className="flex">
            <div className="mt-1.5 mr-2">
              <HiViewList />
            </div>
            <p className=" flex flex-col">
              <span className="font-semibold  text-lg">Category</span>
              <span className="text-xs text-secondary-light-gray">
                Select a category
              </span>
            </p>
          </div> */}

          {/* Duration */}
          {/* <div className="flex">
            <div className="mt-1.5 mr-2">
              <MdAccessTimeFilled className="" />
            </div>
            <p className=" flex flex-col">
              <span className="font-semibold  text-lg">Duration</span>
              <span className="text-xs text-secondary-light-gray">
                How long are you going to stay?
              </span>
            </p>
          </div> */}

          {/* Search Icon */}

          <Image
            onClick={handleSearch}
            src={searchIcon}
            alt="search Icon"
            className="cursor-pointer h-7 w-7 md:h-16 md:w-16"
          />
        </div>
      </div>
    </>
  );
};

export default React.memo(SearchBar);
