import React from 'react'

const Container = (props) => {
  return (
    <div className='container overflow-x-hidden max-w-6xl md:max-w-[1440px] lg:max-w-[2333px]  mx-auto'>{props.children}</div>
  )
}

export default Container



// import React from 'react';
// import PropTypes from 'prop-types';

// const Container = ({ children }) => {
//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
//   );
// };

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default Container;
