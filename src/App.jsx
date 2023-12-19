
import React from "react";
import GuideSection from "./components/GuideSection";
import CardSection from "./components/CardSection";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";
import Article from './components/Article'
const App = () => { 
  return (

    <div>
      <Section1 />
      <GuideSection />
      <CardSection />
       <Article/>
      <Footer/>
    </div>
  );
};


export default App;
