export default function ProfilePicture({ imgSrc, alt, stylingForIMGPreview, handleImage }) {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center shadow-profilePictureShadow p-8 rounded-xl">
      <img src={imgSrc} alt={alt} className={stylingForIMGPreview} />
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleImage}
      />
    </div>
  );
}
