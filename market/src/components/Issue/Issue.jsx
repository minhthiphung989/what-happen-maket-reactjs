import React from "react";
import './Issue.scss'
export default function Issue(){
    return <>
    <div className='issue'>
        <div>
            <div className='dice'>
                <img id='dice-1' src={require('../../img/news-object-02.png').default} alt="" />
                <img id='dice-2' src={require('../../img/object3.png').default} alt="" />
            </div>
             <span class="issue-title">
             Happened’s issue
            </span>
            <br />
            <p className='issue-content'>
                모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br />
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
            </p>
            <a id='a-issue' href="">SEE MORE</a>
        </div>
        <div className="hotIcon">
            <img src={require('../../img/news-object-04.png').default} alt="" />
        </div>
        <div className="whpn">
            <div className="whpn-1">
                <p>WHPN <br /> ISSUE</p>
                <img src={require('../../img/news-img-01.png').default} alt="" />
            </div>
            <div className="whpn-2">
                <div className='title-1'>
                <p>B BRAND</p>
                </div>
                <img src={require('../../img/issue1.PNG').default} alt="" />
            </div>
            <div className="whpn-3">
            <div className='title-2'>
            <p>C BRAND</p>
                </div>
                <img src={require('../../img/issue2.png').default} alt="" />
            </div>
            <div className="whpn-4">
            <div className='title-3'>
                <p>D BRAND</p>
                </div>
                <img src={require('../../img/issue3.png').default} alt="" />
            </div>
            <div className="whpn-5">
            <div className='title-4'>
                    <p>E BRAND</p>
                </div>
                <img src={require('../../img/issue4.png').default} alt="" />
            </div>
        </div>
        
        <div className="coinIcon">
            <img src={require('../../img/news-object-03.png').default} alt="" />
        </div>
        <div className="lolIcon">
            <img src={require('../../img/news-object-05.png').default} alt="" />
        </div>
    </div>
    </>
}