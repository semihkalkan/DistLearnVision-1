import React from "react";

import Button from "../components/button";
import NavigationButton from "../components/navigation-button";
import Navigation from "../components/navigation";
import {Home}  from "../components/icons";
import TextTitle  from "../components/text-title";

export default {
  title: "Butons",
};

export const Normal = () => <Button>SAVE</Button>;

export const NavButton = () => (
  <NavigationButton>
    <Home />
    <TextTitle>Home</TextTitle>
  </NavigationButton>
);

export const Nav = () => <Navigation selectedKey="home" />;
