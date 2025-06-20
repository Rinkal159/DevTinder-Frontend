import { useState } from "react";
import "./index.css";
import axios from "axios";
import { addUser } from "./features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [techInput, setTechInput] = useState("");
  const [techInterests, setTechIntrets] = useState([]);

  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function goToLogin() {
    return navigate("/login");
  }

  async function handleClick(e) {
    e.preventDefault();

    try {
      const interests = techInput
        .split(" ")
        .map((item) => item.trim())
        .filter(Boolean);

      const newUser = await axios.post(
        "http://localhost:3002/signup",
        {
          firstName,
          lastName,
          email,
          passWord,
          state,
          age,
          gender,
          occupation,
          techInterests: interests,
        },
        {
          withCredentials: true,
        }
      );
      alert("signed up successfully!");

      dispatch(addUser(newUser.data.data));

      return navigate("/index");
    } catch (err) {
      const errors = err.response?.data?.message || err.message;
      const newerr = errors.replace("User validation failed: ", "").split(",");

      setErr((prevErr) => [...prevErr, ...newerr]);
    }
  }

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center bg-black w-1/2 p-10 rounded-lg">
          <h2 className="text-white text-2xl pb-8 font-semibold">
            Welcome to DevTinder
          </h2>
          <form
            className="flex flex-col space-y-4"
            onSubmit={(e) => {
              handleClick(e);
            }}
            action="POST"
          >
            <div className="group ">
              <input
                className="hoverInput"
                type="text"
                name="firstName"
                id="fname"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFname(e.target.value)}
              />
              <input
                className="hoverInput"
                type="text"
                name="lastName"
                id="lname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="group">
              <input
                className="hoverInput"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="hoverInput"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="group w-full flex justify-between">
              <div>
                <select
                  className="hoverInput cursor-pointer"
                  name="state"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="" disabled selected>
                    Choose state
                  </option>
                  <option value="assam">Assam</option>
                  <option value="arunachal">Arunachal</option>
                  <option value="andhra">Andhra</option>
                  <option value="jammu">Jammu</option>
                  <option value="uttrakhand">Uttrakhand</option>
                </select>
              </div>
              <input
                className="hoverInput"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                min={0}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="radio flex gap-x-8">
              <div className="group cursor-pointer">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="text-white cursor-pointer" htmlFor="male">
                  Male
                </label>
              </div>

              <div className="group">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="text-white cursor-pointer" htmlFor="female">
                  Female
                </label>
              </div>

              <div className="group">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="gender"
                  id="others"
                  value="others"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label className="text-white cursor-pointer" htmlFor="others">
                  others
                </label>
              </div>
            </div>
            <div className="group ">
              <input
                className="hoverInput"
                type="text"
                name="occupation"
                id="occupation"
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
              <input
                className="hoverInput"
                type="text"
                name="techInterests"
                id="techInterests"
                placeholder="Tech Interests"
                value={techInput}
                onChange={(e) => {
                  setTechInput(e.target.value);
                }}
              />
            </div>
            <div className="w-full ">
              <div className="flex justify-center pb-4">
                <button type="submit" className="btn btn-outline">
                  /POST Signup
                </button>
              </div>
              <p className="text-center pb-4">
                Or Already have an Account?{" "}
                <a
                  className="text-blue-400 hover:underline"
                  onClick={goToLogin}
                  href=""
                >
                  LogIn
                </a>
              </p>
            </div>
            <div> </div>
          </form>
        </div>
      </div>

      {err.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className=" shadow-lg relative">
            <button
              className="absolute top-0 text-red-600 right-0  text-xl font-bold hover:text-black"
              onClick={() => setErr([])}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 className="text-lg font-semibold mb-4 text-red-600">Error</h2>
            <ul className="list-decimal list-inside space-y-1">
              {err.map((li, i) => (
                <li key={i}>{li}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
