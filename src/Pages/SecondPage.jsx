import SmallCard from "@/components/SecondPage/SmallCard";
import MainCard from "@/components/SecondPage/MainCard";
import { Card, CardContent } from "@/components/ui/card";
import { RxTriangleLeft } from "react-icons/rx";
import { useEffect, useState } from "react";
import Header from "@/components/SecondPage/header/Header";

const TableData = [
  {
    id: 1,
    weeks: "Week 30",
    Inset: "2,308",
    Outset: "2,378",
    OTC: "64%",
  },
  {
    id: 2,
    weeks: "Week 40",
    Inset: "2,308",
    Outset: "2,378",
    OTC: "64%",
  },
  {
    id: 3,
    weeks: "Week 41",
    Inset: "2,308",
    Outset: "2,378",
    OTC: "64%",
  },
  {
    id: 4,
    weeks: "Week 42",
    Inset: "2,308",
    Outset: "2,378",
    OTC: "64%",
  },
];

const products = [
  {
    id: 1,
    name: "Rawalpindi",
    image: "https://via.placeholder.com/300",
    description: "Product 1 Description",
    TableData: TableData,
  },
  {
    id: 2,
    name: "Faisalabad",
    image: "https://via.placeholder.com/300",
    description: "Product 2 Description",
    TableData: TableData,
  },
  {
    id: 3,
    name: "Gujranwala",
    image: "https://via.placeholder.com/300",
    description: "Product 3 Description",
    TableData: TableData,
  },
  {
    id: 4,
    name: "Lahore",
    image: "https://via.placeholder.com/300",
    description: "Product 4 Description",
    TableData: TableData,
  },
  {
    id: 5,
    name: "Multan",
    image: "https://via.placeholder.com/300",
    description: "Product 5 Description",
    TableData: TableData,
  },
  {
    id: 6,
    name: "Hyderabad",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
    TableData: TableData,
  },
  {
    id: 7,
    name: "Karachi",
    image: "https://via.placeholder.com/300",
    description: "Product 6 Description",
    TableData: TableData,
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
      } else if (screenWidth > 1200 && screenWidth < 1230) {
        setProductsPerSlide(2); // For large screens
      } else {
        setProductsPerSlide(3); // For large screens
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

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
    <>
      <div className="secondheader pl-7 2xl:pr-14 xl:pr-12 lg:pr-11  lg:block hidden ">
        <Header />
      </div>

      <div className="flex px-7 2xl:gap-[2vh] xl:gap-4 gap-12 lg:flex-nowrap flex-wrap justify-center second-main-div">
        <div className="w-[300px] 2xl:w-[37%] max-w-[600px]">
          <MainCard />
        </div>
        <Card className=" 2xl:max-w-full lg:w-full lg:max-w-5xl md:w-[305px] mx-auto 2xl:px-7 xl:pl-7 slider-main-card border-none">
          <CardContent className="relative p-0 w-[300px] md:w-auto">
            <div className="flex justify-center items-center spacer gap-[1vw]">
              {currentProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <SmallCard
                    name={product?.name}
                    TableData={product?.TableData}
                  />
                </div>
              ))}
            </div>
            <button
              variant="outline"
              className={`absolute top-[17.5%] 2xl:left-[-4.4%] xl:left-[-5%] lg:left-[-15%] md:left-[-13%] left-[-16%] secondpage-back-arrow ${
                isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={previousProduct}
              disabled={isFirstSlide}
            >
              <RxTriangleLeft
                size={50}
                className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]"
              />
            </button>
            <button
              variant="outline"
              onClick={nextProduct}
              className={`absolute rotate-180 top-[17.5%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-16%] secondpage-front-arrow ${
                isLastSlide ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLastSlide}
            >
              <RxTriangleLeft
                size={50}
                className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]"
              />
            </button>

            {/* SECOND ARROWS */}

            <button
              variant="outline"
              className={`absolute bottom-[30.5%] 2xl:left-[-4.4%] xl:left-[-5%] lg:left-[-15%] md:left-[-13%] left-[-16%] secondpage-back-arrow ${
                isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={previousProduct}
              disabled={isFirstSlide}
            >
              <RxTriangleLeft
                size={50}
                className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]"
              />
            </button>
            <button
              variant="outline"
              onClick={nextProduct}
              className={`absolute rotate-180 bottom-[30.5%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-16%] secondpage-front-arrow ${
                isLastSlide ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLastSlide}
            >
              <RxTriangleLeft
                size={50}
                className="text-[#4ade80] 2xl:w-[3vw] 2xl:h-[3vw]"
              />
            </button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
