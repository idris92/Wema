import { device } from "@/utils";
import styled from "styled-components";

export const Body= styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #ffffff;
  overflow: hidden;
`

export const SideBar = styled(Body)`
  width: 20%;
  background: #990d81;
  padding: 8px 18px;
  flex-direction: column;
  @media  ${device.mobileL}{
        display: none;
        width: 0px;
    }

`
export const ContentWrapper = styled(Body)`
  width: 80%;
  background: rgb(211, 211, 211, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media  ${device.mobileL}{
        width: 100%;
    }
`

export const SideBarHeader= styled(SideBar)`
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 15%;
    padding: 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
`



export const SideBarNavs = styled(SideBar)`
  width: 100%;
  min-Height: 55%;
  padding: 32px 0px 12px;
  background: transparent;
  gap: 16px;
`

export const SideBarFooter = styled(SideBar)`
  flex-direction: column;
  width: 100%;
  min-Height: 30%;
  padding: 0px;
//   margin: 10px 0px;
  background: transparent;
`

export const NavItems = styled.div<{ $active?: boolean;}>`
  display: flex;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border-radius: 4px;
  border-right: ${props => props.$active ? '3px solid #ffffff' : 'none'};;
  justify-content: left;
  align-items: center;
  gap: 8px;
  padding: 8px;
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  &:hover{
    background: rgba(255, 255, 255, 0.2);
    border-right: 3px solid #ffffff;
    color: #ffffff;
  }
  
    cursor: pointer;
`

export const NavItemIcon = styled.div`
    width: 24px;
    height: 24px;

   
`
export const NavItemText = styled.div`
    
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    
`

export const TopBar = styled.div`
  display: flex;
  min-height: 48px;
  height: 80px;
  background: #ffffff;
  box-shadow: 0px 0px 11.8169px rgba(0, 0, 0, 0.02);
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
   @media  ${device.mobileL}{
        padding: 4px 8px;
    }
`

export const TopBarTitle = styled.div`
  width: 15%;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  @media  ${device.mobileL}{
        display: none;
    }
    @media  ${device.tablet}{
        width: 8%;
        font-size: 21px;
    }
`
export const TopBarHamburger = styled.div`
        display: none;
        @media  ${device.mobileL}{
            display: flex;
            justify-content: center;
            align-items: center;
            size: 48px;
            color: #000;
        }
  `

export const TopBarActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 85%;
  height: 100%;
  gap: 8px;
  color: black;
  @media  ${device.mobileL}{
        width: 100%;
    }
`

export const TopBarSearchContainer = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
    @media  ${device.tablet}{
        display: none;
    }
`

export const TopBarSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(211, 211, 211, 0.3);
  padding: 8px;
  gap: 8px;
  border-radius: 8px;
  cursor: pointer;
 

`
export const TopBarSearchInput = styled.input`
  width: 210px;
  height: 28px;
  border: none;
  background: transparent;
  outline: none;
  
`

export const TopBarLang= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 8px;
  gap: 2px;
  border: none
  cursor: pointer;

`


export const TopBarLangInput = styled.input`
  width: 30px;
  height: 28px;
  color: #000;
  outline: none;
  background: transparent;
  border: none;
  position: relative;
  font-size: 14px;
  font-weight: normal;


`

export const TopBarLangIcon = styled.div`
  cursor: pointer
  width: 24px;
  height: 24px;
  
`

export const LangOptionsWrapper = styled.div<{ $display?: boolean;}>`
  position: absolute;
  top: 70px;
  background: #fff;
  box-shadow: 0px 0px 11.8169px rgba(0, 0, 0, 0.06);
  width: 60px;
  min-height: 80px;
  padding: 4px;
  display: ${props => props.$display ? 'flex' : 'none'};
  border-radius: 4px;
`

export const LangUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  color: #3d3d3d;
  padding: 2px;
  list-style: none;
  margin: none;
 
 
`

export const LangLi = styled.li`
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color: #990d81
  }
`

export const ListWrapper = styled.div`
  cursor: pointer;
`

export const TopBarMode = styled.div<{$background?: string}>`
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background: ${props => props.$background || 'rgb(211, 211, 211, 0.3)'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(211, 211, 211, 0.4);
    &:hover{
      color: #990d81
    }
    @media  ${device.tablet}{
        width: 32px;
        height: 32px;
    }
`

export const ContentBody = styled.div`
  background: transparent;
  min-height: 100vh;
  margin: 48px 16px;
`

export const NavWrapper = styled.div<{ $color?: string;}>`
    color:${props => props.$color || '#ffffff'};
    size: 24px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
