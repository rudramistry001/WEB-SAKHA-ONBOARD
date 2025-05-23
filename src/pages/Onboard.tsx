import React from 'react'
import { Fragment } from 'react'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs' // Import the AboutUs component
import OurProcess from './sections/OurProcesses' // Import the OurProcess component
import OurServices from './sections/services' // <--- NEW: Import the OurServices component
import Layout from '../components/Layout'
import SocialMediaMarketing from './sections/SocialMedia'
import SoftwareDevelopment from './sections/SoftwaredDevelopment'

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
          
          {/* Our Process Section */}
          <section id="our-process-section">
            <OurProcess />
          </section>

       
          {/* Social MediaSection */}
          <section id="social-media-section">
            <SocialMediaMarketing />
          </section>

          {/* Software Development Section */}
          <section id="software-development-section">
            <SoftwareDevelopment />
          </section>

          
          
        
          
         
       
        </div>
      </Layout>
    </Fragment>
  )
}

export default Onboard