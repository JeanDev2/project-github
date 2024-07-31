import styled from "styled-components";

const SelectorStyled = styled.select`
  border: none;
  background-color: var(--buttonBG);
  color: var(--white);
  padding-inline: 1rem;
  font: var(--body2-semi-bold);
  border-radius: 0.5rem;
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
