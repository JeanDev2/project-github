import { createGlobalStyle } from "styled-components";

const GlobalStylesStyled = createGlobalStyle`
    :root {
        --primary: #0969DA; 
        --primary-1: #57a6ff;
        --blue-1: #ddf4ff;
        --white: #fffffe; 
        --black: #141414; 
        --bg: #0d1117; 
        --buttonBG: #22262c;
        --grey: #8b949e; 
        --grey-1: #c5ced7;
        --grey-2: #3f4954; 
        --grey-4: #636c76;
        --grey-5: #f6f8fa;
        --grey-6: #d0d7deaf;
        --pink: #cc68a0; 
        --yellow: #f1e05a; 
        --purple: #563d7c; 
        --black-2: #171b21; 
        --headline1: 600 1.625rem/2rem Inter; 
        --button: 500 0.875rem/1.5rem Inter; 
        --headline2-semi-bold: 600 1.25rem/1.5rem Inter; 
        --headline2-ligth: 300 1.25rem/1.5rem Inter; 
        --body1-regular: 400 1rem/1.5rem Inter; 
        --body1-semi-bold: 700 1rem/1.5rem Inter; 
        --body2-regular: 400 0.875rem/1.5rem Inter; 
        --body2-semi-bold: 600 0.875rem/1.5rem Inter; 
        --caption-regular: 400 0.75rem/1.125rem Inter; 
        --caption-medium: 500 0.75rem/1.125rem Inter;
    }
    body{
        background-color: var(--bg);
        color: var(--grey);
        font: var(--body1-regular);
        margin: 0;
    @media screen and (prefers-color-scheme) {
        background-color: var(--white);
        color: var(--black);
    }
    }
`;

export default GlobalStylesStyled;
