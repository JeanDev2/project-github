import styled from "styled-components";
import props from "./profiledata";
import Button from "./Button";
import Icon from "./icon/Index";

const ProfileStyled = styled.div`
  grid-area: profile;
  .custom {
    border: 1px solid green;
  }
  .avatar {
    border-radius: 50%;
    border: 1px solid var(--grey-1);
    overflow: hidden;
    box-sizing: border-box;
    margin-block-end: 1.5rem;
  }
  .name {
    font: var(--headline1);
    color: var(--white);
    margin: 0;
    margin-block-end: 0.5rem;
  }
  .username {
    margin-block-start: 0.5rem;
    margin-block-end: 1.5rem;
    font: var(--headline2-ligth);
    color: var(--grey-1);
  }
  .info {
    color: var(--grey-1);
    font: var(--body2-regular);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-block: 1rem;
  }
  a:hover {
    text-decoration: underline;
  }

  .buttons {
    display: flex;
    gap: 0.5rem;
    margin-block-end: 1.5rem;
  }
`;

function Profile() {
  const {
    name,
    login,
    avatar_url,
    bio,
    followers,
    following,
    location,
    twitter_username,
    blog,
  } = props;
  return (
    <ProfileStyled>
      <img
        className="avatar"
        src={avatar_url}
        width="278"
        height="278"
        alt="avatar"
      />
      <p className="name">{name}</p>
      <p className="username">{login}</p>
      <div className="buttons">
        <Button text="Follow" link="#" />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" size={24} color="var(--pink)" />}
        />
      </div>
      <p className="bio info">{bio}</p>
      <p className="followers info">
        ° {followers} <span>followers</span> <span>|</span> {following}
        <span>following</span>
      </p>
      <p className="stars info">° 81</p>
      <p className="location info">° {location}</p>
      <a className="info" href={blog} target="_blank" rel="noreferrer">
        {blog}
      </a>
      <a
        className="info"
        href={`https://twitter.com//${twitter_username}`}
        target="_blank"
        rel="noreferrer"
      >
        @{twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
