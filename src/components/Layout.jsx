import React from 'react';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen w-full relative bg-gradient-to-b from-white to-gray-50">
			{/* Background Gradient Blobs */}
			<div className="fixed -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
			<div className="fixed -bottom-24 -right-24 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
			
			{/* Main Content */}
			<div className="relative z-10">
				{children}
			</div>
		</div>
	);
};

export default Layout;