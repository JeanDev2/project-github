import styled from "styled-components";

const InputText = styled.input`
  border: 1px solid var(--grey);
  background-color: var(--bg);
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border-radius: 0.5rem;
  font: var(--body2-regular);
  color: var(--white);
  flex: 1;
  &:hover,
  &:focus {
    border: 1px solid var(--primary);
  }
  @media (prefers-color-scheme: light) {
    color: var(--bg);
    background-color: var(--white);
    &:hover,
    &:focus {
      outline: 1px solid var(--primary);
    }
  }
`;

// function InputText() {
//     return (
//         <InputTextStyled>
//             InputText
//         </InputTextStyled>
//     )
// }

export default InputText;
