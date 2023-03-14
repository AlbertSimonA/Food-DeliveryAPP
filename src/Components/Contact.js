import React from "react";

const Contact = () => {
  return (
    <>
      <div>
        <div className="text-center mt-10">
          <h4 className="font-mono">FIND US</h4>
          <h1 className="font-bold text-3xl">CONTACT US</h1>
        </div>
        <div className="flex mt-10 justify-center">
          <div className="grid ml-6">
            <input className=" h-9 w-96" type="text " placeholder="Name" />
            <input className="pt-5 h-9 w-96" type="text " placeholder="Email" />
            <input
              className=" pt-5 h-9 w-96"
              type="text "
              placeholder="Phone Number"
            />
            <textarea
              className="pt-5 w-96"
              placeholder="message"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <button className="bg-purple-700 w-28 text-white h-10 rounded-2xl hover:max-2xl:">
              SUBMIT
            </button>
          </div>
          <div>
            <div className="">
              <div className="ml-10"></div>
              <div className="ml-14">
                <div>
                  <img src="" alt="" />
                  <h1 className="font-mono">PHONE</h1>
                  <h4 className="text-sm">+91 9633278766</h4>
                </div>
                <div className="mt-3">
                  <img src="" alt="" />
                  <h1 className="font-mono">EMAIL</h1>
                  <h4 className="text-sm">foodhubalbert@gmail.com</h4>
                </div>
                <div className="mt-3">
                  <img src="" alt="" />
                  <h1 className="font-mono">INSTAGRAM</h1>
                  <h4 className="text-sm">Food-HUB</h4>
                </div>
                <div className="mt-3">
                  <img src="" alt="" />
                  <h1 className="font-mono">LOCATION</h1>
                  <h4 className="text-sm">Near Cochin University</h4>
                  <h4 className="text-sm">Kalamassery</h4>
                  <h4 className="text-sm">Kochi</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
