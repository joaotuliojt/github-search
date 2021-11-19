import { Container } from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/Github_logo_small.svg";
import LogoWrite from "../../assets/Github_write_small.svg"
import Arrow from "../../assets/leftArrow.png"
export function Header(){
  return(
    <Container>
      <div>
        <img id="logo" src={Logo} alt="GitHub" />
        <span>
          <img src={LogoWrite} alt="GitHub" />
          <strong>SEARCH</strong>
        </span>
      </div>
      <Link to="/">
        <img src={Arrow} alt="Voltar" />
      </Link>
    </Container>
  );
}