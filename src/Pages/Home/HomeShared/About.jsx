import React from "react";

const About = () => {
	return (
		<section className="about-section py-20">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between">
					<div className="space-y-2 my-10 text-center">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">
							About Me
						</h2>
						<div className="dark:text-gray-400">information About Me</div>
					</div>
				</div>
				<div className="details flex flex-col-reverse lg:flex-row pb-10">
					<div className="lg:w-4/12 ml-24">
						<img src="https://i.ibb.co/19LLYsd/orginalimg.jpg" alt="Sahariar Kabir" />
					</div>
					<div className=" lg:w-1/2 p-6">
						<div className="mb-10">
							<p>I am Sahariar Kabir A MERN Stack Developer.</p>
							<p>
								The most important thing I like to do is honest work. It matters
								when you build long-term relationships. I always like to take
								challenges with my work. I try to solve problems that my client
								have with their sites and have thrust for work. I love to do
								work and I try to make my client happy. I always try to be
								available for my client's projects.
							</p>
							I am a quick learner and I know if I try I can do it. If I have
							work I try to finish with quality.
							<p>
								I think customer satisfaction is the only thing that makes
								businessmen, and Professional work Happy. I love to communicate
								with new people and love to know about their problems and find
								out how to solve those.
							</p>
						</div>
						<a
							href="https://drive.google.com/file/d/11cGTDTl507JG0H0lsXDjOnG3u7BE0oe3/view?usp=sharing"
							target="_blank"
						>
							<span className="px-8 py-3 text-lg font-semibold rounded btn-primary text-primary-content my-10">
								View Resume
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
