import ThirdSmallCard from "@/components/ThirdPage/ThirdSmallCard";
import ThirdMainCard from "@/components/ThirdPage/ThirdMainCard";
import { Card, CardContent } from "@/components/ui/card";
import { RxTriangleLeft } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import Header from "@/components/SecondPage/header/Header";
import ThirdSmallCardBottom from "@/components/ThirdPage/ThirdSmallCardBottom";
import { Context } from "@/context/Context";
import ToggleButtons from "@/components/ToggleButtons";

export default function ThirdPage() {
  const {
    OthersRawalpindiDataThirdPage,
    OthersFaisalabadDataThirdPage,
    OthersGujranwalaDataThirdPage,
    OthersLahoreDataThirdPage,
    OthersMultanDataThirdPage,
    OthersHyderabadDataThirdPage,
    OthersKarachiDataThirdPage,
    topTableRawalpindiDataThird,
    topTableFaisalabadDataThird,
    topTableGujranwalaDataThird,
    topTableLahoreDataThird,
    topTableMultanDataThird,
    topTableHyderabadDataThird,
    topTableKarachiDataThird,
    productTableEcostar,
    productTableLed,
    productTableRefrigerator,
    productTableOther,
    LineChartRawalpindiDataThird,
    LineChartFaisalabadDataThird,
    LineChartGujranwalaDataThird,
    LineChartLahoreDataThird,
    LineChartMultanDataThird,
    LineChartHyderabadDataThird,
    LineChartKarachiDataThird,
    productTableEcostarThirdLine,
    productTableLedThirdLine,
    productTableRefrigeratorThirdLine,
    productTableOtherThirdLine,
    isWrap,
  } = useContext(Context);

  const products = [
    {
      id: 1,
      name: "Rawalpindi",
      others: OthersRawalpindiDataThirdPage,
      topTable: topTableRawalpindiDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 1 Description",
      lineChart: LineChartRawalpindiDataThird,
    },
    {
      id: 2,
      name: "Faisalabad",
      others: OthersFaisalabadDataThirdPage,
      topTable: topTableFaisalabadDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 2 Description",
      lineChart: LineChartFaisalabadDataThird,
    },
    {
      id: 3,
      name: "Gujranwala",
      others: OthersGujranwalaDataThirdPage,
      topTable: topTableGujranwalaDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 3 Description",
      lineChart: LineChartGujranwalaDataThird,
    },
    {
      id: 4,
      name: "Lahore",
      others: OthersLahoreDataThirdPage,
      topTable: topTableLahoreDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 4 Description",
      lineChart: LineChartLahoreDataThird,
    },
    {
      id: 5,
      name: "Multan",
      others: OthersMultanDataThirdPage,
      topTable: topTableMultanDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 5 Description",
      lineChart: LineChartMultanDataThird,
    },
    {
      id: 6,
      name: "Hyderabad",
      others: OthersHyderabadDataThirdPage,
      topTable: topTableHyderabadDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 6 Description",
      lineChart: LineChartHyderabadDataThird,
    },
    {
      id: 7,
      name: "Karachi",
      others: OthersKarachiDataThirdPage,
      topTable: topTableKarachiDataThird,
      image: "https://via.placeholder.com/300",
      description: "Product 6 Description",
      lineChart: LineChartKarachiDataThird,
    },
  ];

  const bottomProducts = [
    {
      id: 1,
      name: "Ecostar AC",
      productTable: productTableEcostar,
      lineChart: productTableEcostarThirdLine,
    },
    {
      id: 2,
      name: "Refrigerator",
      productTable: productTableRefrigerator,
      lineChart: productTableRefrigeratorThirdLine,
    },
    {
      id: 3,
      name: "LED",
      productTable: productTableLed,
      lineChart: productTableLedThirdLine,
    },
    {
      id: 4,
      name: "Other",
      productTable: productTableOther,
      lineChart: productTableOtherThirdLine,
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
        setProductsPerSlide(1);
      } else if (screenWidth < 1025) {
        setProductsPerSlide(1); // Medium screens
      } else if (screenWidth >= 1025 && screenWidth < 1280) {
        setProductsPerSlide(1); // ✅ 2 cards for 1025px–1279px
      } else {
        setProductsPerSlide(3); // 1280px and above
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
        setBottomProductsPerSlide(1); // Small screens
      } else if (screenWidth < 1025) {
        setBottomProductsPerSlide(1); // Medium screens
      } else if (screenWidth >= 1025 && screenWidth < 1280) {
        setBottomProductsPerSlide(1); // ✅ 2 cards for 1025px–1279px
      } else {
        setBottomProductsPerSlide(3); // 1280px and above
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize); // Update on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
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
      <ToggleButtons />
      <div
        className={`${
          isWrap
            ? "flex px-7 2xl:gap-[2vh] xl:gap-4 md:gap-6 gap-12 md:flex-nowrap newDesktopSite flex-wrap justify-center second-main-div"
            : "flex px-7 gap-12 flex-nowrap newDesktopSite overflow-x-auto  second-main-div"
        }`}
      >
        <div className="w-[300px] 2xl:w-[37%] max-w-[600px]">
          <ThirdMainCard />
        </div>
        <div className="2xl:max-w-full lg:w-full xl:ml-0 lg:ml-5 lg:max-w-5xl md:w-[305px] mx-auto 2xl:px-7 xl:pl-7 slider-main-card border-none">
          <Card className="w-full border-none">
            <CardContent className="relative p-0 w-[300px] md:w-auto">
              <div className="flex justify-center items-center spacer gap-[1vw]">
                {currentProducts.map((product) => (
                  <div key={product.id} className="w-full">
                    <ThirdSmallCard
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
                className={`absolute top-[50%] 2xl:left-[-4.4%] xl:left-[-5%] lg:left-[-15%] md:left-[-13%] left-[-11%] secondpage-back-arrow ${
                  isFirstSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={previousProduct}
                disabled={isFirstSlide}
              >
                <RxTriangleLeft
                  size={50}
                  className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw] "
                />
              </button>
              <button
                variant="outline"
                onClick={nextProduct}
                className={`absolute rotate-180 top-[50%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-11%] secondpage-front-arrow ${
                  isLastSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLastSlide}
              >
                <RxTriangleLeft
                  size={50}
                  className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw] "
                />
              </button>
            </CardContent>
          </Card>

          {/* BOTTOM CARDS */}
          <Card className=" w-full border-none">
            <CardContent className="relative p-0 w-[300px] md:w-auto">
              <div className="flex justify-center items-center spacer gap-[1vw]">
                {currentBottomProducts.map((product) => (
                  <div key={product.id} className="w-full">
                    <ThirdSmallCardBottom
                      name={product?.name}
                      productTable={product?.productTable}
                      lineChart={product?.lineChart}
                    />
                  </div>
                ))}
              </div>
              <button
                variant="outline"
                className={`absolute bottom-[50%] 2xl:left-[-4.4%] xl:left-[-5%] lg:left-[-15%] md:left-[-13%] left-[-11%] secondpage-back-arrow ${
                  isFirstBottomSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={previousBottomProduct}
                disabled={isFirstBottomSlide}
              >
                <RxTriangleLeft
                  size={50}
                  className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw] "
                />
              </button>
              <button
                variant="outline"
                onClick={nextBottomProduct}
                className={`absolute rotate-180 bottom-[50%] 2xl:right-[-4.4%] xl:right-[-4.1%] lg:right-[-10%] md:right-[-13%] right-[-11%] secondpage-front-arrow ${
                  isLastBottomSlide ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLastBottomSlide}
              >
                <RxTriangleLeft
                  size={50}
                  className="text-[#4ade80] xl:w-[3vw] xl:h-[3vw] lg:w-[4vw] lg:h-[4vw] md:w-[6vw] md:h-[6vw] w-[9vw] h-[9vw] "
                />
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
