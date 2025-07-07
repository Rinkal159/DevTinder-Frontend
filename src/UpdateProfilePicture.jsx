import { useDispatch, useSelector } from "react-redux";
import ProfilePicture from "./ProfilePicture";
import { useState } from "react";
import updateProfilePicture from "./API_Calling/updateProfilePicture";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Error";
import SuccessMessage from "./SuccessMessage";
import Loading from "./Loading";
import './index.css'

export default function UpdateProfilePicture() {
  const user = useSelector((state) => state.user);
  const { getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();

  const [img, setImg] = useState("");
  const [previewImg, setPreviewImg] = useState(user.img || "");

  const [load, setLoad] = useState(false);
  const [pass, setPass] = useState(false);
  const [err, setErr] = useState([]);

  function handleImage(e) {
    const file = e.target.files[0];
    setImg(file);
    const validPreview = URL.createObjectURL(file);
    setPreviewImg(validPreview);
  }

  async function uploadImg() {
    const formData = new FormData();
    formData.append("img", img);

    if (previewImg === user.img) {
      setErr((prevErr) => [...prevErr, "input is void()"]);
      return;
    }

    const token = await getAccessTokenSilently();

    await updateProfilePicture(
      token,
      formData,
      setLoad,
      setPass,
      setImg,
      setPreviewImg,
      dispatch,
      setErr
    );
  }

  return (
    <div>
      {/* Loading */}
      {load && (
        <Loading
        msg="Updating Profile Picture"
        />
      )}

      {/* Password changed message */}
      {pass && (
        <SuccessMessage
          setSuccess={setPass}
          message="Profile Picture updated successfully!!"
        />
      )}

      {/* Error */}
      {err.length > 0 && <Error err={err} setErr={setErr} />}

      <div className="w-full flex flex-col items-center h-screen gap-y-8 bg-updateBg">
        <h1 className="profile-headings pt-8">
          &lt; Update Profile Picture / &gt;
        </h1>

        <ProfilePicture
          imgSrc={previewImg}
          alt={`${user.firstName} ${user.lastName}`}
          stylingForIMGPreview="w-60 h-60 object-cover rounded-full"
          handleImage={handleImage}
        />

        <button className="update-btns" onClick={uploadImg}>
          Update
        </button>
      </div>
    </div>
  );
}
