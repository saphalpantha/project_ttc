import ReactDOM from 'react-dom';
import classes from './Portal.module.css'
const Portal = (props) => {

   const portalRoot = typeof document !== 'undefined' ? document.getElementById('navmodel') : null;

  return portalRoot ? (
    ReactDOM.createPortal(
      <>
        <div className={`z-[100] w-full  flex justify-center ${classes.model} items-center ${props.className}`}>
          {props.children}
        </div>
      </>,
      portalRoot
    )
  ) : null;
};

export default Portal;