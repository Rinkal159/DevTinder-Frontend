export default function ProfilePicture({ imgSrc, alt, stylingForIMGPreview, handleImage }) {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center">
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
