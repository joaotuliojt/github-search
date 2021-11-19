import { Container } from "./styles";
import GitHubLogo from "../../assets/Github_logo.svg";
import GitHubWriter from "../../assets/Github_write.svg";
import SearchIcon from "../../assets/search_icon.svg"
import { useState } from 'react'
import {Link} from "react-router-dom"

interface HomeProps{
  baseUrl: string;
}

export function Home({baseUrl}:HomeProps){
  const [name, setName] = useState<string>('');

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
            
            window.location.replace(`${baseUrl}/${name}`)
          }
        }}
        placeholder="Enter user name" 
      />
      <Link to={`/${name}`} className="btn">
        Search <img src={SearchIcon} alt="Procurar usuário"/>
      </Link>
    
    </Container>
  )
}