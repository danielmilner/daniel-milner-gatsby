import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem 0;
`

const DanielMilner = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 700;
  font-size: 10vw;
  color: #000;
  text-align: center;
  width: 100%;
  & > span {
    color: ${props => props.theme.primaryColor};
  }
`

const WhatIDo = styled.div`
  font-family: ${props => props.theme.sanSerifFont};
  font-weight: 300;
  font-size: 5vw;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
  color: ${props => props.theme.textColor};
  & > span {
    color: #000;
  }
`

const IndexPage = () => (
  <PageContainer>
    <DanielMilner>
      Daniel <span>Milner</span>
    </DanielMilner>
    <WhatIDo>
      {'{'} <span>webDeveloper</span> {'}'}
    </WhatIDo>
  </PageContainer>
)

export default IndexPage
