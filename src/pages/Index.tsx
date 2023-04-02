import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Fragment, useEffect, useRef, useState } from "react";
import GraphicBackground from "../components/GraphicBackground";
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
// const provider = new ethers.JsonRpcProvider('https://8545-derricksope-scaffoldeth-yyiqw900tvt.ws-us92.gitpod.io');
const wallet = false; // TODO: remove this is just for testing
const Index = () => {

  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  console.log("address: ", address);

  return (
    <>
      <br />
      <div style={{
        position: "absolute",
        top: "50%",
        margin: "auto",
        width: "100%",
        textAlign: "center",
        textShadow: "none"
      }}>
        <p>
          Connect your Wallet with the Metask   
           <span> </span><a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202">extension</a>,<span> </span>  
          <a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202">ios</a>,<span> </span>
           <a href="https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202">android</a>.
        </p>
        {!isConnected
          ? <>
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: "25em",
                height: "3em",
                backgroundColor: "#ff5252",
                borderColor: "black",
                color: "white",
                boxShadow: "5px 5px #333333"
              }}
                onClick={() => { connect(); console.log("connected: ", isConnected) }}
                variant="outlined"><strong>Connect Wallet</strong></Button>
            </Box>
          </>
          : <>
            
            <Box sx={{ flexGrow: 1 }}>
              <Button style={{
                width: "25em",
                height: "3em",
                backgroundColor: "#ff5252",
                borderColor: "black",
                color: "white",
                boxShadow: "5px 5px #333333"
              }}
                href="/games"
                variant="outlined"><strong>Play NFT<span style={{fontSize:"1.15em"}}>X</span></strong></Button>
            </Box>
          </>
        }

      </div>
      
    </>

  );
};

export default Index;