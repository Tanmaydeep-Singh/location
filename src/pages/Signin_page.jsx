import React from "react";

import DefaultLayout from "../components/layout/DefaultLayout";
import { useAuth } from "../firebase";
import BlockPage from "../components/BlockPage";

const Signin = () => {
  const currUser = useAuth();
  return <>{currUser ? <BlockPage /> : null}</>;
};

export default Signin;
