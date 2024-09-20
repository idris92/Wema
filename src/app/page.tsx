'use client'
import { useState } from "react";

import DashboardWrapper from "./Dashboard";
import styled from "styled-components";
import { SlReload } from "react-icons/sl";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { HomeContentContainer, HomeStatContainer, HomeStat, InflowChartCont, NewUsersChart, RecentRequests } from "./styles";
import StatCard from "./Components/StatCard";

 

export default function Home() {
 
  return (
    <DashboardWrapper>
            <HomeContentContainer>
                  <HomeStatContainer>
                        <StatCard/>
                        <StatCard/>
                        <StatCard/>
                        <StatCard/>
                  </HomeStatContainer>
                  <HomeStatContainer>
                        <InflowChartCont></InflowChartCont>
                        <NewUsersChart></NewUsersChart>
                  </HomeStatContainer>
                  <HomeStatContainer>
                        <RecentRequests></RecentRequests>
                  </HomeStatContainer>
            </HomeContentContainer>
    </DashboardWrapper>
  );
}
