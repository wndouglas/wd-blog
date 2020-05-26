import moment from "moment"
import { css } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"
import { getCategoryPath } from "../functions/getPaths"

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


export default ({ date, timeToRead, category, pathEdges }) => {
  moment.locale('en-gb')
  const formattedDate = moment(date).format('LL')
  const formattedTTR = timeToReadText(timeToRead)

  if (category !== undefined)
  {
    return (
      <div
      css={css`
      color: #bbb;
      display: inline-block;
      `}>
      <Link to={getCategoryPath(category, pathEdges)} 
        style={{ color: 'inherit' }}>[{category}]</Link>
        {" · "}{formattedDate}{" · "}{formattedTTR}
    </div>)
  }
  else
  {
    return (
      <div
      css={css`
      color: #bbb;
      display: inline-block;
      `}>
        {formattedDate}{" · "}{formattedTTR}
      </div>)
  }
}