import React from "react";
import { PrivateRoutes, PublicRoutes } from "./routes";

const Application = () => {
  return (
    <>
      <PublicRoutes />
      <PrivateRoutes />
    </>
  );
};

export default Application;
