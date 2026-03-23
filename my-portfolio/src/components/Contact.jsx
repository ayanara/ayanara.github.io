import React from 'react'
import { SectionWrapper } from '../hoc';

const Contact = () => {
  return (
    <div className='flex justify-center items-center py-20'>
      <a href='https://www.linkedin.com/in/ayanara/'
        target='_blank'
        rel="noreferrer"
        className='mx-4'
      >
        <box-icon type="logo" name="linkedin" color="white"></box-icon>
      </a>

      <a href='https://github.com/ayanara'
        target='_blank'
        rel="noreferrer"
        className='mx-4'
      >
        <box-icon type="logo" name="github" color="white"></box-icon>
      </a>

      <a href='https://aya-nathane.medium.com/'
        target='_blank'
        rel="noreferrer"
        className='mx-4'
      >
        <box-icon type="logo" name="medium" color="white"></box-icon>
      </a>

      <a href='https://www.behance.net/ayanaranathane/'
        target='_blank'
        rel="noreferrer"
        className='mx-4'
      >
        <box-icon type="logo" name="behance" color="white"></box-icon>
      </a>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")