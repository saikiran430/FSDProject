import React from "react";
import { Link } from "react-bootstrap-icons";
import { Column, Line, Row, Text, Img } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Line className="bg-bluegray_900 h-[5px] w-[100%]" />
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap sm:p-[15px] md:p-[22px] p-[33px] w-[100%] common-row-list common-row-list common-row-list">
            <ul className="flex flex-row">
              <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                <a
                  href={"javascript:"}
                  className="cursor-pointer hover:font-bold font-bold font-raleway sm:text-[28px] md:text-[30px] text-[32px] text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                  rel="noreferrer"
                >
                  <Img
                    src="images/Vintage Restyled Logo.png"
                    className="max-w-[545px] mx-[auto] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[15px] w-[100%]"
                    alt="nathanoakleyO"
                    style={{ width: '180px'}}
                  />
                </a>
              </li>
              <li className="w-[29%] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] flex-row flex">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                    <a
                      href={"/"}
                      className="btn btn-mute cursor-pointer flex-grow font-normal font-rubik mt-[3px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1"
                      variant="body1"
                      rel="noreferrer"
                      style={{ width: '180px' }}
                    >
                      Home
                    </a>

                  </Row>
                  <a
                    href={"aboutus"}
                    className="btn btn-mute cursor-pointer font-normal font-rubik sm:ml-[26px] md:ml-[34px] ml-[50px] mt-[4px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                    rel="noreferrer"
                    style={{ width: '100px' }}
                  >
                    About Us
                  </a>
                  <a
                    href={"contactus"}
                    className="btn btn-gray cursor-pointer font-normal font-rubik sm:ml-[28px] md:ml-[36px] ml-[53px] mt-[4px] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    variant="body1"
                    rel="noreferrer"
                    style={{ width: '150px' }}
                  >
                    Contact Us
                  </a>
                  <a
                    href={"/AdminLoginForm"}
                    className="cursor-pointer font-normal font-rubik
                     sm:ml-[28px] md:ml-[36px]
                      ml-[53px] mt-[4px] not-italic 
                      text-black_900 tracking-ls05
                       md:tracking-ls1 sm:tracking-ls1 w-[auto] btn btn-danger"
                    variant="body1"
                    rel="noreferrer"
                    style={{ width: '200px' }}
                  >
                    Admin Dashboard
                  </a>

                  
                </Row>
              </li>
              

            </ul>
          </Row>
          
        </Column>
      </header>
    </>
  );
};

export default Header;
