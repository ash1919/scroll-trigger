/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useLayoutEffect from "./hooks/use-isomorphic-layout-effect";
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

  const q = gsap.utils.selector(app);

  useIsomorphicLayoutEffect(() => {
    courseData.forEach((item) => {
      gsap
        .timeline()
        .from(`#${item.id}`, {
          scrollTrigger: {
            trigger: `#${item.id}`,
            // toggleActions: "play none none none",
            markers: true,
            scrub: true,
            start: "top center",
            end: "bottom 100%",
          },
          x: 0,
          opacity: 0,
          duration: 1,
          ease: "in",
        })
        .to(q(`#${item.id}`), {
          scrollTrigger: {
            trigger: `#${item.id}`,
            // toggleActions: "play none none none",
            // markers: true,
            start: "top center",
            end: "bottom 100%",
            scrub: true,
          },
          x: 0,
          opacity: 1,
          duration: 2,
          ease: "in",
        });
    });
  }, []);

  if (typeof window === undefined) return;


  return (
    <>
      {" "}
      <section ref={app} className="container mx-auto px-6 py-20">
        {" "}
        <div className="flex items-start justify-start gap-x-4 h-[769px]">
          <svg
            width="4"
            height="769"
            viewBox="0 0 4 1783"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="line"
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
            className="flex flex-col items-center justify-center gap-y-20"
          >
            {courseData.map((item) => (
              <div
                id={item.id}
                ref={container}
                className="ml-6 text-white flex flex-col items-start gap-y-10 justify-center"
                key={item.id}
              >
                <div>
                  {" "}
                  <p className={`text-3xl font-semibold heading`}>
                    {item.title}{" "}
                  </p>
                </div>
                <div className="flex items-center justify-center gap-x-10">
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
