import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import VideoModal from './VideoModal';
import "../../styles/video.css";


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <main className="bg-[#157FA8]">
      <section className='h-full  bg-white  border p-3 m-3' data-aos="fade-up">
        <p className='text-2xl' data-aos="fade-right">
          Our vision is a world where AI is developed and used responsibly to benefit all of humanity. We believe that AI has the potential to transform society for the better, but only if it is developed and used ethically. By advocating for responsible AI, we aim to ensure that AI is used to promote human rights, equality, and justice.
        </p>
        <p data-aos="fade-left" className='text-5xl text-center text-[#9C54AF]'>Our initiatives include:</p>
        <hr className='h-1  bg-black w-[50%] m-auto'/>
        <ul className='mt-3 text-2xl'>
          <li ><span className=' text-[#9C54AF]'> Advocate:</span>  We support the development of ethical standards, policies, and regulations for AI, and we work to ensure that AI is developed and used in a way that respects human rights and promotes social good.</li>
          <li > <span className=' text-[#9C54AF]'>Collaborate:</span> We bring together stakeholders from academia, industry, government, and civil society to promote responsible AI and to foster collaboration and knowledge sharing.</li>
          <li > <span className=' text-[#9C54AF]'>Educate:</span> We provide knowledge and tools for ethical AI, including resources for developers, policymakers, and the general public.</li>
          <li > <span className=' text-[#9C54AF]'>Lead: </span>We implement and encourage responsible AI practices within our own organization, and we advocate for ethical AI in the wider community.</li>
        </ul>
      </section>
      

      <section className='h-full bg-white m-3 border p-3' data-aos="fade-up">
        <p data-aos="fade-right" className='text-5xl text-center text-[#9C54AF]'>Our work is guided by the following principles:</p>
        <hr className='h-1  bg-black w-[50%] m-auto'/>

        <ul className='mt-3 text-2xl'>
          <li > <span className=' text-[#9C54AF]'>Human Rights:</span> We believe that AI should be developed and used in a way that respects and promotes human rights, including the rights to privacy, freedom of expression, and non-discrimination.</li>
          <li > <span className=' text-[#9C54AF]'>Transparency: </span>We advocate for transparency in AI development and use, including clear explanations of how AI systems work and how they make decisions.</li>
          <li > <span className=' text-[#9C54AF]'> Accountability:</span> We believe that those responsible for developing and using AI should be held accountable for their actions, and that there should be mechanisms in place to address harms caused by AI systems.</li>
          <li > <span className=' text-[#9C54AF]'> Equity: </span>We advocate for the development and use of AI in a way that promotes equity and fairness, and that addresses the needs of marginalized and vulnerable communities.</li>
          <li > <span className=' text-[#9C54AF]'>Collaboration:</span> We believe that responsible AI requires collaboration among stakeholders from academia, industry, government, and civil society, and that knowledge sharing and dialogue are essential to promoting ethical AI.</li>
        </ul>

        <p  className='text-2xl' data-aos="fade-right">
          By fostering collaboration and knowledge sharing among stakeholders from academia, industry, government, and civil society, we address ethical issues and promote responsible AI innovation. We advocate for ethical standards, policies, and regulations that protect human rights, and we lead by example through the implementation of responsible AI practices within our own organization.
        </p>
      </section>
      <section className='h-[100vh] m-3 bg-vid border p-3' data-aos="fade-up">
        <VideoModal/>

      </section>


    </main>
  );
};

export default About;
