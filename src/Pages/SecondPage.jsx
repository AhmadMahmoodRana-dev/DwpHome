import SmallCard from "@/components/SecondPage/SmallCard";
import MainCard from "@/components/SecondPage/MainCard";
import { Card, CardContent } from "@/components/ui/card";
import { RxTriangleLeft } from "react-icons/rx";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Lahore",
    image: "https://via.placeholder.com/300",
    description: "Product 1 Description",
  },
  {
    id: 2,
    name: "Multan",
    image: "https://via.placeholder.com/300",
    description: "Product 2 Description",
  },
  {
    id: 3,
    name: "Faislabad",
    image: "https://via.placeholder.com/300",
    description: "Product 3 Description",
  },
  {
    id: 4,
    name: "Gujranwala",
    image: "https://via.placeholder.com/300",
    description: "Product 4 Description",
  },
  {
    id: 5,
    name: "RawalPindi",
    image: "https://via.placeholder.com/300",
    description: "Product 5 Description",
  },
  {
    id: 6,
    name: "Karachi",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
  },
  {
    id: 7,
    name: "Hyderabad",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
  },
];

export default function SecondPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productsPerSlide, setProductsPerSlide] = useState(3);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex + 1 + productsPerSlide <= products.length
        ? prevIndex + 1
        : prevIndex;
    });
  };

  const previousProduct = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex - 1 >= 0 ? prevIndex - 1 : prevIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setProductsPerSlide(1); // For small screens
      } else if (screenWidth < 1025) {
        setProductsPerSlide(1); // For medium screens
      } else if (screenWidth > 1200 && screenWidth < 1230 ){
        setProductsPerSlide(2); // For large screens
      }
       else {
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

  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex + productsPerSlide >= products.length;

  return (
    <div className="flex px-7 xl:gap-4 gap-12 lg:flex-nowrap flex-wrap justify-center second-main-div">
      <div className="w-[300px] 2xl:w-[37%] max-w-[600px]">
        <MainCard />
      </div>
      {/* 2xl:max-w-[90%] */}
      <Card className=" 2xl:max-w-full lg:w-full lg:max-w-5xl md:w-[305px] mx-auto 2xl:px-7 xl:pl-7 slider-main-card border-none">
        <CardContent className="relative p-0 w-[300px] md:w-auto">
          <div className="flex justify-center items-center spacer gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="w-full">
                <SmallCard name={product?.name} />
              </div>
            ))}
          </div>
          <button
            variant="outline"
            className={`absolute top-[24.5%] 2xl:left-[-4.4%] xl:left-[-4.1%] lg:left-[-13%] md:left-[-13%] secondpage-back-arrow ${
              isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={previousProduct}
            disabled={isFirstSlide}
          >
            <RxTriangleLeft size={50} className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]" />
          </button>
          <button
            variant="outline"
            onClick={nextProduct}
            className={`absolute rotate-180 top-[24.5%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] secondpage-front-arrow ${
              isLastSlide ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLastSlide}
          >
            <RxTriangleLeft size={50} className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]" />
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

