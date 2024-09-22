'use client'
import { useState } from "react";
import { HomeStat, CardWrapper, HomeStatLeftCont, HomeStatIconBg, HomeStatRightCont, HomeStatInfoContainer, HomeStatTitle, HomeStatSubTitle, HomeStatRateContainer, HomeStatPer, HomeStatTime } from "../styles";

type InputProps = {
    bgColor: string;
    color: string
    bgIcon: JSX.Element;
    title: string;
    subtitle: string;
    rateIcon: JSX.Element;
    rate: string;
    rateColor: string;
    date: string;
    index: number;
  };

export default function StatCard({bgColor, color, bgIcon, title, subtitle, rateIcon, rate, rateColor, date, index}:InputProps) {
 
  return (
    <HomeStat key={index}>
        <CardWrapper>
            <HomeStatLeftCont>
                <HomeStatIconBg $background={bgColor} $color={color}>
                    {
                        bgIcon
                    }
                </HomeStatIconBg>
            </HomeStatLeftCont>
            <HomeStatRightCont>
                <HomeStatInfoContainer>
                    <HomeStatTitle>{Number(title).toLocaleString('fr-FR')}</HomeStatTitle>
                    <HomeStatSubTitle>{subtitle}</HomeStatSubTitle>
                </HomeStatInfoContainer>
                <HomeStatRateContainer>
                    <HomeStatRateContainer>
                            {
                                rateIcon
                            }
                            <HomeStatPer $color={rateColor}>{rate}</HomeStatPer>
                    </HomeStatRateContainer>
                    <HomeStatTime>{date}</HomeStatTime>
                </HomeStatRateContainer>
            </HomeStatRightCont>
        </CardWrapper>
    </HomeStat>
  );
}

