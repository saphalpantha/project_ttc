import ReactDOM from 'react-dom';
import classes from './NavModel.module.css'
import ScrollLayout from '../../UI/ScrollLayout';
const NavModel = (props) => {

   const portalRoot = typeof document !== 'undefined' ? document.getElementById('mobilenav') : null;

  return portalRoot ? (
    ReactDOM.createPortal(
      <>
      <ScrollLayout x={100} opacity={1} duration={0.2} y={0} > 

        <div className={`  ${props.className}  justify-center  ${classes.model}  `}>
          {props.children}
        </div>
      </ScrollLayout>
      </>,
      portalRoot
    )
  ) : null;
};

export default NavModel;