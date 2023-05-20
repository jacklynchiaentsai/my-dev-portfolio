import { SectionWrapper } from "../hoc"
import { languages } from "../constants"

// for incorporating title in section
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import {styles} from '../styles'

const Prolangs = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Programming Languages</h2>
    </motion.div>
    
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-9 text-center py-8 px-12 sm:px-0">
      {
        languages.map(({name, icon, style}) => (
          <div
            key={name}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={icon} alt={name} className="w-20 mx-auto" />
            <p>{name}</p>
          </div>
        )
        )
      }
    </div>

    </>
  )
}

export default  SectionWrapper(Prolangs,"")