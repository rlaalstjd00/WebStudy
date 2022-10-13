// import React from "react";
// import "./index.css";
// import App from "./App";
// import Login from "./Login";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Box } from "@material-ui/core";
// import Typography from "@material-ui/core/Typography";


// function Copyright(){
//     return(
//         <Typography variant="body2" color="textSecondary" align="center">
//             {"Copyright © "}
//             fsoftwareengineer, {new Date().getFullYear()}
//             {"."}
//         </Typography>
//     );
// }

// function AppRouter(){
//     return(
//         <div>
//             <Router>
//                 <div>
//                     <Routes>
//                         <Route path="/login" element={<Login />}>
//                         </Route>
//                         <Route path="/" element={<App />}>
//                         </Route>
//                     </Routes>
//                 </div>
//                 <Box mt={5}>
//                     <Copyright />
//                 </Box>
//             </Router>
//         </div>
//     );
// }

// export default AppRouter;

import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      fsoftwareengineer, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default AppRouter;