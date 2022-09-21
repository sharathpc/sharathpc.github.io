import type { NextPage } from 'next'
import Head from 'next/head'
import ScrollToTop from 'react-scroll-to-top'

import AboutMeSection from '../components/AboutMeSection'
import ArticlesSection from '../components/ArticlesSection'
import ContactMeSection from '../components/ContactMeSection'
import ExperienceSection from '../components/ExperienceSection'
import FooterSection from '../components/FooterSection'
import HeaderSection from '../components/HeaderSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>sharathpc Portfolio</title>
        <meta name="description" content="Sharath Chandra portfolio with resume and contact details" />
        <meta name="keywords" content="" />
        <meta name="author" content="sharathpc" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta property="og:description" content="" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="" />
        <meta name="twitter:card" content="" />
      </Head>
      <div id="page">
        <HeaderSection />
        <AboutMeSection />
        <ExperienceSection />
        <ServicesSection />
        {/* <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactMeSection />
        <FooterSection /> */}
        <ScrollToTop smooth component={
          <a className="js-gotop">
            <i className="icon-arrow-up22"></i>
          </a>
        } />
      </div >
    </>
  )
}

export default Home
