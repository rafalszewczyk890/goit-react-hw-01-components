import PropTypes from 'prop-types';

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

// FriendList.propTypes = {
//   friends: PropTypes.array,
//   [friend.avatar]: PropTypes.string,
//   [friend.name]: PropTypes.string,
//   [friend.isOnline]: PropTypes.boolean,
// };
