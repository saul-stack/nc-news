export default function CurrentUserAvatarCard() {
  const userAvatar =
    "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953";
  const currentUser = "tickle122";

  return (
    <div className="user-card">
      <div>
        <div>{currentUser}</div>
        <img src={userAvatar} />
      </div>
    </div>
  );
}
