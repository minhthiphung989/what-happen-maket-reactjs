import React from "react";
import './BestProduct.scss'
export default function BestProduct(){
    return<>
        <div className="bestProduct">
        <div className="bestProduct-content">
            <h2>BEST PRODUCT</h2>
            <p>
            How to create mobile-optimized videos in minutes. Not a designer,<br />
            every team makes a lot of videos Can be trimmed. Take the first
            </p>
        </div>
        <div className="bestProduct-product">
            
            <div className="bestProduct-icon">
                <img src={require('../../img/producticon-01.png').default} alt="" />
                <img src={require('../../img/producticon-02.png').default} alt="" />
                <img src={require('../../img/producticon-03.png').default} alt="" />
            </div>
            <div className="bestProduct-img">
                <img src={require('../../img/best-image-01.png').default} alt="" />
                <img src={require('../../img/best-image-02.png').default} alt="" />
                <img src={require('../../img/best-image-03.png').default} alt="" />
            </div>
            <div className="bestProduct-go">
                <div>
                    <p>How to create <br />mobile-optimized</p>
                    <img src={require('../../img/go-icon.png').default} alt="" />
                </div>
                <div>
                    <p>How to create <br />mobile-optimized</p>
                    <img src={require('../../img/go-icon-2.png').default} alt="" />
                </div>
                <div>
                    <p>How to create <br />mobile-optimized</p>
                    <img src={require('../../img/go-icon-3.png').default} alt="" />
                </div>
            </div>
        </div>
       
    </div>
    </>
    
}