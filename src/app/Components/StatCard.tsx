'use client'
import { useState } from "react";
import styled from "styled-components";
import { SlReload } from "react-icons/sl";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { HomeStat, CardWrapper, HomeStatLeftCont, HomeStatIconBg, HomeStatRightCont, HomeStatInfoContainer, HomeStatTitle, HomeStatSubTitle, HomeStatRateContainer, HomeStatPer, HomeStatTime } from "../styles";



export default function StatCard() {
 
  return (
    <HomeStat>
        <CardWrapper>
            <HomeStatLeftCont>
                <HomeStatIconBg $background="#eaedf9" $color='#3d55d3'>
                    <SlReload size='24px'/>
                </HomeStatIconBg>
            </HomeStatLeftCont>
            <HomeStatRightCont>
                <HomeStatInfoContainer>
                    <HomeStatTitle>1478286</HomeStatTitle>
                    <HomeStatSubTitle>Pending Requests</HomeStatSubTitle>
                </HomeStatInfoContainer>
                <HomeStatRateContainer>
                    <HomeStatRateContainer>
                            <BsGraphUpArrow color='green' size='14px'/>
                            <HomeStatPer>4.07%</HomeStatPer>
                    </HomeStatRateContainer>
                    <HomeStatTime>Last Month</HomeStatTime>
                </HomeStatRateContainer>
            </HomeStatRightCont>
        </CardWrapper>
    </HomeStat>
  );
}
