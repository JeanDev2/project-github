import styled from "styled-components";

const NotStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--body2-semi-bold);
  margin: 0;
  padding-block: 1rem;
`;

function NotRepo() {
  return (
    <NotStyled>
      <span>No hay Repositorios</span>
    </NotStyled>
  );
}

export default NotRepo;
