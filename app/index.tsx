import { Redirect } from "expo-router";
import React from "react";

const page = () => {
  return <Redirect href={"/(drawer)/(tabs)/home"} />;
};

export default page;
