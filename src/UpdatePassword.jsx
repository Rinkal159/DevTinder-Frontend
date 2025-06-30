import PasswordFields from "./PasswordFields";
import { useState } from "react";
import Error from "./Error";

import chnageMyPassword from "./API_Calling/chnageMyPassword";
import { useDispatch } from "react-redux";

export default function UpdatePassword() {
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [err, setErr] = useState([]);
  const [pass, setPass] = useState(false);

  const dispatch = useDispatch();

  async function changePassword(e) {
    if (e) {
      e.preventDefault();
    }

    // validation to check new and confirm passwords are matching
    if (newPass !== confirmPass) {
      setErr(["New password and Confim password do not match"]);
      return;
    }

    const formData = new FormData();
    formData.append("currentPassword", currPass);
    formData.append("newPassword", newPass);
    formData.append("confirmPassword", confirmPass);

    const data = {
      currentPassword: formData.get("currentPassword"),
      newPassword: formData.get("newPassword"),
      confirmPassword: formData.get("confirmPassword"),
    };

    await chnageMyPassword(data, setPass, setErr, dispatch);

    setCurrPass("");
    setNewPass("");
    setConfirmPass("");
  }

  function changeCurr(e) {
    setCurrPass(e.target.value);
  }
  function changeNew(e) {
    setNewPass(e.target.value);
  }
  function changeConfirm(e) {
    setConfirmPass(e.target.value);
  }

  const passWordInfo = [
    {
      type: "password",
      id: "currentPassword",
      fieldName: "Current Password",
      value: currPass,
      setFieldValue: changeCurr,
    },
    {
      type: "password",
      id: "newPassword",
      fieldName: "New Password",
      value: newPass,
      setFieldValue: changeNew,
    },
    {
      type: "password",
      id: "confirmPassword",
      fieldName: "Confirm Password",
      value: confirmPass,
      setFieldValue: changeConfirm,
    },
  ];

  return (
    <div>
      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      {/* Password changed message */}
      {pass && (
        <div className="outer-error">
          <div className="flex flex-col gap-y-4 border bg-gray-300 rounded-lg">
            <span
              className="pt-2 pr-4 text-lg self-end text-white hover:text-red-500 hover:cursor-pointer"
              onClick={() => setPass("")}
            >
              <i className="fa-solid fa-xmark"></i>
            </span>

            <h2 className="text-lg px-6 pb-6">
              Password changed successfully!!
            </h2>
          </div>
        </div>
      )}

      <div>
        <h1 className="navbar-headings my-8">Update Password</h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            changePassword();
          }}
          className="form"
        >
          {passWordInfo.map((pass, i) => (
            <PasswordFields
              key={i}
              type={pass.type}
              id={pass.id}
              fieldName={pass.fieldName}
              value={pass.value}
              setFieldValue={pass.setFieldValue}
            />
          ))}

          <button
            className="btn btn-outline self-center text-base"
            type="submit"
          >
            Change password
          </button>
        </form>
      </div>
    </div>
  );
}
