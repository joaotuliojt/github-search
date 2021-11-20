import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --bg-color: #232324;
    --dark-color: #201f1f;
    --purple-color: #8752CC;
    --gray-color: ##B2B2B2;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width: 180px){
      font-size: 93.75%;
    }
    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }
  body{
    background: var(--bg-color);
    -webkit-font-smoothing: antialiased;
  }
  body::-webkit-scrollbar{
    width: 6px;
    background-color: var(--dark-color);
  }
  body::-webkit-scrollbar-track{
    background-color: var(--gray-color);
  }

  body::-webkit-scrollbar-thumb{
    background-color: var(--purple-color);
    border-radius: 5px;
  }
  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }
  button, .btn{
    cursor: pointer;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: var(--purple-color);
    border: none;
    padding: 0.7rem 0;
    font-weight: 700;
    font-size: 1.12rem;
    border-radius: 5px;
    transition: filter 0.25s;
    text-decoration: none;
    &:hover{
      filter: brightness(0.8);
    }
  }

`