import './index.css'

export default function Identity({user, showUserProfile}) {
  return (
    <div onClick={() => showUserProfile(user)} className="flex items-center gap-2">
      <img
        className="h-12 w-12 rounded-full cursor-pointer object-cover"
        src={user.img}
        alt={`${user.firstName} ${user.lastName}`}
      />
      <p
        className="identity req"
      >
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
}
