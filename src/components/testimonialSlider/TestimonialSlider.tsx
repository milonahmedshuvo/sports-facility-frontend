import React, { useState, useEffect } from 'react';
import testimonialsData from '../../assets/testimonials.json';
// import { Testimonial } from './types';





const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = testimonialsData;
  const intervalTime = 3000; // 5000 milliseconds = 5 seconds

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, intervalTime);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  return (
    <div
      className="testimonial-slider "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="testimonial-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Smooth scrolling
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
          
                <img  className='w-32 h-32 mx-auto rounded-full' src={testimonial.image} alt="" />
           
                <h4 className='mt-2 text-lg'>{testimonial.name}</h4>
                <span>{new Date(testimonial.date).toLocaleDateString()}</span>
            <p className='w-full mx-auto mt-1 text-xl text-black font-semibold'>{testimonial.feedback}</p>
            
          </div>
        ))}
      </div>

      {/* <div className="controls">
        <button
          onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
        >
          <FaArrowAltCircleRight/>
        </button>
        <button onClick={handleNext}>Next</button>
      </div> */}

    </div>
  );
};

export default TestimonialSlider;
