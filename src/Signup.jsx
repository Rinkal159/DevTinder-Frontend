import { useState } from "react";
import "./index.css";
import axios from "axios";
import { addUser } from "./features/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

export default function Signup() {
  const [imgPreview, setImgPreview] = useState("");
  const [img, setImg] = useState("");
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [state, setState] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");
  const [techStacks, setTechStacks] = useState([]);
  const [goals, setGoals] = useState([]);

  // dropdown 
  const [stateInput, setStateInput] = useState("");
  const [techInput, setTechInput] = useState([]);
  const [goalInput, setGoalInput] = useState([]);

  const [err, setErr] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("img", img);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("passWord", passWord);
      formData.append("state", state);
      formData.append("age", age);
      formData.append("gender", gender);
      formData.append("occupation", occupation);
      formData.append("techStacks", techStacks);
      formData.append("goals", goals);

      const newUser = await axios.post(
        "http://localhost:3002/signup",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (newUser.data.data) {
        setImg("");
        setImgPreview("");

        dispatch(addUser(newUser.data.data));
        console.log(newUser.data.data);
        alert("signed up successfully!");

        return navigate("/feed");
      }
    } catch (err) {
      const errors = err.response?.data?.message || err.message;
      const newerr = errors.replace("User validation failed: ", "").split(",");

      setErr((prevErr) => [...prevErr, ...newerr]);
    }
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      const validImg = URL.createObjectURL(file);
      setImgPreview(validImg);
    }
  }

  // goals
  const goalsOptions = [
    { value: "Collaboration", label: "Collaboration" },
    { value: "Internship", label: "Internship" },
    { value: "Mentorship", label: "Mentorship" },
    { value: "Job Opportunities", label: "Job Opportunities" },
    { value: "Side-projects", label: "Side Projects" },
    { value: "Just Networking", label: "Just Networking" },
  ];

  function handlegoals(selected) {
    const myGoals = selected.map((g) => g.value);
    setGoalInput(selected);
    setGoals(myGoals);
  }

  // states
  const stateOptions = [
    { value: "Andhra Pradesh", label: "Andhra Pradesh" },
    { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
    { value: "Assam", label: "Assam" },
    { value: "Bihar", label: "Bihar" },
    { value: "Chhattisgarh", label: "Chhattisgarh" },
    { value: "Goa", label: "Goa" },
    { value: "Gujarat", label: "Gujarat" },
    { value: "Haryana", label: "Haryana" },
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Jharkhand", label: "Jharkhand" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Kerala", label: "Kerala" },
    { value: "Madhya Pradesh", label: "Madhya Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Manipur", label: "Manipur" },
    { value: "Meghalaya", label: "Meghalaya" },
    { value: "Mizoram", label: "Mizoram" },
    { value: "Nagaland", label: "Nagaland" },
    { value: "Punjab", label: "Punjab" },
    { value: "Rajasthan", label: "Rajasthan" },
    { value: "Sikkim", label: "Sikkim" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "Tripura", label: "Tripura" },
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "West Bengal", label: "West Bengal" },
    {
      value: "Andaman and Nicobar Islands",
      label: "Andaman and Nicobar Islands",
    },
    { value: "Chandigarh", label: "Chandigarh" },
    {
      value: "Dadra & Nagar Haveli and Daman & Diu",
      label: "Dadra & Nagar Haveli and Daman & Diu",
    },
    { value: "Delhi", label: "Delhi" },
    { value: "Jammu and Kashmir", label: "Jammu and Kashmir" },
    { value: "Lakshadweep", label: "Lakshadweep" },
    { value: "Puducherry", label: "Puducherry" },
    { value: "Ladakh", label: "Ladakh" },
  ];

  function handleState(selected) {
    setStateInput(selected);
    setState(selected.value);
  }

  // tech Stacks
  const stacks = [
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "csharp", label: "C#" },
    { value: "cpp", label: "C++" },
    { value: "ruby", label: "Ruby" },
    { value: "go", label: "Go" },
    { value: "rust", label: "Rust" },
    { value: "php", label: "PHP" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "nodejs", label: "Node.js" },
    { value: "express", label: "Express.js" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask" },
    { value: "mongodb", label: "MongoDB" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "mysql", label: "MySQL" },
    { value: "firebase", label: "Firebase" },
    { value: "tailwind", label: "Tailwind CSS" },
    { value: "bootstrap", label: "Bootstrap" },
    { value: "graphql", label: "GraphQL" },
    { value: "docker", label: "Docker" },
    { value: "kubernetes", label: "Kubernetes" },
    { value: "aws", label: "AWS" },
    { value: "azure", label: "Azure" },
    { value: "git", label: "Git" },
    { value: "github", label: "GitHub" },
  ];

  function handleStacks(selected) {
    const stackOpti = selected.map((s) => s.value);
    setTechInput(selected);
    setTechStacks(stackOpti);
  }

  {
    console.log(techStacks);
    console.log(goals);
    console.log(state);
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-black w-1/2 p-10 rounded-lg my-8">
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
            {/* image */}
            <div className="group margin">
              <img
                src={
                  img
                    ? imgPreview
                    : "https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                }
                alt="Profile picture"
                className="w-24 h-24 object-cover rounded-full"
              />
              <input
                type="file"
                name="image"
                id="image"
                accept="image/*"
                onChange={handleImage}
              />
            </div>

            {/* firstname and lastname */}
            <div className="group">
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

            {/* email and password */}
            <div className="group margin">
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

            {/* age and occuation */}
            <div className="group">
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
              <input
                className="hoverInput"
                type="text"
                name="occupation"
                id="occupation"
                placeholder="Occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>

            {/* gender */}
            <div className="flex gap-x-8 justify-center">
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

            {/* state*/}
            <Select
              options={stateOptions}
              value={stateInput}
              onChange={handleState}
              placeholder="State"
              styles={{
                control: (base) => ({
                  ...base,
                  cursor: "text",
                  margin: "0.25rem",
                }),
                menuList: (base) => ({
                  ...base,
                  maxHeight: "15rem",
                }),
              }}
            />

            {/* tech stack */}
            <CreatableSelect
              isMulti
              options={stacks}
              value={techInput}
              onChange={handleStacks}
              placeholder="Tech Stacks"
              styles={{
                control: (base) => ({
                  ...base,
                  cursor: "text",
                  margin: "0.25rem",
                }),
                menuList: (base) => ({
                  ...base,
                  maxHeight: "15rem",
                }),
              }}
            />

            {/* goals */}
            <div>
              <CreatableSelect
                isMulti
                options={goalsOptions}
                value={goalInput}
                onChange={handlegoals}
                placeholder="Goals on DevTinder"
                styles={{
                  control: (base) => ({
                    ...base,
                    cursor: "text",
                    margin: "0.25rem",
                  }),

                  menuList: (base) => ({
                    ...base,
                    maxHeight: "10rem",
                  }),
                }}
              />
            </div>

            <div className="w-full ">
              <div className="flex justify-center pb-4">
                <button type="submit" className="btn btn-outline">
                  /POST Signup
                </button>
              </div>
              <p className="text-center">
                Or Already have an Account?{" "}
                <Link to={"/login"} className="text-blue-400 hover:underline">
                  LogIn
                </Link>
              </p>
            </div>
            <div> </div>
          </form>
        </div>
      </div>

      {err.length > 0 && (
        <div className="outer-error">
          <div className="inner-error">
            <button className="close-btn" onClick={() => setErr([])}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <h2 className="err-heading">Error</h2>
            <ul className="list-of-errors">
              {err.map((li, i) => (
                <li className="errors" key={i}>
                  {li}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
