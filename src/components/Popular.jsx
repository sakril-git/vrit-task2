import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import pennib from "../assets/images/pen-nib.png";
import { Link } from 'react-router-dom';

const Popular = () => {
  return (
    <section className="popular">
        <div className="container mx-auto">
            <div className="headings">
                <h3>Popular Categories</h3><Link>see more <FaArrowRight /></Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
                <div className="pop-card">
                    <div className="icon-wrap">
                        <img src={pennib} alt="" />
                    </div>
                    <div className="pop-dtl">
                        <Link>Graphics & Design</Link>
                        <p>
                            418 Open position
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Popular
