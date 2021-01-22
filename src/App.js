import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import Navbar from "./components/Navbar";
import BottomNav from "./components/BottomNav";
import { Accordion } from "@chakra-ui/react";
import styled from "styled-components";
// import theme from "./theme/";
import "./App.css";

const AppDiv = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .Accordion {
      width: 75%;
      border: none;
      font-family: "Architects Daughter", cursive;
   }
`;

const App = () => {
   // Try to think through what state you'll need for this app before starting. Then build out
   // the state properties here.

   // Fetch characters from the API in an effect hook. Remember, anytime you have a
   // side effect in a component, you want to think about which state and/or props it should
   // sync up with, if any.

   const [data, setData] = useState(null);
   const [page, setPage] = useState(0);

   // load initial 10 pokemon
   useEffect(() => {
      axios
         .get(
            "https://pokeapi.co/api/v2/pokemon?limit=10" +
               "&offset=" +
               page * 10
         )
         .then((res) => {
            setData(res.data);
            // console.log(res.data);
         })
         .catch((err) => console.log("Error occured: " + err));
   }, [page]);

   if (!data) return <div />;
   return (
      <AppDiv className="App">
         <Navbar className="Navbars" />
         <h1 className="Header">Pokemons</h1>
         <Accordion allowToggle className="Accordion">
            {data.results.map((i) => (
               <Character
                  key={i.name}
                  detailURL={i.url}
                  name={i.name}
                  page={page}
               />
            ))}
         </Accordion>

         <BottomNav page={page} setPage={setPage} maxPage={data.count} />
      </AppDiv>
   );
};

export default App;
