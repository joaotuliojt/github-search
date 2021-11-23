import { Container } from "./styles";
import {RepositoreTypes} from "../../interfaces/Repo";
import Star from "../../assets/star.svg";
import Branch from "../../assets/branch-icon.svg";
import Language from "../../assets/paper-code.svg"

export function Repository({description, language, name, forks, watchers}:RepositoreTypes){
  return(
    <Container>
      <h3>
        {name}
      </h3>
      <p>{description === null ? "Sem descrição..." : description}</p>
      <div className="flex">
        <span>
          <img src={Star} alt="Watchers" />
          {watchers}
        </span>
        <span>
          <img src={Branch} alt="Forks" />
          {forks}
        </span>
        <span>
          <img src={Language} alt="Linguagem" />
          {language === null ? "Não definida" : language}
        </span>
      </div>
    </Container>
  )
}