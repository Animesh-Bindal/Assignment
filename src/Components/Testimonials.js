import React from 'react'
import "../Styles/Testimonials.scss";
import img1 from "../Integicons/img1.png";
import img2 from "../Integicons/img2.png";
import img3 from "../Integicons/img3.png";

function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Mehra",
      title: "CFO, XYZ",
      quote: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
      imagee: img1
    },
    {
      name: "Alan Turing",
      title: "CFO, XYZ",
      quote: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
      imagee: img2
    },
    {
      name: "Mark Jacob",
      title: "CEO, XYZ",
      quote: "ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No more unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding.",
      imagee: img3
    }
  ];
  return (
    <div className="section-testimonials">
      <p className='intp'>Our customers love us</p>
      <div className="testimonial-cards" >
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`testimonial-card ${testimonial.name === "Rohit Mehra" ? 'orange' : testimonial.name === "Alan Turing" ? 'green' : testimonial.name === "Mark Jacob" ? 'bluee' : ''}`}>
            <p>{testimonial.quote}</p>
            <div className="bot">
              <img src={testimonial.imagee} alt={`${testimonial.name} picc`} />
              <div className="des">
                <h4>{testimonial.name}</h4>
                <p className="title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
