import React, { useEffect } from "react";
import Home from "./Home";
import Quizpage from "./quizpage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";





function App() {

const [data,setData]= React.useState();

const api =
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";

  

  function getData(){
    axios.get(api).then((res) => {
      const data = res.data.results;
      setData(data);
    })
  }

  
  useEffect(()=>{
    getData();
  },[]

  )
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="quizpage" element={<Quizpage data={data}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
