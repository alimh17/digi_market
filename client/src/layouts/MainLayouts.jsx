import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { hideLoadingAction } from "../actions/loadingAction";
import Wave from "./components/Wave";
import { useLocation } from "react-router-dom";
import { handleRouts } from "./utils/handleRoutes";

const MainLayouts = (props) => {
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  if (loading) {
    setTimeout(() => {
      dispatch(hideLoadingAction());
    }, 2000);
  }

  return (
    <div>
      {handleRouts(pathname) ? <Navbar /> : null}
      {props.children}
      {loading ? (
        <div className="w-full h-full  fixed top-0 z-10 bg-gray-400 opacity-75 flex justify-center items-center">
          <Loading />
        </div>
      ) : (
        ""
      )}
      {handleRouts(pathname) ? <Wave /> : null}
      {handleRouts(pathname) ? <Footer /> : null}
    </div>
  );
};
export default MainLayouts;
