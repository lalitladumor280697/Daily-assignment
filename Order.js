import React from 'react'
import img6 from './img/SwOvZ3r (1).png'
import img5 from './img/progress-indicator-summary.png'
import { Link } from 'react-router-dom'
// import img7 from '.img/SSSS.jpg'

export default function Order() {
    const Data1 = JSON.parse(localStorage.getItem('Data'))
    console.log(Data1)
    return (
        <>
            <div className="container-fluid p-3 header-container">
                <div className="row header">
                    <div className="col-1">
                        <div className="menu-icon" id="back_btn">
                            <Link to={'del'}>   <svg width="19" height="16" viewBox="0 0 19 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                            </svg>    </Link>         </div>
                    </div>
                    <div className="col-8">
                        <div className="menu-logo">
                            <h4 className="mb-0 mt-1 ms-2">Order Summary</h4>
                        </div>
                    </div>
                </div>
            </div >
            <div className="_1fhgRH max-height mb-70">
                <div className="card pt-1 mb-1">
                    <div className="progress-box mb-0">
                        <img className="w-100" src={img5} />
                    </div>
                </div>
                {/* <div className="card px-3 py-4 mb-2">
                    <h3>Delivered to:</h3>
                    <div className="address-div mt-2">
                        <h4 className="customer-name">Parth</h4>
                        <div className="mb-2 customer-address">G-12, Sai Home Decor, Sarthana, Surat 395006</div>
                        <div className="customer-contact">9537298745</div>
                    </div>
                </div> */}

                {Data1.map((customer, index) => (
                    <div className="card px-3 py-4 mb-2" key={index}>
                        <h3>Delivered to:</h3>
                        <div className="address-div mt-2">
                            <div className="customer-name">{customer.name}</div>
                            <div className="mb-2 customer-address">
                                {customer.flat}, {customer.area}, {customer.city} {customer.pin}
                            </div>
                            <div className="customer-contact">{customer.number}</div>
                        </div>
                    </div>
                ))}







                <div className="card px-3 py-4 mb-2">
                    <ul className="list-group list-group-flush" id="deals">
                        <li className="list-group-item px-0" data-timer="2000">
                            <div className="flex recommended-product">
                                {/* <img src={img7} id="item_image" /> */}
                                <div className="description">
                                    <div className="product-title mb-1" id="product-title"></div>
                                    <div className="product-detail mb-1" id="product-detail"></div>
                                    <img src={img6} width="77px" />
                                </div>
                            </div>
                            <div className="flex recommended-product mt-3">
                                <div className="timer qty mx-4">
                                    Qty: 1
                                </div>
                                <div className="description">
                                    <div className="price flex">
                                        <span className="discount" id="discount">17% Off</span>
                                        &nbsp;&nbsp;
                                        <span className="strike mrp" id="mrp">₹1699</span>
                                        &nbsp;&nbsp;
                                        <span className="selling_price" id="selling_price">₹290</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="card px-3 py-4 mb-2" id="price-detail">
                    <h3>Price Details</h3>
                    <div className="price-detail-div mt-2">
                        <div className="product-price-list my-3">
                            <span className="title">Price (1 item)</span>
                            <span className="data mrp me-0 td-none">₹1699</span>
                        </div>
                        <div className="product-price-list my-3">
                            <span className="title">Discount</span>
                            <span className="data discount-amt text-success">-₹1409</span>
                        </div>
                        <div className="product-price-list my-3">
                            <span className="title">Delivery Charges</span>
                            <span className="data text-success">FREE Delivery </span>
                        </div>
                        <div className="product-price-list my-3 pt-3 total">
                            <span className="title">Total Amount </span>
                            <span className="data selling_price">₹290</span>
                        </div>
                        <div className="product-price-list mt-3 pt-3 saved-div">
                            <span className="text-success">You will save <span className="discount-amt">₹4,500</span> on this order</span>
                        </div>
                    </div>
                </div>
                <div className="sefty-banner">
                    <img className="sefty-img" src="https://rukminim1.flixcart.com/www/60/70/promos/13/02/2019/9b179a8a-a0e2-497b-bd44-20aa733dc0ec.png?q=90" loading="lazy" alt="" />
                    <div dir="auto" className="sefty-txt">Safe and secure payments. Easy returns. 100% Authentic products.</div>
                </div>
                <div className="button-container flex p-3 bg-white">
                    <div className="col-6 footer-price">
                        <span className="strike mrp ms-0 mb-1" id="mrp">₹4999</span>
                        <span className="selling_price" id="selling_price">₹99</span>
                    </div>
                    <Link to={''} > <button className="buynow-button product-page-buy col-6 btn-continue" id='btn' onclick="btnContinue();">
                        Continue
                    </button>
                    </Link>

                </div>
            </div >
        </>
    )
}


