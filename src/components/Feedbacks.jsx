import React from 'react'
import Tilt from "react-parallax-tilt"  // modified import due to peer dependancy issues
import {motion} from 'framer-motion'

import {styles, layout} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import columbia from "../assets/education/columbia.png"
import {FaGraduationCap, FaBook, FaAward} from "react-icons/fa"
import { slideIn } from "../utils/motion"

import { testimonials } from '../constants'

const features = [
  {
    id: "feature-1",
    icon: (
      <>
        <FaGraduationCap className='w-[50%] h-[50%] object-contain'/>
      </>
    ),
    title: "Bachelor of Science",
    content:(
      <div className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        <p>Major: Computer Science / Minor: Economics (Finance)</p>
        <p>Expected May 2025</p>
      </div>
    )
  },
  {
    id: "feature-2",
    icon: (
      <>
        <FaBook className='w-[50%] h-[50%] object-contain' />
      </>
    ),
    title: "Courseworks",
    content:(
      <div className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        <p>GPA: 3.98 / 4.0</p>
        <p>Machine Learning, Natural Langauge Processing,</p>
        <p>Engineering Software as a Service, Computer Networks, </p>
        <p>Financial Economics, Econometrics...</p>
      </div>
    )
  },
  {
    id: "feature-3",
    icon: (
      <>
        <FaAward className='w-[50%] h-[50%] object-contain' />
      </>
    ),
    title: "Honors",
    content:(
      <div className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        <p>Davis Scholar, Columbia Undergraduate Scholars Program</p>
        <p>Dean's List</p>
      </div>
    )
  },
];

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !==features.length-1 ? 'mb-6' : 'mb-0'} feature-card hover:bg-blue-500 duration-300`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-tertiary`}>
      {icon}
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      {content}
    </div>
  </div>
)

const LeadershipCard = ({index, testimonial, name, date, title, image, link}) => (
  <motion.div
    variants={fadeIn("","spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border hover:border-indigo-500 duration-300'
  >
    <div className='mt-1' onClick={() => window.open(link, "_blank")}>
    <p className='text-white font-medium text-[14px]'>{title}</p>
      <div className='mt-2 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[17px]'>{name}</p>
          <p className='mt-1 text-secondary text-[12px]'>{date}</p>
        </div>
        <img 
          src={image}
          alt={name}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
) 
const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Education</h2>
      </motion.div>
      <section id="features" className={layout.section}>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
          <div className={layout.sectionInfo}>
            <h3 className="text-white font-bold text-[40px] mb-3">Columbia University</h3>
            <p className={styles.sectionSubText}>Fu Foundation School of Engineering <br /> Class of 2025</p>
            <Tilt className='xs:w-[250px] w-full mt-10'>
                <img src={columbia} className='w-30 h-30 object-contain ml-20' />
            </Tilt>
          </div>
        </motion.div>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
          <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                  <FeatureCard key ={feature.id} {...feature} index={index} />
                )
                )}
          </div>
        </motion.div>
      </section>

      <div className='mt-12 bg-black-100 rounded-[20px] '>
        <div className={`${styles.paddingX} -mt-20 pb-8 flex flex-wrap gap-3`}>
          {testimonials.map((testimonial, index) =>(
            <LeadershipCard 
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          )
          )}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Feedbacks,"education")