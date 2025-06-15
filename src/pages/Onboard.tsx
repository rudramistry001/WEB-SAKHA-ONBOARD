import React from 'react'
import { Fragment } from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs' // Import the AboutUs component
import OurServices from './sections/services' // <--- NEW: Import the OurServices component
import Layout from '../components/Layout'
import SocialMediaMarketing from './sections/SocialMedia'
import CampaignManagement from './sections/CampaignManagement'
import FullStackOverview from './sections/FullStackOverview'
import TechnologyStack from './sections/TechnologyStack'
import AutomationPhilosophy from './sections/AutmationPhilosophy'

const Onboard: React.FC = () => {
  return (
    <Fragment>    
      <Layout>
        {/* Main Container */}
        <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
          {/* Hero Section */}
          <section id="hero-section">
            <Hero />
          </section>
          
          {/* About Us Section */}
          <section id="about-us-section">
            <AboutUs />
          </section>
          {/* Our Services Section (NEWLY ADDED) */}
          <section id="our-services-section"> {/* Added a unique ID for this section */}
            <OurServices />
          </section>
          {/* Social MediaSection */}
          <section id="social-media-section">
            <SocialMediaMarketing />
          </section>
            {/* Social MediaSection */}
          <section id="social-media-campaign-section">
            <CampaignManagement />
          </section>
          {/* Software Development Section */}
          <section id="software-development-section-01">
            <FullStackOverview />
          </section>
          <section id="software-development-section-02">
            <TechnologyStack />
          </section>
          <section id="software-development-section-02">
            <AutomationPhilosophy />
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Onboard