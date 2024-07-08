import styled from "styled-components";

const RepoListStyled = styled.div`
  grid-area: repo-list;
  background-color: blanchedalmond;
`;

function RepoList({ RepoList }) {
  return <RepoListStyled>RepoList</RepoListStyled>;
}

export default RepoList;
