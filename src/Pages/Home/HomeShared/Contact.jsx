import React from "react";
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
	return (
		<section className="contact-section py-20 bg-accent/20">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between">
					<div className="space-y-2 my-10 text-center">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">
							Get in Touch
						</h2>

						<div className="dark:text-gray-400">
							Say Hello or Want to talk about Tech
						</div>
						<div className="w-48 lg:w-2/12 mx-auto pt-10">
							<div className="grid grid-flow-col gap-4">
								<a href="https://github.com/Sahariar" target="blank">
									<BsGithub className="text-2xl hover:text-primary" />
								</a>
								<a
									href="https://www.linkedin.com/in/sahariar-kabir/"
									target="blank"
								>
									<BsLinkedin className="text-2xl hover:text-primary" />
								</a>
								<a href="https://twitter.com/Sahariar__Kabir" target="blank">
									<BsTwitter className="text-2xl hover:text-primary" />
								</a>
								<a
									href="https://www.youtube.com/channel/UCAGSel7RJBUD-mx8zAOjSxA"
									target="blank"
								>
									<BsYoutube className="text-2xl hover:text-primary" />
								</a>
								<a
									href="https://www.facebook.com/sahariarkabirshabuj/"
									target="blank"
								>
									<FaFacebookSquare className="text-2xl hover:text-primary" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="details flex flex-col-reverse lg:flex-row pb-10">
					<div className=" lg:w-1/2 p-6 mx-auto text-center">
						<div className="mb-10">
							<p>
								I am currently Looking for New Opportunity Feel Free to contact
								me.
							</p>
							<p>
								Whether you have a question or just want to say hi, I’ll try my
								best to get back to you!
							</p>
						</div>
						<a href="mailto:sahariark@gmail.com" target="_blank">
							<span className="font-semibold rounded btn btn-primary btn-wide my-10">
								Say Hello
							</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
