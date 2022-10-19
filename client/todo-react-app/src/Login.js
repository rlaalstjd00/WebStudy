// import React from "react";
// import { signin } from "./service/ApiService";
// import  Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
// import Typography from "@material-ui/core/Typography";
// import {Container} from "@material-ui/core";

// const Login = () => {

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.target);
//         const email = data.get("email");
//         const password = data.get("password");

//         signin({email: email, password: password});
//     };

//     return (
//         <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <Typography component="h1" variant="h5">
//                 로그인
//               </Typography>
//             </Grid>
//           </Grid>
//           <form noValidate onSubmit={handleSubmit}>
//             {" "}
//             {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="이메일 주소"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label="패스워드"
//                   type="password"
//                   id="password"
//                   autoComplete="current-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button type="submit" fullWidth variant="contained" color="primary">
//                   로그인
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Container>
//     );
// };

// export default Login;


import React from "react";
import { Container, Grid, Typography, TextField, Button } from "@material-ui/core";
import {Link} from "react-router-dom";
import { signin } from "./service/ApiService";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    // ApiService의 signin 메서드를 사용 해 로그인.
    signin({ username: username, password: password });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      <form noValidate onSubmit={handleSubmit}>
        {" "}
        {/* submit 버튼을 누르면 handleSubmit이 실행됨. */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="아이디"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
          <Grid item>
            <Link to="/signup" variant="body2">
            계정이 없습니까? 여기서 가입 하세요.
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;