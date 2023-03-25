import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Conella.
            <br className="hidden lg:inline-block" />Software Engineer | Designer | Blogger
          </h1>
          <p className="mb-8 leading-relaxed">
          Hi, I'm Conella, a software engineer graduate with over 4 years of experience in the IT industry. I'm currently working at Fairleigh Software Services (Pvt) Ltd, and I'm a part of the Service Express UK team. I'm a hardworking, dedicated, and passionate software engineer who loves what she does, and I'm always looking for new challenges and opportunities to learn and grow. I'm also passionate about designing and developing software applications, and my interest in reading and staying up-to-date with the latest technologies has helped me to constantly improve my skills and stay ahead of the curve. Apart from my work, I also enjoy designing, reading, and writing. I love to blog about my experiences in the industry and share my knowledge with others. Writing is a great way for me to connect with others in the industry and share my insights.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="md:max-w-md md:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./conella_belleth.jpg"
          />
        </div>
      </div>
    </section>
  );
}
