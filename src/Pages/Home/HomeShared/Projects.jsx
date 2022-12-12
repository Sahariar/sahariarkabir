import React from "react";
import { useState } from "react";
import { HiOutlineLink } from "react-icons/hi";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Projects = () => {
	return (
		<section className="about-section py-20" id="projects">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between">
					<div className="space-y-2 my-10 text-center">
						<h2 className="text-4xl font-bold leading-tight lg:text-5xl uppercase">
							Projects
						</h2>
						<div className="dark:text-gray-400">I have done</div>
					</div>
				</div>
				<div className="details flex flex-col-reverse lg:flex-row pb-10">
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto">
						
						{/* card 1 */}
                        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
								<figure>
									<img
										src="https://i.ibb.co/6WVT2GV/resell-game.jpg"
										alt="Resell Game Console Market"
										className="rounded-t-xl"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">Resell Game Console Market</h2>
									<p>
										Resell Market For Used Game Console.Find and buy unique
										products from thousands of trusted, independent brands.
									</p>
									<div className="card-actions justify-center py-5">
										<p>Used Technologies</p>
										<p className="flex gap-2 flex-wrap">
											<span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
											<span>Node Js</span>
											<span>Express Js</span>
											<span>MongoDb</span>
											<span>Stripe</span>
										</p>
									</div>
									<div className="flex justify-between">
									<a href="https://resell-game-console-market.web.app/"
								target="_blank" className="btn btn-primary mt-0 gap-2 w-5/12"> 
								<HiOutlineLink className="text-2xl" />Live Link
								</a>

							
								<Link to={'/projects/resell-game-console'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
							
								
									</div>
                                    
								</div>

						</div>
                        {/* card 1 */}
                        {/* card 2 */}
                        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
								<figure>
									<img
										src="https://i.ibb.co/s3d3Zvy/Getllooking-Great.jpg"
										alt="getLookingGreat"
										className="rounded-t-xl"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">A Skilled Makeup Artist.</h2>
									<p>
                                    Barbara Valentin is an internationally accredited and highly skilled makeup artist, working with high quality vegan products for all skin types and tones.
									</p>
									<div className="card-actions justify-center py-5">
										<p>Used Technologies</p>
										<p className="flex gap-2 flex-wrap">
											<span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
											<span>Node Js</span>
											<span>Express Js</span>
											<span>MongoDb</span>
										</p>
									</div>
									<div className="flex justify-between">
									<a href="https://getlookinggreat.web.app/"
								target="_blank" className="btn btn-primary mt-0 gap-4"> <HiOutlineLink className="text-2xl" />Live Link</a>

							
								<Link to={'/projects/get-looking-great'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
							
								
									</div>
                                    
								</div>
						
                            
						</div>
                        {/* card 2 */}
                                                 {/* card 6 */}
                                                 <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
                            <figure>
                                <img
                                    src="https://i.ibb.co/0nffgmP/cyber-Education.jpg"
                                    alt="Cyber Education"
                                    className="rounded-t-xl"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Cyber Education
</h2>
                                <p>
                                A Place where Teach About ABC Of Cyber Security
                                </p>
                                <div className="card-actions justify-center py-5">
                                    <p>Used Technologies</p>
                                    <p className="flex gap-2 flex-wrap">
                                    <span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
											<span>Node Js</span>
											<span>Express Js</span>
											<span>MongoDb</span>
                                    </p>
                                </div>
								<div className="flex justify-between">
								<a href="https://cyber-education-b16df.web.app/"
                            target="_blank" className="btn btn-primary mt-0 gap-4"> <HiOutlineLink className="text-2xl" />Live Link</a>

							
								<Link to={'/projects/cyber-edu'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
							
								
									</div>
                               
                            </div>
                    
                        
                    </div>
                    {/* card 6 */}
                        {/* card 3 */}
                        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
								<figure>
									<img
										src="https://i.ibb.co/cb2x2gt/interview-Quash.jpg"
										alt="Interview"
										className="rounded-t-xl"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">InterView Quash.</h2>
									<p>
                                    A Place To Test Your Theory ofProgramming Languages.A quiz is a form of game or mind sport in which players attempt to answer questions correctly about a certain or variety of subjects.									</p>
									<div className="card-actions justify-center py-5">
										<p>Used Technologies</p>
										<p className="flex gap-2 flex-wrap">
											<span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
										</p>
									</div>
									<div className="flex justify-between">
									<a href="https://interview-quash.netlify.app/"
								target="_blank" className="btn btn-primary mt-0 gap-4"> <HiOutlineLink className="text-2xl" />Live Link</a>

							
								<Link to={'/projects/interview-quash'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
							
								
									</div>
                                    
								</div>
						
                            
						</div>
                        {/* card 3 */}

                        {/* card 4 */}
                        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
								<figure>
									<img
										src="https://i.ibb.co/t8Xjbf2/recipe-Hut.jpg"
										alt="Interview"
										className="rounded-t-xl"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">Recipe Hut.</h2>
									<p>
                                    A Cooking Recipe Book For your Favorite Food.
                                    </p>
									<div className="card-actions justify-center py-5">
										<p>Used Technologies</p>
										<p className="flex gap-2 flex-wrap">
											<span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
											<span>Rest Api</span>
										</p>
									</div>
                                    
							
							<div className="flex justify-between">
							<a href="https://recipe-hut-meal.netlify.app/"
								target="_blank" className="btn btn-primary mt-0 gap-4"> <HiOutlineLink className="text-2xl" />Live Link</a>
								<Link to={'/projects/recipe-hut'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
									</div>
                                    	</div>
						
                            
						</div>
                        {/* card 4 */}
                        {/* card 5 */}
                        <div className="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl hover:shadow-2xl">
							
								<figure>
									<img
										src="https://i.ibb.co/nn0r0Sq/Screenshot-370.jpg"
										alt="Interview"
										className="rounded-t-xl"
									/>
								</figure>
								<div className="card-body">
									<h2 className="card-title">Game E Store.</h2>
									<p>
                                    LET’S
EXPLORE
GAMING
Tools.
                                    </p>
									<div className="card-actions justify-center py-5">
										<p>Used Technologies</p>
										<p className="flex gap-2 flex-wrap">
											<span>HTML 5,</span>
											<span>Css 3,</span>
											<span>JavaScript,</span>
											<span>React,</span>
											<span>Rest Api</span>
										</p>
									</div>
									<div className="flex justify-between">
									<a href="https://game-estore.netlify.app/"
								target="_blank" className="btn btn-primary mt-0 gap-4"> <HiOutlineLink className="text-2xl" />Live Link</a>
								<Link to={'/projects/game-store'} className="btn btn-primary mt-0 gap-2 w-5/12"><BiDetail className="text-2xl" /> Details</Link>	
									</div>

                                    	</div>
						
                            
						</div>
                        {/* card 5 */}
                       
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
