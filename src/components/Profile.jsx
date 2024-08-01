import styled from "styled-components";
// import props from "./profiledata";
import Button from "./Button";
import Icon from "../assets/icon/Index";

const ProfileStyled = styled.div`
  grid-area: profile;
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
  @media (prefers-color-scheme: light) {
    .info {
      color: var(--black);
      font: var(--body2-regular);
    }
    .name {
      font: var(--headline1);
      color: var(--black);
    }
    .username {
      font: var(--headline2-ligth);
      color: var(--grey-4);
    }
  }
  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-areas: "presentation" "bio-info" "valoration" "location" "link" "twitter" "buttons";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    .presentation {
      grid-area: presentation;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      .avatar {
        block-size: 5rem;
        inline-size: 5rem;
        margin: 0;
      }
      .presentation-name {
        display: flex;
        flex-direction: column;
        margin-block: 0.5rem;
        .name,
        .username {
          margin: 0;
          margin-block-end: 0.5rem;
        }
      }
    }
    .bio {
      grid-area: bio-info;
    }
    .followers {
      grid-area: followers;
    }
    .valoration {
      grid-area: valoration;
      display: flex;
      gap: 0.5rem;
    }
    .link {
      grid-area: link;
    }
    .twitter {
      grid-area: twitter;
    }
    .buttons {
      grid-area: buttons;
    }
  }
`;

function Profile(props) {
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
      <div className="presentation">
        <img
          className="avatar"
          src={avatar_url}
          width="278"
          height="278"
          alt="avatar"
        />
        <div className="presentation-name">
          <p className="name">{name}</p>
          <p className="username">{login}</p>
        </div>
      </div>
      <div className="buttons">
        <Button text="Follow" link="#" />
        <Button
          text="Sponsor"
          icon={<Icon name="heart" size={24} color="var(--pink)" />}
        />
      </div>
      <p className="bio info">{bio}</p>
      <div className="valoration">
        <p className="followers info">
          <Icon name="user" color="var(--grey)" />
          {followers} <span>followers</span> <span>.</span> {following}
          <span>following</span> <span>.</span>
        </p>
        <p className="stars info">
          <Icon name="star" color="var(--grey)" />
          81
        </p>
      </div>
      <p className="location info">
        <Icon name="location" color="var(--grey)" />
        {location}
      </p>
      <a className="link info" href={blog} target="_blank" rel="noreferrer">
        <Icon name="link" color="var(--grey)" />
        {blog}
      </a>
      <a
        className="twitter info"
        href={`https://twitter.com//${twitter_username}`}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="twitter" color="var(--grey)" />@{twitter_username}
      </a>
    </ProfileStyled>
  );
}

export default Profile;
