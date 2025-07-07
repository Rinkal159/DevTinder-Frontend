import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import InputFields from "./InputFields";
import DropDownInupts from "./DropDownInupts";
import Error from "./Error";
import updateProfile from "./API_Calling/updateProfile";
import SuccessMessage from "./SuccessMessage";
import Loading from "./Loading";
import './index.css';

export default function UpdatePassword() {
  const user = useSelector((state) => state.user);
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  const [fname, setFname] = useState(user.firstName || "");
  const [lname, setLname] = useState(user.lastName || "");
  const [occupation, setOccupation] = useState(user.occupation || "");
  const [state, setState] = useState(user.state || "");
  const [techStacks, setTechStack] = useState(user.techStacks || []);
  const [goals, setGoals] = useState(user.goals || []);

  const [stateInput, setStateInput] = useState(
    user.state ? { value: user.state, label: user.state } : ""
  );
  const [techStackInput, setTechStackInput] = useState(
    user.techStacks.map((tech) => {
      return { value: tech, label: tech };
    })
  );
  const [goalsInput, setGoalsInput] = useState(
    user.goals.map((goal) => {
      return { value: goal, label: goal };
    })
  );

  const [err, setErr] = useState([]);
  const [pass, setPass] = useState(false);
  const [load, setLoad] = useState(false);

  async function handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    try {
      const token = await getAccessTokenSilently();

      const data = {
        firstName: fname,
        lastName: lname,
        occupation: occupation,
        state: state,
        techStacks: techStacks,
        goals: goals,
      };

      const userdata = {
        firstName: user.firstName,
        lastName: user.lastName,
        occupation: user.occupation,
        state: user.state,
        techStacks: user.techStacks,
        goals: user.goals,
      };

      // do not update if data is same as before
      if (JSON.stringify(data) === JSON.stringify(userdata)) {
        setErr((prevErr) => [...prevErr, "Cannot update same fields!"]);
        return;
      }

      await updateProfile(token, data, setLoad, setPass, setErr, dispatch);
    } catch (err) {
      const error = err.response?.data?.message || err.message;
      setErr((prevErr) => [...prevErr, error]);
    }
  }

  function changeFname(e) {
    setFname(e.target.value);
  }
  function changeLname(e) {
    setLname(e.target.value);
  }
  function changeOccupation(e) {
    setOccupation(e.target.value);
  }
  function changeState(selected) {
    setState(selected.value);
    setStateInput(selected);
  }
  function changeStack(selected) {
    const stackOpti = selected.map((s) => s.value);
    setTechStackInput(selected);
    setTechStack(stackOpti);
  }
  function changeGoals(selected) {
    const myGoals = selected.map((g) => g.value);
    setGoalsInput(selected);
    setGoals(myGoals);
  }

  const updateInfo = [
    {
      type: "text",
      id: "fname",
      fieldName: "First Name",
      value: fname,
      setFieldValue: changeFname,
    },
    {
      type: "text",
      id: "lname",
      fieldName: "Last Name",
      value: lname,
      setFieldValue: changeLname,
    },
    {
      type: "text",
      id: "occupation",
      fieldName: "Occupation",
      value: occupation,
      setFieldValue: changeOccupation,
    },
  ];

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

  // tech Stacks
  const stackOptions = [
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

  // goals
  const goalOptions = [
    { value: "Collaboration", label: "Collaboration" },
    { value: "Internship", label: "Internship" },
    { value: "Mentorship", label: "Mentorship" },
    { value: "Job Opportunities", label: "Job Opportunities" },
    { value: "Side-projects", label: "Side Projects" },
    { value: "Just Networking", label: "Just Networking" },
  ];

  return (
    <div className="update">
      {/* Loading */}
      {load && (
        <Loading
          msg="Updating Profile"
        />
      )}

      {/* Password changed message */}
      {pass && (
        <SuccessMessage
          setSuccess={setPass}
          message="Profile updated successfully!!"
        />
      )}

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <div>
        <h1 className="profile-headings py-4">&lt; Update Profile / &gt;</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="form"
        >
          {/* firstname, lastname and occupation */}
          {updateInfo.map((pass, i) => (
            <InputFields
              key={i}
              type={pass.type}
              id={pass.id}
              fieldName={pass.fieldName}
              value={pass.value}
              setFieldValue={pass.setFieldValue}
            />
          ))}

          {/* state */}
          <DropDownInupts
            id="state"
            fieldName="State"
            isMulti={false}
            options={stateOptions}
            input={stateInput}
            handleInput={changeState}
            placeholder="Select State"
          />

          {/* tech stacks */}
          <DropDownInupts
            id="techStack"
            fieldName="Tech Stacks"
            isMulti={true}
            options={stackOptions}
            input={techStackInput}
            handleInput={changeStack}
            placeholder="Select Tech Stacks"
          />

          {/* goals */}
          <DropDownInupts
            id="goals"
            fieldName="Goals"
            isMulti={true}
            options={goalOptions}
            input={goalsInput}
            handleInput={changeGoals}
            placeholder="Select Goals"
          />

          <button
            className="update-btns"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
