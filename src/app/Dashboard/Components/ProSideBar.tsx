'use client'
import { DashboardLinks } from "@/utils";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses } from 'react-pro-sidebar';
import {  SideBarFooter, SideBarHeader, ProfileWrapper, Profile, ProfileInfoContainer, ProfileTitle, ProfileSubtitle, SideBarMenu } from "../styles";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";

type InputProps = {
    toggled: boolean;
    setToggled: React.Dispatch<React.SetStateAction<boolean>>

}
export default function ProSideBar({toggled, setToggled}:InputProps) {
    const matches =()=> typeof window !== "undefined" && window.matchMedia('(max-width: 800px)').matches
    const [broken, setBroken] = useState(matches);
    const pathname = usePathname()
  return (

    <Sidebar backgroundColor="#990d81" width="210px"  onBackdropClick={() => setToggled(false)} toggled={toggled} customBreakPoint="800px" onBreakPoint={setBroken} 
        rootStyles={{
        [`.${menuClasses.label}`]: {
          color: '#ffffff',
        },
        [`.${menuClasses.icon}`]: {
            color: '#ffffff',
          },
          [`.${menuClasses.subMenuContent}`]: {
            backgroundColor: 'rgba(255, 255, 255, 0.2) ',
            color: '#ffffff',
          },
      }} >
        <SideBarHeader>
                <img src='https://wemabank.com/assets/wemaFullWhite-Xh_jya1z.svg' alt="Wema logo"/>
          </SideBarHeader>
        <SideBarMenu>
                <Menu
                menuItemStyles={{
                    button: {
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2) ',
                            borderRight: '3px solid #ffffff',
                            color: '#ffffff',
                            borderRadius: '4px',
                        
                        }
                     }
                }}
                    renderExpandIcon={({ open }) => <span>{open ? <IoIosArrowDropupCircle color='C26EB3'/> : <IoIosArrowDropdownCircle color='C26EB3'/>}</span>}
                    
                        rootStyles={{
                            [`.${menuClasses.active}`]: {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                borderRight: '3px solid #ffffff',
                                color: '#ffffff',
                                borderRadius: '4px',
                                
                            },
                            [`.${menuClasses.icon}`]: {
                                backgroundColor: 'transparent',
                                border:'none',
                                color: '#ffffff',

                            
                            },
                            [`.${menuClasses.label}`]: {
                                backgroundColor: 'transparent',
                                border:'none',
                                color: '#ffffff',
                            
                            },
                           
                           
                          }}
                >
                    {
                        DashboardLinks.map((value, index)=>(
                            value?.children.length ? 
                                <SubMenu label={value?.name} icon={value?.icon} key={index} >
                                    {
                                        value?.children.map((child, index)=>(
                                            <MenuItem key={index} active={pathname == child?.link} component={<Link href={child?.link} />} icon={child?.icon}> {child?.name} </MenuItem>
                                        ))
                                    }
        
                                </SubMenu>
                            : (
                                <MenuItem key={index} active={pathname == value?.link} icon={value?.icon} component={<Link href={value?.link} />} > {value?.name} </MenuItem>
                            )
                        ))
                    }
                   
                </Menu>
        </SideBarMenu>
         <SideBarFooter>
                <ProfileWrapper>
                       <Profile></Profile>
                     <ProfileInfoContainer>
                                 <ProfileTitle>Nafisa Sh.</ProfileTitle>
                              <ProfileSubtitle>Support Manager</ProfileSubtitle>
                       </ProfileInfoContainer>
                </ProfileWrapper>
           </SideBarFooter>

    </Sidebar>
  );
}
