import React from "react";
import { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <>
      <div className="bg-pink-200 w-[600px] ml-96 rounded-3xl hover:bg-yellow-200">
        <form className="justify-center" onSubmit={handleSubmit}>
          <div className="justify-center  ml-24">
            <div className="justify-center">
              <h1 className="justify-center mr-11 text-center font-bold text-3xl">
                Sign In
              </h1>
              <div className="mt-10">
                <label className="font-semibold " htmlFor="">
                  Username
                </label>
                <br />
                <input
                  className="rounded-lg w-60"
                  type="text"
                  id="username"
                  name="username"
                  value={inputs.username}
                  onChange={handleChange}
                  required
                />{" "}
                <br />
                <span
                  className="text-sm
              "
                >
                  Username should have 3-16 characters
                </span>
              </div>
            </div>
            <div className="mt-5">
              <label className="font-semibold " htmlFor="">
                Email
              </label>
              <br />
              <input
                className="rounded-lg  w-60"
                type="email"
                id="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <span className="text-sm">Enter a valid Email ID</span>
            </div>
            <div className="mt-5">
              <label className="font-semibold " htmlFor="">
                Password
              </label>
              <br />
              <input
                className="rounded-lg  w-60"
                pattern=""   
                type="password"
                id="password"
                name="password"
                value={inputs.password}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <span className="text-sm text-red ">
                Password must have minimum 8 characters
              </span>
            </div>

            <div className="mt-5">
              <label className="font-semibold" htmlFor="">
                Confirm Password
              </label>
              <br />
              <input
                className="rounded-lg w-60"
                type="cpassword"
                id="cpassword"
                name="cpassword"
                pattern="(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                value={inputs.cpassword}
                onChange={handleChange}
                required
              />{" "}
              <br />
              <span className="text-sm">Password is not matching</span>
            </div>
            <br />
            <input
              className="bg-white h-10 w-24 rounded-xl hover:bg-blue-500 hover:text-white"
              type="submit"
              value="Register"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
