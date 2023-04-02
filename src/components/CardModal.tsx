import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";

const CardModal = (properties: any) => {
  const { children } = properties;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card sx={{ maxWidth: 275, margin: "auto", marginTop: "2em" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image=""
            alt="NFTX"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              NFTX
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Match any of your NFT symbol to the winning NFT symbols to win up 10x TIMES!
            </Typography>
          </CardContent>
        </CardActionArea>    
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {children}
      </Modal>
    </>
  );
};

export default CardModal;
