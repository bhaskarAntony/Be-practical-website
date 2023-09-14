import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/home.css';

const carouselStyle = {
  height: '100%', // Set the height to 80% of the viewport height
};

class Homedata extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    this.carouselInterval = setInterval(this.nextSlide, 3000); // Auto scroll every 3 seconds
  }

  componentWillUnmount() {
    clearInterval(this.carouselInterval); // Clear the interval when the component unmounts
  }

  nextSlide = () => {
    const { activeIndex } = this.state;
    const nextIndex = activeIndex === this.props.items.length - 1 ? 0 : activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Carousel
        activeIndex={activeIndex}
        onSelect={() => {}}
        style={carouselStyle} // Apply the carousel height style
        indicators={false} // Remove the indicators
      >
        {this.props.items.map((item, index) => (
          <Carousel.Item key={index}>
           <div className="carousel-box">
           <span className='boldtext'>{item.boldtext}</span>
            <span className='normaltext'>{item.normaltext}</span>
            {/* <div className="points">
              <ul>
                <li>Industry Experts Trainers</li>
                <li>Job Oriented Syllabus</li>
                <li>Flexible Timing</li>
                <li>Corporate-style Training</li>
                <li>Real-Time Projects</li>
                <li>Industry Recognized Certificate</li>
                <li>Join Now</li>
              </ul>
            </div> */}
            <div className="btn-container">
              <button className="btn ">Download Brochure</button>
              <button className="btn ">Join Now <i className='bu bi-send'></i></button>
            </div>
            <div className="btn-container">
            <button className='mt-3'>Book Our Free Demo Classes</button>
              <button className="btn mt-3">Send Me Message</button>
            </div>
            <div className="arrow">
              <img src="https://html.ditsolution.net/techno/assets/images/shape/arrow-long.png" alt="" />
            </div>
           
           </div>
            {/* <Carousel.Caption>
              <div className="caption">
                {}
              </div>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default Homedata;
