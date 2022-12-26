import React from "react";
import { Link } from "react-router-dom";
import {
  Column,
  Row,
  Text,
  Button,
  Img,
  List,
  Grid,
  PagerIndicator,
  Stack,
  Line,
  Input,
} from "components";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";

const HomepagePage = () => {
 
  return (
    <>
      <Column className="bg-gray_50 flex flex-col font-raleway items-center justify-start mx-[auto] w-[100%]">
        <Header className="w-[100%]" />
        <Row className="bg-orange_50 flex flex-row md:flex-wrap sm:flex-wrap font-rubik items-center sm:p-[15px] md:p-[51px] p-[75px] w-[100%]">
          <Column className="flex flex-col max-w-[745px] sm:mx-[0] mx-[auto] pr-[1px] pt-[1px] sm:px-[15px] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:pb-[3px] md:pb-[4px] pb-[6px] md:pr-[4px] pr-[6px] sm:px-[0] sm:w-[100%] w-[86%]">
              <Text
                className="font-normal font-rubik not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h6"
                variant="h6"
              >
               Finest Refurbished Furniture 
              </Text>
              <Text
                className="font-normal font-pollerone leading-[60.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] not-italic text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[95%]"
                as="h2"
                variant="h2"
              >
                <span className="text-black_900 text-[40px] font-raleway font-bold sm:text-[21px] md:text-[27px]">
                  Various{" "}
                </span>
                <span className="text-bluegray_900 text-[40px] font-raleway font-bold sm:text-[21px] md:text-[27px]">
                  new collections
                </span>
                <span className="text-black_900 text-[40px] font-raleway font-bold sm:text-[21px] md:text-[27px]">
                  {" "}
                  of furniture to explore and purchase
                </span>
              </Text>
            </Column>
           
            <Link exact to="/Register"> <Button
              className="cursor-pointer font-medium min-w-[30%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[20px] text-center text-yellow_100 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
              size="2xl"
              variant="OutlineBluegray900"
            >
              Shop Now
            </Button></Link>
            
          </Column>
          <Img
            src="images/img_nathanoakleyo.png"
            className="max-w-[545px] mx-[auto] sm:my-[2px] md:my-[3px] my-[5px] sm:px-[15px] w-[100%]"
            alt="nathanoakleyO"
          />
        </Row>
        <Column className="bg-black_900 flex flex-col font-rubik items-center justify-end sm:p-[15px] md:p-[28px] p-[41px] w-[100%]">
          <Text
            className="font-normal mt-[4px] not-italic text-gray_51 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
            as="h6"
            variant="h6"
          >
            Shaping the future of trade 
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1093px] sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] mx-[auto] sm:px-[15px] w-[100%]">
            
             {/* //src="images/img_search.svg"
              //className="max-w-[100%] mt-[4px] w-[21%]"
              //alt="search"
            
            
              //src="images/img_vector_27X124.svg"
              //className="max-w-[100%] sm:ml-[27px] md:ml-[35px] ml-[51px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[12%]"
              //alt="Vector"
            
            
              //src="images/img_vector.svg"
              //className="max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] w-[9%]"
              //alt="Vector One"
            
            
              //src="images/img_vector_24X141.svg"
              //className="max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[6px] w-[13%]"
              //alt="Vector Two"
          
            
              //src="images/img_vector_29X133.svg"
              //className="max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[13%]"
              //alt="Vector Three"
          
            
              //src="images/img_vector_32X131.svg"
              //className="max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] mt-[2px] w-[12%]"
              //alt="Vector Four"
           */}
          </Row>
        </Column>
        <List
          className="font-rubik sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 max-w-[1290px] min-h-[auto] sm:mt-[42px] md:mt-[55px] mt-[80px] mx-[auto] sm:px-[15px] w-[100%]"
          orientation="horizontal"
        >
          <Row className="bg-gradient  flex flex-row md:flex-wrap sm:flex-wrap items-start md:p-[16px] p-[24px] sm:px-[15px] sm:py-[12px] w-[100%]">
            <Column className="flex flex-col justify-start md:ml-[4px] ml-[6px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                <Text
                  className="font-normal font-rubik not-italic text- tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Living Room
                </Text>
                <Text
                  className="font-raleway leading-[normal] sm:mt-[19px] md:mt-[25px] mt-[37px] text-dark tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                  as="h3"
                  variant="h3"
                >
                  Variety of revised chairs
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-medium min-w-[42%] sm:mt-[12px] md:mt-[15px] mt-[23px] text-[16px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                size="xl"
                variant="OutlineGray50"
              >
                Shop Now
              </Button>
            </Column>
            <Img
              src="images/img_sammoghadamkh.png"
              className="max-w-[100%] mb-[1px] w-[31%]"
              alt="sammoghadamkh"
            />
          </Row>
          <Row className="bg-gradient  flex flex-row md:flex-wrap sm:flex-wrap items-end sm:pb-[15px] md:pb-[20px] pb-[30px] sm:px-[15px] md:px-[20px] px-[30px] w-[100%]">
            <Column className="flex flex-col justify-start sm:mb-[40px] md:mb-[52px] mb-[76px] sm:mt-[20px] md:mt-[26px] mt-[38px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                <Text
                  className="font-normal font-rubik not-italic text-dark tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  Living Room
                </Text>
                <Text
                  className="font-raleway sm:mt-[20px] md:mt-[26px] mt-[38px] text-dark tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Redefined model chandelier
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-medium min-w-[42%] sm:mt-[15px] md:mt-[20px] mt-[30px] text-[16px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                size="xl"
                variant="OutlineGray50"
              >
                Shop Now
              </Button>
            </Column>
            <Img
              src="images/img_phildesforges.png"
              className="max-w-[100%] sm:mb-[40px] md:mb-[52px] mb-[76px] w-[34%]"
              alt="phildesforges"
            />
          </Row>
        </List>
        <Column className="flex flex-col font-rubik items-center justify-start max-w-[1289px] mt-[100px] sm:mt-[53px] md:mt-[68px] mx-[auto] pt-[3px] sm:px-[15px] w-[100%]">
          <video width="auto" height="500" controls autoPlay={true}>
            <source src="images/video_20221203_181741_edit.mp4" type="video/mp4" />
          </video>
        </Column>
        <Stack className="font-rubik h-[535px] mt-[100px] sm:mt-[53px] md:mt-[68px] relative w-[100%]">
          <Column className="absolute bg-yellow_100 bottom-[0] flex flex-col justify-end sm:p-[15px] md:p-[42px] p-[62px] w-[100%]">
            <Column className="flex flex-col justify-start ml-[13px] md:ml-[8px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
              <Text
                className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h5"
                variant="h5"
              >
                Redefining trends
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
        <Column className="flex flex-col font-raleway items-center justify-end max-w-[1289px] mt-[100px] sm:mt-[53px] md:mt-[68px] mx-[auto] sm:px-[15px] py-[2px] w-[100%]">
          <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
              <Text
                className="font-bold mb-[3px] text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                New Arrival
              </Text>
              <Text
                className="font-bold mt-[3px] text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                
              </Text>
              <Text
                className="font-bold mb-[3px] text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                as="h4"
                variant="h4"
              >
                
              </Text>
            </Row>
            <div className="bg-bluegray_900 sm:h-[5px] md:h-[7px] h-[9px] sm:mt-[3px] md:mt-[4px] mt-[7px] w-[32%]"></div>
          </Column>
          <Grid className="font-rubik sm:gap-[10px] md:gap-[13px] gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group695.png')" }}
              >
                <Column className="flex flex-col justify-start md:ml-[157px] ml-[229px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                  <Button
                    className="cursor-pointer font-normal min-w-[98%] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                    variant="FillRedA200"
                  >
                    New
                  </Button>
                  <Img
                    src="images/img_lightbulb.svg"
                    className="max-w-[100%] ml-[3px] mt-[106px] sm:mt-[56px] md:mt-[72px] sm:w-[100%] w-[94%]"
                    alt="lightbulb One"
                  />
                </Column>
                <Button
                  className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[51px] md:mt-[66px] mt-[97px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  size="md"
                >
                  Living Room
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Teak wood chair
                </Text>
                <Text
                  className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  $24
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group704.png')" }}
              >
                <Button
                  className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  variant="FillRedA200"
                >
                  New
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  size="md"
                >
                  Living Room
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Teak wood chair
                </Text>
                <Text
                  className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  $24
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group706.png')" }}
              >
                <Button
                  className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  variant="FillRedA200"
                >
                  New
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  size="md"
                >
                  Living Room
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Teak wood chair
                </Text>
                <Text
                  className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  variant="body1"
                >
                  $24
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group705.png')" }}
              >
                <Button
                  className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  variant="FillRedA200"
                >
                  New
                </Button>
                <Button
                  className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  size="md"
                >
                  Living Room
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Teak wood chair
                </Text>
                <Text
                  //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //variant="body1"
                >
                 23$
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                //className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                //style={{ backgroundImage: "url('images/img_group708.png')" }}
              >
                <Button
                  //className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //variant="FillRedA200"
                >
                  
                </Button>
                <Button
                  //className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //size="md"
                >
             
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  //className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //as="h6"
                  //variant="h6"
                >
              
                </Text>
                <Text
                  //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //variant="body1"
                >
                  
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                //className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                //style={{ backgroundImage: "url('images/img_group707.png')" }}
              >
                <Button
                  //className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //variant="FillRedA200"
                >
                  
                </Button>
                <Button
                  //className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //size="md"
                >
                 
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  //className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //as="h6"
                  //variant="h6"
                >
                  
                </Text>
                <Text
                  //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //variant="body1"
                >
                  
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                //className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                //style={{ backgroundImage: "url('images/img_group710.png')" }}
              >
                <Button
                  //className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //variant="FillRedA200"
                >
                
                </Button>
                <Button
                  //className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //size="md"
                >
                  
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  //className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //as="h6"
                  //variant="h6"
                >
                  
                </Text>
                <Text
                  //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //variant="body1"
                >
                
                </Text>
              </Row>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
              <Column
                //className="bg-cover bg-no-repeat flex flex-col justify-end md:p-[12px] sm:p-[15px] p-[18px] w-[100%]"
                //style={{ backgroundImage: "url('images/img_group709.png')" }}
              >
                <Button
                  //className="cursor-pointer font-normal min-w-[16%] sm:ml-[121px] md:ml-[157px] ml-[229px] mr-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-center tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //variant="FillRedA200"
                >
                  
                </Button>
                <Button
                  //className="cursor-pointer font-normal min-w-[40%] md:mr-[113px] mr-[165px] sm:mr-[87px] sm:mt-[161px] md:mt-[208px] mt-[303px] not-italic text-[14px] text-center text-white_A700 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  //size="md"
                >
                  
                </Button>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                <Text
                  //className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //as="h6"
                  //variant="h6"
                >
                  
                </Text>
                <Text
                  //className="font-normal font-rubik not-italic text-bluegray_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  //variant="body1"
                >
                  
                </Text>
              </Row>
            </Column>
          </Grid>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-raleway items-center max-w-[1290px] mt-[100px] sm:mt-[53px] md:mt-[68px] mx-[auto] sm:px-[15px] w-[100%]">
          <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
            <Text
              className="font-bold leading-[60.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[78%]"
              as="h2"
              variant="h2"
            >
              We guarantee the safety of your shopping
            </Text>
            <Grid className="sm:gap-[26px] md:gap-[34px] gap-[50px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:w-[100%] w-[88%]">
              <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] md:pr-[3px] pr-[5px] sm:px-[0] w-[100%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbFillGray51"
                >
                  <Img
                    src="images/img_reply.svg"
                    className="h-[30px] sm:h-[16px] md:h-[21px] flex items-center justify-center"
                    alt="reply"
                  />
                </Button>
                <Column className="flex flex-col justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Fast Shipping
                  </Text>
                  <Text
                    className="font-normal font-rubik leading-[25.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body3"
                  >
                   Effecient shipping speeds compared to standard shipping options
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] md:pr-[3px] pr-[5px] sm:px-[0] w-[100%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbFillGray51"
                >
                  <Img
                    src="images/img_lock.svg"
                    className="h-[30px] sm:h-[16px] md:h-[21px] flex items-center justify-center"
                    alt="lock"
                  />
                </Button>
                <Column className="flex flex-col justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Safe Delivery
                  </Text>
                  <Text
                    className="font-normal font-rubik leading-[25.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body3"
                  >
                    These certified employees ensure the items are properly collected on the docks, and monitor each stage of the delivery process right up until the end customer's front door.
                    
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] md:pr-[3px] pr-[5px] sm:px-[0] w-[100%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbFillGray51"
                >
                  <Img
                    src="images/img_search_60X60.svg"
                    className="h-[30px] sm:h-[16px] md:h-[21px] flex items-center justify-center"
                    alt="search One"
                  />
                </Button>
                <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Easy Purchase and Sell Policy
                  </Text>
                  <Text
                    className="font-normal font-rubik leading-[25.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body3"
                  >
                    Variety of items accessible and available to view and purchase
                  </Text>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] md:pr-[3px] pr-[5px] sm:px-[0] w-[100%]">
                <Button
                  className="flex sm:h-[32px] md:h-[42px] h-[60px] items-center justify-center rounded-radius50 sm:w-[31px] md:w-[41px] w-[60px]"
                  size="smIcn"
                  variant="icbFillGray51"
                >
                  <Img
                    src="images/img_call.svg"
                    className="h-[30px] sm:h-[16px] md:h-[21px] flex items-center justify-center"
                    alt="call"
                  />
                </Button>
                <Column className="flex flex-col justify-start sm:mt-[22px] md:mt-[29px] mt-[43px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-raleway font-semibold text-black_900 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Trusted Products 
                  </Text>
                  <Text
                    className="font-normal font-rubik leading-[25.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-gray_500 tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                    variant="body3"
                  >
                    All the products displayed are reviewed by our experts
                  </Text>
                </Column>
              </Column>
            </Grid>
          </Column>
          <Img
            src="images/img_rectangle16.png"
            className="max-w-[100%] sm:w-[100%] w-[50%]"
            alt="RectangleSixteen"
          />
        </Row>
        <Footer className="bg-black_900 font-raleway mt-[129px] sm:mt-[68px] md:mt-[88px] w-[100%]" />
      </Column>
    </>
  );
};

export default HomepagePage;
