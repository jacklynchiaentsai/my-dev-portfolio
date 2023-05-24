import React from 'react'
import Tilt from "react-parallax-tilt"  // modified import due to peer dependancy issues
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

import {FaGithub, FaLinkedin, FaInstagram, FaFileAlt} from "react-icons/fa"

const about_links =[
        {
          id: 1,
          child: (
            <>
              <FaLinkedin />
            </>
          ),
          href: "https://www.linkedin.com/in/jacklyn-tsai-4699001bb/",
        },
        {
            id: 2,
            child: (
              <>
                <FaFileAlt />
              </>
            ),
            href: "./resume.pdf",
          },
          {
            id: 3,
            child: (
              <>
                <FaGithub />
              </>
            ),
            href: "https://github.com/jacklynchiaentsai",
          },
          {
            id: 4,
            child: (
              <>
                <FaInstagram />
              </>
            ),
            href: "https://www.instagram.com/jacklyn_tsaiii/",
          },
    ];

const SocialCard = ({index, child, href}) => {
  return (
    <div className='hover:text-white duration-300' onClick={() => window.open(href, "_blank")}>
      {child}
    </div>
  )
}

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options ={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Jacklyn Chia-En Tsai</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Hi welcome to my Developer Portfolio! I'm an undergraduate junior (SEAS'25) in Columbia University majoring in Computer Science and minoring in Economics and Entrepreneurship.
        I have 4+ years of working experience in software engineering and ML-driven data analytics, and am very passionate about building efficient, user-friendly, scalable real-world applications.
        Keep scrolling for more!
      </motion.p>
      
      <div className='text-3xl flex gap-16 py-3 text-secondary mt-2'>
        {
          about_links.map((social, index) => (
            <SocialCard index={index} {...social} />
          )
          )
        }
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
        )
        )}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")