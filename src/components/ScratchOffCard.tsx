import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import ScratchCard from "react-scratchcard-v2";
import CoverImage from '../img/scratch-off-bg.jpg';
import Cherry from "../img/cherry.png";
import { Button } from "@mui/material";

const ScratchOffCard = () => {
  return (
    <>
      <br />
      {/* <h1 style={{ 
      margin: "auto", 
      textAlign: "center", 
      color:"white"
       }}>NFTX</h1> */}
      <div style={{
        textShadow: "none",
        margin: "auto",
        display: "table",
        backgroundColor: "black",
        border: "2px solid gold",
        paddingTop: "20px",
        boxShadow: "5px 5px 5px 5px",
        paddingRight: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px"
      }} >
        <br />
        <img src="https://see.fontimg.com/api/renderfont4/DO3oE/eyJyIjoiZnMiLCJoIjo2NCwidyI6MjAwMCwiZnMiOjMyLCJmZ2MiOiIjRDE5RDFFIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TkZUWA/quicksilver-fast-regular.png" alt="sss" />
        <h4 style={{color: "white"}}>Winning Symbols</h4>
        <Box style={{ 
          display: "flex", 
          border: "0.25em solid goldenrod", 
          width: "fit-content",
          backgroundColor: "goldenrod"
           }}>
          <ScratchCard
            width={50}
            height={50}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "0.25em" }} />
          <ScratchCard
            width={50}
            height={50}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "0.25em" }} />
          <ScratchCard
            width={50}
            height={50}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "0.25em" }} />
          <ScratchCard
            width={50}
            height={50}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>

        </Box>
        {/* <ScratchCard
            width={175}
            height={175}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard> */}
       
        {/* _____________ */}
        <h4 style={{color: "white"}}>Your Symbols</h4>
        <Box style={{ display: "flex" }}>
          <div style={{border: "0.25em solid goldenrod"}}>
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          </div>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>

        </Box>
        <br />
        <Box style={{ display: "flex" }}>
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>

        </Box>
        <br />
        <Box style={{ display: "flex" }}>
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>
          <span style={{ marginRight: "1em" }} />
          <ScratchCard
            width={100}
            height={100}
            image={CoverImage}
            finishPercent={99}
            onComplete={() => alert('complete')}
          >
            <img src={Cherry} alt="cherry" style={{ display: "block", height: "inherit", margin: "auto" }} />
          </ScratchCard>

        </Box>
        <br />
        <Button style={{
                width: "25em",
                height: "3em",
                backgroundColor: "goldenrod",
                borderColor: "black",
                color: "white",
                boxShadow: "5px 5px #333333",
                display: "flex",
                margin: "auto"
              }}
                href="/"
                variant="outlined"><strong>CLAIM</strong></Button>
      </div>
    </>
  );
};

export default ScratchOffCard;
