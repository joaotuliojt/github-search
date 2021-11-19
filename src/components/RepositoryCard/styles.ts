import styled from "styled-components";

export const Container = styled.div`
  color: #b2b2b2;
  display:flex;
  flex-direction: column;
  background-color: var(--dark-color);
  padding: 15px;
  p{
    margin-bottom: 30px;
    margin-top: 8px;
  }
  .flex{
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 18px;
    span{
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
`