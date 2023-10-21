import React from 'react'
import ButtonComponent from './3.ButtonComponent'

import Icon from '@mui/material/Icon';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp'
import { Mic } from '@mui/icons-material';
import ClosedCaptionOutlinedIcon from '@mui/icons-material/ClosedCaptionOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import PresentToAllOutlinedIcon from '@mui/icons-material/PresentToAllOutlined';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import CallEndOutlinedIcon from '@mui/icons-material/CallEndOutlined';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

const RenderButton = () => {
  const [isBgRed,setIsBgRed]=useState(false)
  // const [buttonBackGround, setButtonBackGround] = useState("gray")
  const handleBtnClick = () => {
    console.log("function handleBtnClick");
    setIsBgRed(!isBgRed)
  }


  return (
    <div className='d-flex gap-2'>

      <ButtonComponent
        label={<Mic/>}
    
        onclick={()=> handleBtnClick()} 
        btnBackgroundColor={isBgRed?"red":"grey"}/>

      <ButtonComponent
        label={<VideocamOutlinedIcon />}

 />

      <ButtonComponent label={<ClosedCaptionOutlinedIcon />} />
      <ButtonComponent label={<EmojiEmotionsOutlinedIcon />} />
      <ButtonComponent label={<PresentToAllOutlinedIcon />} />
      <ButtonComponent label={<BackHandOutlinedIcon />} />
      <ButtonComponent
        label={<MoreVertOutlinedIcon />} />

      <ButtonComponent
        width={3.5}
        label={<CallEndOutlinedIcon
        />}
        btnBackgroundColor="red"
        btnBorder={"none"}
      />

    </div>
  )
}
export default RenderButton
