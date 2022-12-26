import React from "react";

import { Column, Row, Text, Img } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <Column className="flex flex-col items-center justify-start sm:mb-[28px] md:mb-[37px] mb-[54px] sm:mt-[26px] md:mt-[34px] mt-[50px] mx-[auto] sm:w-[100%] w-[90%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly pt-[2px] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
              <Text
                className="font-raleway font-semibold text-gray_51 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                <Img
                  src="images/Vintage Restyled Logo.png"
                  className="max-w-[545px] mx-[auto] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[15px] w-[100%]"
                  alt="nathanoakleyO"
                  style={{ width: '110px', float: 'left' }}
                />
              </Text>
              <Text
                className="font-rubik leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] not-italic text-gray_50_a3 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[70%]"
                variant="body2"
              >
               
              </Text>
            </Column>
            <Column className="flex flex-col justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
              <Text
                className="font-raleway font-semibold text-gray_51 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
                Quick Link
              </Text>
              <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%] common-column-list common-column-list common-column-list">
                <ul className="flex flex-col">
                  <li className="w-[auto]">
                    <a
                      href={"/"}
                      className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      href={"aboutus"}
                      className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="w-[auto]">
                    <a
                      href={"contactus"}
                      className="cursor-pointer font-normal font-rubik not-italic text-[14px] text-gray_50_a3 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Contact Us
                    </a>
                  </li>

                </ul>
              </Column>
            </Column>

            <Column className="flex flex-col justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[18%]">
              <Text
                className="font-raleway font-semibold text-gray_51 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow Us
              </Text>
              <Img
                src="images/img_sosmed.svg"
                className="max-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]"
                alt="Sosmed"
              />
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[102px] mt-[149px] sm:mt-[79px] pt-[1px] sm:px-[0] w-[100%]">
            <Text
              className="font-rubik mt-[2px] not-italic text-gray_50_a3 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              variant="body2"
            >
              © Copyright 2022 Vintage Restyled. All Rights Reserved.
            </Text>

          </Row>
        </Column>
      </footer>
    </>
  );
};

export default Footer;
