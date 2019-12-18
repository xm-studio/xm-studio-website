import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../svg/Book.svg';

const BookVivus = () => (
  

  <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'delayed',
      onReady: console.log,
      forceRender : true
    }}
    style={{ height: '50px', width: '50px' }}
    callback={console.log}
  />
);
export default BookVivus;