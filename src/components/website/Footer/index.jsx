import React from 'react'
import PaymentItem from '@assets/img/payment-item.png'
import { contact, social, websiteLogo } from '../../../config'
const Footer = () => {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <a href="./index.html">
                                    <img src={websiteLogo} alt="" />
                                </a>
                            </div>
                            <ul>
                                <li>Address: {contact.address}</li>
                                <li>Phone: {contact.phone}</li>
                                <li>Email: {contact.email}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li><a href="#!">About Us</a></li>
                                <li><a href="#!">About Our Shop</a></li>
                                <li><a href="#!">Secure Shopping</a></li>
                                <li><a href="#!">Delivery infomation</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                                <li><a href="#!">Our Sitemap</a></li>
                            </ul>
                            <ul>
                                <li><a href="#!">Who We Are</a></li>
                                <li><a href="#!">Our Services</a></li>
                                <li><a href="#!">Projects</a></li>
                                <li><a href="#!">Contact</a></li>
                                <li><a href="#!">Innovation</a></li>
                                <li><a href="#!">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">Subscribe</button>
                            </form>
                            <div className="footer__widget__social">
                                {
                                    social.map((item, index) => {
                                        const { icon, link } = item
                                        return (
                                            <a href={link} key={index}>
                                                <i className={icon}></i>
                                            </a>)
                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                    Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="http://mamdouh-r.com" target="_blank" rel="noreferrer">Mamdouh Ramadan</a>
                                </p>
                            </div>
                            <div className="footer__copyright__payment">
                                <img src={PaymentItem} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer