import styled from "styled-components";
import Language from "./Language";
import Icon from "../assets/icon/Index";

const RepoItemStyled = styled.div`
  /* border: 1px solid white; */
  padding-block-end: 1rem;
  border-block-end: 1px solid var(--grey-2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  &:last-child {
    border-block-end: none;
  }
  .title {
    display: flex;
    gap: 1rem;
    margin: 0;
    a {
      color: var(--primary);
      text-decoration: none;
    }
  }
  .public {
    border: 1px solid var(--grey);
    border-radius: 0.5rem;
    padding-block: 0.125rem;
    padding-inline: 0.5rem;
    font: var(--caption-regular);
  }
  .description {
    margin: 0;
    font: var(--body2-regular);
  }
  .topicList {
    display: flex;
    gap: 0.25rem;
  }

  .topicsItem {
    color: var(--primary);
    background-color: #15223a;
    font: var(--caption-medium);
    padding-block: 0.25rem;
    padding-inline: 0.75rem;
    border-radius: 0.5rem;
  }
  .details {
    display: flex;
    gap: 1rem;
    align-items: center;
    font: var(--caption-regular);
  }
  .details-item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: var(--grey-1);
    & span::first-letter {
      text-transform: uppercase;
    }
    &:hover {
      color: var(--white);
    }
  }
`;

function RepoItem(props) {
  const updatedAt = new Date(props.updated_at);
  const today = new Date();
  const diffMilliseconds = updatedAt - today;
  const diffDays = Math.ceil(diffMilliseconds / (1000 * 60 * 60 * 24));
  const timeago = new Intl.RelativeTimeFormat("es").format(diffDays, "days");
  return (
    <RepoItemStyled>
      <h3 className="title">
        <a href={props.html_url}>{props.name}</a>
        {!props.private ? <span className="public">Public</span> : null}
      </h3>

      {props.description ? (
        <p className="description">{props.description}</p>
      ) : null}

      {props.topics.length ? (
        <div className="topicList">
          {props.topics.map((item) => {
            return (
              <span className="topicsItem" key={item}>
                {item}
              </span>
            );
          })}
        </div>
      ) : null}
      <div className="details">
        {props.language ? <Language name={props.language} /> : null}

        <span className="details-item">
          <Icon name="star" color="var(--grey)" />
          <span>{props.stargazers_count}</span>
        </span>

        <span className="details-item">
          <Icon name="branch" color="var(--grey)" />
          <span>{props.forks_count}</span>
        </span>

        <span className="details-item">
          <span>{timeago}</span>
        </span>
      </div>
    </RepoItemStyled>
  );
}

export default RepoItem;
