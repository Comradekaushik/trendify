// import {
//     Facebook,
//     Instagram,
//     MailOutline,
//     Phone,
//     Pinterest,
//     Room,
//     Twitter,
//   } from "@material-ui/icons";
//   import styled from "styled-components";
//   import { mobile } from "../responsive";
  
 
  



  import React from 'react';
  import './styles/mainStyle.css';
  
  export default function Footer() {
    return (
      <div className="footer-container">
        <div className="footer-left">
          <h1 className="footer-logo">Trendify</h1>
          <p className="footer-desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
          </p>
          
        </div>
        < div className="footer-center">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-list" >

            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">Cart</li>
            <li className="footer-list-item">Man Fashion</li>
            <li className="footer-list-item">Woman Fashion</li>
            <li className="footer-list-item">Accessories</li>
            <li className="footer-list-item">My Account</li>
            <li className="footer-list-item">Order Tracking</li>
            <li className="footer-list-item">Wishlist</li>
            <li className="footer-list-item">Terms</li>
            
          
            
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Contact</h3>
          <div  className="footer-contact-item">
             622 Dixie Path , South Tobinchester 98336
          </div>
          <div className="footer-contact-item">
             +1 234 56 78
          </div>
          <div className="footer-contact-item" >
             anandkaushik260@gmail.com
          </div>
          <img className="payment-image" src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </div>
      </div>
      
    )
  }
  