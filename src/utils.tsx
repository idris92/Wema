import { BiHomeAlt } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { LuFileEdit } from "react-icons/lu";
import { PiFileText } from "react-icons/pi";
import { BsFolderMinus } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
export const DashboardLinks = [
    {
      name: "Dashboard",
      link: "/",
      children: [],
      icon: <BiHomeAlt />
    },
    {
      name: "Requests",
      link: "/requests",
      // children: [],
      icon: <TbMessageDots />,
    },
    {
      name: "KYC",
      link: "/kyc",
      // children: [],
      icon: <LuFileEdit />,
    },
    {
      name: "Reports",
      link: "/reports",
      children: [],
      icon: <PiFileText/>,
    },
    {
      name: "Audit trail",
      link: "/audit",
      children: [
        {
            name: 'Audit details',
            link: '/audit-details',
        }
      ],
      icon: <BsFolderMinus/>,
    },
    {
        name: "Users",
        link: "/users",
        children: [],
        icon: <FaUsers/>,
    },
    {
        name: "Settings",
        link: "/setting",
        children: [],
        icon: <IoSettingsOutline/>,
      },
  ];



export const  LangOptions= ['ENG', 'CHN', 'GB','NG']


const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
  
  }
  
export const device={
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
  }