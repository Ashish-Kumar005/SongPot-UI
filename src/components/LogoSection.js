import React from 'react'
import logo from '../assets/LogoSection/Logo.png'
import logo1 from '../assets/LogoSection/Logo-1.png'
import logo2 from '../assets/LogoSection/Logo-2.png'
import logo3 from '../assets/LogoSection/Logo-3.png'
import logo4 from '../assets/LogoSection/Logo-4.png'
import logo5 from '../assets/LogoSection/Logo-5.png'
import logo6 from '../assets/LogoSection/Logo-6.png'
import logo7 from '../assets/LogoSection/Logo-7.png'
import logo8 from '../assets/LogoSection/Logo-8.png'

const LogoSection = () => {

    const logos = [
        `${logo}`,
        `${logo1}`,
        `${logo2}`,
        `${logo3}`,
        `${logo4}`,
        `${logo5}`,
        `${logo6}`,
        `${logo7}`,
        `${logo8}`
    ]
  return (
    <div className="logo-container">
        {
            logos.map((logo, index) => {
                return (
                    <div className="logo-box" key={index}>
            <img src={logo} alt="logo" />
        </div>
                )
            })
        }
    </div>
  )
}

export default LogoSection