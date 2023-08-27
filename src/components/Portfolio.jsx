import React from "react";
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const Portfolio = () => {
  return (
    <div className="w-full md:mb-[70px]" id="project">
      <div className="container mx-auto mt-6">
        <div className="div"></div>
        <div>
          <h1 className="font-bold text-3xl text-center mt-6 color">
            Portfolio
          </h1>
          <div className="px-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-4 mt-4">
            <Card className="w-full  flex-col p-4 ">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0  shrink-0 rounded-r-none w-full">
                <img
                  src={image1}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4">
                <Typography className="text-[15px] text-blue-gray-800 font-semibold mb-2">
                  E-COMMERCE WEBSITE
                </Typography>
                <Typography color="blue-gray" className="mb-2 text-xs">
                  Project Overview: For this project, I wanted to showcase my
                  skills in web development and design by creating a stunning
                  portfolio website using modern technologies. I chose to use
                  React.js for its component-based architecture and dynamic
                  capabilities, along with Tailwind CSS to ensure a seamless and
                  visually appealing design.
                </Typography>

                <a
                  href="https://ecommerce-puce-two-58.vercel.app/"
                  className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
            {/* project2 */}
            <Card className="w-full  flex-col p-4 ">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 shrink-0 rounded-r-none w-full">
                <img
                  src={image2}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="p-4">
                <Typography className="text-[15px] text-blue-gray-800 font-semibold mb-2">
                  SOCIAL MEDIA WEBSITE
                </Typography>
                <Typography color="blue-gray" className="mb-2 text-xs">
                  Project Overview: In this endeavor, I set out to create a
                  social media website using React and Tailwind CSS. React,
                  known for its flexibility and efficiency, was my natural
                  choice to build a seamless and organized platform. To ensure a
                  user-friendly experience across all devices, I harnessed the
                  power of Tailwind CSS for responsive design. The combination
                  of React and Tailwind allowed me to bring my vision to life in
                  an engaging and accessible way.
                </Typography>

                <a
                  href="https://social-three-coral.vercel.app/login"
                  className="inline-block">
                  <Button variant="text" className="flex items-center gap-2">
                    View
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
