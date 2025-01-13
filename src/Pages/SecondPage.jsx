import SmallCard from "@/components/SecondPage/SmallCard"
import MainCard from "@/components/SecondPage/MainCard";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name:"Lahore",
    image: "https://via.placeholder.com/300",
    description: "Product 1 Description",
  },
  {
    id: 2,
    name:"Multan",
    image: "https://via.placeholder.com/300",
    description: "Product 2 Description",
  },
  {
    id: 3,
    name:"Faislabad",
    image: "https://via.placeholder.com/300",
    description: "Product 3 Description",
  },
  {
    id: 4,
    name:"Gujranwala",
    image: "https://via.placeholder.com/300",
    description: "Product 4 Description",
  },
  {
    id: 5,
    name:"RawalPindi",
    image: "https://via.placeholder.com/300",
    description: "Product 5 Description",
  },
  {
    id: 6,
    name:"Karachi",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
  },
  {
    id: 7,
    name:"Hyderabad",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
  },
];

export default function SecondPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(3);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % products.length;
      return newIndex + productsPerSlide > products.length ? 0 : newIndex;
    });
  };
  
  const previousProduct = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + products.length) % products.length;
      return newIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setProductsPerSlide(1); // For small screens
      } else if (screenWidth < 1025) {
        setProductsPerSlide(1); // For medium screens
      } else {
        setProductsPerSlide(3); // For large screens
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);

  const currentProducts = products.slice(
    currentIndex,
    currentIndex + productsPerSlide
  );

  return (
    <div className="flex px-7 gap-4 lg:flex-nowrap flex-wrap justify-center">
      <div className="w-[300px] 2xl:w-[37%] max-w-[600px]">
        <MainCard />
      </div>

      <Card className="lg:w-full lg:max-w-5xl md:w-[305px]  bg-black  mx-auto lg:px-7 border-none">
     
        <CardContent className="relative p-0 w-[300px] md:w-auto">
          <div className="flex justify-center items-center space-x-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="w-full">
                <SmallCard name={product?.name}  />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button variant="outline" onClick={previousProduct}>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <button variant="outline" onClick={nextProduct}>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ##########   MAIN   ##########

// import React from "react";
// const SecondPage = () => {
//   return (
//     <div className="w-full min-h-screen h-auto flex">
//       <div className="w-[300px] 2xl:w-[32%]">
//         <MainCard />
//       </div>
//       <div className="w-full h-screen bg-black">
//         <SmallCard/>
//       </div>
//     </div>
//   );
// };

// export default SecondPage;
