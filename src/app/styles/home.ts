import styled from "styled-components"
import { device } from "@/utils"

export const HomeContentContainer= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: transparent;
  overflow: hidden;
  gap: 40px;
`

export const HomeStatContainer = styled.div`
  display: flex;
  width: 100%;
  // justify-content: space-between;
  gap: 1.3%;
  aligm-items: center;
   @media  ${device.tablet}{
        flex-direction: column;
        gap: 8px;
    }
`

export const HomeStat = styled.div`
  display: flex;
  min-width: 24%;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 0px 11.8169px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  oveflow: hidden;
  justify-content: space-between;
 
`
export const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  justify-content: space-between;
  padding : 8px;
  gap: 8px;
`
export const HomeStatLeftCont = styled.div`
    width: 35%;
    min-height: 100%;
    @media  ${device.laptop}{
        width: 25%;
    }
`
export const HomeStatRightCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 64%;
    min-height: 100%;
    gap: 16px;
    @media  ${device.laptop}{
        width: 74%;
    }
  
`

export const HomeStatIconBg = styled.div<{ $background: string; $color: string}>`
    width: 60px;
    height: 60px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.$background};
    color: ${props => props.$color};
    @media  ${device.laptop}{
        width: 40px;
        height: 40px;
    }
`
export const HomeStatInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const HomeStatTitle  = styled.p`
    font-size: 32px;
    font-weight: bold;
    color: #000;
    margin: 0px;
    @media  ${device.laptop}{
        font-size: 18px;
    }
`
export const HomeStatSubTitle  = styled(HomeStatTitle)`
    font-size: 16px;
    font-weight: 100;
    @media  ${device.laptop}{
        font-size: 12px;
    }
    
`

export const HomeStatRateContainer = styled(HomeStatInfoContainer)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
`

export const HomeStatPer = styled.p<{$color?:string}>`
  font-size: 14px;
  font-weight: 100;
  color: ${props => props.$color || 'green'};
  @media  ${device.laptop}{
        font-size: 12px;
    }
`

export const HomeStatTime  = styled(HomeStatTitle)`
    font-size: 14px;
    font-weight: 100;
    text-wrap: nowrap;
    @media  ${device.laptop}{
        font-size: 12px;
    }
  `


  export const InflowChartCont = styled(HomeStat)`
    min-width: 74.7%;
    height: 320px;
`
export const NewUsersChart = styled(InflowChartCont)`
    min-width: 24%;
    background: #990d81;
`

export const RecentRequests = styled(HomeStat)`
    min-width: 74.7%;
    height: 360px;
`
