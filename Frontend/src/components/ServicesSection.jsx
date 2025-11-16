import React, { useState, useEffect } from "react";
import Title from "./Title";

export default function ServicesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const services = [
    {
      title: "Easy Hotel Booking",
      desc: "Book hotels across Nepal instantly with our fast and reliable system.",
      icon: "🏨",
      highlight: true,
    },
    {
      title: "Comfort & Luxury",
      desc: "Enjoy verified stays with comfort, cleanliness, and top-rated amenities.",
      icon: "🛏️",
    },
    {
      title: "Local Experience",
      desc: "Discover nearby attractions, local events, and hidden gems effortlessly.",
      icon: "📍",
    },
    {
      title: "24/7 Support",
      desc: "Our dedicated support team is here round-the-clock for your assistance.",
      icon: "💬",
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 px-4 sm:px-6 md:px-16 lg:px-24 text-center overflow-hidden">
      <Title title={"Our Services"} subTitle={"We Offer the Best Hospitality Services"} />
      <div className="h-8" />

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 md:p-8 transition-all duration-700 transform group cursor-pointer overflow-hidden ${
                mounted
                  ? 'opacity-100 translate-y-0 rotate-0 scale-100'
                  : 'opacity-0 translate-y-12 rotate-6 scale-95'
              } ${
                service.highlight
                  ? "bg-gradient-to-br from-amber-50/90 to-white border-2 border-amber-200 shadow-2xl scale-105 z-10 animate-pulse hover:animate-none"
                  : "bg-white/95 backdrop-blur-sm border border-white/30 hover:shadow-2xl hover:-translate-y-3 shadow-lg hover:scale-105"
              } hover:shadow-amber-200/50`}
              style={{
                transitionDelay: `${index * 200}ms`,
                animation: service.highlight && mounted ? 'float 3s ease-in-out infinite' : 'none'
              }}
            >
              {/* Enhanced Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />

              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                service.highlight
                  ? "bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100"
                  : "bg-gradient-to-br from-amber-300/5 to-transparent opacity-0 group-hover:opacity-100"
              }`} />

              <div className="flex flex-col items-center text-center gap-4 relative z-10">
                <div
                  className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl md:text-4xl transition-all duration-500 ${
                    service.highlight
                      ? "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 group-hover:from-amber-200 group-hover:to-amber-300 group-hover:shadow-xl group-hover:shadow-amber-300/50"
                      : "bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 group-hover:from-amber-200 group-hover:to-amber-300 group-hover:shadow-xl group-hover:shadow-amber-300/50"
                  } shadow-lg border-2 border-white/20`}
                >
                  <span>
                    {service.icon}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className={`text-lg md:text-xl font-bold transition-all duration-300 ${
                    service.highlight
                      ? "text-amber-800 group-hover:text-amber-900"
                      : "text-gray-800 group-hover:text-amber-700"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-3 text-sm md:text-base leading-relaxed transition-all duration-300 group-hover:text-gray-700 max-w-xs">
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Enhanced Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 ${
                service.highlight
                  ? "group-hover:border-amber-400 group-hover:shadow-2xl group-hover:shadow-amber-400/30"
                  : "group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-300/20"
              }`} />

              {/* Floating particles effect for highlighted card */}
              {service.highlight && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-ping" style={{ animationDelay: '0s' }} />
                  <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-40 animate-ping" style={{ animationDelay: '1s' }} />
                  <div className="absolute top-8 left-8 w-1 h-1 bg-amber-300 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1.05); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
      `}</style>
    </section>
  );
}