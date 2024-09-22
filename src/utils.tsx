import { BiHomeAlt } from "react-icons/bi";
import { TbMessageDots } from "react-icons/tb";
import { LuFileEdit } from "react-icons/lu";
import { PiFileText } from "react-icons/pi";
import { BsFolderMinus} from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoCheckmarkDone, IoSettingsOutline, IoStorefrontOutline } from "react-icons/io5";
import { MdShowChart } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2"
import { RxCountdownTimer } from "react-icons/rx";
import { AiOutlineAudit } from "react-icons/ai";
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
      children: [],
      icon: <TbMessageDots />,
    },
    {
      name: "KYC",
      link: "/kyc",
      children: [],
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
            icon: <AiOutlineAudit/>
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
        link: "/settings",
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


export const Requests = [
    {
        name: 'micheal olu',
        email: 'micheal@mail.com',
        type: 'New Agent',
        status: 'pending',
        date: '23/10/18'
    },
    {
        name: 'chioma james',
        email: 'alexa@mail.com',
        type: 'Account Deactivation',
        status: 'pending',
        date: '23/12/20'
    },
    {
        name: 'Boluwatife Ade',
        email: 'laure@mail.com',
        type: 'New User',
        status: 'active',
        date: '13/04/19'
    },
    {
        name: 'miriam eric',
        email: 'miriam@mail.com',
        type: 'Email Auth',
        status: 'active',
        date: '0304/21'
    },
    
]

export const statCardData=[
    {
        bgColor: '#eaedf9',
        color: '#3d55d3',
        bgIcon: <RxCountdownTimer size='16px'/>,
        title: '1478286',
        subtitle: 'Pending Requests',
        rateIcon: <MdShowChart color='green' size='14px'/>,
        rate: '4.07%',
        rateColor: 'green',
        date: 'Last Month'
    },
    {
        bgColor: '#FFF8ED',
        color: '#FFB648',
        bgIcon: <IoCheckmarkDone size='16px'/>,
        title: '478520',
        subtitle: 'Approved Requests',
        rateIcon: <MdShowChart color='green' size='14px'/>,
        rate: '0.24%',
        rateColor: 'green',
        date: 'Last Month'
    },
    {
        bgColor: '#EFEAFD',
        color: '#9F82F2',
        bgIcon: <IoStorefrontOutline size='16px'/>,
        title: '154387',
        subtitle: 'Total Agents',
        rateIcon: <MdShowChart color='red' size='14px'/>,
        rate: '1.64%',
        rateColor: 'red',
        date: 'Last Month'
    },
    {
        bgColor: '#EDFCF5',
        color: '#4BDE97',
        bgIcon: <HiOutlineUserGroup size='16px'/>,
        title: '167',
        subtitle: 'Total Users',
        rateIcon: <MdShowChart color='#FFD18D' size='14px'/>,
        rate: '0.00%',
        rateColor: '#FFD18D',
        date: 'Last Month'
    }
]