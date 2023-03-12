import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const isOnlineColor = value => {
  if (value.isOnline) {
    return '4px solid green';
  } else {
    return '4px solid red';
  }
};

export const FriendList = ({ friends }) => (
  <ul className={css.friendlist}>
    {friends.map(friend => {
      return (
        <li className={css.frienditem} key={friend.id}>
          <img
            className={css.friendphoto}
            style={{ border: isOnlineColor(friend) }}
            src={friend.avatar}
            alt={friend.name}
          ></img>
          <p>{friend.name}</p>
          <p>{friend.isOnline}</p>
        </li>
      );
    })}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
