import React from "react";

import {
  Column,
  Text,
  Button,
  Row,
  Img,
  Line,
  Input,
  TextArea,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const ContactusPage = () => {
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-raleway items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header className="w-[100%]" />
          <Column
            className="bg-cover bg-no-repeat flex flex-col font-poppins items-center justify-start max-w-[1290px] mt-[115px] sm:mt-[61px] md:mt-[79px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group48095967.png')" }}
          >
            <Column className="bg-black_900_7f flex flex-col justify-end sm:p-[15px] md:p-[49px] p-[72px] w-[100%]">
              <Column className="flex flex-col justify-start ml-[3px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                <Text
                  className="font-rubik font-semibold text-yellow_100 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Vintage Restyled for used Furniture sales
                </Text>
                <Text
                  className="font-raleway leading-[60.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[18px] md:mt-[23px] mt-[34px] text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                 We assure you with the quality and materials of our goods 
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-bold min-w-[15%] ml-[3px] sm:mt-[24px] md:mt-[31px] mt-[46px] text-[20px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                size="xl"
                variant="FillYellow100"
              >
                Shop Now
              </Button>
            </Column>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-raleway items-center max-w-[1290px] mt-[102px] sm:mt-[54px] md:mt-[70px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
              <Text
                className="font-bold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                
              </Text>
              <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                <Column className="flex flex-col items-center justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
                    <Text
                      className="flex-grow font-normal mt-[4px] not-italic text-black_900"
                      as="h5"
                      variant="h5"
                    >
                      
                    </Text>
                    
                  </Row>
                  <Line className="bg-black_900_19 h-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]" />
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-normal mt-[4px] not-italic text-black_900"
                      as="h5"
                      variant="h5"
                    >
                      
                    </Text>
                   
                  </Row>
                  <Line className="bg-black_900_19 h-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]" />
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-raleway items-start justify-between w-[100%]">
                      <Text
                        className="flex-grow font-normal mt-[4px] not-italic text-bluegray_900"
                        as="h5"
                        variant="h5"
                      >
                        
                      </Text>
                      
                    </Row>
                    <Text
                      className="font-normal font-rubik leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[14px] md:mt-[18px] mt-[27px] sm:mx-[0] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[97%]"
                      variant="body3"
                    >
                      .
                      
                     
                    </Text>
                  </Column>
                  <Line className="bg-black_900_19 h-[1px] sm:mt-[22px] md:mt-[28px] mt-[42px] w-[100%]" />
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                    <Text
                      className="flex-grow font-normal mt-[4px] not-italic text-black_900"
                      as="h5"
                      variant="h5"
                    >
                      
                    </Text>
                    
                  </Row>
                  <Line className="bg-black_900_19 h-[1px] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]" />
                </Column>
              </Column>
            </Column>
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-bold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                Contact Us
              </Text>
              <Column className="flex flex-col font-poppins justify-start sm:mt-[25px] md:mt-[32px] mt-[47px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pt-[1px] w-[100%]">
                  <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Your Name
                    </Text>
                    <Input
                      className="font-normal font-rubik not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      wrapClassName="md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]"
                      type="text"
                      name="Group173"
                      placeholder="Write your name here...."
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                    <Text
                      className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      variant="body1"
                    >
                      Your Email
                    </Text>
                    <Input
                      className="font-normal font-rubik not-italic p-[0] text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                      wrapClassName="md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]"
                      type="email"
                      name="Group174"
                      placeholder="Write your email here...."
                      size="sm"
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                </Row>
                <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[33px] w-[100%]">
                  <Text
                    className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                  >
                    Your Message
                  </Text>
                  <TextArea
                    className="font-normal font-rubik md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-[14px] placeholder:text-gray_500 text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    name="Group165"
                    placeholder="Write your review here...."
                  ></TextArea>
                </Column>
                <Button
                  className="cursor-pointer font-medium min-w-[25%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  size="xl"
                  variant="OutlineBluegray900"
                >
                  Send
                </Button>
              </Column>
            </Column>
          </Row>
          <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]" />
        </Column>
      </Column>
    </>
  );
};

export default ContactusPage;
