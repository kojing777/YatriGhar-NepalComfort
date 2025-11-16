import React, { useState, useEffect, useRef } from "react";
import DeveloperCard from "../pages/DeveloperCard ";
import Title from "../components/Title";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div ref={sectionRef} className="bg-slate-50 min-h-screen pt-24 sm:pt-28 md:pt-32 pb-20 px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Title title="About YatriGhar"
          subTitle="Connecting Travelers with Comfort" />
         
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-8">
          <div className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 md:duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to simplify travel bookings through technology — making every journey
              effortless, affordable, and memorable. From personalized stays to local experiences,
              YatriGhar ensures every traveler feels at home, wherever they go.
            </p>
          </div>

          <div className={`bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 md:duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
          >
            <h3 className="text-2xl font-semibold text-amber-600 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              We aim to become Nepal’s most trusted hospitality platform — bridging the gap between
              travelers and local hosts, and promoting authentic travel experiences powered by modern
              technology.
            </p>
          </div>
        </div>

        {/* Developer Cards */}
        <div className={`transition-all duration-500 md:duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
        >
          <DeveloperCard />
        </div>
     
      </div>
    </>
  );
}
