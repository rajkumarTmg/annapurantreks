import "../styles/globals.css";
import React from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "../redux/store";

//Tostify notification
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../src/components/headerFooter/Navbar";
import Footer from "../src/components/headerFooter/Footer";

// Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import motion

function Home({ Component, pageProps }) {
  //axios configuration
  // axios.defaults.baseURL = "http://localhost:9000/api";

  // axios.defaults.baseURL = "https://sunwaybook.herokuapp.com/api";

  return (
    <>
      <Provider store={store}>
        {/* <div className="bg-gray-50"> */}

        <div>
          {/* <Navbar /> */}

          <Component {...pageProps} />
          <ToastContainer position="bottom-right" />
          {/* <Footer /> */}
        </div>
      </Provider>
    </>
  );
}

export default React.memo(Home);
