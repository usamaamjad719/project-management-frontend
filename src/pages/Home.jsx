import React from "react";
import { showSuccessToast } from "../components/ToastNotification";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Home = () => {
  const handleClick = () => {
    showSuccessToast("success");
  };

  return (
    <>
      <h2 className="text-2xl font-bold">Home Page</h2>;
      {/* <button
        className="px-4 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 cursor-pointer"
        onClick={handleClick}
      >
        Click Me To show taost
      </button>
      <br />
      <Skeleton width={100} height={100} className="rounded-full" /> */}
    </>
  );
};

export default Home;
