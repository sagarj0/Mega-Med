"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { FormControl, FormGroup } from "@mui/material";
import MegaMedLogo from "./../../../ui/MegaMedLogo";

export default function SignUp() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      data: data,
      email: data.get("email"),
      password: data.get("password"),
      fullName: data.get("fullName"),
      phoneNumber: data.get("phoneNumber"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box className="my-16 w-full flex flex-col items-center space-y-6  border border-gray-300 rounded p-8">
        <MegaMedLogo />

        <Typography
          component="h1"
          variant="body1"
          className="text-center text-gray-400"
        >
          Sign up to unlock your potential in medical enrance exams.
        </Typography>
        <FormControl
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3, width: "100%" }}
          className="flex flex-col space-y-4"
        >
          <FormGroup>
            <TextField
              required
              fullWidth
              id="fullName"
              label="Full Name"
              name="fullName"
              type="text"
              autoComplete="family-name"
              size="small"
              className="mb-4 bg-gray-50 border-gray-300 rounded"
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              size="small"
              className="mb-4 bg-gray-50 border-gray-300 rounded"
            />
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              size="small"
              className="mb-4 bg-gray-50 border-gray-300 rounded"
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              size="small"
              className="mb-4 bg-gray-50 border-gray-300 rounded"
            />
          </FormGroup>
          <Button type="submit" fullWidth variant="contained">
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              Already have an account?
              <Link href="#" variant="body2">
                Sign in
              </Link>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </Container>
  );
}
