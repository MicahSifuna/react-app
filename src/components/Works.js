import React from 'react';
import './styles/works.scss';

import react from './assets/react.jpg';
import ui from './assets/ui.jpg';
import wd from './assets/wd.jpg';
import wd2 from './assets/wd2.jpg';
import wd3 from './assets/wd3.jpg';
import wd4 from './assets/wd4.jpg';


const Works = () => {
  return (
    <div className='works' >
        <div className='work__section' >

            <div className='cards' >
                <img src={react} alt='' />
                <button>See Works</button>
            </div>

            <div className='cards' >
                <img src={ui} alt='' />
                <button>See Works</button>
            </div>

            <div className='cards' >
                <img src={wd} alt='' />
                <button>See Works</button>
            </div>

            <div className='cards' >
                <img src={wd2} alt='' />
                <button>See Works</button>
            </div>

            <div className='cards' >
                <img src={wd3} alt='' />
                <button>See Works</button>
            </div>

            <div className='cards' >
                <img src={wd4} alt='' />
                <button>See Works</button>
            </div>

        </div>

    </div>
  );
}

export default Works