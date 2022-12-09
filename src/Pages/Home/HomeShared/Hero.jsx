import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="bg-secondary/10 text-secondary-content">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-48 lg:flex-row lg:justify-between">
		<div className="py-6 pl-0 text-center w-full mx-auto rounded-sm">
		
			<h1 className="text-5xl sm:text-6xl font-extrabold text-transparent leading-8  bg-clip-text bg-gradient-to-r from-neutral to-accent/70">
			Hello,  <span>I am </span>
                <span className="">Sahariar</span> Kabir
			</h1>
			<h2 className="text-4xl font-bold my-6">
			I enjoy Creating Website and learning new technologies.
			</h2>
			<p className="mt-6 mb-8 text-xl sm:mb-12">MERN Stack Developer with a passion for solving problems and helping others succeed.Currently Looking for remote work</p>
			<div className="flex justify-center flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4">
            
           <a href='https://drive.google.com/file/d/11cGTDTl507JG0H0lsXDjOnG3u7BE0oe3/view?usp=sharing' target="_blank"><span className="px-8 py-3 text-lg font-semibold rounded btn-primary text-primary-content ">View Resume</span></a> 
           
				
			</div>
		</div>
		
	</div>
</section>
    );
};

export default Hero;