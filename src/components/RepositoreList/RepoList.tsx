import { Container } from "./styles";
import {useEffect, useState} from "react";
import {getRepositories} from "../../services/ReposGithub";
import {Repository} from "../RepositoryCard/Repository";
import {RepositoreTypes} from "../../interfaces/Repo"


interface RepositoryLinkProps {
  url: string;
}

export function RepoList({url}: RepositoryLinkProps){

  const [repos, setRepos] = useState<RepositoreTypes[]>([{}] as RepositoreTypes[]);

  useEffect(() => {
    getRepositories(url).then((repositories) => {
      setRepos(repositories);
    }).catch(err => {
      console.log(err);
    })
  })
  return(
    <Container>
     
     {repos.map((repository, index) => 
      <Repository
        key={index}
        name={repository.name} 
        description={repository.description}
        language={repository.language}
        id={repository.id}
        forks={repository.forks}
        watchers={repository.watchers}
      />
     )}

    </Container>
  )
}