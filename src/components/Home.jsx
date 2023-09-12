import React from 'react'
import Homedata from './Homedata'; // Import your component
import '../styles/home.css'
import Students from './Students';
import Nav from './Nav'
const data = [
  {
    boldtext:"High Paid Salaries &",
    normaltext:"Continuous Career Grouth"
},
{
  boldtext:"Be Practicle",
  normaltext:"Job Oriented Training"
},
{
  boldtext:"High Paid Salaries &",
  normaltext:"Continuous Career Grouth"
},
{
  boldtext:"Be Practicle",
  normaltext:"Job Oriented Training"
}
]

function Home() {
  // Get all elements with the class "animated-item"
const animatedItems = document.querySelectorAll('.animated-item');

// Function to generate a random delay between 0 and 2 seconds
function getRandomDelay() {
  return Math.random() * 5000; // Values in milliseconds
}

// Apply random animation delays to each element
animatedItems.forEach((item) => {
  item.style.animationDelay = `${getRandomDelay()}ms`;
});
  return (
    <div className='home container-fluid'>
      <Nav/>
      <div className="blur">

      </div>
        <div className="row">
          <div className="col-12 col-md-12 col-lg-7">
            <div className="home-left">
            <div className="home-text mb-3">
              <Homedata items={data} />
              </div>
              
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-5">
            <div className="home-right">
               {/* <Students/> */}
               <div className="wave-image">

               </div>
               <div className="blur2">

              </div>
               

            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
