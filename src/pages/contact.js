import React from 'react'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import H2 from '../components/H2'

const ContactPage = () => (
  <PageContainer>
    <PageTitle>Contact</PageTitle>
    <H2>Where To Stalk Me</H2>
    <PageText>
      As a self-diagnosed introvert, I'm not very active online...but when I am,
      you can find me here:
      <ul>
        <li>
          <a href="https://twitter.com/danielmilner/">Twitter</a>
        </li>
        <li>
          <a href="https://github.com/danielmilner/">GitHub</a>
        </li>
      </ul>
    </PageText>
  </PageContainer>
)

export default ContactPage
