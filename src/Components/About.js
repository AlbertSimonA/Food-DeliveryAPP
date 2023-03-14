import React from "react";

const About = () => {
  return (
    <div className="cursor-pointer">
      <div className="flex mt-10">
        <div className="flex">
          <div>
            <h1 className="mt-20 ml-32 font-bold  font text-3xl text-purple-600">
              WELCOME TO OUR WEBSITE
            </h1>
            <h1 className="mt-2 ml-32 font-bold text-blue-500  font text-2xl text-">
              SERVED EVERY DAY SINCE 2022
            </h1>
          </div>
          <img className="h-64 mt-8 ml-96" src="./Chefchechi.png" alt="" />
        </div>
      </div>
      {/* <div>
        <img
          className="h-96 rounded-full ml-20"
          src="https://cdn.create.vista.com/api/media/medium/193629994/stock-photo-professional-chefs-man-woman-cooking?token="
          alt=""
        />
      </div> */}
      <div className=" mt-16">
        <h1 className="text-bold hover:text-blue-500 text-6xl justify-center text-center">
          Our Team Members
        </h1>
        <div className="flex justify-evenly pt-10">
          <img
            className="h-52 w-60 rounded-full"
            src="https://thumbs.dreamstime.com/b/male-chef-portrait-against-grey-background-35515312.jpg"
            alt=""
          />

          <img
            className="h-52 w-60 rounded-full"
            src="https://i.pinimg.com/originals/8c/79/ad/8c79ad83c69ceda5379e9e3dee683e43.png"
            alt=""
          />
          <img
            className="h-60 w-60 rounded-full"
            src="https://media.istockphoto.com/id/1216077524/photo/kitchen-chef.jpg?s=612x612&w=0&k=20&c=WKZj6s7TgxpmIvK3A-3lcNEzrWkbnNB-ZdxxaHYFW-I="
            alt=""
          />
          <img
            className="h-52 w-60 rounded-full"
            src="https://img.freepik.com/premium-photo/crazy-angry-cook-with-knife_251859-4340.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
