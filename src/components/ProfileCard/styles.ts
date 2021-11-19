import styled from "styled-components";

interface ContainerProps {
  userUrl: string;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  place-items: center;
  margin-bottom: 7.12rem;
  
  .card{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;

    @media(max-width: 900px){
      flex-flow: column nowrap;
      justify-content: center;
      text-align: center;
    }
    .profile-image{
      width: 150px;
      height: 150px;
      clip-path: circle();
      background: url( ${(props) => props.userUrl} );
      background-position: center;
      background-size: cover;
    }
    .profile-infos{
      h2{
        color:var(--purple-color);
      }
      a{
        font-weight: 400;
        color: #b2b2b2;
        text-decoration: none;
      }
      
      .more-infos{
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 1fr 1fr;
        gap: 7px;
        @media(max-width: 900px){
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }
        span:nth-child(1){
          grid-column: 1/3;
        }
        span:nth-child(2){
          grid-column: 3/5;
        }
        span{
          display: flex;
          align-items: center;
          gap: 4px;
          color: #b2b2b2;
        }
      }
    }
    .repositories{
      text-align: center;
      background-color: var(--dark-color);
      padding: 15px 19px;
      color: #b2b2b2;
      p{
        margin-bottom: 8px;
      }
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
      }
    }
  }
`