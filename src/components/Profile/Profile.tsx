import { Header } from "../Header/Header";
import { Container } from "./styles";
import {useEffect, useState} from "react"
import { getUser } from "../../services/UserGithub"
import { ProfileCard } from "../ProfileCard/ProfileCard";
import {UserTypes} from "../../interfaces/User"
import { RepoList } from "../RepositoreList/RepoList";
import {useParams} from "react-router-dom"
import { toast, ToastContainer} from "react-toastify"

import 'react-toastify/dist/ReactToastify.css';


export function Profile(){
  const [user, setUser] = useState<UserTypes>({} as UserTypes)
  const {username} = useParams();
  
  useEffect(()=>{
    
    if(username){
      getUser(username).then(user =>{
        setUser(user);
        toast.success("Usuário encontrado!",{
          pauseOnHover: false,
          autoClose: 2000,
          hideProgressBar: true
        });
      }).catch(()=>{
        toast.error("Usuário não encontrado, redirecionando...",{
          autoClose: 5000,
          pauseOnHover: false,
        })
        
      })
    } // eslint-disable-next-line
  },[])


  return(
    <Container className={user === undefined ? 'disable' : ''}>
      <ToastContainer></ToastContainer>
      <Header></Header>
      <ProfileCard
        avatar_url={user.avatar_url}
        company={user.company}
        followers={user.followers}
        following={user.following}
        location={user.location}
        login={user.login}
        name={user.name}
        public_repos={user.public_repos}
        repos_url={user.repos_url}
        url={user.url}
        html_url={user.html_url}
       />
      <RepoList url={user.repos_url}></RepoList>
    </Container>

  )
}