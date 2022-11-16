/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";
import courseData from "../constants/utils/data";
import { useRouter } from "next/router";
import useIsomorphicLayoutEffect from "./hooks/use-isomorphic-layout-effect";

const Syllabus = () => {
  const app = useRef();
  const container = useRef();
  const router = useRouter();

  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      courseData.forEach((item) => {
        gsap
          .timeline()
          .from(`#${item.id}dot`, {
            scrollTrigger: {
              trigger: `#${item.id}dot`,
              // toggleActions: "play none none none",
              // markers: true,
              start: "top center",
              end: "bottom 100%",
              scrub: 1,
              smoothChildTiming: true,
            },
            scale: 0,

            ease: "ease",
            duration: 3,
          })
          .to(`#${item.id}dot`, {
            scrollTrigger: {
              trigger: `#${item.id}dot`,
              // toggleActions: "play none none none",
              // markers: true,
              start: "top center",
              end: "bottom 100%",
              scrub: 1,
              smoothChildTiming: true,
            },
            duration: 3,
            scale: 1.2,
            autoAlpha: 1,
            ease: "power2.in",
          })
          .from(`#${item.id}`, {
            scrollTrigger: {
              trigger: `#${item.id}`,
              // toggleActions: "play none none none",
              // markers: true,
              scrub: 1,
              start: "top center",
              end: "bottom 100%",
              smoothChildTiming: true,
            },
            x: 0,
            // opacity: 0,
            color: "grey",
            duration: 3,
            scale: 0.8,
            ease: "power2.in",
          })
          .to(`#${item.id}`, {
            scrollTrigger: {
              trigger: `#${item.id}`,
              // toggleActions: "play none none none",
              markers: true,
              start: "top center",
              end: "bottom 100%",
              scrub: 1,
              smoothChildTiming: true,
            },
            x: 0,
            opacity: 1,
            duration: 3,
            color: "white",
            scale: 1,
            ease: "slow(0.7, 0.7, false)",
          })
          .from(`#${item.id}a`, {
            scrollTrigger: {
              trigger: `#${item.id}a`,
              // toggleActions: "play none none none",
              // markers: true,
              start: "top center",
              end: "bottom 100%",
              scrub: 1,
              smoothChildTiming: true,
            },
            animation: "fade",
            animationDuration: 3,
            ease: "slow(0.7, 0.7, false)",
            autoAlpha: 0,
            duration: 3,
          })
          .to(`#${item.id}a`, {
            scrollTrigger: {
              trigger: `#${item.id}a`,
              // toggleActions: "play none none none",
              // markers: true,
              start: "top center",
              end: "bottom 100%",
              scrub: 1,
              smoothChildTiming: true,
            },

            ease: "slow(0.7, 0.7, false)",
            autoAlpha: 1,
            duration: 3,
          });
      });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <>
      {" "}
      <section ref={app} className="container mx-auto px-6 py-20 pb-80">
        {" "}
        <div className="flex items-start justify-start gap-x-4 h-[769px]">
          <svg
            width="4"
            height="769"
            viewBox="0 0 4 1783"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="line relative"
          >
            <line
              x1="2"
              y1="-8.74228e-08"
              x2="2.00008"
              y2="1783"
              stroke="url(#paint0_linear_8001_80318)"
              stroke-width="4"
            />
            <defs>
              <linearGradient
                id="paint0_linear_8001_80318"
                x1="-0.000418615"
                y1="1597.64"
                x2="745.889"
                y2="834.828"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#DD2C8C" />
                <stop offset="1" stop-color="#47007E" />
              </linearGradient>
            </defs>
          </svg>

          <div
            id="abc"
            className="flex flex-col items-center justify-center gap-y-40"
          >
            {courseData.map((item) => (
              <div
                ref={container}
                className="ml-6 text-white flex flex-col items-start gap-y-10 justify-center"
                key={item.id}
              >
                <div>
                  {" "}
                  <img
                    src="/images/Group 610.png"
                    alt="as"
                    id={`${item.id}dot`}
                    className="absolute left-24"
                  />
                  <p
                    id={item.id}
                    className={`text-3xl font-semibold heading text-gray-400`}
                  >
                    {item.title}{" "}
                  </p>
                </div>
                <div
                  id={`${item.id}a`}
                  className="flex items-center justify-center gap-x-10"
                >
                  {item.img.map((img) => (
                    <img src={img.imgLink} alt="icon" key={img.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Syllabus;
