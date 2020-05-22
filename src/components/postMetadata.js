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

export default ({ date, timeToRead }) => (
<span
    css={css`
    color: #bbb;
    display: inline-block;
    `}>
    {moment(date).format('LL')}{" · "}{timeToReadText(timeToRead)}
</span>
)