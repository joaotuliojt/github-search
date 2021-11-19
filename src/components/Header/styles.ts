import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 900px){
    padding: 0 33px;
  }
  div{
    display: flex;
    align-items: center;
    gap: 9px;

    span{
      display: flex;
      flex-direction: column;

      strong{
        text-align: right;
        text-transform: uppercase;
        color: var(--purple-color);
        letter-spacing: 0.4rem;
        font-size: 0.8rem;
      }
    }
  }
`
