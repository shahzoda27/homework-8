import { parseISO,formatDistanceToNow } from 'date-fns'
import React from 'react'

export default function TimeAgo({time}) {
    let timeAgo =""
    if (time) {
        let date =parseISO(time)
        let timestamp =formatDistanceToNow(date)
        timeAgo= `${timestamp} ago`
    }
  return (
    <div>{timeAgo}</div>
  )
}
