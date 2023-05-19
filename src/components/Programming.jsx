import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"

// for incorporating title in tech section
import {motion} from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import {styles} from '../styles'

const Programming = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
    </motion.div>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
            <p className="text-center">{technology.name}</p>
          </div>
        )

        )
      }
    </div>
    </>
  )
}

export default SectionWrapper(Programming,"")