import React from 'react';
import profile from "../assets/images/About/profile.png";
import '../assets/css/about.css';
import r1 from "../assets/images/About/resume1.png";
import r2 from "../assets/images/About/resume2.png";

import Footer from "../components/Footer.js";
import FadeIn from 'react-fade-in';

import Error from "../components/Error.js";



const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () =>(
    <>
    <Error />
    </>);


const DesktopComponent = () => (
<>
    <div id = "everything" >
        <FadeIn>
        <div>
            <h1 class = "visual-arts">ABOUT ME</h1>
        </div>

        <img src = {profile} id = "profile"/>

        <div id = "arectangle" />

        <h2 id = "resumetitle"> RESUME </h2> 

        <h4 id = "hi"> Hi there!</h4>
        <h4 id = "imkelly"> I'm Kelly</h4>

        <h5 id = "engineering">I'm an engineering student at the University of California, Berkeley. 
            I study Bioengineering and Electrical Engineering/ Computer Science.</h5>


        <div id = "organize">
        <li class = "listing">I am seeking Summer 2021 internship opportunities to learn more about the intersection 
            of software engineering, product design, and consulting. I love challenging myself, problem-solving, and working in teams​​!</li>
    
        <li class = "listing">I just finished up a sustainability-based product development project with Patagonia to better integrate 
            technology into retail. Also, I am currently working on improving this website with Reactjs, Javascript, and CSS! </li>

        <li class = "listing">In my free time, you can find me tinkering away in Berkeley’s Innovation Lab, drawing, painting, or going on adventures!</li>

        </div>
        
        <img src = {r1} id = "resume1"/>
        <img src = {r2} id = "resume2"/>
        </FadeIn>

        <div id = "foot-about">
            <Footer/>
        </div>
    </div>

    </>

);


const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 750;
  
    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
  };
  
  export default function About() {
    return (
      <ViewportProvider>
        <MyComponent />
      </ViewportProvider>
    );
  }



