import styled from "styled-components";

export const Container = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .logo{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3.12rem;
    img:first-child{
      margin-bottom: 1.8rem;
    }
    strong{
      font-family: Poppins;
      color: var(--purple-color);
      font-size: 1.6rem;
      letter-spacing: 0.4rem;
    }
  }
  button, .btn{
    text-decoration: none;
    width: 18.75rem;
  }
  input{
    border: none;
    border-bottom: 4px solid var(--purple-color);
    background: none;
    text-align: center;
    color: #FFF;
    width: 18.75rem;
    margin-bottom: 3.12rem;
    padding-bottom: 0.75rem;
    outline: none;
  }

`