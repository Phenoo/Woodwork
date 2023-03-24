import React from 'react'

import Container from '../Container/Container'


const AboutText = () => {
  return (
    <div className="bg-[#948575] p-4 md:p-12">
      <Container>
        <Container>
          <p className={`text-lg  text-white md:text-3xl py-12 md:w-[700px]`}>
          &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reprehenderit explicabo odit harum
             cumque provident, quos doloremque quasi maxime ipsum aspernatur commodi modi possimus 
             temporibus enim aut est maiores labore iure magnam architecto accusantium minima? <br /> <br />
              Dolore unde adipisci deserunt dolorem libero esse repellendus a ducimus eum illo eamaxime sit.&quot;
          </p>
        </Container>
      </Container>
    </div>
  )
}

export default AboutText