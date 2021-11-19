import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 8px;
  @media(max-width: 900px){
    grid-template-columns: 1fr 1fr;
  }
  @media(max-width: 500px){
    grid-template-columns: 1fr;
  }
`