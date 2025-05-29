import { Card, CardContent } from "@/components/ui/card";
import { RxTriangleLeft } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import FourthMainCard from "@/components/FourthPage/FourthMainCard";
import FourthSmallCard from "@/components/FourthPage/FourthSmallCard";
import FourthSmallCardBottom from "@/components/FourthPage/FourthSmallCardBottom";
import Header from "@/components/SecondPage/header/Header";
import { Context } from "@/context/Context";

export default function ThirdPage() {
  const {
    OthersRawalpindiDataFourthPage,
    OthersFaisalabadDataFourthPage,
    OthersGujranwalaDataFourthPage,
    OthersLahoreDataFourthPage,
    OthersMultanDataFourthPage,
    OthersHyderabadDataFourthPage,
    OthersKarachiDataFourthPage,
    topTableRawalpindiDataFourth,
    topTableFaisalabadDataFourth,
    topTableGujranwalaDataFourth,
    topTableLahoreDataFourth,
    topTableMultanDataFourth,
    topTableHyderabadDataFourth,
    topTableKarachiDataFourth,
    productTableEcostarFourth,
    productTableLedFourth,
    productTableRefrigeratorFourth,
    productTableOtherFourth,
     LineChartRawalpindiDataFourth,
    LineChartFaisalabadDataFourth,
    LineChartGujranwalaDataFourth,
    LineChartLahoreDataFourth,
    LineChartMultanDataFourth,
    LineChartHyderabadDataFourth,
    LineChartKarachiDataFourth,
    productTableEcostarFourthLine,
    productTableLedFourthLine,
    productTableRefrigeratorFourthLine,
    productTableOtherFourthLine,
  } = useContext(Context);

  const products = [
    {
      id: 1,
      name: "Rawalpindi",
      others: OthersRawalpindiDataFourthPage,
      topTable: topTableRawalpindiDataFourth,
      lineChart: LineChartRawalpindiDataFourth,
   
    },
    {
      id: 2,
      name: "Faisalabad",
      others: OthersFaisalabadDataFourthPage,
      topTable: topTableFaisalabadDataFourth,
      lineChart: LineChartFaisalabadDataFourth,

    },
    {
      id: 3,
      name: "Gujranwala",
      others: OthersGujranwalaDataFourthPage,
      topTable: topTableGujranwalaDataFourth,
      lineChart: LineChartGujranwalaDataFourth,

    },
    {
      id: 4,
      name: "Lahore",
      others: OthersLahoreDataFourthPage,
      topTable: topTableLahoreDataFourth,
      lineChart: LineChartLahoreDataFourth,
    },
    {
      id: 5,
      name: "Multan",
      others: OthersMultanDataFourthPage,
      topTable: topTableMultanDataFourth,
      lineChart: LineChartMultanDataFourth,
    },
    {
      id: 6,
      name: "Hyderabad",
      others: OthersHyderabadDataFourthPage,
      topTable: topTableHyderabadDataFourth,
      lineChart: LineChartHyderabadDataFourth,
    },
    {
      id: 7,
      name: "Karachi",
      others: OthersKarachiDataFourthPage,
      topTable: topTableKarachiDataFourth,
      lineChart: LineChartKarachiDataFourth,
    },
  ];
  const bottomProducts = [
    {
      id: 1,
      name: "Ecostar",
      productTable:productTableEcostarFourth,
      lineChart: productTableEcostarFourthLine,

    },
    {
      id: 2,
      name: "Refriger",
      productTable:productTableRefrigeratorFourth,
      lineChart: productTableRefrigeratorFourthLine,
    },
    {
      id: 3,
      name: "LED",
      productTable:productTableLedFourth,
      lineChart: productTableLedFourthLine,
    },
    {
      id: 4,
      name: "Other",
      productTable:productTableOtherFourth,
      lineChart: productTableOtherFourthLine,
    },
  ];
  // Upper Part

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

  // Bottom Card

  const [bottomCurrentIndex, setBottomCurrentIndex] = useState(0);
  const [bottomProductsPerSlide, setBottomProductsPerSlide] = useState(3);

  const nextBottomProduct = () => {
    setBottomCurrentIndex((prevBottomIndex) => {
      return prevBottomIndex + 1 + bottomProductsPerSlide <=
        bottomProducts.length
        ? prevBottomIndex + 1
        : prevBottomIndex;
    });
  };

  const previousBottomProduct = () => {
    setBottomCurrentIndex((prevBottomIndex) => {
      return prevBottomIndex - 1 >= 0 ? prevBottomIndex - 1 : prevBottomIndex;
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setBottomProductsPerSlide(1); // For small screens
      } else if (screenWidth < 1025) {
        setBottomProductsPerSlide(1); // For medium screens
      } else if (screenWidth > 1200 && screenWidth < 1230) {
        setBottomProductsPerSlide(2); // For large screens
      } else {
        setBottomProductsPerSlide(3); // For large screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const currentBottomProducts = bottomProducts.slice(
    bottomCurrentIndex,
    bottomCurrentIndex + bottomProductsPerSlide
  );
  const isFirstBottomSlide = bottomCurrentIndex === 0;
  const isLastBottomSlide =
    bottomCurrentIndex + bottomProductsPerSlide >= bottomProducts.length;

  return (
    <>
      <div className="secondheader pl-7 2xl:pr-14 xl:pr-12 lg:pr-11  lg:block hidden ">
        <Header />
      </div>
      <div className="flex px-7 2xl:gap-[2vh] xl:gap-4 gap-12 lg:flex-nowrap flex-wrap justify-center second-main-div">
        <div className="w-[300px] 2xl:w-[37%] max-w-[600px] ">
          <FourthMainCard />
        </div>
        <div className="2xl:max-w-full lg:w-full lg:max-w-5xl md:w-[305px] mx-auto 2xl:px-7 xl:pl-2 slider-main-card border-none">
          <Card className="w-full border-none">
            <CardContent className="relative p-0 w-[300px] md:w-auto">
              <div className="flex justify-center items-center spacer gap-[1vw]">
                {currentProducts.map((product) => (
                  <div key={product.id} className="w-full">
                    <FourthSmallCard
                      name={product?.name}
                      others={product?.others}
                      topTable={product?.topTable}
                      lineChart={product?.lineChart}
                    />
                  </div>
                ))}
              </div>
              <button
                variant="outline"
                className={`absolute bottom-[50%] 2xl:left-[-4.4%] xl:left-[-3.5%] lg:left-[-15%] md:left-[-13%] left-[-11%] secondpage-back-arrow ${
                  isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={previousProduct}
                disabled={isFirstSlide}
              >
                <RxTriangleLeft className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw]" />
              </button>
              <button
                variant="outline"
                onClick={nextProduct}
                className={`absolute rotate-180 bottom-[50%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-11%] secondpage-front-arrow ${
                  isLastSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLastSlide}
              >
                <RxTriangleLeft className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw]" />
              </button>
            </CardContent>
          </Card>

          {/* BOTTOM CARDS */}
          <Card className=" w-full border-none">
            <CardContent className="relative p-0 w-[300px] md:w-auto">
              <div className="flex justify-center items-center spacer gap-[1vw]">
                {currentBottomProducts.map((product) => (
                  <div key={product.id} className="w-full">
                    <FourthSmallCardBottom name={product?.name} productTable={product?.productTable} lineChart={product?.lineChart} />
                  </div>
                ))}
              </div>
              <button
                variant="outline"
                className={`absolute bottom-[50%] 2xl:left-[-4.4%] xl:left-[-3.5%] lg:left-[-15%] md:left-[-13%] left-[-11%] secondpage-back-arrow ${
                  isFirstBottomSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={previousBottomProduct}
                disabled={isFirstBottomSlide}
              >
                <RxTriangleLeft className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw]" />
              </button>
              <button
                variant="outline"
                onClick={nextBottomProduct}
                className={`absolute rotate-180 bottom-[50%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-11%] secondpage-front-arrow ${
                  isLastBottomSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLastBottomSlide}
              >
                <RxTriangleLeft className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw]" />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
