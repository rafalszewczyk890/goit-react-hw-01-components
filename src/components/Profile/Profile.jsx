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
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className={css.stats}>
      <li className={css.statitem}>
        <span className="label">Followers: </span>
        <span className="quantity">{followers}</span>
      </li>
      <li className={css.statitem}>
        <span className="label">Views: </span>
        <span className="quantity">{views}</span>
      </li>
      <li className={css.statitem}>
        <span className="label">Likes: </span>
        <span className="quantity">{likes}</span>
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
