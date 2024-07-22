import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, IconButton } from "@mui/material";

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        top: 10,
        width: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
              textAlign: "center",
            }}
          >
            <Box
              component="img"
              src="/images/logo.webp"
              alt="logo of sitemark"
              sx={{
                width: {
                  xs: "50px", // Extra-small devices (phones)
                  sm: "50px", // Small devices (tablets)
                  md: "70px", // Medium devices (desktops)
                  lg: "90px", // Large devices (large desktops)
                  xl: "100px", // Extra-large devices (4K monitors)
                },
                marginLeft: "15px",
                height: "auto",
                borderRadius: "30%",
              }}
            />
            <Box
              sx={{
                flexGrow: 5,
                alignItems: "center",
                ml: "-18px",
                px: 0,
                textAlign: "center",
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a href="/" className="hover:text-yellow-500">
                  Home
                </a>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a href="#about" className="hover:text-yellow-500">
                  About Us
                </a>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a href="#mission" className="hover:text-yellow-500">
                  Mission
                </a>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a href="#vision" className="hover:text-yellow-500">
                  Vision
                </a>
              </MenuItem>
              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a href="#services" className="hover:text-yellow-500">
                  Services
                </a>
              </MenuItem>

              <MenuItem sx={{ py: "6px", px: "12px", mx: "1%" }}>
                <a
                  href="https://brainsmediasolutions.com/contact-us/"
                  className="hover:text-yellow-500"
                >
                  Contact Us
                </a>
              </MenuItem>
            </Box>
          </Box>

          <>
            <Box sx={{ display: { sm: "block", md: "none" } }}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },

                  gap: 2,
                  alignItems: "center",
                }}
              >
                <IconButton
                  color="default"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            </Box>
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  minWidth: "80vw",
                  p: 2,
                  backgroundColor: "background.paper",
                  flexGrow: 1,
                  background: "black",
                  opacity: 0.9,
                  color: "gray",
                  paddingLeft: "2rem",
                }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
              >
                <img
                  src="/images/logo.webp"
                  className="w-[10rem] m-5"
                  alt="company"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    borderTop: "1px solid",
                    marginTop: "2rem",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a href="/" className="hover:text-yellow-500">
                      Home
                    </a>
                  </MenuItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    borderTop: "1px solid",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a href="#about" className="hover:text-yellow-500">
                      About Us
                    </a>
                  </MenuItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "100%",
                    borderTop: "1px solid",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a href="#mission" className="hover:text-yellow-500">
                      Mission
                    </a>
                  </MenuItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "100%",
                    borderTop: "1px solid",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a href="#vision" className="hover:text-yellow-500">
                      Vision
                    </a>
                  </MenuItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",

                    width: "100%",
                    borderTop: "1px solid",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a href="#services" className="hover:text-yellow-500">
                      Services
                    </a>
                  </MenuItem>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    borderTop: "1px solid",
                    borderColor: "#0f172a",
                  }}
                >
                  <MenuItem className="hover:text-yellow-500 !py-4 !w-full">
                    <a
                      href="https://brainsmediasolutions.com/contact-us/"
                      className="hover:text-yellow-500"
                    >
                      Contact Us
                    </a>
                  </MenuItem>
                </Box>

                <Divider />
              </Box>
            </Drawer>
          </>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
