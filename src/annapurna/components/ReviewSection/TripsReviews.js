import React from "react";
import ReviewCard from "../cards/ReviewCard";

const TripsReviews = ({ datas }) => {
  return (
    <>
      <div className="border-b-2 pb-14">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-[50vw] ">
            <ReviewCard datas={datas} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TripsReviews;
