import { Container, Row, Col, Image } from "react-bootstrap";
import perfil from "../../assets/perfil.jpg";
import "./about.css";
export default function about() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xl="10">
          <Image className="img-center" src={perfil} roundedCircle />

          <p className="text text-center text-larger">Contato: Vera Gavazza</p>
          <p className="text text-center text-larger">Telefone: (27) 9 99732190</p>
          <p className="text text-center text-larger">Email: gavazzavera@gmail.com</p>
        </Col>
      </Row>
      <br />
      <Row>
        <p className="descricao text-larger">
          Meu nome é Vera Gavazza, sou formada em pedagogia e pós graduada em
          Hatha yoga e Arteterapia. Acredito que as pessoas se transformam
          através do autoconhecimento e da educação. Para isto, busco conectar a
          filosofia e prática do Hatha Yoga e a expressão em Arteterapia para o
          alcance de uma vida mais simples e tranquila, contribuindo para o bem
          estar pessoal e social.
        </p>
      </Row>
    </Container>
  );
}
