// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }
import { useDarkMode } from 'next-dark-mode'
import React, { Fragment } from 'react'

export default function Home() {
  const { autoModeActive, darkModeActive, switchToAutoMode, switchToDarkMode, switchToLightMode } = useDarkMode()

  const findActive = (text) => {
    if (autoModeActive) return text === 'auto'
    else if (darkModeActive) return text === 'dark'
    else return text === 'light'
  }

  const toggleMode = (text) => {
    if (text === 'Auto') switchToAutoMode()
    if (text === 'Dark') switchToDarkMode()
    if (text === 'Light') switchToLightMode()
  }

  return (
    <div className={`layout ${darkModeActive ? 'dark' : 'light'}`}>
      <div className="switch">
        {['Auto', 'Dark', 'Light'].map((text, index) => (
          <Fragment key={index}>
            <input
              checked={findActive(text.toLowerCase())}
              id={`_${index}`}
              name="switch"
              onChange={() => toggleMode(text)}
              type="radio"
            />
            <label className="switch__label" htmlFor={`_${index}`}>
              {text}
            </label>
          </Fragment>
        ))}
        <div className="switch__indicator" />
      </div>
    </div>
  )
}