import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { HiOutlineChevronDown } from "react-icons/hi";
import { blogImage1, nextNavigationRightYellow } from "../../../../public";
import AnimatedSection from "../../Animations/AnimatedSection";
import HTMLReactParser from "html-react-parser";

const BlogsCard = ({ datas }) => {
  const router = useRouter();
  return (
    <>
      <div className=" md:grid md:grid-cols-2 justify-center items-center my-10 md:my-20">
        {datas.map((data, index) => (
          <AnimatedSection key={data?.id}>
            <div
              className={
                index > 1
                  ? index % 2 == 0
                    ? "pt-12 px-8  border-b-2 md:border-r-2 border-primary-dark-gray"
                    : "pt-12 px-8  border-b-2  border-primary-dark-gray"
                  : index % 2 == 0
                  ? "pt-12 px-8 border-t-2 border-b-2 md:border-r-2 border-primary-dark-gray"
                  : "pt-12 px-8 md:border-t-2 border-b-2  border-primary-dark-gray"
              }
            >
              <div
                onClick={() => router.push(`/blogs/${data?.slug}`)}
                className="group overflow-hidden cursor-pointer relative  h-[288px] w-[100%] md:h-[535px]   bg-white "
              >
                <Image
                  src={
                    data?.x_featured_media_original
                      ? data?.x_featured_media_original
                      : blogImage1
                  }
                  alt="blogImage1"
                  objectPosition="center"
                  layout="fill"
                  objectFit="cover"
                  className=" group-hover:scale-105 transform transition-all duration-500 ease-in-out  "
                />
              </div>
              <div className="my-3 flex ">
                {/* Map Categories */}
                {data?.pure_taxonomies?.blog_categories?.length > 0 ? (
                  data?.pure_taxonomies?.blog_categories?.map(
                    (category, index) => (
                      <p
                        key={index}
                        className="px-5  py-2 mr-4 bg-secondary-light-shade rounded-2xl  text-xs "
                      >
                        {category?.name}
                      </p>
                    )
                  )
                ) : (
                  <p className="px-5  py-2 mr-4 bg-secondary-light-shade rounded-2xl  text-xs ">
                    Uncategorized
                  </p>
                )}
              </div>

              <div
                onClick={() => router.push(`/blogs/${data?.slug}`)}
                className="flex h-[10vw] w-full py-10   justify-center items-center border-t-2 space-x-5"
              >
                <div>
                  <p className="text-2xl max-w-sm md:text-4xl  font-amithen cursor-pointer  text-center">
                    {HTMLReactParser(
                      (data?.title?.rendered).slice(0, 55) + "..."
                    )}
                  </p>
                </div>
                {/* Dropdown icon */}
                <div className="cursor-pointer ">
                  <Image
                    src={nextNavigationRightYellow}
                    alt=""
                    className="h-7 w-7 md:h-12 md:w-12"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
};

export default React.memo(BlogsCard);
