

import Panel from "@/layouts/Panel";
import React from "react";

const Dashboard = () => {
  return (
    <Panel>
      <div className="w-full h-full flex justify-center items-center !rounded">
        <iframe
          title="Portfolio"
          src="https://bento.me/rizwan-khnn"
          style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          frameBorder="0"
          scrolling="auto"
        ></iframe>
      </div>
    </Panel>
  );
};

export default Dashboard;
