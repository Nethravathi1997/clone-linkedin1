import React from 'react'
import "./widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {
const newsArticle = (heading, subtitle) => {
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <FiberManualRecordIcon />
        </div>
        <div className='widgets_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
}

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
    

    {newsArticle("React seems Easy", "but its tricky")}
    {newsArticle("HTML is the coolest language", "Coolest ever")}
    </div>
  )
}

export default Widgets