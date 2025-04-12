import { useState } from "react";
import { notifications } from "../data/notifications";

const NotificationItem = ({ notification }) => {
    const { user, action, post, group, time, message, picture, read } = notification;
   

 
    return (
      <div className={`flex justify-between items-start my-[8px] p-[18px] rounded-[8px] ${!read ? 'bg-[#F7FAFD]' : ''}`}>
        <div className="flex">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-[45px] h-[45px] mr-4"
          />
          <div>
            <p className="text-[16px] text-[#1C202B] leading-snug">
              <span className="font-bold">{user.name}</span> <span className="text-[#5E6778]">{action}</span>
              {post && <span className="font-bold text-[#5E6778]"> {post}</span>}
              {group && <span className="font-bold text-[#0A327B]"> {group}</span>}
              {!read && <span className="ml-[6px] text-[8px] text-[#F65552]">●</span>}
            </p>
            <p className="text-[16px] font-medium text-[#939CAD] mt-1">{time}</p>
  
            {message && (
              <div className="border border-[#DDE7EE] mt-3 p-3 rounded-lg bg-white  text-[16px] text-[#5E6778]">
                {message}
              </div>
            )}
          </div>
        </div>
  
        {/* Sağ kısım: picture varsa göster */}
        {picture && (
          <img
            src={picture}
            alt="notification"
            className="w-12 h-12 rounded-lg object-cover ml-4"
          />
        )}
      </div>
    );
  };
  
  export default NotificationItem;
  