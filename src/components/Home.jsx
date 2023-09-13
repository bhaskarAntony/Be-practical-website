import React from 'react'
import Homedata from './Homedata'; // Import your component
import '../styles/home.css'
import Students from './Students';
import Nav from './Nav'
import Menu from './Menu';
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
      <Menu/>
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
        <div className="home-companies-start text-center text-white">
          <h3>Trusted by the world's best companies</h3>
        <div className="home-companies">
          <div>
            <ul className="homescroll1">
              <li><h3>CodeOps</h3></li>
              <li><h3>AppScript</h3></li>
              <li><h3>Eminds</h3></li>
              <li><h3>Henkel</h3></li>
              <li><h3>MRK</h3></li>
              <li><h3>BlueTree</h3></li>
              <li><h3>InfoMaze</h3></li>
              <li><h3>BlueTechnoSoft</h3></li>
              <li><h3>IdexPoke</h3></li>
              <li><h3>AMBC</h3></li>
              <li><h3>DigitalShark</h3></li>
              <li><h3>InnoMinds</h3></li>
              <li><h3>CurveWing</h3></li>
              <li><h3>Endexel</h3></li>
              <li><h3>Joules to Watts</h3></li>
              <li><h3>Entoss</h3></li>
              <li><h3>CareAtor</h3></li>
              <li><h3>Fartune Softech</h3></li>
              <li><h3>Date Template</h3></li>
              <li><h3>ExamRoom</h3></li>
              <li><h3>DiaToz</h3></li>
            </ul>
          </div>
          <div >
          <ul className="homescroll2">
              <li><h3>CodeOps</h3></li>
              <li><h3>AppScript</h3></li>
              <li><h3>Eminds</h3></li>
              <li><h3>Henkel</h3></li>
              <li><h3>MRK</h3></li>
              <li><h3>BlueTree</h3></li>
              <li><h3>InfoMaze</h3></li>
              <li><h3>BlueTechnoSoft</h3></li>
              <li><h3>IdexPoke</h3></li>
              <li><h3>AMBC</h3></li>
              <li><h3>DigitalShark</h3></li>
              <li><h3>InnoMinds</h3></li>
              <li><h3>CurveWing</h3></li>
              <li><h3>Endexel</h3></li>
              <li><h3>Joules to Watts</h3></li>
              <li><h3>Entoss</h3></li>
              <li><h3>CareAtor</h3></li>
              <li><h3>Fartune Softech</h3></li>
              <li><h3>Date Template</h3></li>
              <li><h3>ExamRoom</h3></li>
              <li><h3>DiaToz</h3></li>
              <li><h3>KPSS Kalpar</h3></li>
            </ul>
          </div>
        </div>
        </div>

        <div className="divider-line-companies">
          
        </div>
    </div>
  )
}

export default Home
