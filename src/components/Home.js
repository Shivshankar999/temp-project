import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="m-10 ml-80 mt-20 h-96 w-96 bg-slate-400">
      {/* <div className="mt-24"> */}
      <Link to={"/login"}>
        <button className="bg-green-600 text-white border rounded-lg p-5 m-5 mt-32 ml-10">
          login
        </button>
      </Link>
      <Link to={"/dashboard"}>
        <button className="bg-gray-500 text-white border rounded-lg p-5 ml-20">
          dashboard
        </button>
      </Link>
      {/* </div> */}
    </div>
  );
};

export default Home;
