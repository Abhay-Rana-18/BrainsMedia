import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedinIcon from "@mui/icons-material/Linkedin";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color={"gray"} mt={1}>
      {"Copyright © "}
      <Link>Brains Media Solutions&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        marginTop: {
          xs: "1rem",
          sm: "2rem",
          md: "5rem",
        },
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row" },
          width: "100%",
          justifyContent: "space-between",
          fontSize: { xs: "0.7rem", sm: "1rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "40%" },
          }}
        >
          <Box sx={{ width: { xs: "70%", sm: "60%" } }}>
            <Box sx={{ ml: "-15px" }}>
              <img
                src={"/images/logo.webp"}
                style={logoStyle}
                alt="logo of sitemark"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <a href="#mission" className="text-gray-400 hover:text-yellow-500">
            Mission
          </a>

          <a href="#vision" className="text-gray-400 hover:text-yellow-500">
            Vision
          </a>
          <a href="#services" className="text-gray-400 hover:text-yellow-500">
            Services
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <a href="#about" className="text-gray-400 hover:text-yellow-500">
            About Us
          </a>
          <a
            href="https://brainsmediasolutions.com/contact-us/"
            className="text-gray-400 hover:text-yellow-500"
          >
            Contact Us
          </a>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "gray",
          fontSize: { xs: "0.7rem", sm: "1rem" },
        }}
      >
        <div>
          <a
            href="https://brainsmediasolutions.com/privacy-policy/"
            target="_blank"
            className="text-gray-400"
          >
            Privacy Policy
          </a>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <a href="#" className="text-gray-400">
            Terms of Service
          </a>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          marginTop={{xs: '2rem', sm: '0rem'}}
        >
          <IconButton
            href="https://www.facebook.com/brainsmediasolutions"
            aria-label="Facebook"
            sx={{ alignSelf: "center" }}
            className="!text-gray-500 hover:!text-yellow-500"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href="https://twitter.com/brainsmedia2012"
            aria-label="X"
            sx={{ alignSelf: "center" }}
            className="!text-gray-500 hover:!text-yellow-500"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/company/brains-media-solutions-pvt-ltd-/"
            aria-label="linkedin"
            sx={{ alignSelf: "center" }}
            className="!text-gray-500 hover:!text-yellow-500"
          >
            <LinkedinIcon />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/Brains_Media_Solutions/"
            aria-label="instagram"
            sx={{ alignSelf: "center" }}
            className="!text-gray-500 hover:!text-yellow-500"
          >
            <InstagramIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
