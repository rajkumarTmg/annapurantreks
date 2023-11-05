import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { HiOutlineChevronDown } from "react-icons/hi";
import {
  blogImage1,
  defaultImage,
  nextNavigationRightYellow,
} from "../../../../public";
import Head from "next/head";

const SearchPage = ({ datas }) => {
  const router = useRouter();

  // const datas = [
  //   {
  //     id: 3577,
  //     date: "2023-02-22T16:26:44",
  //     slug: "test-5",
  //     title: "title",
  //     content: "content",
  //     pure_taxonomies: {
  //       blog_categories: [
  //         {
  //           term_id: 112,
  //           name: "Guides for trip",
  //           slug: "guides-for-trip",
  //           term_group: 0,
  //           term_taxonomy_id: 112,
  //           taxonomy: "blog_categories",
  //           description: "Guides for trip",
  //           parent: 0,
  //           count: 5,
  //           filter: "raw",
  //         },
  //       ],
  //     },
  //     x_featured_media_original:
  //       "https://annapurnatrek.abhiyantraconsulting.com.np/wp-content/uploads/2020/09/Poonhill_GLUNS.jpg",
  //   },
  //   {
  //     id: 3576,
  //     date: "2023-02-22T16:25:51",
  //     slug: "test-4",
  //     title: "title",
  //     content: "content",
  //     pure_taxonomies: {
  //       blog_categories: [
  //         {
  //           term_id: 112,
  //           name: "Guides for trip",
  //           slug: "guides-for-trip",
  //           term_group: 0,
  //           term_taxonomy_id: 112,
  //           taxonomy: "blog_categories",
  //           description: "Guides for trip",
  //           parent: 0,
  //           count: 5,
  //           filter: "raw",
  //         },
  //       ],
  //     },
  //     x_featured_media_original:
  //       "https://annapurnatrek.abhiyantraconsulting.com.np/wp-content/uploads/2020/09/Mount_Makalu_Gluns.jpg",
  //   },
  //   {
  //     id: 3574,
  //     date: "2023-02-22T16:13:45",
  //     slug: "test-3",
  //     title: "title",
  //     content: "content",
  //     pure_taxonomies: {
  //       blog_categories: [
  //         {
  //           term_id: 112,
  //           name: "Guides for trip",
  //           slug: "guides-for-trip",
  //           term_group: 0,
  //           term_taxonomy_id: 112,
  //           taxonomy: "blog_categories",
  //           description: "Guides for trip",
  //           parent: 0,
  //           count: 5,
  //           filter: "raw",
  //         },
  //       ],
  //     },
  //     x_featured_media_original:
  //       "https://annapurnatrek.abhiyantraconsulting.com.np/wp-content/uploads/2020/10/Peekye_18.jpg",
  //   },
  //   {
  //     id: 3568,
  //     date: "2023-02-21T16:25:31",
  //     slug: "test-2",
  //     title: "title",
  //     content: "content",
  //     pure_taxonomies: {
  //       blog_categories: [
  //         {
  //           term_id: 112,
  //           name: "Guides for trip",
  //           slug: "guides-for-trip",
  //           term_group: 0,
  //           term_taxonomy_id: 112,
  //           taxonomy: "blog_categories",
  //           description: "Guides for trip",
  //           parent: 0,
  //           count: 5,
  //           filter: "raw",
  //         },
  //       ],
  //     },
  //     x_featured_media_original:
  //       "https://annapurnatrek.abhiyantraconsulting.com.np/wp-content/uploads/2020/10/Phapchhermo_Peak.jpg",
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Annapurnatreks</title>
      </Head>
      <>
        <div className="md:grid md:grid-cols-2 justify-center items-center   ">
          {datas?.map((data, index) => (
            <div
              key={data?.id}
              className={
                index > 1
                  ? index % 2 == 0
                    ? "pt-12 px-8  border-b-2 md:border-r-2 border-primary-dark-gray"
                    : "pt-12 px-8  border-b-2  border-primary-dark-gray"
                  : index % 2 == 0
                  ? "pt-12 px-8 border-t-2 md:border-b-2 md:border-r-2 border-primary-dark-gray"
                  : "pt-12 px-8 border-t-2 border-b-2  border-primary-dark-gray"
              }
            >
              <div className="relative h-[285px] md:h-[535px]   ">
                <Image
                  //   src={data?.x_featured_media_original}
                  src={
                    data?._embedded?.self[0]?.x_featured_media_original
                      ? data?._embedded?.self[0]?.x_featured_media_original
                      : defaultImage
                  }
                  alt="Search Image"
                  objectPosition="center"
                  layout="fill"
                  objectFit="cover"
                  className="   "
                />
              </div>

              <div
                onClick={() => {
                  switch (data?.subtype) {
                    case "trips":
                      router.push({
                        pathname: "/exploration/[exploration_page]",
                        query: {
                          exploration_page: "query",
                          type: `${data?.subtype}`,
                          slug: `${data?._embedded?.self[0]?.slug}`,
                        },
                      });
                      break;

                    case "destinations":
                      router.push(
                        `/destinations/${data?._embedded?.self[0]?.slug}`
                      );
                      break;

                    case "bhutantour":
                      router.push({
                        pathname: "/exploration/[exploration_page]",
                        query: {
                          exploration_page: "query",
                          type: `${data?.subtype}`,
                          slug: `${data?._embedded?.self[0]?.slug}`,
                        },
                      });
                      break;

                    case "tibetpackagetour":
                      router.push({
                        pathname: "/exploration/[exploration_page]",
                        query: {
                          exploration_page: "query",
                          type: `${data?.subtype}`,
                          slug: `${data?._embedded?.self[0]?.slug}`,
                        },
                      });
                      break;

                    default:
                      break;
                  }
                }}
                className="flex py-5 justify-center items-center border-t-2 space-x-5"
              >
                <div className="flex justify-center items-center md:h-[10vw]">
                  <p className=" text-3xl md:text-4xl   font-amithen cursor-pointer  text-center">
                    {data?._embedded?.self[0].title?.rendered.length > 50
                      ? data?._embedded?.self[0].title?.rendered.substring(
                          0,
                          44
                        ) + "..."
                      : data?._embedded?.self[0].title?.rendered}
                    {/* title */}
                  </p>
                </div>
                {/* Dropdown icon */}
                <div className="cursor-pointer">
                  <Image src={nextNavigationRightYellow} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default React.memo(SearchPage);
