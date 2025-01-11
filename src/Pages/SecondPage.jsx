// import FirstCard from "@/components/FirstCard";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { ArrowRight } from "lucide-react";
// import { useEffect, useState } from "react";

// const products = [
//   {
//     id: 1,
//     image: "https://via.placeholder.com/300",
//     description: "Product 1 Description",
//   },
//   {
//     id: 2,
//     image: "https://via.placeholder.com/300",
//     description: "Product 2 Description",
//   },
//   {
//     id: 3,
//     image: "https://via.placeholder.com/300",
//     description: "Product 3 Description",
//   },
//   {
//     id: 4,
//     image: "https://via.placeholder.com/300",
//     description: "Product 4 Description",
//   },
//   {
//     id: 5,
//     image: "https://via.placeholder.com/300",
//     description: "Product 5 Description",
//   },
//   {
//     id: 6,
//     image: "https://via.placeholder.com/300",
//     description: "Product 6 Description",
//   },
// ];

// export default function SecondPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [productsPerSlide, setProductsPerSlide] = useState(3);

//   const nextProduct = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex + productsPerSlide) % products.length
//     );
//   };

//   const previousProduct = () => {
//     setCurrentIndex(
//       (prevIndex) =>
//         (prevIndex - productsPerSlide + products.length) % products.length
//     );
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       const screenWidth = window.innerWidth;
//       if (screenWidth < 640) {
//         setProductsPerSlide(1); // For small screens
//       } else if (screenWidth < 1025) {
//         setProductsPerSlide(1); // For medium screens
//       } else {
//         setProductsPerSlide(3); // For large screens
//       }
//     };

//     handleResize(); // Set initial value
//     window.addEventListener("resize", handleResize); // Update on resize

//     return () => {
//       window.removeEventListener("resize", handleResize); // Cleanup
//     };
//   }, []);

//   const currentProducts = products.slice(
//     currentIndex,
//     currentIndex + productsPerSlide
//   );

//   return (
//     <div className="flex px-7 gap-4">
//       <FirstCard />

//       <Card className="xl:w-full xl:max-w-5xl  w-full mx-auto">
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold">Product Slider</CardTitle>
//         </CardHeader>
//         <CardContent className="relative">
//           <div className="flex justify-center items-center space-x-4">
//             {currentProducts.map((product) => (
//               <div key={product.id} className="w-full max-w-sm">
//                 <Card>
//                   <CardContent>
//                     <img
//                       src={product.image}
//                       alt={`Product ${product.id}`}
//                       className="w-full rounded-lg"
//                     />
//                     <CardDescription className="mt-4 text-center">
//                       {product.description}
//                     </CardDescription>
//                   </CardContent>
//                 </Card>
//               </div>
//             ))}
//           </div>
//           <div className="flex justify-between mt-6">
//             <button variant="outline" onClick={previousProduct}>
//               <ArrowRight className="w-4 h-4 rotate-180" />
//             </button>
//             <button variant="outline" onClick={nextProduct}>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }






// ##########   MAIN   ##########

import React from 'react'

const SecondPage = () => {
  return (
    <div>
      
    </div>
  )
}

export default SecondPage




