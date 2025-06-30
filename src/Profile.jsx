import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";

export default function Profile() {

  const input = [
    { field: "First Name", value: "firstName" },
    { field: "Last Name", value: "lastName" },
    { field: "Email", value: "email" },
    { field: "Gender", value: "gender" },
    { field: "State", value: "state" },
    { field: "Ocupation", value: "occupation" },
    { field: "Tech Stacks", value: "techStacks" },
    { field: "Goals on DevTinder", value: "goals" },
  ];

  return (
    <div className="flex flex-col gap-y-6 items-start w-1/2 mx-auto my-4">
      <h1 className="navbar-headings">
       Profile
      </h1>

      {input.map((user, i) => (
        <div className="w-full">
          <ProfileInfo field={user.field} value={user.value} />
        </div>
      ))}
    </div>
  );
}
