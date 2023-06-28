import { forwardRef } from 'react';

const UserFormat = forwardRef(( props, ref ) => {
  return (
  <div ref={ref}>
    <p>{props.text}</p>
  </div>
)});

export default UserFormat;




