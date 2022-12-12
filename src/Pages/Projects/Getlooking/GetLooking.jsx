import React from 'react';

const GetLooking = () => {
    return (
        <section className="project-area">
			<div className="page-title-area text-center p-20 bg-accent/10">
				<h2 className="title text-5xl capitalize">
					Get Looking Great
				</h2>

			</div>
			<div className="container mx-auto">
            <div className="py-6">
            <h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
                Gallery
								</h3>
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
        <img className="object-contain w-full aspect-square" src="https://i.ibb.co/L6YKRHQ/getlookingreat.png" />
		<img className="object-contain w-full aspect-square" src="https://i.ibb.co/xsfxRmw/Screenshot-378.jpg" />
        <img className="object-contain w-full aspect-square" src="https://i.ibb.co/tms0PW9/getlookingreatservice.png" />
			
		</div>
	</div>
</div>
				<div className="project-info my-10">
                <h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
                Description
								</h3>
					
					<div className="space-y-4 text-xl">
						<p>
                        Added Logo and Favicon,

						</p>
						<div className="my-10">
							<div className="space-y-4">
								<p>
                                Added Header component,
								</p>
								<p>
                                used Tailwindcss with daisyUi,

								</p>
								<p>
                                use React-Photo-view to Show Big Image modal on click image.

								</p>
								<p>
                                Use React-router for Routing URL and Client site rendering.

								</p>
								<p>
                                Used UseContext for For data to be available for the Whole app.

								</p>
								<p>
                                Sometime use props for passing data to children components.

								</p>
								<p>
                                add service and reviews page add and edit, delete option.

								</p>
								<p>
                                Fully Responsive site
		                        </p>
								<p>
                                    Fully integrated Authentication with Firebase.
						        </p>
								<p>
                                Site deploy to firebase hosting.

								</p>
								<p>
                                Added Hover animation on images.

								</p>
							
									<p>
                                    setup server for data.
									</p>
							</div>
						</div>
						<div className="flex flex-col">
                        <div className="info">
								<h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
									Uses Framework and Library
								</h3>
								<div className="flex flex-wrap justify-start gap-4 my-10 ">
									<p className="bg-accent/50 p-4 rounded-md capitalize">tailwindCss</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">daisyui</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">firebase</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-dom</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-icons</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-router-dom</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-Hook-From</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-Photo-View</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">react-toastify</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">readme-md-generator</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Mongodb</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Node.Js</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">React query</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Axios</p>
								</div>
							</div>
							<div className="area">
                            <h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
                            Common Feature
								</h3>
                
								<div className="flex flex-wrap justify-start gap-4 my-10 ">
									<p className="bg-accent/50 p-4 rounded-md capitalize">SPA site</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Api Fetch</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">404 page</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Authentication</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Responsive site</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">React</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Firebase</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Data Server</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Mongodb</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">React query</p>
									<p className="bg-accent/50 p-4 rounded-md capitalize">Axios</p>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
    );
};

export default GetLooking;