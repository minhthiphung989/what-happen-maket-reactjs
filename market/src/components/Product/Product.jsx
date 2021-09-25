import React from "react";
import './Product.scss'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

export default function Product(){
    return<>
       
       


    <div className='product'>
      {itemData.map((item) => (
        <div key={item.img} className='product-card'>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          < ImageListItemBar
            title={item.title}
            subtitle={<span > {item.price} </span>}
            position="below"
            style={{textAlign:'left', fontWeight:'bold'}}
          />
        
        </div>
      ))}
      
    </div>
    <a className='a-product' href="#">SEE MORE</a>
  


    

    </>
}


const itemData = [
    {
      img: require('../../img/img-01.png').default,
      title: '[What happened] How to create',
      price: '2,500 won',
      heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/img-002.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/img-03.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/img-04.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/img-05.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/img-06.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/287C20D3-1EF8-4A67-942C-95D1B1C5CCFA.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
    {
        img: require('../../img/E7062892-112D-4460-8B56-0B27F291ED0C.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-09.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-10.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-11.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-12.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
        img: require('../../img/81B81F29-B13C-49E8-8351-363966545AD8.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-14.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-15.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-16.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-17.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
        img: require('../../img/img-18.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-19.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-20.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-21.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/img-22.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
        img: require('../../img/img-23.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
    },
      {
        img: require('../../img/img-24.png').default,
        title: '[What happened] How to create',
        price: '2,500 won',
        heartIcon:require('../../img/hearticon@3x.png').default,
      },
      {
          img: require('../../img/91AA197A-FAEF-470D-A004-6E8984F2117F.png').default,
          title: '[What happened] How to create',
          price: '2,500 won',
          heartIcon:require('../../img/hearticon@3x.png').default,
      },
      
  ];