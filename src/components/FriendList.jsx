import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => {
      return (
        <li key={friend.id}>
          <img src={friend.avatar} alt={friend.name}></img>
          <p>{friend.name}</p>
          <p>{friend.isOnline}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
