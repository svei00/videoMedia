'use client'

import { ReactNode } from "react";
import {ThemeProvider} from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
            <div className="">
                {children}
            </div>
        </ThemeProvider>
  )
}
