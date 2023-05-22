import React from 'react'

import {FaGithub, FaLinkedin, FaInstagram, FaFileAlt} from "react-icons/fa"

const SocialLinks = () => {

    const links =[
        {
          id: 1,
          child: (
            <>
              Linkedin <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/jacklyn-tsai-4699001bb/",
          style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
              <>
                Resume <FaFileAlt size={30} />
              </>
            ),
            href: "./resume.pdf",
          },
          {
            id: 3,
            child: (
              <>
                Github <FaGithub size={30} />
              </>
            ),
            href: "https://github.com/jacklynchiaentsai",
          },
          {
            id: 4,
            child: (
              <>
                Instagram <FaInstagram size={30} />
              </>
            ),
            href: "https://www.instagram.com/jacklyn_tsaiii/",
            style: 'rounded-br-md'
          },
    ];

  return (
    <div className='hidden md:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href, style, download}) => (
              <li className={`flex justify-between items-center w-40 h-14 px-4 bg-tertiary ml-[-100px] hover:ml-[-10px] hover-rounded-md duration-300 ${style}`}>
                <a 
                    href={href}
                    className='flex justify-between items-center w-full text-white'
                    target='_blank'
                    rel='noreferrer'
                >
                    {child}
                </a>
              </li>  
            )

            )}
        </ul>
    </div>
  )
}

export default SocialLinks