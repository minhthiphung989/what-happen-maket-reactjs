import React from "react";
import banner1 from '../../img/banner.png'
import './Banner.scss'
export default function Banner(){
    return<>
        <img src={banner1}  alt="" />
        <div className='banner-2'>
            <h2>WHAT HAPPENED!</h2>
            <p>
                 How to create mobile-optimized videos in minutes. Not a designer,<br />
                 every team makes a lot of videos Can be trimmed. Take the first<br />
                 step to your brand's success. How to create<br />
                 mobile-optimized videos in minutes.
            </p>
        </div>
    </>
}