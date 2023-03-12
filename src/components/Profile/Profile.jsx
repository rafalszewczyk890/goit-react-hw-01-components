import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <div className={css.profile}>
    <div className={css.description}>
      <img src={avatar} alt={username} className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statitem}>
        <span>Followers: </span>
        <span>{followers}</span>
      </li>
      <li className={css.statitem}>
        <span>Views: </span>
        <span>{views}</span>
      </li>
      <li className={css.statitem}>
        <span>Likes: </span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
};
