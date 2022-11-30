import React, { useEffect } from 'react';
import '../../Style/Usermain.css';
import Fade from 'react-reveal/Fade';

function ParticlesText() {

  return (
    <div className='particles-text-items'>
      <p>اطلس پمپ تبریز</p>
      <Fade top>
        <h1 className='particles-title-sty'>پمپ های سانترفیوژ</h1>
      </Fade>
      <Fade right big>
        <h1 className='particles-body-sty'>(هکش کردم)</h1>
      </Fade>
      <Fade bottom>
        <div className='product-btn-sty'>
          <button className='product-btn-rigth'>مشاهده محصولات ما</button>
        </div>
      </Fade>
    </div>
  );
}

export default ParticlesText;
