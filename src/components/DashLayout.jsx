import { Outlet } from "react-router-dom";

import React from 'react'
import DashHeader from "./DashHeader";
import DashFooter from "./DashFooter";

export const DashLayout = () => {
  return (
    <>
        <DashHeader />
        <div className="dash-container">
            <Outlet />
        </div>
        <DashFooter />
    </>
  )
}

export default DashLayout;
