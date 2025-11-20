import React from 'react';
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/all";
import gsap from "gsap";
import {Star, StarHalf} from "@phosphor-icons/react";

const About = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const subDescSplit = SplitText.create(".sub-desc", {
      type: "lines",
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeline
        .from(titleSplit.words, {
          opacity: 0, duration: 1, yPercent: 100, ease: "expo.out", stagger: 0.02,
        })
        .from(subDescSplit.lines, {
          opacity: 0, duration: 1, yPercent: 100, ease: "expo.out", stagger: 0.02,
        }, "-=0.5")
        .from("#star > *", {
          opacity: 0, xPercent: 200, duration: 0.5, ease: "expo.out", stagger: 0.1,
        }, "-=0.5")
        .from("#score", {
          opacity: 0, xPercent: 200, duration: 0.5, ease: "expo.out",
        }, "-=1")
        .from("#customer-profile", {
          opacity: 0, duration: 0.5, xPercent: 200, ease: "expo.out", stagger: 0.1,
        }, "-=1")
        .from(".top-grid div, .bottom-grid div", {
          opacity: 0, duration: 1, ease: "power2.out", stagger: 0.04,
        }, "-=1");
  }, []);

  return (
      <section id="about">
        <div className="mb-16 md:px-0 px-5">
          <div className="content">
            <div className="md:col-span-8">
              <p className="badge">Best Cocktails</p>
              <h2>Where every detail matters <span className="text-white">-</span>
                from muddle to garnish
              </h2>
            </div>
            <div className="sub-content">
              <p className="sub-desc">Every cocktail we serve is a reflection of our obsession with detail — from the
                first muddle to the
                final garnish. That care is what turns a simple drink into something truly memorable. </p>
              <div className="flex flex-row items-center">
                <div>
                <span className="flex gap-1" id="star">
                  <Star size={16} color="#fafafa" weight="fill"/>
                  <Star size={16} color="#fafafa" weight="fill"/>
                  <Star size={16} color="#fafafa" weight="fill"/>
                  <Star size={16} color="#fafafa" weight="fill"/>
                  <StarHalf size={16} color="#fafafa" weight="fill"/>
                </span>
                  <p id="score" className="md:text-3xl text-xl font-bold">
                    <span>4.5</span>/5
                  </p>
                  <p className="text-sm text-white-100">More than +12000 customers</p>
                </div>
                <div className="w-1 h-[85px] rounded-[16px] bg-[linear-gradient(180deg,#313131_0%,#0F0F0F_100%)]"/>
                <div id="customer-profile"
                     className="px-6 py-5 -space-x-4 flex-row bg-[linear-gradient(180deg,#313131_0%,#0F0F0F_100%)] rounded-[60px]">
                  <img src="/images/profile1.png" alt="profile" className="w-8 h-8 md:w-10 md:h-10"/>
                  <img src="/images/profile2.png" alt="profile" className="w-8 h-8 md:w-10 md:h-10"/>
                  <img src="/images/profile3.png" alt="profile" className="w-8 h-8 md:w-10 md:h-10"/>
                  <img src="/images/profile4.png" alt="profile" className="w-8 h-8 md:w-10 md:h-10"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="top-grid">
          <div className="md:col-span-3">
            <div className="noisy"/>
            <img src="/images/abt1.png" alt="grid-img-1"/>
          </div>

          <div className="md:col-span-6">
            <div className="noisy"/>
            <img src="/images/abt2.png" alt="grid-img-2"/>
          </div>

          <div className="md:col-span-3">
            <div className="noisy"/>
            <img src="/images/abt5.png" alt="grid-img-5"/>
          </div>
        </div>

        <div className="bottom-grid">
          <div className="md:col-span-8">
            <div className="noisy"/>
            <img src="/images/abt3.png" alt="grid-img-3"/>
          </div>

          <div className="md:col-span-4">
            <div className="noisy"/>
            <img src="/images/abt4.png" alt="grid-img-4"/>
          </div>
        </div>
      </section>
  );
};
export default About;
