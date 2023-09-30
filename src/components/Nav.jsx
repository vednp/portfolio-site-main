import React from "react";
import { Link, NavLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navigation from "./Navigation";
import Social from "./Social";
function Nav() {
  return (
    <>
      <div className="flex justify-around mt-4">
        <h1 className="font-['Oswald'] text-2xl">Ved Pahune</h1>
        <Navigation />
        <div className="hidden sm:block">
          <Social />
        </div>
      </div>
    </>
  );
}

export default Nav;
