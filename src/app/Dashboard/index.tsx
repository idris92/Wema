'use client'
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { GrSun } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";
import {Body, ContentBody, ContentWrapper, LangLi, LangOptionsWrapper, LangUl, ListWrapper, TopBarHamburger, TopBar, TopBarActions, TopBarLang, TopBarLangIcon, TopBarLangInput, TopBarMode, TopBarSearch, TopBarSearchContainer, TopBarSearchInput, TopBarTitle, SidebarContainer,} from './styles'
import { LangOptions} from "@/utils";
import { RxHamburgerMenu } from "react-icons/rx";
import ProSideBar from "./Components/ProSideBar";

type InputProps = {
    children: any;
    title?: string;
  };

export default function DashboardWrapper({children, title}:InputProps) {
  const [lang, setLang] = useState<string>('ENG')
  const [menuActive, setMenuActive] = useState(false);
  const [toggled, setToggled] = useState(false);

  const toggleMenu=()=>{
    setMenuActive(!menuActive)
  }

  const handleLang=(value:string)=>{
      setLang(value)
      setMenuActive(false)
  }

 
  return (
    <Body>
        <SidebarContainer $toggled={toggled}>
            <ProSideBar toggled={toggled} setToggled={setToggled}/>
        </SidebarContainer>
      <ContentWrapper>  
            <TopBar>
                <TopBarTitle>{title || 'Dashboard'}</TopBarTitle>
                <TopBarHamburger onClick={() => setToggled(!toggled)}>
                    <RxHamburgerMenu size='24px'/>
                </TopBarHamburger>
                <TopBarActions>
                      <TopBarSearchContainer>
                            <TopBarSearch>
                              <FiSearch size='24px' color='rgb(211, 211, 211, 0.8)'/>
                              <TopBarSearchInput placeholder='Enter keywords'/>
                            </TopBarSearch>
                      </TopBarSearchContainer>
                        <TopBarHamburger>
                            <FiSearch size='24px' color='rgb(211, 211, 211, 0.8)'/>
                        </TopBarHamburger>
                            
                      <TopBarLang>
                            <TopBarLangInput placeholder={lang} disabled></TopBarLangInput>
                            <TopBarLangIcon onClick={toggleMenu} >
                                <IoIosArrowDown size='24px' color='rgb(211, 211, 211, 0.8)' cursor='pointer'/>
                            </TopBarLangIcon>
                            <LangOptionsWrapper $display={menuActive}>
                                    <LangUl>
                                          {
                                            LangOptions?.map((value, index)=>(
                                                <ListWrapper key={index}  onClick={()=>handleLang(value)}>
                                                    <LangLi >{value}</LangLi>
                                                </ListWrapper>
                                            ))
                                          }
                                    </LangUl>
                            </LangOptionsWrapper>
                      </TopBarLang>
                      <TopBarMode $background="rgb(211, 211, 211, 0.2)">
                              <GrSun size='24px' />
                      </TopBarMode>
                      <TopBarMode $background="rgb(211, 211, 211, 0.3)">
                              <IoMdNotifications size='24px'/>
                      </TopBarMode>
                      <TopBarMode $background="rgb(211, 211, 211, 0.3)">
                              <RxAvatar size='24px' />
                      </TopBarMode>
                </TopBarActions>
            </TopBar>
            <ContentBody>
                {
                    children
                }
            </ContentBody>
      </ContentWrapper>
    </Body>
  );
}
