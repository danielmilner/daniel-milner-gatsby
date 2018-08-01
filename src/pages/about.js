import React from 'react'
import PageTitle from '../components/PageTitle'
import PageContainer from '../components/PageContainer'
import PageText from '../components/PageText'
import H2 from '../components/H2'
import Link from 'gatsby-link'

const AboutPage = () => (
  <PageContainer>
    <PageTitle>About</PageTitle>
    <H2>Hey There, I'm Daniel</H2>
    <PageText>
      First and foremost, I'm a husband and a father. By day, I'm an Information
      Technology Specialist at{' '}
      <a href="https://sct-usa.com/" target="_blank" rel="noopener noreferrer">
        Scientific Cutting Tools, Inc.
      </a>{' '}
      By night, I'm the lead developer at{' '}
      <a
        href="https://firetreedesign.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        FireTree Design
      </a>
      . I've been working in the IT field for over 20 years and love to create
      and develop new things.
    </PageText>
    <H2>Web Development</H2>
    <PageText>
      I've been a web developer for well over 10 years now. One of the first
      sites that I helped develop was a software download site called RadFiles.
      Since then, I've created a wish list site and a prayer journal site, both
      of which are no longer active. My day job has also led to the creation of
      severl Intranet sites for various tasks. In 2012, I started developing
      custom themes and plugins for WordPress. I still have much to learn, but
      am enjoying the journey.
    </PageText>
    <PageText>
      Most recently, I've taken up React and begun to hone my JavaScript skills.
    </PageText>
    <H2>Software Development</H2>
    <PageText>
      I wrote my first piece of publicly available software immediately after
      Windows XP was released to retail. (Approximately September of 2001) At
      that point, I was highly into tweaking/customizing Windows and wrote what
      is to my knowledge the first program that was available to modify and
      manage Windows XP logon screens. The program was called{' '}
      <strong>Logon Loader</strong> and had been downloaded over 1 million
      times. Although I have no maintained Logon Loader for several years, you
      can still find it on a number of download sites.
    </PageText>
    <PageText>
      The second piece of software that I created was called{' '}
      <strong>Net Profiles</strong>. As you may have guessed from the name, it
      allows you to create network profiles that can be loaded on demand. Useful
      for moving a windows laptop from home/work/school/etc without having to
      manually change network settings, mapped drive, and default printers. In
      May of 2009, I released Net Profiles as open source software and ceased
      active development approximately 2 years later. Luckily, the project has
      been picked up by some new developers and is currently in active
      development as{' '}
      <a
        href="https://github.com/netprofilesmod/netprofilesmod"
        target="_blank"
        rel="noopener noreferrer"
      >
        Net Profiles
        <sup>mod</sup>
      </a>
      .
    </PageText>
    <PageText>
      At my day job, I continue to write Windows software. the most recent and
      robust project being a custom quote management system for creating and
      archiving wuotes for customers. The project integrates wiht our accounting
      system for security and authentication as well as product and customer
      information.
    </PageText>
  </PageContainer>
)

export default AboutPage
