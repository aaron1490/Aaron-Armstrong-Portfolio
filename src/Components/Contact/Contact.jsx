import React, { useState, useEffect } from "react";
import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import phone_icon from "../../assets/call_icon.svg";
import github_icon from "../../assets/github_icon.svg";
import linkedin_icon from "../../assets/linkedin_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "35897e92-59ed-4dc3-9f98-4309d19f825e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="contact" className="contact">
      <div
        className="contact-title"
        style={{ transform: `translateX(-${scrollY}px)` }}
      >
        <h1>
          Get In Touch Get In Touch Get In Touch Get In Touch Get In Touch Get
          In Touch Get In Touch Get In Touch Get In Touch Get In Touch Get In
          Touch Get In Touch Get In Touch Get In Touch Get In Touch <span> Get In Touch</span> Get In Touch
           Get In Touch Get In Touch Get In Touch
        </h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk.</h1>
          <p>
            I'm currently available to take on new projects, why not drop me a
            message?
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>aaronarmstrong1490@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone_icon} alt="" />
              <p>+44 7575 92 7728</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>London, UK</p>
            </div>
            <br />
          </div>
          <div className="social-link">
            <div className="linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aaron-armstrong23/"
            >
              <img src={linkedin_icon} alt="" />
            </a>
            </div>
            <div className="github">
            <a target="_blank" href="https://github.com/aaron1490">
              <img src={github_icon} alt="" />
            </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Your Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
