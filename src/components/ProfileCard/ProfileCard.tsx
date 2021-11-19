import { Container } from "./styles";
import HomeWork from "../../assets/home-work.svg"
import Localization from "../../assets/localization_icon.svg";
import PeoplesFill from "../../assets/peoples-fill.svg";
import Peoples from "../../assets/peoples.svg";
import Star from "../../assets/star.svg";
import Repositories from "../../assets/git-branch.svg";
import {UserTypes} from "../../interfaces/User"

export function ProfileCard({
  avatar_url,
  company,
  followers,
  following,
  location,
  login,
  name,
  public_repos,
  html_url,
  url
}:UserTypes){
  return(
    <Container userUrl={avatar_url}>
        <div className="card">
          <div className="profile-image"></div>
          <div className="profile-infos">
            <h2>{name}</h2>
            <a rel="noreferrer" target='_blank' href={html_url}>@{login}</a>
            <div className="more-infos">
              <span>
                <img src={Localization} alt="Localização" />
                {location}
              </span>

              <span>
                <img src={HomeWork} alt="Home work" />
                {
                  company === null ? "Nenhuma" : company
                }
              </span>
  
              <span>
                <img src={PeoplesFill} alt="" />
                {followers}
              </span>

              <span>
                <img src={Peoples} alt="" />
                {following}
              </span>

              <span>
                <img src={Star} alt="" />
                48
              </span>
            </div>
          </div>

          <div className="repositories">
            <p>Total repositories</p>
            <div>
              <img src={Repositories} alt="Repositórios" />
              {public_repos}
            </div>
          </div>
        </div>
    </Container>
  )
}