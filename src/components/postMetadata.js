import moment from "moment"
import { css } from "@emotion/core"
import React from "react"

const timeToReadText = ( timeToRead ) => {
    let textOut = " to read"
    if (timeToRead === 1)
    {
      return timeToRead + " min" + textOut
    }
    else
    {
      return timeToRead + " mins" + textOut
    }
}


const metadataOut = ( date, timeToRead, category ) => {
  moment.locale('en-gb')
  let endText = moment(date).format('LL') + " · " + timeToReadText(timeToRead)
  if (category !== undefined)
  {
    endText = "[" + category + "] · " + endText
  }
  return endText
}


export default ({ date, timeToRead, category }) => (
<div
    css={css`
    color: #bbb;
    display: inline-block;
    `}>
    {metadataOut(date, timeToRead, category)}
</div>
)