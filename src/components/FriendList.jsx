export const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => {
      return (
        <>
          <img src={friend.avatar} alt={friend.name}></img>
          <p>{friend.name}</p>
          <p>{friend.isOnline}</p>
        </>
      );
    })}
  </ul>
);
