import axios from "axios";
import Log from "../utils/logger";

const API_URL =
    "http://4.224.186.213/evaluation-service/notifications";

export const fetchNotifications = async (type = "") => {

    try {

        Log(
            "frontend",
            "info",
            "api",
            "Fetching notifications"
        );

        const response = await axios.get(API_URL, {

            headers: {
                Authorization:
                    `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            },

            params: {
                limit: 10,
                page: 1,
                notification_type: type || undefined
            }
        });

        console.log(response.data);

        return response.data.notifications || [];

    } catch (error) {

        console.log(error);

        Log(
            "frontend",
            "error",
            "api",
            "Failed to fetch notifications"
        );

        return [];
    }
};