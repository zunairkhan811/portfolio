import React, { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { headerData } from '../../data/headerData'

function Footer() {

    const shortname = (name) => {
        if(name.length > 10) {
            return name.split(" ")[0]
        } else {
            return name
        }
    }

    const { theme }  = useContext(ThemeContext)

    return (
        <div className="footer" style={{backgroundColor: theme.secondary}}>
            <p style={{color: theme.tertiary}}> 
                <span style={{color: theme.primary, margin: '0 0.5rem -1rem 0.5rem', fontSize:'14px'}}>
                    &copy; {new Date().getFullYear()} Richard Sikaonga. All rights reserved.
                    Developed by {shortname(headerData.name)}
                </span>
            </p>
        </div>
    )
}

export default Footer
