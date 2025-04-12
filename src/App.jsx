import { useState } from "react";
import Header from "./components/Header"
import NotificationList from "./components/NotificationList"
import { notifications as initialNotifications } from "./data/notifications";

function App() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications); // Bildirimleri güncelle
  };

  return (
      <div className="px-[16px] md:px-[30px] py-[24px] md:py-[36px] bg-white rounded-none md:rounded-[15px] w-full md:max-w-[730px] mx-auto my-0 md:my-10">
        <Header handleMarkAllAsRead={handleMarkAllAsRead} />
        <NotificationList notifications={notifications} />
      </div>
  )
}

export default App
