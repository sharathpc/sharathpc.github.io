import type { NextPage } from 'next'

import AboutMeSection from '../components/AboutMeSection'
import ArticlesSection from '../components/ArticlesSection'
import ContactMeSection from '../components/ContactMeSection'
import ExperienceSection from '../components/ExperienceSection'
import FooterSection from '../components/FooterSection'
import GoTopButton from '../components/GoTopButton'
import HeaderSection from '../components/HeaderSection'
import ProjectsSection from '../components/ProjectsSection'
import ServicesSection from '../components/ServicesSection'
import SkillsSection from '../components/SkillsSection'


const Home: NextPage = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Profile &mdash; Free Website Template, Free HTML5 Template by freehtml5.co</title>
      <meta name="description" content="Free HTML5 Website Template by freehtml5.co" />
      <meta name="keywords"
        content="free website templates, free html5, free template, free bootstrap, free website template, html5, css3, mobile first, responsive" />
      <meta name="author" content="freehtml5.co" />
      <meta property="og:title" content="" />
      <meta property="og:image" content="" />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="" />
      <meta property="og:description" content="" />
      <meta name="twitter:title" content="" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
      <meta name="twitter:card" content="" />
      <div className="fh5co-loader"></div>
      <div id="page">
        <HeaderSection />
        <AboutMeSection />
        <ExperienceSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ArticlesSection />
        <ContactMeSection />
        <FooterSection />
        <GoTopButton />
      </div >
    </>
  )
}

export default Home
