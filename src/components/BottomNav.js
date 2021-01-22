import React from "react";
import { Button } from "@chakra-ui/react";
import styled from "styled-components";
import {
   ArrowLeftIcon,
   ArrowRightIcon,
   ArrowForwardIcon,
   ArrowBackIcon,
} from "@chakra-ui/icons";

const BottomNavDiv = styled.div`
   margin-top: 5%;

   Button {
      background-color: rgba(255, 255, 255, 0);
      border: none;
   }
   Button:hover {
      opacity: 0.6;
      cursor: pointer;
   }

   Button:active {
      opacity: 1;
      transform: translateY(4px);
   }
`;

const BottomNav = (props) => {
   const setPage = props.setPage;
   const page = props.page;
   const maxpage = props.maxPage;

   const Pages = () => {
      // ideal page bar: tbd
      // page at lower limit:
      // 1, 2, 3 page-1 page page+1 ... max(page+5,max)
      // main case:    min(page-5,0) ... page-1 page page+1 ... max(page+5,max)
      // if page is within 5 of max. display
      // min(page-5,0) ... page-1 page page+1 page+2 page+3 page+4 max

      // if (page < 5) {
      //    console.log("wtf");
      //    return [...Array(page + 1).fill(0)].map((i, j) => <a> {j + 1} </a>);
      // }

      // if (page + 5 > props.maxpage) {
      //    return [...Array(props.maxpage - page + 1).fill(0)].map((i, j) => (
      //       <a> {page + j} </a>
      //    ));
      // }

      // currently just display current page
      return (
         <a href="/#" style={{ textDecoration: "none" }}>
            {" "}
            {page + 1}{" "}
         </a>
      );
   };

   return (
      <BottomNavDiv>
         <Button
            leftIcon={<ArrowLeftIcon w={21} h={21} />}
            onClick={() => {
               setPage(page - 10 > 0 ? page - 10 : 0);
            }}
         />
         <Button
            leftIcon={<ArrowBackIcon w={25} h={25} />}
            onClick={() => {
               setPage(page - 1 > 0 ? page - 1 : 0);
            }}
         />
         <Pages />
         <Button
            rightIcon={<ArrowForwardIcon w={25} h={25} />}
            onClick={() => {
               setPage(page + 1 <= maxpage ? page + 1 : maxpage);
            }}
         />
         <Button
            rightIcon={<ArrowRightIcon w={21} h={21} />}
            onClick={() => {
               setPage(page + 10 <= maxpage ? page + 10 : maxpage);
            }}
         />
      </BottomNavDiv>
   );
};

export default BottomNav;
