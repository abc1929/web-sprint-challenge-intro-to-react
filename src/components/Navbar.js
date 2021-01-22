import React from "react";
import { Input } from "@chakra-ui/react";
import styled from "styled-components";

const Navdiv = styled.div`
   padding-top: 5%;

   Input {
      width: 100%;
      min-width: 300px;
      border: none;
      height: 3vh;
      font-size: 1.2rem;
      transition: 0.3s;
      border-radius: 9px;
      text-align: center;

      :hover {
         background-color: #f0f0f0;
         opacity: 0.7;
         transition: 0.3s;
      }
   }
`;

const Navbar = (props) => {
   return (
      <Navdiv>
         <Input placeholder="Search Pokemon" />
         {/* search not yet implemented */}
      </Navdiv>
   );
};

export default Navbar;
