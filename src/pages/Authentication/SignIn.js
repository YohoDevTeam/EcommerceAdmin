import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const { setReload } = useAuthContext();
  const navigate = useNavigate();
  // useEffect(() => {
  //   getAllCategory();
  // }, []);

  const getAllCategory = async () => {
    const res = await axios.get(
      `https://www.bictree.xyz/api/admin/categories/read`,
      {
        headers: {
          Authorization:
            "Bearer " + "36|ymoDjUIaZtT2M12G2TyyJFTGz8ocQTYNx4NO0hhK",
        },
      }
    );
    // console.log(res);
    console.log(res.data);
  };

  useEffect(() => {
    setTimeout(() => {
      // func
      setLoading(false);
    }, 1000);
  }, []);

  const [loading, setLoading] = useState(true);

  // const token = localStorage.getItem("token");
  // console.log(token);
  // useEffect(() => {
  //   localStorage.setItem("name","Mohammed Thasthakir")

  // }, [])
  // const name = localStorage.getItem("name")
  // console.log(name)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function isEnableSignIn() {
    return email == "" && password == "";
  }

  // const handleSignIn = () => {
  //   console.log({
  //     email: email,
  //     password: password,
  //   });
  // };
  const handleSubmit = () => {};
  const handleSignIn = async (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    // localStorage.setItem("name", "Mohammed Thasthakir");
    const data = {
      // full_name: "mohammed",
      // nick_name: "thasthakir",
      email: email,
      password: password,
      password_confirmation: password,
      // is_admin: "yes",
      // dob: "1998-12-31",
      // gender: "Male",
      // phone: "515415151",
    };
    const res = await axios.post(
      `https://www.bictree.xyz/api/admin/users/login`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("RESPONSE : ", res.data);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", res.data.user);
    setReload(res.data);
    navigate("/");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    const data = {
      full_name: "mohammed",
      nick_name: "thasthakir",
      email: "mohammed@gmail.com",
      password: "password@123",
      password_confirmation: "password@123",
      is_admin: "yes",
      dob: "1998-12-31",
      gender: "Male",
      phone: "515415151",
    };

    let config = {
      method: "post",
      url: "https://www.bictree.xyz/api/admin/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      {loading ? (
        <div></div>
      ) : (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://source.unsplash.com/random?wallpapers)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSignIn}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={isEnableSignIn()}
                >
                  Sign In
                </Button>
                {/* <button
                  // fullWidth
                  // variant="contained"
                  // sx={{ mt: 3, mb: 2 }}
                  onClick={handleRegister}
                >
                  Register
                </button> */}
                {/* <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid> */}
                {/* <Copyright sx={{ mt: 5 }} /> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </ThemeProvider>
  );
}
