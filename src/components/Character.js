// Write your Character component here

import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import {
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
} from "@chakra-ui/react";
import styled from "styled-components";
import axios from "axios";
import theme from "../theme/";
import { Image } from "@chakra-ui/react";

const CharDiv = styled.div`
   padding: 1%;

   .AccButton {
      border-radius: 12px;
   }

   .AccButton:hover {
      opacity: 0.7;
      cursor: pointer;
   }

   .Box {
      border: none;
      /* background-color: ${theme.myblue}; */
   }

   .AccordionPanel {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
   }
`;

const Character = (props) => {
   const name = props.name;
   const detailURL = props.detailURL;
   const [abilities, setAbilities] = useState([]);
   const [num, setNum] = useState(0);
   const [defaultsprite, setDefaultsprite] = useState("");

   useEffect(
      (e) => {
         axios
            .get(detailURL)
            .then((res) => {
               // console.log(res.data.sprites.front_default);
               setDefaultsprite(res.data.sprites.front_default);
               setAbilities(res.data.abilities);
               // console.log(res);
            })
            .catch((err) => console.log("Error occured: " + err));
      },
      [detailURL]
   );

   // const loadData = () => {};

   return (
      <AccordionItem>
         <CharDiv>
            <AccordionButton
               className="AccButton"
               onClick={() => setNum(num + 1)}
               bg={theme.backcolor}
               _expanded={{ bg: theme.fontcolor, color: theme.backcolor }}
               border="none"
            >
               <Box
                  className="Box"
                  flex="1"
                  textAlign="left"
                  fontFamily="Architects Daughter"
                  fontSize="1.4rem"
                  padding="1%"
               >
                  {name}
               </Box>
               <AccordionIcon w={25} h={25} />
            </AccordionButton>
            <AccordionPanel pb={4} className="AccordionPanel">
               {" "}
               <Image
                  boxSize="150px"
                  objectFit="cover"
                  src={defaultsprite}
                  alt=""
               />
               <div>
                  {" "}
                  {abilities.map((i, j) => (
                     <p key={i + j}>
                        Ability {j + 1} : {i.ability.name}{" "}
                     </p>
                  ))}
               </div>
            </AccordionPanel>
         </CharDiv>
      </AccordionItem>
   );
};

export default Character;
