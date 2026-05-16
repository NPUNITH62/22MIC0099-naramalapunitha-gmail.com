import React, { useEffect, useState } from "react";
import {
    Container,
    Typography,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    CircularProgress
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";
import { getTopNotifications } from "../utils/priority";
import Log from "../utils/logger";

const AllNotifications = () => {

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("");

    const loadNotifications = async () => {

        try {

            Log(
                "frontend",
                "info",
                "api",
                "Fetching notifications from server"
            );

            setLoading(true);

            const data = await fetchNotifications(type);

            setNotifications(data);

            Log(
                "frontend",
                "info",
                "component",
                "Notifications loaded successfully"
            );

        } catch (error) {

            Log(
                "frontend",
                "error",
                "api",
                "Failed to fetch notifications"
            );

        } finally {

            setLoading(false);
        }
    };

    useEffect(() => {

        loadNotifications();

    }, [type]);

    const topNotifications = getTopNotifications(notifications);

    return (

        <div className="app">

            <div className="header">

                <Typography variant="h4">
                    Campus Notifications
                </Typography>

            </div>

            <Container>

                <div className="filter-section">

                    <FormControl fullWidth>

                        <InputLabel>
                            Filter By Type
                        </InputLabel>

                        <Select
                            value={type}
                            label="Filter By Type"
                            onChange={(e) => setType(e.target.value)}
                        >

                            <MenuItem value="">
                                All
                            </MenuItem>

                            <MenuItem value="Event">
                                Event
                            </MenuItem>

                            <MenuItem value="Result">
                                Result
                            </MenuItem>

                            <MenuItem value="Placement">
                                Placement
                            </MenuItem>

                        </Select>

                    </FormControl>

                </div>

                <Typography
                    variant="h5"
                    className="section-title"
                >
                    Priority Notifications
                </Typography>

                <Grid container spacing={2}>

                    {topNotifications.map((item) => (

                        <Grid
                            item
                            xs={12}
                            md={6}
                            lg={4}
                            key={item.ID}
                        >

                            <NotificationCard notification={item} />

                        </Grid>

                    ))}

                </Grid>

                <Typography
                    variant="h5"
                    className="section-title"
                >
                    All Notifications
                </Typography>

                {loading ? (

                    <div className="loader">

                        <CircularProgress />

                    </div>

                ) : (

                    <Grid container spacing={2}>

                        {notifications.map((item) => (

                            <Grid
                                item
                                xs={12}
                                md={6}
                                lg={4}
                                key={item.ID}
                            >

                                <NotificationCard notification={item} />

                            </Grid>

                        ))}

                    </Grid>

                )}

            </Container>

        </div>
    );
};

export default AllNotifications;