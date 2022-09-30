import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


function Copyright(){
    return(
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

function AppRouter(){
    return(
        <div>
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />}>
                        </Route>
                        <Route path="/" element={<App />}>
                        </Route>
                    </Routes>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Router>
        </div>
    );
}

export default AppRouter;