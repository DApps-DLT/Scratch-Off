import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CardModal from "../components/CardModal";
import ScratchOffCard from "../components/ScratchOffCard";



const Games = () => {
  const [sticker, setSticker] = useState();
  console.log("sticker: ", sticker);

  const getSticker = () => {
    // axios
    //   .get(
    //     'https://www.svgrepo.com/show/7355/cherry.svg',
    //     { responseType: 'blob' }
    //   )
    //   .then(response => {
    //     let imageNode = document.getElementById('image');
    //     let imgUrl = URL.createObjectURL(response.data)
    //     console.log(imgUrl)
    //   })
    //   .catch(error => {
    //     alert(error)
    //   })
    axios({
      method: "get",
      url: "https://www.svgrepo.com/show/7355/cherry.svg",
      responseType: 'blob',
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      const { data } = response;
      setSticker(data);
      console.info("data: ", data)
    }).catch(error => {
      console.error("Failed to get image")
    })
  }

  useEffect(() => {
    getSticker();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<CardModal>
  < ScratchOffCard></ScratchOffCard>
</CardModal>
  );
};

export default Games;