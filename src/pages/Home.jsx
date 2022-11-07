import React from "react";
import BlockPage from "../components/BlockPage";
import DefaultLayout from "../components/layout/DefaultLayout";

function Home() {
  return (
    <div className="m-28">
      <BlockPage />
    </div>    
  );
}

export default DefaultLayout(Home);
