import styled from "styled-components";

const NotStyled = styled.p`
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
      <p>No hay Repositorios</p>
    </NotStyled>
  );
}

export default NotRepo;
