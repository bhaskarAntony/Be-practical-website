import React from 'react'
import '../styles/skills.css'
import '../styles/snapscoll.css'
import skillVideo from '../images/unlock-video.mp4'
import hackethon from '../images/hackethon.mp4'
import video1 from '../images/vedio1.mp4'
import video2 from '../images/video2.mp4'
import video3 from '../images/video3.mp4'

function Skills() {
  return (
    <section className='container-fluid skillsmain overflow-hidden'>
      <div className=" skillsecond">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="left col-12 col-md-12 col-lg-10">
                    <video src={skillVideo} autoPlay muted loop></video>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="right">
                   <div className="text-right">
                    <h1>Why You Choose? Be-Practical</h1>
                    <p className='mt-3'>We are giving unloimited access to learn best courses from best trainers to learn hundreds of practical lessions ins multitude fields.</p>
                    <p></p>
                    <div className="status">
                    <div className="row video-status d-flex g-2">
                        <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                       <div className="video">
                       <video src={hackethon} autoPlay muted loop></video>
                       </div>
                        </div>
                        <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                        <div className="video">
                       <video src={video1} autoPlay muted loop></video>
                       </div>
                        </div>
                        <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                        <div className="video">
                       <video src={video2} autoPlay muted loop></video>
                       </div>
                        </div>
                        <div className="col-3 col-sm-6 col-md-6 col-lg-3 mb-2">
                        <div className="video">
                       <video src={video3} autoPlay muted loop></video>
                       </div>
                        </div>
                    </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
