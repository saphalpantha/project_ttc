import ReactDOM from 'react-dom';
import classes from './Portal.module.css'
const Portal = (props) => {

   const portalRoot = typeof document !== 'undefined' ? document.getElementById('mymodel') : null;

  return portalRoot ? (
    ReactDOM.createPortal(
      <>
        <div className={`container flex justify-center items-center ${props.className}`}>
          {props.children}
        </div>
      </>,
      portalRoot
    )
  ) : null;
};

export default Portal;