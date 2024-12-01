import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <>
      <div className="testimonial-box">
        <h3 className="sub-heading">Testimonials</h3>
        <div className="testimonials-msgs">
       
        <div className="testimonial-card">
          <div className="img-circle">
          <img src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg" alt="user-image" />
         
          <p className="user-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident obcaecati cum saepe, expedita quas aliquam debitis autem deleniti possimus mollitia repellendus aut praesentium molestiae libero sunt nulla eaque dolore minus! Ullam hic facilis dicta dolorem in rem autem omnis explicabo?</p>
          </div>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
