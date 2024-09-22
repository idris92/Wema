'use client'
import { useState } from "react";
import { Email, Name, NameEmailContent, NameEmailProfile, NameEmailWrapper, RequestArrowBg, RequestHeader, RequestStatus, RequestStatusContent, RequestType } from "../styles";
import { IoIosArrowForward } from "react-icons/io";

type InputProps = {
    name: string;
    email: string;
    requestType: string;
    status: 'pending' | 'active' | string;
    date: string;
    index: number;
  };

export default function Request({name, email, requestType, status, date, index}: InputProps) {
 
  return (
    <RequestHeader key={index}>
            <NameEmailWrapper>
                    <NameEmailProfile></NameEmailProfile>
                    <NameEmailContent>
                            <Name>{name}</Name>
                            <Email>{email}</Email>
                    </NameEmailContent>
            </NameEmailWrapper>
            <RequestType>{requestType}</RequestType>
            <RequestStatus $status={status.toLowerCase()}>
                <RequestStatusContent $status={status.toLowerCase()}>{status}</RequestStatusContent>
            </RequestStatus>
            <RequestType>{date}</RequestType>
            <RequestArrowBg>
                <IoIosArrowForward size='16px' color='#990D81'/>
            </RequestArrowBg>
    </RequestHeader>
  );
}
