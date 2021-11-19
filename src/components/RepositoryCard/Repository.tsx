import { Container } from "./styles";
import {RepositoreTypes} from "../../interfaces/Repo";
import Star from "../../assets/star.svg";
import Branch from "../../assets/branch-icon.svg";
import Language from "../../assets/paper-code.svg"

export function Repository({description, language, name}:RepositoreTypes){
  return(
    <Container>
      <h3>
        {name}
      </h3>
      <p>{description === null ? "Sem descrição..." : description}</p>
      <div className="flex">
        <span>
          <img src={Star} alt="" />
          12
        </span>
        <span>
          <img src={Branch} alt="" />
          2
        </span>
        <span>
          <img src={Language} alt="" />
          {language === null ? "Não definida" : language}
        </span>
      </div>
    </Container>
  )
}