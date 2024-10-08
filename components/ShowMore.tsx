"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from ".";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) *10;
    // const newPathName = updateSearchParams("limit", `${newLimit}`);

    // router.push(newPathName)
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
