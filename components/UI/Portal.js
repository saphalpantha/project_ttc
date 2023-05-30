import ReactDOM from 'react-dom';
import classes from './Portal.module.css'
import Container from '../Container/Container';
const Portal = (props) => {

   const portalRoot = typeof document !== 'undefined' ? document.getElementById('mymodel') : null;

  return portalRoot ? (
    ReactDOM.createPortal(

        <Container>

        <div className={`container flex justify-center items-center ${props.className}`}>
          {props.children}
        </div>
        </Container>
      ,
      portalRoot
    )
  ) : null;
};

export default Portal;