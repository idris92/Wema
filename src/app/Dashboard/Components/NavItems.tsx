'use client'
import { useState } from "react";
import { NavItems, NavItemIcon,NavItemText, NavWrapper} from "../styles";
import { usePathname, useRouter } from 'next/navigation'

type InputProps = {
    icon: JSX.Element;
    title: string;
    key: number;
    link: string;
  };

 
export default function NavItemsWrapper({icon, title, key, link}:InputProps) {
    const pathname = usePathname()
    const router = useRouter()
    const handleRedirect=()=>{
        router.push(link)
    }
  return (
    <NavItems key={key} onClick={handleRedirect} $active={pathname === link}>
            <NavItemIcon  >
                <NavWrapper>
                        {
                            icon
                        }
                </NavWrapper>
            </NavItemIcon>
            <NavItemText>{title}</NavItemText>
    </NavItems>
  );
}
