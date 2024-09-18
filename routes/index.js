import express from 'express';
import Auth from './auth.js';
import { Verify, VerifyRole } from "../middleware/verify.js";

const Router = (server) => {
    // home route with the get method and a handler
    server.get("/1stbeaconrepo", (req, res) => {
        try {
            res.status(200).json({
                status: "success",
                data: [],
                message: "Welcome to our API homepage!",
            });
        } catch (err) {
            console.error("Error handling /1stbeaconrepo route:", err);
            res.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
        }
    });

    // Define the /1stbeaconrepo/user route with the Verify middleware
    server.get("/1stbeaconrepo/user", Verify, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to your Dashboard!",
        });
    });

    // Define the /1stbeaconrepo/admin route with the Verify and VerifyRole middleware
    server.get("/1stbeaconrepo/admin", Verify, VerifyRole, (req, res) => {
        res.status(200).json({
            status: "success",
            message: "Welcome to the Admin portal!",
        });
    });

    // Mount other routes
    server.use('/1stbeaconrepo/auth', Auth);
};

export default Router;