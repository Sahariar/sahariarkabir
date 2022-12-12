import React from "react";

const Resell = () => {
	return (
		<section className="project-area">
			<div className="page-title-area text-center p-20 bg-accent/10">
				<h2 className="title text-5xl capitalize">
					Resell Game Console Market
				</h2>

			</div>
			<div className="container mx-auto">
            <div className="py-6">
            <h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
                Gallery
								</h3>
	<div className="container flex flex-col justify-center p-4 mx-auto">
		<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
			
			<img className="object-top w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/nL22dDV/dashboard.png" />
            <img className="object-contain w-full aspect-square" src="https://i.ibb.co/wwFmkVr/reseltgameconsole.png" />
			<img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://i.ibb.co/S6MMX8q/projectpage.png" />
		</div>
	</div>
</div>
				<div className="project-info my-10">
                <h3 className="text-2xl bg-slate-800 text-slate-50 rounded-md px-4 py-3 mb-4 text-center w-3/12 mx-auto">
                Description
								</h3>
					
					<div className="space-y-4 text-xl">
						<p>
							Resell Market For Used Game Console.Find and buy unique products
							from thousands of trusted, independent brands.
						</p>
						<div className="my-10">
							<div className="space-y-4">
								<p>
									On HomePage have a navbar , a banner, Advertised items,
									second-hand product categories section , stats,testimonial,
									apply section and a realistic footer,
								</p>
								<p>
									When the user clicks on a category on the home page, they will
									be redirected to the /category/:id route, where they will see
									second-hand products under that category only. The
									/category/:id page will have a column(s) of cards. It can be
									1,2, or 3 columns. Each card will have a picture, name,
									location, resale price, original price, years of use, the time
									when it got posted, the seller&#39;s name; if the seller is
									verified, there will be a blue tick next to their name and a
									Book now button. Please note, category:/id will be a private
									route.,
								</p>
								<p>
									clicking the Book now button, a form in a modal will popup
									with the logged-in user name and email address, item name, and
									price(item name, price, and user information is not be
									editable) by defadivt. You will give your phone number and
									meeting location, and lastly, there is be a submit button.
									After clicking the submit button, you will have to inform the
									buyer with a modal/toast that the item is booked.,
								</p>
								<p>
									navbar have a login button. Implemented email/password-based
									authentication and one social login(google) authentication.
									Created an extra field for options. There is be two options: a
									dropdown. If the user creates a seller account, he will choose
									the seller option. Otherwise, a normal user will have the user
									option selected by defadivt. Users logged in by using social
									media will be considered as buyers.,
								</p>
								<p>
									user(buyer/seller/admin) is logged in, they will see logout
									(shodivd be working) and another option on the header called
									Dashboard. The dashboard routes will change based on the
									users,
								</p>
								<p>
									Add A Product route, create a form that will have fields for
									product name, price, condition type(excellent, good, fair),
									mobile number, location (Chittagong, Dhaka, etc.), product
									category (every product shodivd be under a category),
									description, price, Year of purchase and other relevant
									information. After submitting the form, a modal/toast with a
									message will pop up to inform the user. Please remember, they
									must be a seller to add a product (think about the
									verification process for the admin access). After adding the
									product, you will then be redirected to the My Products Page,
								</p>
								<p>
									the My Products page, display sales status (available or
									sold), price, and any other relevant information you want to
									show. A seller will be able to delete any of his/her product.
									Please note there will be a special button for each
									unsold/available product where the seller can hit the button
									to advertise.,
								</p>
								<p>
									The advertised items will appear on the home page. Please note
									if there are no items marked as advertised, the advertised
									items section won&#39;t be displayed on the home page. The
									advertised section will only appear if there is one or more
									available (unsold items) are marked to be advertised.
								</p>
								<p>a meaningfdiv 404 page (not found page) added .</p>
								<p>
									WishList in the /category/:id route. A buyer can make a
									product to his/her wishlist or report an item by clicking a
									relevant button. If you have implemented the wishlist feature,
									show them in the buyer&#39;s Dashboard in a separate route,
									&quot;My WishList.&quot; A user shodivd be able to purchase the
									item from the wishlist page. (Just redirect the user to the
									purchase page)
								</p>
								<p>
									implemented the &quot;report to admin&quot; feature, show the
									reported items in the admin dashboard in a separate route,
									&quot;Reported Items&quot; (tips: create a separate collection
									for the wish list and filter by user email address). An admin
									will be able to delete a reported item.
								</p>
							
									<p>
										Implement the basic version of the JWT token for
										email/password-based authentication. Upon social login,
										registration, and login, you will create a JWT token and
										store it on the client side. You will send the token for my
										orders, buyers, and advertisements routes and verify the
										user
									</p>
							
							
									<p>
										The all-sellers route will have a name, email address,
										delete button, and verify button. Admin will be able to
										verify a seller. When clicked on the verify button, the
										seller&#39;s status will change from unverified to
										verified(show a blue tick when the seller is verified), and
										this status will be shown on the products added by a
										verified seller.
									</p>
							
								<p>
									My Orders route will have a table/cards. Each card/ table row
									will be an order having an image, title, price, and a pay
									button. On clicking the pay button, to take the user the
									payment page with fields for card details will pop up, or the
									user will be taken to a route where there is a form for
									filling up card details. Save the payment information in the
									database and inform the user via a modal/toast. Don&#39;t
									forget to update the button text to &quot;paid&quot; after
									payment. Please note, payment is done by Stripe.
								</p>
							
									<p>
										Once an item is paid, it won&#39;t be displayed on the
										advertised item or on the category page. Only available
										items will be displayed to be purchased.
									</p>
									<p>
										Used react query API calls also used Axios for at API call.
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

export default Resell;
