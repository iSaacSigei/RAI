import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="py-20 px-5">
      {/* Title */}
      <div>
        <p className="md:text-5xl text-4xl mb-10 text-center font-semibold">
          Our Mission and Vision
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="md:grid md:grid-cols-2 gap-4 items-stretch">
        {/* Mission Statement */}
        <div
          data-aos="fade-right"
          className="lg:min-h-[40vh] flex items-center justify-center max-w-4xl mx-auto text-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#154360] to-[#1B4F72]"
        >
          <p className="text-lg leading-8">
            Our mission is to promote responsible AI development and use,
            ensuring that AI is developed and used in a way that respects human
            rights and promotes social good. We believe that AI has the
            potential to transform society for the better, but only if it is
            developed and used ethically.
          </p>
        </div>

        {/* Vision Statement */}
        <div
          data-aos="fade-left"
          className="lg:min-h-[40vh] flex items-center justify-center max-w-4xl mx-auto text-white p-8 rounded-lg shadow-lg bg-gradient-to-r from-[#11374D] to-[#154360]"
        >
          <p className="text-lg leading-8">
            Our vision is a world where AI is developed and used in a way that
            respects human rights and promotes social good. We believe that AI
            has the potential to transform society for the better, but only if
            it is developed and used ethically.
          </p>
        </div>
      </div>
    </main>
  );
};

export default OurMission;
