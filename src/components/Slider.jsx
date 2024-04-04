import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import slideimg from "../assets/images/slide-img.png";
import bagicon from "../assets/images/bag.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <section className="slider">
        <div className="caption">
          <small><FaCheckCircle />Your Trusted Career Partner</small>
          <h2>
            Unlock Your Dream <span>Career</span>
          </h2>
          <p>
            Our platform is dedicated to empowering individuals, connecting
            talent with the right opportunities, and fostering professional
            growth.
          </p>
          <div className="search-bar">
            <form action="" className="flex gap-x-3 items-center">
                <input placeholder="Job Title, Keyword... " type="search" id="default-search" class="block w-full" required />
                <input placeholder="location" type="search" id="default-search" class="block w-full" required />
                <button>Search Job</button>
            </form>
          </div>
            <div className="popular-search">
                <strong>Popular Searches: <Link>Designer</Link><Link>Devloper</Link><Link>Programer</Link><Link>Archetech</Link></strong>
            </div>
        </div>
        <div className="slider-img">
            <img src={slideimg} alt="" />
            <div className="job-vac">
                <div className="icon-wrap">
                    <img src={bagicon} alt="" />
                </div>
                <strong>20K +</strong>
                <small>Job Vacancy</small>
            </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
