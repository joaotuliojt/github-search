import { Container } from "./styles";
import GitHubLogo from "../../assets/Github_logo.svg";
import GitHubWriter from "../../assets/Github_write.svg";
import SearchIcon from "../../assets/search_icon.svg"
import { useState } from 'react'
import {Link} from "react-router-dom"



export function Home(){
  const [name, setName] = useState<string>('');
  const baseUrl = window.location.href;
  return(
    <Container>
      <div className="logo">
        <img id="github-logo" src={GitHubLogo} alt="GitHub" />
        <img src={GitHubWriter} alt="GitHub" />
        <strong>SEARCH</strong>
      </div>

      <input
        type="text" 
        onChange={
          (e)=>{setName(e.target.value)}
        } 
        onKeyPress={(e)=>{
          console.log(e);
          if(e.code === "Enter"){
            if(name){
              window.location.replace(`${baseUrl}${name}`)
            }
          }
        }}
        placeholder="Enter user name" 
      />
      <Link to={`/${name}`} className="btn" onClick={()=>{setName('')}}>
        Search <img src={SearchIcon} alt="Procurar usuário"/>
      </Link>
    
    </Container>
  )
}