import React from 'react';
import '../styles/navbar.css';

function Nav() {
  return (
    // <div className="home-main">
      <header>
        <div className="logo">
          <img src="https://be-practical.com/images/Be-logo.png" alt="" />
        </div>
        <div className="right">
          <div className="mynavbar">
            <a href="#home" className="an">Home</a>
            <div className="mega-drop">
              <button className="dropbtn">Course <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows row">
                  <div className="devide col-md-6 sm-list-goup">
                    <h3>Explore Course</h3>
                    <a href="#" className='list-group-item'>Fullstack Development</a>
                    <a href="#">Data Science</a>
                    <a href="#">Cloud Computing</a>
                    <a href="#">Software Testing</a>
                    <a href="#">Digital Marketing</a>
                    <a href="#">Job Guaranteed Course</a>
                  </div>
                  <div className="devide col-md-6">
                    <h3>Fullstack Technology</h3>
                    <a href="#">MEAN Full-Stack</a>
                    <a href="#">MERN Full-Stack</a>
                    <a href="#">Java Full-Stack</a>
                    <a href="#">Python Full-Stack</a>
                    <a href="#">DotNet Full-Stack</a>
                  </div>
                  <div className="devide">
                    <h3>Cloud Computing</h3>
                    <a href="#">Advanced Cloud Computing</a>
                    <a href="#">Cloud Ops</a>
                  </div>
                  <div className="devide">
                    <h3>Software Testing</h3>
                    <a href="#">Core Java and Selenium</a>
                    <a href="#">Python - Selenium</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mega-drop">
              <button className="dropbtn">About Us <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows">
                  <div className="devide">
                    <h3>About Us</h3>
                    <a href="#">Why Be-Practical</a>
                    <a href="#">Location</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#event" className="an">Event</a>
            <a href="#gallery" className="an">Gallery</a>
            <a href="#blogs" className="an">Blogs</a>
            <div className="mega-drop">
              <button className="dropbtn">For Company <i className="bi bi-caret-down-fill"></i></button>
              <div className="content">
                <div className="rows">
                  <div className="devide">
                    <h3>Explore</h3>
                    <a href="#">Corporate Training</a>
                    <a href="#">HR Services</a>
                    <a href="#">Hire Training Graduates</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    // </div>
  );
}

export default Nav;
