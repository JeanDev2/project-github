import styled from "styled-components";

const SelectorStyled = styled.select`
  border: none;
  background-color: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  font: var(--body2-semi-bold);
  border-radius: 0.5rem;
  @media screen and (prefers-color-scheme) {
    background-color: var(--grey-5);
    color: var(--bg);
    border: 1px solid var(--grey);
    &:hover {
      background-color: var(--grey-1);
    }
  }
`;

function Selector({ children, setLanguage, setSearch }) {
  function handleFilters(e) {
    if (setLanguage) {
      setLanguage(e.target.value);
    }
  }
  return <SelectorStyled onChange={handleFilters}>{children}</SelectorStyled>;
}

export default Selector;
