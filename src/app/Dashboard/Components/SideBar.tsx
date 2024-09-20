'use client'
import { useState } from "react";
import { SideBar, SideBarHeader, SideBarNavs,  SideBarFooter} from "../styles";
import NavItemsWrapper from "./NavItems";
import { DashboardLinks } from "@/utils";
import styled from "styled-components";

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px;
    min-height: 60px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    gap: 8px;
`
const Profile = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background: rgba(255, 255, 255, 0.7);
`

const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0px;
`
const ProfileTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    margin: 0px;
    color: #ffffff;

`
const ProfileSubtitle = styled.p`
    font-size: 12px;
    font-weight: normal;
    margin: 0px;
    color: rgba(255, 255, 255, 0.7);
`



export default function SideBarWrapper() {

  return (
    <SideBar>
          <SideBarHeader>
                <img src='https://wemabank.com/assets/wemaFullWhite-Xh_jya1z.svg' alt="Wema logo"/>
          </SideBarHeader>
          <SideBarNavs>
            {
                DashboardLinks.map((value, index)=>(
                    <NavItemsWrapper icon={value?.icon} title={value?.name} key={index} link={value?.link}/>
                ))
            }
          </SideBarNavs>
          <SideBarFooter>
                <ProfileWrapper>
                        <Profile></Profile>
                        <ProfileInfoContainer>
                                <ProfileTitle>Nafisa Sh.</ProfileTitle>
                                <ProfileSubtitle>Support Manager</ProfileSubtitle>
                        </ProfileInfoContainer>
                </ProfileWrapper>
          </SideBarFooter>
    </SideBar>
  );
}
