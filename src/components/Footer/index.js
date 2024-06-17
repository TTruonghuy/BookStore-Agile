import React from "react";

function Footer() {
	return (
		<>
			<div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start items-center p-5">
				<div className="p-5 ">
					<ul>
						<p className="text-gray-800 font-bold text-3xl pb-3 text-center">
							BOOK' <span className="text-blue-600">HEHEHE'</span>
						</p>		
					
						<p className="text-gray-800 font-bold text-2xl pb-2 items-center text-center"> 
						    <span className="inline-block mr-2 hover:text-gray-500">Literary</span> |
                            <span className="inline-block mx-4 hover:text-gray-500">Knowledge</span> |
                            <span className="inline-block ml-4 hover:text-gray-500">Another</span>
						</p>
						<li className="text-center text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Email: tranvantruonghuyy@gmail.com
						</li>
						<li className="text-center text-gray-500 text-md font-semibold hover:text-blue-600 cursor-pointer">
							Phone: 0362875750
						</li>
						
					</ul>
				</div>
				
			</div>
			<div className="bg-gray-300 flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
				© 2023-2024 All rights reserved | BOOK'HEHEHE' - Your Knowledge Companion. Love!
				</h1>
			</div>
		</>
	);
}
export default Footer;