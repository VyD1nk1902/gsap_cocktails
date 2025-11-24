import React from 'react';
import {openingHours, socials} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";

const Contact = () => {

  useGSAP(() => {
    gsap.timeline({});
    const titleSplit = SplitText.create("#contact h2", {type: "words"});
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
      }, ease: "power1.inOut",
    });
    timeLine
        .from(titleSplit.words, {
          opacity: 0, yPercent: 100, stagger: 0.1,
        })
        .from("#contact h3, #contact p", {
          opacity: 0, yPercent: 100, stagger: 0.1,
        })
        .to("#f-left-leaf", {
          y: 200, duration: 0.5, ease: "power1.inOut",
        }, "-=0.5")
        .to("#f-right-leaf", {
          y: -100, duration: 0.5, ease: "power1.inOut",
        }, "-=0.5");
  }, []);

  return (
      <footer id="contact">
        <img src="/images/footer-right-leaf.png" id="f-right-leaf" alt="footer leaf img"/>
        <img src="/images/footer-left-leaf.png" id="f-left-leaf" alt="footer leaf img"/>

        <div className="content">
          <h2>Where to find us</h2>
          <div>
            <h3>Visit Our Bar</h3>
            <p>73 Ben Thanh Ward, District 1, Ho Chi Minh City.</p>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>(555) 738-2929</p>
            <p>d3athParade@vdmocktail.com</p>
          </div>

          <div>
            <h3>Open Everyday</h3>
            {openingHours.map((time) => (
                <p key={time.day}>{time.day} : {time.time}</p>
            ))}
          </div>

          <div>
            <h3>Socials</h3>

            <div className="flex-center gap-5">
              {socials.map((item) => (
                  <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                    <img src={item.icon} alt={item.name}/>
                  </a>
              ))}
            </div>
          </div>

        </div>

      </footer>
  );
};
export default Contact;
