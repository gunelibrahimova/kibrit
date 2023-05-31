import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../Image/logo.jpeg"
import payments from "../../Image/payments.png"
import './footer.scss'

const Footer = () => {

  function callNumber() {
    const phoneNumber = '+994508737946';
    const url = `tel:${phoneNumber}`;
    window.location.href = url;
  }

  
  return (
    <div id="footer">
      <div className="container">
        <div className="top">
          <img width={80} src={logo} alt="" />
        </div>
        <div className="bottom">
          <div className="box">
            <i class="fa-solid fa-mobile"></i>
            <span onClick={callNumber} style={{cursor: "pointer"}}>Telefon : (050) 873 79 46</span>
          </div>
          <div className="box">
            <i class="fa-brands fa-instagram"></i>
            <span>Instagram : </span>
            <a href="https://www.instagram.com/kibriittbook" target="_blank">
              <span>Kibriittbook </span>
            </a>
          </div>
          <div className="box">
          <i class="fa-brands fa-facebook"></i>
            <span>Facebook : </span>
            <a href="https://www.facebook.com/kibriittbook?mibextid=ZbWKwL" target="_blank">
              <span>Kibrit Book</span>
            </a>
          </div>
          <div className="box">
          <i class="fa-brands fa-tiktok"></i>
            <span>Tiktok : </span>
            <a href="https://www.tiktok.com/@kibritbook" target="_blank">
              <span>Kibrit Book </span>
            </a>
          </div>


        </div>
      </div>
      <hr />
      <div className="foot">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-10">
              <h6>KİBRİTBOOKⒸ2023</h6>
            </div>
            <div className="col-lg-2">
              <img src={payments} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer