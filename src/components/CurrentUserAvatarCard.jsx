import { currentUser } from "../App";

export default function CurrentUserAvatarCard() {
  const { userName, name, avatar_url } = currentUser._currentValue;
  console.log(userName, name, avatar_url);

  return (
    <div className="user-card">
      <div>{userName}</div>
      <img src={avatar_url} />
    </div>
  );
}
