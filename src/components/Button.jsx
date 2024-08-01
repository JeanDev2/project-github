import { isValidElement } from "react";
import styled from "styled-components";

const ButtonsStyled = styled.button`
  background-color: var(--buttonBG);
  color: var(--white);
  border: 1px solid var(--grey);
  border-radius: 0.5rem;
  min-inline-size: 135px;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  padding-block: 0.25rem;
  font: var(--button);
  text-decoration: none !important;
  &:hover {
    background-color: var(--white);
    color: var(--buttonBG);
  }
  @media (prefers-color-scheme: light) {
    background-color: var(--white);
    color: var(--buttonBG);
    border: 1px solid var(--grey);
    &:hover {
      background-color: var(--grey-1);
      color: var(--black);
    }
  }
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

function Buttons({ text, link, className, icon }) {
  const component = link ? "a" : "button";
  let IconComponent = null;
  if (icon) {
    if (isValidElement(icon)) {
      IconComponent = icon;
    }
  }
  return (
    <ButtonsStyled as={component} href={link} className={className}>
      {icon}
      {text}
    </ButtonsStyled>
  );
}

export const ButtonContrast = styled(Buttons)`
  background-color: var(--white);
  color: var(--buttonBG);
  &:hover {
    background-color: var(--buttonBG);
    color: var(--white);
  }
  @media (prefers-color-scheme: light) {
    background-color: var(--primary-1);
    color: var(--white);
    border: none;
    &:hover {
      background-color: var(--primary-1);
      color: var(--black);
    }
  }
`;

export const ButtonRounded = styled(Buttons)`
  border: 1px solid var(--grey-1);
  min-inline-size: initial;
  border-radius: 50%;
  padding: 0.75rem;
  &:hover {
    background-color: var(--buttonBG);
    transform: scale(1.1);
  }
  @media (prefers-color-scheme: light) {
    background-color: var(--primary);
  }
  &:hover {
    background-color: var(--primary);
    transform: scale(1.1);
  }
`;
export default Buttons;
