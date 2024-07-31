import styled from "styled-components";
import RepoItem from "./Repo-item";
import NotRepo from "./Not-repo";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function RepoList({ repoList, search, language }) {
  let list = repoList;

  if (search !== "") {
    list = list.filter((item) => {
      return item.name.toLowerCase().search(search.toLowerCase()) >= 0;
    });
  }
  if (language !== "") {
    list = list.filter((item) => {
      return (
        item.language && item.language.toLowerCase() === language.toLowerCase()
      );
    });
  }
  return (
    <RepoListStyled>
      {list.length === 0 ? (
        <NotRepo />
      ) : (
        list.map((item) => {
          return <RepoItem {...item} key={item.id} />;
        })
      )}
    </RepoListStyled>
  );
}

export default RepoList;
