'use client'

import { MdLightMode, MdDarkMode} from "react-icons/md"
import {useTheme} from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeSwitch() {
  
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme, systemTheme} = useTheme()
  
 // useEffect to handle mounting.
  useEffect (() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme // If the current theme is system, use the system theme, otherwise use the current theme

  return (
    <div>
      {currentTheme === "dark" ? <MdLightMode onClick={() => setTheme("light")} className="text-xl cursor-pointer hover:text-secondary-light"/> : <MdDarkMode onClick={() => setTheme("dark")} className="text-xl cursor-pointer hover:text-primary-light" />}
    </div>
  )
}
