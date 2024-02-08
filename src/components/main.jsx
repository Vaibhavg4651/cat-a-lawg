import React from 'react'

// Dummy data array
const dummyData = [
	{ id: 1, title: 'Card 1', imageUrl: 'https://via.placeholder.com/150' },
	{ id: 2, title: 'Card 2', imageUrl: 'https://via.placeholder.com/150' },
	{ id: 3, title: 'Card 3', imageUrl: 'https://via.placeholder.com/150' }
]

// Function to generate Lorem Ipsum text
const generateLoremIpsum = () => {
	return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim.'
}

// Card component with inline CSS
const Card = ({ title, imageUrl }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				backgroundColor: '#ffffff',
				borderRadius: '10px',
				boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
				padding: '20px',
				margin: '10px',
				width: '100%',
				maxWidth: '80%', // Set max width to avoid stretching too much on larger screens
				position: 'relative'
			}}
		>
			<img
				src={imageUrl}
				alt="Card"
				style={{
					width: '100px',
					height: '100px',
					borderRadius: '10px',
					marginRight: '20px'
				}}
			/>
			<div style={{ flex: 1 }}>
				<h3
					style={{
						color: '#333',
						marginBottom: '10px',
						fontSize: '1.5rem'
					}}
				>
					{title}
				</h3>
				<p
					style={{
						color: '#666',
						marginBottom: '0',
						fontSize: '1rem',
						lineHeight: '1.5'
					}}
				>
					{generateLoremIpsum()}
				</p>
			</div>
		</div>
	)
}

// Main App component
const App = () => {
	return (
		<div
			style={{
				fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
				textAlign: 'center',
				padding: '20px',
				width: '100%', // Ensure the container utilizes the maximum screen width
				boxSizing: 'border-box' // Ensure padding is included in the width
			}}
		>
			<h1
				style={{
					fontSize: '2rem',
					marginBottom: '20px',
					color: 'whitesmoke'
				}}
			>
				ONDC
			</h1>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					width: '100%', // Ensure the container utilizes the maximum screen width
					boxSizing: 'border-box' // Ensure padding is included in the width
				}}
			>
				{dummyData.map((card) => (
					<Card
						key={card.id}
						title={card.title}
						imageUrl={card.imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export default App




// import React from 'react';

// // Dummy data array
// const dummyData = [
//     {
//         id: 1,
//         title: 'Card 1',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'ABC123',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         dateOfManufacturing: '2023-01-15'
//     },
//     {
//         id: 2,
//         title: 'Card 2',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'DEF456',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         dateOfManufacturing: '2023-02-20'
//     },
//     {
//         id: 3,
//         title: 'Card 3',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'GHI789',
//         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         dateOfManufacturing: '2023-03-25'
//     }
// ]

// // Card component with inline CSS
// const Card = ({
//     title,
//     imageUrl,
//     productId,
//     description,
//     dateOfManufacturing
// }) => {
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                 padding: '20px',
//                 margin: '10px',
//                 width: '100%',
//                 maxWidth: '100%', // Adjusted maxWidth for wider cards
//                 position: 'relative',
//                 height: '250px'
//             }}
//         >
//             <img
//                 src={imageUrl}
//                 alt="Card"
//                 style={{
//                     width: '100px',
//                     height: '100px',
//                     borderRadius: '10px',
//                     marginRight: '20px'
//                 }}
//             />
//             <div style={{ flex: 1 }}>
//                 <h3
//                     style={{
//                         color: '#333',
//                         marginBottom: '10px',
//                         fontSize: '1.5rem'
//                     }}
//                 >
//                     {title}
//                 </h3>
//                 <p style={{ color: '#666', marginBottom: '5px' }}>
//                     Product ID: <strong>{productId}</strong>
//                 </p>
//                 <p style={{ color: '#666', marginBottom: '5px' }}>
//                     Description: <strong>{description}</strong>
//                 </p>
//                 <p style={{ color: '#666', marginBottom: '5px' }}>
//                     Date of Manufacturing:{' '}
//                     <strong>{dateOfManufacturing}</strong>
//                 </p>
//             </div>
//         </div>
//     )
// }

// // Main App component
// const App = () => {
//     return (
//         <div
//             style={{
//                 fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//                 textAlign: 'center',
//                 padding: '20px',
//                 width: '100%', // Ensure the container utilizes the maximum screen width
//                 boxSizing: 'border-box', // Ensure padding is included in the width
//                 display: 'flex',
//                 justifyContent: 'center' // Center the content horizontally
//             }}
//         >
//             <div
//                 style={{
//                     width: '80%' // Set the width to 80% of the screen
//                 }}
//             >
//                 <h1
//                     style={{
//                         fontSize: '2rem',
//                         marginBottom: '20px',
//                         color: 'whitesmoke'
//                     }}
//                 >
//                     ONDC
//                 </h1>
//                 <div
//                     style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center',
//                         width: '100%', // Ensure the container utilizes the maximum screen width
//                         boxSizing: 'border-box' // Ensure padding is included in the width
//                     }}
//                 >
//                     {dummyData.map((card) => (
//                         <Card
//                             key={card.id}
//                             title={card.title}
//                             imageUrl={card.imageUrl}
//                             productId={card.productId}
//                             description={card.description}
//                             dateOfManufacturing={card.dateOfManufacturing}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default App





// LEFT ALIGN TEXT
// import React from 'react';

// // Dummy data array
// const dummyData = [
//     {
//         id: 1,
//         title: 'Card 1',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'ABC123',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//         dateOfManufacturing: '2023-01-15'
//     },
//     {
//         id: 2,
//         title: 'Card 2',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'DEF456',
//         description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//         dateOfManufacturing: '2023-02-20'
//     },
//     {
//         id: 3,
//         title: 'Card 3',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'GHI789',
//         description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
//         dateOfManufacturing: '2023-03-25'
//     },
//     {
//         id: 4,
//         title: 'Card 4',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'JKL012',
//         description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
//         dateOfManufacturing: '2023-04-30'
//     },
//     {
//         id: 5,
//         title: 'Card 5',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'MNO345',
//         description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//         dateOfManufacturing: '2023-05-10'
//     },
//     {
//         id: 6,
//         title: 'Card 6',
//         imageUrl: 'https://via.placeholder.com/150',
//         productId: 'PQR678',
//         description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
//         dateOfManufacturing: '2023-06-15'
//     }
// ]

// // Card component with inline CSS
// const Card = ({
//     title,
//     imageUrl,
//     productId,
//     description,
//     dateOfManufacturing
// }) => {
//     return (
//         <div
//             style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 backgroundColor: '#ffffff',
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//                 padding: '20px',
//                 margin: '10px',
//                 width: '100%',
//                 maxWidth: '100%', // Adjusted maxWidth for wider cards
//                 position: 'relative',
//                 height: '250px'
//             }}
//         >
//             <img
//                 src={imageUrl}
//                 alt="Card"
//                 style={{
//                     width: '100px',
//                     height: '100px',
//                     borderRadius: '10px',
//                     marginRight: '20px'
//                 }}
//             />
//             <div style={{ flex: 1 }}>
//                 <h3
//                     style={{
//                         color: '#333',
//                         marginBottom: '10px',
//                         fontSize: '1.5rem',
//                         textAlign: 'left' // Align title text to the left
//                     }}
//                 >
//                     {title}
//                 </h3>
//                 <p style={{ color: '#666', marginBottom: '5px', textAlign: 'left' }}>
//                     <strong>Product ID:</strong> {productId}
//                 </p>
//                 <p style={{ color: '#666', marginBottom: '5px', textAlign: 'left' }}>
//                     <strong>Description:</strong> {description}
//                 </p>
//                 <p style={{ color: '#666', marginBottom: '5px', textAlign: 'left' }}>
//                     <strong>Date of Manufacturing:</strong> {dateOfManufacturing}
//                 </p>
//             </div>
//         </div>
//     )
// }

// // Main App component
// const App = () => {
//     return (
//         <div
//             style={{
//                 fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//                 textAlign: 'center',
//                 padding: '20px',
//                 width: '100%', // Ensure the container utilizes the maximum screen width
//                 boxSizing: 'border-box', // Ensure padding is included in the width
//                 display: 'flex',
//                 justifyContent: 'center', // Align items horizontally to the center
//                 alignItems: 'center', // Align items vertically to the center
//                 minHeight: '100vh' // Ensure full height of the viewport
//             }}
//         >
//             <div
//                 style={{
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     width: '80%', // Adjusted width for the container
//                     maxWidth: '1200px', // Set maximum width for larger screens
//                     margin: '0 auto' // Center horizontally
//                 }}
//             >
//                 <h1
//                     style={{
//                         fontSize: '2rem',
//                         marginBottom: '20px',
//                         color: 'whitesmoke'
//                     }}
//                 >
//                     ONDC
//                 </h1>
//                 {dummyData.map((card) => (
//                     <Card
//                         key={card.id}
//                         title={card.title}
//                         imageUrl={card.imageUrl}
//                         productId={card.productId}
//                         description={card.description}
//                         dateOfManufacturing={card.dateOfManufacturing}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }
// export default App;
