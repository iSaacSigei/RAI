import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurMission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="bg-[#157FA8] py-10 px-5">
      {/* Title */}
      <div data-aos="fade-up">
        <p className="text-5xl text-center text-[#9C54AF] font-bold mb-10">Our Mission</p>
      </div>

      {/* Mission Statement */}
      <div data-aos="fade-right" className="max-w-4xl mx-auto text-white bg-[#1B4F72] p-10 rounded-lg shadow-lg">
        <p className="text-lg leading-8">
          Our mission is to promote responsible AI development and use, ensuring that AI is developed and used in a way that respects human rights and promotes social good. We believe that AI has the potential to transform society for the better, but only if it is developed and used ethically.
        </p>
        <p className="mt-4 text-lg leading-8">
          By advocating for responsible AI, we aim to ensure that AI is used to promote human rights, equality, and justice.
        </p>
      </div>
    </main>
  );
};

export default OurMission;
