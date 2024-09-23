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
  gap: 30px;
`

export const HomeStatContainer = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  aligm-items: center;
   @media  ${device.tablet}{
        grid-template-columns: none;
    }
`

export const InflowStatContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
    aligm-items: center;
    @media  ${device.tablet}{
        grid-template-columns: none;
    }
`
export const RequestsContainer = styled.div`

    width: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 10px;
  aligm-items: center;
   @media  ${device.tablet}{
        grid-template-columns: 1fr;
    }
`

export const HomeStat = styled.div`
  display: flex;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 0px 11.8169px rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  oveflow: hidden;
  justify-content: space-between;
 
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  width: 100%;
  border-radius: 8px;
  padding : 8px;
  grid-gap: 4px;
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
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.$background};
    color: ${props => props.$color};
    @media  ${device.laptop}{
        width: 30px;
        height: 30px;
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
    font-size: 21px;
    font-weight: bold;
    color: #171717;
    margin: 0px;
    @media  ${device.laptop}{
        font-size: 18px;
    }
    letter-spacing: 1px;
`
export const HomeStatSubTitle  = styled(HomeStatTitle)`
    font-size: 12px;
    font-weight: 100;
    color: #aaaaaa;
    text-wrap: nowrap;
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

    export const HundredWidth = styled.div`
        width: 100%;
        gap: 1.3%;
    `

  export const InflowChartCont = styled(HomeStat)`
    display: flex;
    flex-direction: column;
    height: 320px;
    overflow: hidden;
    padding: 16px;
    gap: 8px;
`
export const InflowChartHeader = styled.div`
        display: grid;
        grid-template-columns: 3fr 1fr;
        width: 100%;
        height: 25%;
        padding: 2px 0px;
`

export const AgentsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2px;
    justify-items: center;
`

export const HeaderTitleContainer= styled.div`
    gap: 1px;
`
export const HeaderTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #171717;
`
export const HeaderSubtitle = styled.p`
    font-size: 12px;
    font-weight: 200;
    color: #b9b9b9;
    margin: 0px;
`
export const Agents = styled.div`
    display: grid;
`
export const AgentsTitle = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    grid-gap: 4px;
    justify-items:left;
`
export const AgentsTitleCircle = styled.div<{$color: string}>`
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: ${props => props.$color};
    justify-self: right;
   
`
export const AgentsCircleValue = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: #b9b9b9;
    margin: 0px;
`
export const AgentsSubtitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #171717;
    margin: 0px;
`


export const NewUsersChartWrapper = styled(InflowChartCont)`
    background: #990d81;
  
`

export const UsersFooter = styled.div`
    display: grid;
    justify-items: left;
    gap: 2px;
`
export const UsersFooterTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    color: #fff;
`

export const UsersFooterSubTitle = styled.p`
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    color: #fff;
`

export const UserSubSpan = styled.span`
    font-size: 10px;
    font-weight: 200;
    margin: 0;
    color: #fff;
`

export const RequestContentWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 8px;
    background: #ffffff;
    max-height: 320px;
    border-radius: 8px;
    overflow: auto;
`
export const RecentRequests = styled.div`
    padding: 16px;
    gap: 8px;
    height: auto;
`
export const RequestTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    color: #141414;
    margin: 0px;
`
export const RequestHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 4px;
    justify-items:left;
    padding: 16px;
    border-bottom: 1px solid #F5F5F5;

`
export const RequestHeading = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #8392AB;
    margin: 0px;
`

export const RequestType = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #9AA6BB;
    margin: 0px;
`

export const RequestStatus = styled.div<{$status: string}>`
    width: 55px;
    height: 21px;
    border-radius: 30%;
    background: ${props => props.$status === 'pending'? '#FFF7EB': '#EFF8F2' };
    display: grid;
    align-items: center;
    justify-items: center;
`
export const RequestStatusContent = styled.p<{$status: string}>`
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.$status === 'pending'? '#FFC267': '#63B67F' };
    margin: 0px;
    text-transform: capitalize;
`

export const RequestArrowBg = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 100%;
    background: #EEF5FD;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NameEmailWrapper= styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    grid-gap: 8px;
    justify-items:left;
`

export const NameEmailProfile = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background: #d8d8d8;
`
export const NameEmailContent = styled.div`
    display: grid;
    align-items: center;
    grid-gap: 1px;
    justify-items:left;

`

export const Name = styled.p`
    margin: 0px;
    font-size: 14px;
    font-weight: bold;
    color: #141414;
    text-transform: capitalize;
`
export const Email = styled.p`
    margin: 0px;
    font-size: 10px;
    font-weight: 500;
    color: #8392AB;
`
