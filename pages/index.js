import Head from "next/head";
import { useState } from "react";
import Phone_svg from "../components/phone";
import Screen_svg from "../components/screen";
import styles from "../styles/Home.module.css";
import { animated, useSpring } from "react-spring";
import Carousel from "../components/Carousel.js";

export default function Home() {
  const [scale, setScale] = useState(0);

  const { x } = useSpring({
    from: { x: 0 },
    to: { x: 100 },
    config: { mass: 70, friction: 120, tension: 150 },
    reset: true,
    delay: 1000,
  });
  const fill = x.to((x) => `inset(0 ${100 - x}% 0 0)`);

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: 1 },
    config: { mass: 10, tension: 40, friction: 0 },
    reset: true,
    loop: true,
    delay: 3500,
  });
  const transform = y
    .to({
      range: [0, 1],
      output: [1, 1.3],
    })
    .to((y) => `scale(${y})`);

  const projects = [
    {
      imgSrc:
        "https://will-morris-demo-s3.s3.ap-southeast-2.amazonaws.com/Builderscrack.PNG",
      title: "Builderscrack (2022)",
      description:
        "At Builderscrack as a Junior Software Engineer from March to November 2022, I enhanced system performance and user experience. I implemented effective alerting and monitoring systems for hardware and software and developed a customizable 'My Profile' HTML snippet for users. My work included turning design requirements into functional web pages and components, transitioning to a subscription pricing model, and refactoring code for better maintainability. I also established end-to-end testing to ensure quality and reliability. Overall, my work at Builderscrack demonstrated my commitment to improving system reliability, user engagement, and business efficiency.",
    },
    {
      imgSrc:
        "https://will-morris-demo-s3.s3.ap-southeast-2.amazonaws.com/stockportfolio.png",
      title: "Stock Portfolio Tracker (2020-2021)",
      description:
        "During 2020 and 2021, I developed a Stock Portfolio Tracker React Application, a project that exemplifies my capabilities in crafting intuitive, user-friendly digital solutions. This single-page application, built with React and a Django backend, allowed users to conveniently track their stock portfolios. It featured interactive graphs which effectively visualized portfolio performance and history, enhancing user understanding and interaction. I prioritized UX/UI design in creating these dynamic graphs, ensuring a seamless and engaging user experience. This project highlights my skills in full-stack development, UX/UI design, and my dedication to creating practical, user-centered applications.",
    },
    {
      imgSrc:
        "https://will-morris-demo-s3.s3.ap-southeast-2.amazonaws.com/fb_College_House_Quad.jpg",
      title: "University Canteen Software (2019)",
      description:
        "In 2019, I designed and implemented an innovative Billing, Debt Management and Point of Sale Application for my University Hall of Residence's Canteen. By developing a system that leveraged JavaScript, HTML, Firebase, and CSS, I was able to significantly streamline canteen operations. This application, which ran on a RaspberryPi and incorporated a barcode scanner for a self-checkout system, automated the creation and sending of bills, debt tracking, and purchase history recording. The result was a substantial reduction in admin time and an impressive profit of over $6,000 for the year. This project showcases my ability to devise practical digital solutions that optimize business processes, increase efficiency, and enhance profitability.",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>William Morris Portfolio Site</title>
        <meta name="William Morris Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={`flex-container flex-center section`}>
          <div className="flex-column">
            <div className="flex">
              <div className="flex-item">
                <Screen_svg
                  className={`${styles.mamask_screen} ${styles.screen} ${styles.flex_item}`}
                  colour="rgba(1,1,1,0)"
                ></Screen_svg>
                <Phone_svg
                  id="phone"
                  className={`${styles.mask_phone} ${styles.phone} ${styles.flex_item}`}
                  colour="#42f5b6"
                ></Phone_svg>
              </div>

              <div id="subheading" className="flex-column">
                <h2 className="flex-column subheading">
                  <span className="word-spacing">Innovative</span>
                  <span className="word-spacing">Designs.</span>
                  <span className="word-spacing">Impactful</span>
                  <div>
                    <animated.span
                      className="word-spacing"
                      style={{
                        clipPath: fill,
                        position: "absolute",
                        backgroundColor: "#3340B9",
                        color: "white",
                        zIndex: 1,
                      }}
                    >
                      Results.
                    </animated.span>
                    <span
                      className="word-spacing"
                      style={{ color: "black", zIndex: 0 }}
                    >
                      Results.
                    </span>
                  </div>
                </h2>
              </div>
            </div>

            <div className="flex-column mt-5">
              <h1 className="flex-center m-0">WILL MORRIS</h1>
              <h5 className="flex-center p-0 m-0">
                AWS Solution Architect, Full-stack Engineer
              </h5>
            </div>
            <animated.img
              src="https://will-morris-demo-s3.s3.ap-southeast-2.amazonaws.com/double-arrow-down-2.png"
              style={{
                ...styles,
                transform,
                margin: "0 auto",
                width: "40px",
                height: "auto",
                paddingTop: "3em",
              }}
              alt="Down arrow"
            />
          </div>
        </div>

        <div className="background-blue section">
          <div className="flex-item">
            <Carousel projects={projects} />
          </div>
        </div>
      </main>
    </div>
  );
}
