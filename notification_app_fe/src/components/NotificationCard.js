import React from "react";

function NotificationCard({ notification }) {

    return (

        <div className="card">

            <div className="card-title">
                {notification.Type}
            </div>

            <div className="card-message">
                {notification.Message}
            </div>

            <div className="card-time">
                {notification.Timestamp}
            </div>

        </div>
    );
}

export default NotificationCard;