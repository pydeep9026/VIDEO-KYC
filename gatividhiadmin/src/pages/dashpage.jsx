import React, { useState } from "react";
import Header from "../components/header/header";
import {brandData} from "../data/global/branddata"
import { menuData, btnData } from "../data/global/menudata";
import Navmenu from "../components/navmenu/navmenu";



const Dashpage = () => {
  
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  console.log(selectedOption);



  return (
    <>
      <Header
        brandData={brandData}
        menuData={menuData}
        btnData={btnData}
      /> 
      <Navmenu handleOptionChange={handleOptionChange} />
      selectedOption: {selectedOption}
    </>
  )
}

export default Dashpage;