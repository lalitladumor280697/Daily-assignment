import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import img1 from './img/Q18Ifxk.png'
import img2 from './img/bars.svg'
import img3 from './img/head21.jpg'
import Banner from './img/Banner.png'
import Assured from './img/Assured.png'
import Crocs1 from './img/Boot-01.jpeg'
import Crocs2 from './img/Boot-02.jpeg'
import Crocs3 from './img/Boot-03.jpeg'
import Crocs4 from './img/Boot-04.jpg'
import Crocs5 from './img/Boot-05.jpeg'
// import Crocs6 from './img/Boot-06.jpg'
import Crocs7 from './img/Boot-07.jpg'
// import Crocs8 from './img/Boot-08.jpg'
import Crocs9 from './img/Boot-09.jpeg'
import Crocs10 from './img/Boot-10.jpeg'
import Crocs11 from './img/Boot-11.jpeg'

import Crocs12 from './img/Boot-12.jpeg'
import Crocs13 from './img/Boot-13.jpeg'
import Crocs14 from './img/Boot-14.jpeg'
import Crocs15 from './img/crocs-001.jpeg'
import Crocs16 from './img/crocs-002.jpeg'
import Crocs17 from './img/crocs-003.jpg'
import Crocs18 from './img/crocs-004.jpeg'
import Crocs19 from './img/crocs-005.jpeg'
import Crocs20 from './img/crocs-006.jpg'
import Crocs21 from './img/crocs-007.jpg'
import Crocs22 from './img/crocs-008.jpg'
import Crocs23 from './img/crocs-009.jpg'
import Crocs24 from './img/crocs-010.jpg'
import Crocs25 from './img/crocs-011.jpg'
import Crocs26 from './img/crocs-012.jpg'
import Crocs27 from './img/crocs-013.jpg'
import Crocs28 from './img/crocs-014.jpg'
import Crocs29 from './img/crocs-015.jpg'
import Crocs30 from './img/crocs-016.jpg'
import Crocs31 from './img/crocs-017.jpg'
import Crocs32 from './img/crocs-018.jpg'
import Crocs33 from './img/crocs-019.jpg'
import Crocs34 from './img/crocs-020.jpg'
import Crocs35 from './img/crocs-021.jpg'
import Crocs36 from './img/crocs-022.jpg'
import Crocs37 from './img/crocs-023.jpg'
import Crocs38 from './img/crocs-024.jpg'
import Crocs39 from './img/crocs-025.jpg'
import Crocs40 from './img/crocs-026.jpg'
import Crocs41 from './img/crocs-027.jpg'
import Crocs42 from './img/crocs-028.jpg'
import Crocs43 from './img/crocs-029.jpg'
import Crocs44 from './img/crocs-030.jpg'
import Crocs45 from './img/crocs-031.jpg'
import Crocs46 from './img/crocs-032.jpg'
import Crocs47 from './img/crocs-033.jpg'
import Crocs48 from './img/crocs-034.jpg'
import Crocs49 from './img/crocs-035.jpg'
import Crocs50 from './img/crocs-036.jpg'
import Crocs51 from './img/crocs-037.jpg'
import Crocs52 from './img/crocs-038.jpg'
import Crocs53 from './img/crocs-039.jpg'
import Crocs54 from './img/crocs-040.jpg'
import Crocs55 from './img/crocs-041.jpg'
import Crocs56 from './img/crocs-042.jpg'
import Crocs57 from './img/crocs-043.jpg'
import Crocs58 from './img/crocs-044.jpg'
import Crocs59 from './img/crocs-045.jpg'
import Crocs60 from './img/crocs-046.jpg'
import Crocs61 from './img/crocs-047.jpg'
import Crocs62 from './img/crocs-048.jpg'
import Crocs63 from './img/crocs-049.jpg'
import Crocs64 from './img/crocs-050.jpg'
import Crocs65 from './img/crocs-051.jpg'
import Crocs66 from './img/crocs-052.jpg'
import Crocs67 from './img/crocs-053.jpg'
import Crocs68 from './img/crocs-054.jpg'
import Crocs69 from './img/crocs-055.jpg'
import Crocs70 from './img/crocs-056.jpg'
import Crocs71 from './img/crocs-057.jpg'
import Crocs72 from './img/crocs-058.jpg'
import Crocs73 from './img/crocs-059.jpg'
import Crocs74 from './img/crocs-060.jpg'
import Crocs75 from './img/crocs-061.jpg'
import Crocs76 from './img/crocs-062.jpg'
import Crocs77 from './img/crocs-063.jpg'
import Crocs78 from './img/crocs-064.jpg'
import Crocs79 from './img/crocs-065.jpg'
import Crocs80 from './img/crocs-066.jpg'
import Crocs81 from './img/crocs-067.jpg'
import Crocs82 from './img/crocs-068.jpg'
import Crocs83 from './img/crocs-069.jpg'
import Crocs84 from './img/crocs-070.jpg'
import Crocs85 from './img/crocs-071.jpg'
import Crocs86 from './img/crocs-072.jpg'
import Crocs87 from './img/crocs-073.jpg'
import Crocs88 from './img/crocs-074.jpg'
import Crocs89 from './img/crocs-075.jpg'
import Crocs90 from './img/crocs-076.jpg'
import Crocs91 from './img/crocs-077.jpg'
import Crocs92 from './img/crocs-078.jpg'
import Crocs93 from './img/crocs-079.jpg'
import Crocs94 from './img/crocs-080.jpg'
import Crocs95 from './img/crocs-081.jpg'
import Crocs96 from './img/crocs-082.jpg'
import Crocs97 from './img/crocs-083.jpg'
import Crocs98 from './img/crocs-084.jpg'
import Crocs99 from './img/crocs-085.jpg'
import Crocs100 from './img/crocs-086.jpg'
import Crocs101 from './img/crocs-087.jpg'
import Crocs102 from './img/crocs-088.jpg'
import Crocs103 from './img/crocs-089.jpg'
import Crocs104 from './img/crocs-090.jpg'
import Crocs105 from './img/crocs-091.jpg'
import Crocs106 from './img/crocs-092.jpg'
import Crocs107 from './img/crocs-093.jpg'
import Crocs108 from './img/crocs-094.jpg'
import Crocs109 from './img/crocs-095.jpg'
import Crocs110 from './img/crocs-096.jpg'
import Crocs111 from './img/crocs-097.jpg'
import Crocs112 from './img/crocs-098.jpg'
import Crocs113 from './img/crocs-099.jpg'
import Crocs114 from './img/crocs-100.jpg'
import Crocs115 from './img/crocs-101.jpg'
import Crocs116 from './img/crocs-102.jpg'
import DeliveryAddressPage from './DeliveryAddressPage';
import Order from './Order';
import Payment from './Payment';






export default function Header() {
    const [secondsLeft, setSecondsLeft] = useState(1200); // 1 hour in seconds

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setSecondsLeft((prevSeconds) => {
                if (prevSeconds === 0) {
                    // Reset the timer when it reaches 0 (1 hour in this example)
                    return 3600; // 1 hour in seconds
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => {
            clearInterval(countdownInterval); // Clean up the interval when the component unmounts
        };
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 m-0 p-0">
                        <div className='head '>
                            <img src={img2} alt="" className='mt-3 img2' />
                            <img src={img1} alt="" className='img1 mt-4' />

                        </div>
                    </div><div className="col-2 m-0 p-0">
                        <div className='head d-flex justify-content-around pt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" class="svg bi bi-cart3 mt-3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>

                        </div>
                    </div>


                    <div className="head2 ">
                        <div class="input-group flex-nowrap mt-2 ">
                            <input type="search" className="form-control" height="50px" placeholder="Search for Products, Brand and More..." aria-label="Username" aria-describedby="addon-wrapping" />
                        </div>
                    </div>

                </div>

            </div>

            <div className="container-fluid m-0 p-0">
                <img src={img3} width="100%" className='img-fluid' alt="" />
            </div>
            <div className="container-fluid m-0 p-0">
                <img src={Banner} width="100%" className='img-fluid' alt="" />
            </div>

            <div>
                <div className="d-flex justify-content-center align-items-center text-center timer">
                    <div>
                        <center><h5 style={{ color: '#2873ee' }}>Deals of the Day</h5></center>
                        <div className='d-flex justify-content-center align-items-center text-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="grey" class="bi bi-stopwatch mb-2" viewBox="0 0 16 16">
                                <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                            </svg>
                            <h5 style={{ marginLeft: '5px ', color: '#2873ee' }}>{formatTime(secondsLeft)}</h5>

                        </div>

                    </div>

                </div>

            </div>

            <div className='container-fluid Detail'>
                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs1} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs2} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bistro Navy Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs3} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'>CitiLane Navy-White Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs4} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bayaband Charcoal-volt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs5} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'> Bistro Pro LifeRide Black Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs66} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bayaband Graphic Blue Camo Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs7} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs82} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs9} height={"90px"} className='mt-4 mb-4' alt="" />
                            </Link>                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs10} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs11} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                    <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                        <div className='center'>
                            <Link to={'//'}><img src={Crocs12} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                        </div>
                        <div style={{ marginLeft: "20px" }}>
                            <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                            <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                            <div className='d-flex'>
                                <b>₹290</b>
                                <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                            </div>
                        </div>
                        <div className='center mb-2 mt-2'>
                            <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs13} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs14} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs15} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs16} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs17} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs18} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs19} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs20} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs21} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs22} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs23} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs24} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs25} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs26} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs27} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs28} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs29} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs30} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs31} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs32} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs33} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs34} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs35} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs36} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs37} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs38} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs39} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs40} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs41} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs42} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs43} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs44} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs45} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs46} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs47} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs48} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs49} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs50} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs51} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs52} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>




            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs53} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs54} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs55} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs56} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs57} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs58} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>




            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs59} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs60} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs61} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs62} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs63} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs64} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs65} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs66} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs67} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs68} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs69} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs70} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs71} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs72} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs73} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs74} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs75} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs76} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs77} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs78} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs79} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs80} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>





            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs81} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs82} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs83} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs84} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs85} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs86} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs87} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs88} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs89} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs90} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs91} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs92} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs93} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs94} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs95} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs96} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs97} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs98} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs99} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs100} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs101} height={"90px"} className='mt-4 mb-4' alt="" /></Link>                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs102} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs103} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs104} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs105} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs106} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs107} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs108} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs109} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs110} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs111} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs112} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs113} height={"90px"} className='mt-4 mb-4' alt="" /></Link>                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs114} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6  Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs115} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "10%" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
                <div className="col-6 Border" style={{ backgroundColor: 'white' }}>
                    <div className='center'>
                        <Link to={'//'}><img src={Crocs116} height={"90px"} className='mt-4 mb-4' alt="" /></Link>
                    </div>
                    <div style={{ marginLeft: "20px" }}>
                        <p className='overflow-ellipsis'> Bayaband Bright Cobalt Unisex Clog</p>
                        <p style={{ color: "#388e3c" }}> 17% Off <del style={{ color: "grey" }}>₹1699</del></p>
                        <div className='d-flex'>
                            <b>₹290</b>
                            <img src={Assured} height={"20px"} className='mt-1' style={{ marginLeft: '10px' }} alt="" />
                        </div>
                    </div>
                    <div className='center mb-2 mt-2'>
                        <p className='overflow-ellipsis'>Free Delivery in Two Days </p>
                    </div>
                </div>
            </div>

        </div>

    );
};
