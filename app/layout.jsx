"use client";

import "./globals.css";
import Grid from "@mui/material/Grid";
import { Inter, Poppins } from "next/font/google";
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import { Divider } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "David Rullo - Front-End Web Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Grid container>
          <Grid item  className="header" >
            <Header />
          </Grid>
          <Divider />
          <Grid container row>
            <Grid item xs={2}>
              <SideBar />
            </Grid>
            <Grid item xs={10}>
              {children}
            </Grid>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}