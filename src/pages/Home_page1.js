import React, { useEffect, useRef } from 'react';
import '../css/Home_page1.css';
import designer3 from '../assets/Designer3.png';
import designer2 from '../assets/Designer2.png';
import designer1 from '../assets/image1.jpg';

function Home_page1() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const showElements = () => {
      const elements = section.querySelectorAll('.img-wrapp');
      elements.forEach((element) => {
        element.classList.add('show');
      });
    };

    // Automatically show images for mobile view (e.g., width <= 768px)
    if (window.innerWidth <= 768) {
      showElements();
    }

    // Add hover functionality only for larger screens
    if (window.innerWidth > 768) {
      const handleMouseEnter = () => {
        const elements = section.querySelectorAll('.img-wrapp');
        elements.forEach((element) => {
          element.classList.add('show');
        });
      };

      const handleMouseLeave = () => {
        const elements = section.querySelectorAll('.img-wrapp');
        elements.forEach((element) => {
          element.classList.remove('show');
        });
      };

      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="sustainability" ref={sectionRef}>
      <div className="container position-relative">
        <div className="row">
          <div className="col-md-4">
            <h2 className="f-bold orange">Health, Safety & Environment </h2>
            <h2 className="f-thin"> Your well-being, our priority</h2>
            <p className="f-thin">
              S V Trading takes a holistic approach towards sustainability. We optimise the use of available resources, such as raw materials, utilities and human resources to minimise our environmental footprint.
              Our processes are designed to reduce emissions and waste. We strive to create a safe working environment and are committed to protecting the environment and the health and safety of our employees, customers and the community.
            </p>
            <a href="/" className="f-light">Read more</a>
          </div>

          <div className="col-md-8">
            <div className="img-div">
              <div className="img-wrapp fade-right">
                <img src={designer3} className="img-fluid sust-2" alt="Safety" />
                <span className="f-medium bg-orange">Safety</span>
              </div>
              <div className="img-wrapp fade-up">
                <img src={designer2} className="img-fluid sust-3" alt="Productivity" />
                <span className="f-medium bg-blue">Productivity</span>
              </div>
            </div>
            <div className="img-right">
              <div className="img-wrapp fade-left">
                <img src={designer1} className="img-fluid sust-1" alt="Reliability" />
                <span className="f-medium bg-orange">Reliability</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home_page1;
