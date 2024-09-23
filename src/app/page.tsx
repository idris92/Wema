'use client'
import { useEffect, useLayoutEffect, useState } from "react";

import DashboardWrapper from "./Dashboard";
import { HomeContentContainer, HomeStatContainer,  InflowChartCont, RecentRequests, InflowChartHeader,  InflowStatContainer, RequestsContainer, HeaderTitle,  Agents, HeaderTitleContainer, HeaderSubtitle, AgentsTitle, AgentsSubtitle, AgentsTitleCircle, AgentsCircleValue, AgentsWrapper, NewUsersChartWrapper, UsersFooter, UsersFooterTitle, UsersFooterSubTitle, UserSubSpan, RequestTitle, RequestHeader, RequestHeading, RequestContentWrapper,  } from "./styles";
import StatCard from "./Components/StatCard";
import InflowChart from "./Components/InflowChart";
import NewUsersChart from "./Components/NewUsersChart";
import Request from "./Components/Request";
import { Requests, statCardData } from "@/utils";

 

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setLoading(false)
  }, []);
  return (
    loading ? (
      <p>loading...</p>
    ) : (
      <DashboardWrapper>
              <HomeContentContainer>
                    <HomeStatContainer>
                      {
                        statCardData.map((value, index)=>(
                          <StatCard key={index} bgColor={value?.bgColor} color={value?.color} bgIcon={value?.bgIcon} title={value?.title} subtitle={value?.subtitle} rateIcon={value?.rateIcon} rate={value?.rate} date={value?.date} rateColor={value?.rateColor}/>
                        ))
                      }
                  
                    </HomeStatContainer>
                    <InflowStatContainer>
                        
                            <InflowChartCont>
                              <InflowChartHeader>
                                    <HeaderTitleContainer>
                                        <HeaderTitle>Users Inflow Statistics</HeaderTitle>
                                        <HeaderSubtitle>Nov - July</HeaderSubtitle>
                                    </HeaderTitleContainer>
                                    <AgentsWrapper>
                                        <Agents>
                                            <AgentsTitle>
                                                <AgentsTitleCircle $color="#5F2FEA"></AgentsTitleCircle>
                                                <AgentsCircleValue>AGENTS</AgentsCircleValue>
                                            </AgentsTitle>
                                            <AgentsSubtitle>475273</AgentsSubtitle>
                                        </Agents>
                                        <Agents>
                                            <AgentsTitle>
                                                <AgentsTitleCircle $color="#4BDE97"></AgentsTitleCircle>
                                                <AgentsCircleValue>USERS</AgentsCircleValue>
                                            </AgentsTitle>
                                            <AgentsSubtitle>782396</AgentsSubtitle>
                                        </Agents>
                                    </AgentsWrapper>
                              </InflowChartHeader>
                                  <InflowChart/>
                            </InflowChartCont>
                  
                            <NewUsersChartWrapper>
                                    <NewUsersChart/>
                                    <UsersFooter>
                                        <UsersFooterTitle>NewUsers</UsersFooterTitle>
                                        <UsersFooterSubTitle>(+23%) <UserSubSpan>than last week</UserSubSpan></UsersFooterSubTitle>
                                    </UsersFooter>
                            </NewUsersChartWrapper>

                    </InflowStatContainer>
                    <RequestsContainer>
                          <RequestContentWrapper>
                              <RecentRequests>
                                      <RequestTitle>Recent Requests</RequestTitle>
                              </RecentRequests>
                              <RequestHeader>
                                      <RequestHeading>Name/Email</RequestHeading>
                                      <RequestHeading>Type</RequestHeading>
                                      <RequestHeading>Status</RequestHeading>
                                      <RequestHeading>Date</RequestHeading>
                              </RequestHeader>
                              {
                                Requests.map((value, index)=>(
                                  <Request key={index} name={value?.name} email={value?.email} requestType={value?.type} status={value?.status} date={value?.date} index={index}/>
                                ))
                              }
                              
                            
                          </RequestContentWrapper>
                    </RequestsContainer>
              </HomeContentContainer>
      </DashboardWrapper>
    )
   
);
}
