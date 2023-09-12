import React from 'react';
import '../styles/snapscoll.css'
import '../styles/councelling.css';
import  bookimage from '../images/book.webp'
import taskimage from '../images/task-time-8571374-6805197.webp'
import devoloper from '../images/web-developer-4506461-3738664.webp'
import rocketimage from '../images/rocket-5346221-4474727.webp'
import trainerimage from '../images/trainer.webp'
import devolopment from '../images/website-development-5984576-4971246.webp'
import job from '../images/job-interview-4616025-3846823.webp'

function Councelling() {
  // Define styles as JavaScript objects
  const cardStyles = {
    cardFirst: {
        backgroundColor: '#DBDFEA',
    },
    card2: {
        backgroundColor: '#EFE1D1',
    },
    card3: {
        backgroundColor: '#D6F8B8',
    },
    card4: {
        backgroundColor: '#F6FFA6',
    },
    card5: {
        backgroundColor: '#FFBFBF',
    },
    card6: {
      backgroundColor: '#FFD9B7',
    },
    card7: {
        backgroundColor: '#C8FFE0',
    },
  };

  return (
    <section className="container-fluid councellingmain">
        <div className="text-container">
            <h3 className='header'><span className='rounded-2 fs-3 anim-text'>Training</span> <span className="main-text">process and deployment</span></h3>
            <p className='mt-4 fs-5'>The training process in software development involves identifying and addressing knowledge gaps among individuals or teams. It includes structured learning activities, hands-on practice, and assessments to enhance skills and keep up with industry advancements.</p>
        </div>
      <div className="card-container">
        <div className="grid">
          <div className="card card-first border-0 rounded-5 pcard" style={cardStyles.cardFirst}>
            <div className="card-header border-0 bg-transparent p-0">
              <img src={bookimage} alt="logo" className="card-img-top" style={{ transition: '0.2s' }} />
            </div>
            <div className="card-body">
              <h3>Guid</h3>
              <p>Be Practical offers career counseling for new students</p>
            </div>
          </div>

          <div className="card card2 border-0 rounded-5 pcard" style={cardStyles.card2}>
            <div className="card-header  border-0 bg-transparent p-0">
              <img src={taskimage} alt="logo" className="card-img-top" style={{ transition: '0.4s' }} />
            </div>
            <div className="card-body">
              <h3>Enroll Now</h3>
              <p>Get enrolled in our training program.</p>
            </div>
          </div>

          <div className="card card3 border-0 rounded-5 pcard" style={cardStyles.card3}>
            <div className="card-header  border-0 bg-transparent p-0">
              <img src={devoloper} alt="logo" className="card-img-top" style={{ transition: '0.6s' }} />
            </div>
            <div className="card-body">
              <h3>Training</h3>
              <p>Get trained by professional trainers in online/offline mode.</p>
            </div>
          </div>

          <div className="card card4 border-0 rounded-5 pcard" style={cardStyles.card4}>
            <div className="card-header  border-0 bg-transparent p-0">
              <img src={rocketimage} alt="logo" className="card-img-top" style={{ transition: '0.8s' }} />
            </div>
            <div className="card-body">
              <h3>Projects</h3>
              <p>Get evaluated through Mini projects, Capstone projects & mock interviews.</p>
            </div>
          </div>

          <div className="card card5 border-0 rounded-5 pcard" style={cardStyles.card5}>
            <div className="card-header  border-0 bg-transparent p-0">
              <img src={trainerimage} alt="logo" className="card-img-top" />
            </div>
            <div className="card-body">
              <h3>Placements</h3>
              <p>We are a software training institute in Bangalore with placement assistance provided as a priority.</p>
            </div>
          </div>

          <div className="card card6 border-0 rounded-5 pcard" style={cardStyles.card6}>
            <div className="card-header  border-0 bg-transparent p-0">
              <img src={devolopment} alt="logo" className="card-img-top" style={{ transition: '1s' }} />
            </div>
            <div className="card-body">
              <h3>Councelling</h3>
              <p>Be Practical offers career counseling for new students</p>
            </div>
          </div>

          <div className="card card7 border-0 rounded-5 pcard" style={cardStyles.card7}>
            <div className="card-header border-0 bg-transparent p-0">
              <img src={job} alt="logo" className="card-img-top" style={{ transition: '1s' }} />
            </div>
            <div className="card-body">
              <h3>Jobs</h3>
              <p>Be an employee with our partner clients in the IT and non-IT sectors.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Councelling;
