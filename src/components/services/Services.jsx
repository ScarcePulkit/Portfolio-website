import { useRef } from "react";
import "./services.scss";
import { delay, m, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  visible: (i)=> ({
    opacity: 1,
    transition: { delay: i * 0.2 }
  }),
  hidden: {opacity: 0},
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const items = ["Data Structures and Algorithms", "Database Management Systems", "Computer Networks", "Game Theory & Applications", "Discrete Mathematics", "Theory of Computation"]
  const items2 = ["Object Oriented Programming", "Machine Learning", "Operating Systems","Computer Graphics", "Compiler Construction", "Logic in Computer Science"]
  const internItems = [ 
    "Designed CSV schema and implemented end-to-end file ingestion feature reducing manual data entry time for users by 80%, incorporating error display on the user interface when necessary",
    "Achieved unitest coverage of up to 99%, ensuring comprehensive testing and robust code quality",
    "Collaborated with PMs, Designers, and QA from the Talent Acquisition team to roll out features"
  ]

  const internItems2 = [
    "Designed and integrated an efficient N-grams algorithm for analyzing and measuring similarity between documents" ,
    "Improved plagiarism detection accuracy by 10% compared to traditional methods, validated through rigorous testing on diverse multilingual datasets",
    "Reduced manual verification time by 50% using easy-to-understand visuals, making it faster to spot copied content in documents"
  ]

  return (
    // <motion.div
    //   className="services"
    //   variants={variants}
    //   initial="initial"
    //   // animate="animate"
    //   // whileInView="animate"
    //   ref={ref}
    //   animate={"animate"}
    // >
    //   <motion.div className="textContainer" variants={variants}>
    //     <p>
    //       I focus on helping your brand grow
    //       <br /> and move forward
    //     </p>
    //     <hr />
    //   </motion.div>
    //   <motion.div className="titleContainer" variants={variants}>
    //     <div className="title">
    //       <img src="/people.webp" alt="" />
    //       <h1>
    //         <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
    //       </h1>
    //     </div>
    //     <div className="title">
    //       <h1>
    //         <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
    //       </h1>
    //       <button>WHAT WE DO?</button>
    //     </div>
    //   </motion.div>
    //   <motion.div className="listContainer" variants={variants}>
    //     <motion.div
    //       className="box"
    //       whileHover={{ background: "lightgray", color: "black" }}
    //     >
    //       <h2>Branding</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //         libero enim nisi aliquam consectetur expedita magni eius ex corrupti
    //         animi! Ad nam pariatur assumenda quae mollitia libero repellat
    //         explicabo maiores?
    //       </p>
    //       <button>Go</button>
    //     </motion.div>
    //     <motion.div
    //       className="box"
    //       whileHover={{ background: "lightgray", color: "black" }}
    //     >
    //       <h2>Branding</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //         libero enim nisi aliquam consectetur expedita magni eius ex corrupti
    //         animi! Ad nam pariatur assumenda quae mollitia libero repellat
    //         explicabo maiores?
    //       </p>
    //       <button>Go</button>
    //     </motion.div>
    //     <motion.div
    //       className="box"
    //       whileHover={{ background: "lightgray", color: "black" }}
    //     >
    //       <h2>Branding</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //         libero enim nisi aliquam consectetur expedita magni eius ex corrupti
    //         animi! Ad nam pariatur assumenda quae mollitia libero repellat
    //         explicabo maiores?
    //       </p>
    //       <button>Go</button>
    //     </motion.div>
    //     <motion.div
    //       className="box"
    //       whileHover={{ background: "lightgray", color: "black" }}
    //     >
    //       <h2>Branding</h2>
    //       <p>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    //         libero enim nisi aliquam consectetur expedita magni eius ex corrupti
    //         animi! Ad nam pariatur assumenda quae mollitia libero repellat
    //         explicabo maiores?
    //       </p>
    //       <button>Go</button>
    //     </motion.div>
    //   </motion.div>
    // </motion.div>


    // <motion.div className="services">
    //   <motion.div>
    //     <motion.h1 className="textContainer" >Education, Courses & Skills </motion.h1>
    //   </motion.div>
    //   <motion.div>
    //     <motion.h1 className="textContainer" >Experience</motion.h1>
    //   </motion.div>
    // </motion.div>



    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      {/* <motion.div className="outerBox">  */}
        {/* <motion.div className="titleContainer" variants={variants}> */}
        {/* <motion.div variants={variants}> */}
          {/* <div className="title"> */}
            {/* <img src="/people.webp" alt="" /> */}
            {/* <h2>
              <motion.b whileHover={{color:"orange"}}>Education, Courses & Skills </motion.b>
            </h2> */}
          {/* </div> */}
          {/* <div className="title"> */}
            {/* <h2>
              <motion.b whileHover={{color:"orange"}}>Experience</motion.b>
            </h2> */}
            {/* <button>WHAT WE DO?</button> */}
          {/* </div> */}
        {/* </motion.div> */}
      {/* </motion.div> */}
      {/* <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div> */}
      <motion.div className="flex-container">
        <motion.div className="main-block">
          <motion.h1 className="title">Education</motion.h1>
          <br/>
          {/* Content about College */}
          <motion.div>
            <motion.h2 whileHover={{color:"orange"}}>Birla Institute of Technology and Science, Pilani</motion.h2>
            <motion.h4 className="timeline">2020 - 2024</motion.h4>
            <motion.div className="innerDiv">
              <p><em>B.E Computer Science, Minor in Computational Economics</em></p>
              <p>CGPA: 9.01/10</p>
            </motion.div>
            <br/>
            <h3>Courses</h3>
            <motion.div className="courses">
              {/* <motion.div> */}
                <motion.ul initial="hidden" animate="visible" variants={variants}>
                  {items.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              {/* </motion.div> */}
              {/* <motion.div> */}
                <motion.ul initial="hidden" animate="visible" variants={variants}>
                  {items2.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              {/* </motion.div> */}
            </motion.div>
          </motion.div>
          <br/>
          <br/>
          {/* Content about School */}
          <motion.div>
            <motion.h2 whileHover={{color:"orange"}}>Jaipur School</motion.h2>
            <motion.h4 className="timeline">2017 - 2019</motion.h4>
            <motion.div className="innerDiv">
              <p><em>CBSE, Class XII</em></p>
              <p>Percentage: 92.2%</p>
            </motion.div>
          </motion.div>

          <br/>
          <br/>
          {/* Content about School */}
          <motion.div>
            <motion.h2 whileHover={{color:"orange"}}>Children's Academy</motion.h2>
            <motion.h4 className="timeline">2015 - 2017</motion.h4>
            <motion.div className="innerDiv">
              <p><em>ICSE, Class X</em></p>
              <p>Percentage: 89.4%</p>
            </motion.div>
          </motion.div>
        </motion.div>


        <motion.div className="main-block">
          <motion.h1 className="title">Experience</motion.h1>
          <br/>
          {/* Content about Eightfold Intern */}
          <motion.div>
            <motion.h2 whileHover={{color:"orange"}}>Eightfold AI</motion.h2>
            <motion.h4 className="timeline">Jan 2024 - July 2024</motion.h4>
            <motion.div className="innerDiv">
              <p><em>Engineering Intern</em></p>
            </motion.div>
        
            <motion.div className="responsibilites">
              {/* <motion.div> */}
                <motion.ul initial="hidden" animate="visible" variants={variants} className="temp">
                  {internItems.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
            </motion.div>
          </motion.div>
          <br/>
          <br/>
          {/* Content about IGCAR Intern */}
          <motion.div>
            <motion.h2 whileHover={{color:"orange"}}>Indira Gandhi Center for Atomic Research</motion.h2>
            <motion.h4 className="timeline">May 2022 - July 2022</motion.h4>
            <motion.div className="innerDiv">
              <p><em>Research Intern</em></p>
            </motion.div>
            <motion.div className="responsibilites">
              {/* <motion.div> */}
                <motion.ul initial="hidden" animate="visible" variants={variants} className="temp">
                  {internItems2.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i} className="listClass">
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              {/* </motion.div> */}
              {/* <motion.div> */}
                {/* <motion.ul initial="hidden" animate="visible" variants={variants}>
                  {items2.map((item,i) => (
                    <motion.li variants={variants} key={item} custom={i}>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul> */}
              {/* </motion.div> */}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
