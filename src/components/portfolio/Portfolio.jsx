import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Cross Langauage Plagiarism Detection",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "An efficient N-grams algorithm was designed and integrated to analyze and measure similarity between documents, significantly improving plagiarism detection accuracy by 10% compared to traditional methods. This enhancement was validated through rigorous testing on diverse multilingual datasets. Additionally, manual verification time was reduced by 50% by incorporating easy-to-understand visuals, making it faster and more intuitive to identify copied content in documents.",
    github_link: "https://github.com/ScarcePulkit/Cross-Lang-Plag-Detection",
  },
  {
    id: 2,
    title: "3D Visualisation of Hostel Room",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Led the development of a detailed project in OpenGL, focused on rendering a hostel room with over 15 props, showcasing solid-colored rendering without textures. Computational geometry techniques were executed to ensure precise prop placement, and Phong rendering was seamlessly integrated to simulate lifelike light effects. Proficiency in computational geometry and camera manipulation techniques, including panning, zooming, and rolling, was demonstrated, enhancing user interaction and facilitating immersive scene exploration.",
    github_link: "https://github.com/ScarcePulkit/Hostel-Room-3D",
  },
  {
    id: 3,
    title: "Decomposition of Polygon into Convex Parts",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "The implementation of a DCEL (Doubly-Connected Edge List) efficiently represented and stored decomposed convex polygons, enabling rapid access to polygon data and facilitating geometric computations. Visualizations were rendered, and coordinates for each decomposed polygon were sequentially mapped. Code organization was improved by dividing core functionality into multiple files, ensuring easier maintenance and reuse.",
    github_link: "https://github.com/ScarcePulkit/Decomposition-of-arbitrary-polygon",
  },
  {
    id: 4,
    title: "Gym Management System",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Forayed into web development by contributing to a full-stack web application as part of a DBMS course. Implemented role-based authentication and gained experience in backend design. Facilitated seamless collaboration between frontend and backend teams while gaining hands-on experience with project lifecycle management using Git and GitHub.",
    github_link: "https://github.com/ScarcePulkit/Gym_Management_System"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.github_link}>Github link</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
