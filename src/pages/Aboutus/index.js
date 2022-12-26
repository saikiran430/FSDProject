import React from "react";

import {
  Column,
  Row,
  Text,
  Button,
  Img,
  Stack,
  Slider,
  PagerIndicator,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const AboutusPage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-raleway items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-rubik items-center max-w-[1290px] mt-[115px] sm:mt-[61px] md:mt-[79px] mx-[auto] sm:px-[15px] w-[100%]">
          <Column className="flex flex-col sm:mx-[0] pr-[11px] md:pr-[7px] pt-[11px] sm:pt-[5px] md:pt-[7px] sm:px-[0] sm:w-[100%] w-[60%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
              <Text
                className="font-raleway leading-[60.00px] md:leading-[normal] sm:leading-[normal] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                as="h1"
                variant="h1"
              >
                Vintage Restyled provides 
                the best quality ingredients 
                for home products
              </Text>
              <Text
                className="font-rubik leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[96%]"
                variant="body2"
              >
               We are targeting in acquiring used furniture from users at a price, refurbishing and selling off at a margin. The website would display used furniture in a good state will be sold. Users would be able to sign up on the site and set up their profile. And they will be able to search for their required products, place order and also checkout to the payment page. Once payment is successful, the expected time of product arrival must be communicated to the user via email as well as displayed on the order page. Users would also be able to sell used furniture to the company. They are allowed to upload pictures of the items they intend to sell. Based on the images, company admins must be able to decide based on condition of product and pricing whether to forward that particular item or not.
              </Text>

            </Column>
            <Column className="flex flex-col justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-raleway items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                  <Text
                    className="font-bold mb-[3px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-black_900 tracking-ls011666660010814667 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                    variant="body1"
                  >
                    Ratings
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-evenly ml-[10px] md:ml-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_star.svg"
                      className="flex-shrink-0 sm:h-[16px] md:h-[21px] h-[30px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[30px]"
                      alt="star"
                    />
                    <Text
                      className="flex-grow font-bold mb-[2px] sm:mt-[4px] md:mt-[6px] mt-[9px] text-black_900 tracking-ls011666660010814667 md:tracking-ls11 sm:tracking-ls11"
                      variant="body1"
                    >
                      5.0
                    </Text>
                  </Row>
                </Row>
                <Text
                  className="font-rubik sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-black_900_7f1 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body4"
                >
                  Trusted by many people from all over the world
                </Text>
              </Column>
              <Stack className="h-[50px] sm:mt-[11px] md:mt-[15px] mt-[22px] relative sm:w-[100%] w-[81%]">
                <Stack className="absolute h-[50px] left-[0] sm:w-[100%] w-[82%]">
                  <Stack className="absolute h-[50px] left-[0] sm:w-[100%] w-[78%]">
                    <Stack className="absolute h-[50px] left-[0] sm:w-[100%] w-[71%]">
                      <Img
                        src="images/img_unsplashwnolnj.png"
                        className="absolute sm:h-[27px] md:h-[35px] h-[50px] left-[0] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="unsplashWNoLnJ"
                      />
                      <Img
                        src="images/img_unsplashrtvgs4.png"
                        className="absolute sm:h-[27px] md:h-[35px] h-[50px] right-[0] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                        alt="unsplashRtVGSFour"
                      />
                    </Stack>
                    <Img
                      src="images/img_unsplashd1upki.png"
                      className="absolute sm:h-[27px] md:h-[35px] h-[50px] right-[0] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="unsplashd1UPki"
                    />
                  </Stack>
                  <Img
                    src="images/img_unsplashplsf6o.png"
                    className="absolute sm:h-[27px] md:h-[35px] h-[50px] right-[0] rounded-radius50 sm:w-[26px] md:w-[34px] w-[50px]"
                    alt="unsplashplsF6o"
                  />
                </Stack>
                <Text
                  className="absolute bg-bluegray_900 flex font-semibold items-center pl-[10px] sm:pl-[5px] md:pl-[6px] pr-[14px] sm:pr-[7px] md:pr-[9px] sm:py-[15px] right-[0] rounded-radius50 text-yellow_100 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[50px]"
                  variant="body3"
                >
                  3K+
                </Text>
              </Stack>
            </Column>
          </Column>
          <Img
            src="images/img_rectangle1492.png"
            className="max-w-[100%] rounded-bl-[300px] rounded-br-[0] rounded-tl-[300px] rounded-tr-[300px] sm:w-[100%] w-[41%]"
            alt="Rectangle1492"
          />
        </Row>
        <Column className="bg-black_900 flex flex-col font-rubik items-center justify-end mt-[100px] sm:mt-[53px] md:mt-[68px] sm:p-[15px] md:p-[28px] p-[41px] w-[100%]">
          <Text
            className="font-normal mt-[4px] not-italic text-gray_51 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h6"
            variant="h6"
          >
            
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1093px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
           
            
           
          </Row>
        </Column>
       
        <Stack className="font-rubik h-[535px] mt-[100px] sm:mt-[53px] md:mt-[68px] relative w-[100%]">
          <Column className="absolute bg-yellow_100 bottom-[0] flex flex-col justify-end sm:p-[15px] md:p-[42px] p-[62px] w-[100%]">
            <Column className="flex flex-col justify-start ml-[13px] md:ml-[8px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
              <Text
                //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                //as="h5"
                //variant="h5"
              >
                Redefining Trends
              </Text>
              <Text
                className="font-bold font-raleway leading-[60.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[18px] md:mt-[24px] mt-[35px] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                as="h2"
                variant="h2"
              >
                New look and feel at affordable prices
              </Text>
            </Column>
            <Button
              className="cursor-pointer font-medium min-w-[17%] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[23px] md:mt-[30px] mt-[45px] text-[20px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
              size="2xl"
              variant="OutlineBluegray900_1"
            >
              Shop Now
            </Button>
          </Column>
          <Img
            src="images/img_insideweather.png"
            className="absolute h-[535px] max-w-[100%] right-[0] sm:w-[284px] md:w-[368px] w-[535px]"
            alt="insideweather"
          />
        </Stack>
        
        <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]" />
      </Column>
    </>
  );
};

export default AboutusPage;
