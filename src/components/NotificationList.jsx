import React from 'react'
import { notifications } from "../data/notifications"
import NotificationItem from './NotificationItem'

const NotificationList = ({notifications}) => {
  return (
   <div>
    {notifications.map((notification) => (
        <NotificationItem notification={notification}/>
    ))}
   </div>
  )
}

export default NotificationList