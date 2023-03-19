import React, { useEffect, useState } from 'react'
import { useToggleTheme } from '../utils/useToggle'
import ThemeIcon from './ThemeIcon'
import cn from 'clsx'
import { FaChevronRight } from 'react-icons/fa'
import Cross from './icons/Cross'

const Switch = () => {
    const [display, setDisplay] = useState(false)
    const { theme, themes, setTheme } = useToggleTheme()
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
    
  return (
    <div className="relative ml-4 lg:mr-4 ">
    <div
      className="flex items-center relative"
      onClick={() => setDisplay(!display)}
    >
      <button
        className={
          'w-[50px] h-10 pl-2 pr-1 rounded-md border border-secondary-2 flex items-center justify-between transition-colors ease-linear hover:border-accent-3 hover:shadow-sm'
        }
        aria-label="Theme Switcher"
      >
        <span className="flex flex-shrink items-center">
          <ThemeIcon width={20} height={20} theme={theme} />
          {/* <span className={'capitalize leading-none ml-2'}>
            {theme}
          </span> */}
        </span>
        <span className="cursor-pointer">
          <FaChevronRight
            className={cn('transition duration-300', {
              ['rotate-90']: display,
            })}
          />
        </span>
      </button>
    </div>
    <div className="absolute top-0 right-0">
      {themes.length && display ? (
        <div
          className={
            'fixed shadow-lg right-22 top-12 mt-2 origin-top-right w-full h-[200px] outline-none bg-accent-0 z-40 lg:absolute lg:border lg:border-accent-1 lg:shadow-lg lg:w-56 lg:h-auto'
          }
        >
          <div className="flex flex-row justify-end px-6">
            <button
              className="md:hidden"
              onClick={() => setDisplay(false)}
              aria-label="Close panel"
            >
              <Cross className="h-6 w-6" />
            </button>
          </div>
          <ul>
            {themes.map((t) => (
              <li key={t}>
                <button
                  className="flex w-full capitalize cursor-pointer px-6 py-3 transition ease-in-out duration-150 text-primary leading-6 font-medium items-center hover:bg-accent-1"
                  role={'link'}
                  onClick={() => {
                    setTheme(t)
                    setDisplay(false)
                  }}
                >
                  {t}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  </div>  )
}

export default Switch


