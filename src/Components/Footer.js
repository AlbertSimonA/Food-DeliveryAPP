import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-10 flex ">
        <div>
          <img className="h-48 ml-24" src="./logo-img.png" alt="" />

          <div>
            <h2 className="ml-20 font-bold text-lg">Stay Connected With</h2>
            <div className="flex ml-20 gap-2 mt-2">
              <img className="h-10" src="./Images/insta.png" alt="" />
              <img className="h-10 " src="./Images/Whatsapp.png" alt="" />
              <img className="h-10" src="./Images/fb.png" alt="" />
              <img className="h-10" src="./Images/Youtube.png" alt="" />
            </div>
          </div>
          <div>
            <h2 className="ml-20 font-bold text-lg">Payment Methods</h2>
            <div className="flex ml-20">
              <img
                className="h-10 "
                src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/banking-and-finance/google-pay-logo.png"
                alt=""
              />
              <img
                className="h-10 "
                src="https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg"
                alt=""
              />
              <img
                className="h-10"
                src="https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg"
                alt=""
              />
              <img
                className="h-10 "
                src="https://static.vecteezy.com/system/resources/previews/002/952/794/original/cash-on-delivery-steacker-free-vector.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div classname="ml=10 flex">
          <div className="ml-10 ">
            <h1 className="font-bold ">ABOUT FOOD HUB</h1>
            <h3>Who We Are</h3>
            <h3>Blog</h3>
            <h3>Work With Us</h3>
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className=" grid">
          <input className="h-7 " type="text" placeholder="Name" />
          <input className="h-7" type="text " placeholder="Email" />
          <textarea
            className="h-14"
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="">
        <h2 className="text-center">All right food hub @ Albert Simon</h2>
      </div>
    </div>
  );
};

export default Footer;
