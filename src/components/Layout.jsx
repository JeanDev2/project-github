import styled from "styled-components";

const LayoutStyled = styled.div`
  min-block-size: 100vh;
  max-inline-size: 75rem;
  margin: auto;
  padding-inline: 1.25rem;
  @media screen and (min-width: 768px) {
    display: grid;
    border: 5px solid red;
    grid-template-areas: "profile filters" "profile repo-list";
    grid-template-columns: 278px 1fr;
    grid-template-rows: auto 1fr;
    column-gap: 2rem;
  }
`;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;
