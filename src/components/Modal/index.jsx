import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do modal</h1>
        <p>Corpo do Modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

export default Modal;