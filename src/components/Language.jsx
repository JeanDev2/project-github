import styled from "styled-components";

const LanguageStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  &:before {
    content: "";
    block-size: 1rem;
    inline-size: 1rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
  .language {
    font: var(--caption-regular);
    color: var(--grey-2);
    &:hover {
      color: var(--white);
    }
  }
`;

const languages = {
  ruby: {
    color: "red",
  },
  css: {
    color: "green",
  },
  javascript: {
    color: "yellow",
  },
};

function Language({ name }) {
  const formatedName = name.toLowerCase();
  const color = languages[formatedName]
    ? languages[formatedName].color
    : "white";
  return (
    <LanguageStyled color={color}>
      <>
        <p className="language">{name}</p>
      </>
    </LanguageStyled>
  );
}

export default Language;
