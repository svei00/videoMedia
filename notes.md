# VideoMedia App

## Setting up the App.
1. Check nodejs version. You should have node v18 or higer.
   - Open terminal an type: **node -v** 
2. Go to [NextJS](https://nextjs.org/) web page also you can search for in in [Google](www.google.com).
   - Hit in the **Get Started** button.
   - Then on the top left hit in **Installation** hyperlink
   -  Install the NextJS app.
      * Via **npm** `npx create-next-app@latest`
      * via **yarn** `yarn create next-app`
3. It would ask you for the name of the app, you can type **VideoMedia** and hit enter.
   - What is your project named? ... **videomedia**
   - Would you like to use TypeScript? ... No / **Yes**
   - Would you like to use ESLint? ... No / **Yes**
   - Would you like to use Tailwind CSS? ... No / **Yes**
   - Would you like to use `src/` directory? ... No / **Yes**
   - Would you like to use App Router? (recommended) ... No / **Yes**
   - Would you like to customize the default import alias (@/*)? » No / **Yes**
   - What import alias would you like configured? ... **@/**\*   
4. After the installation is done, you can open the folder where the project is.
   - In terminal type `cd videomedia`
   - Now you can run the app.
     * Via **npm** `npm run dev`
     * via **yarn** `yarn run dev`
5. After the app is running, you can open the app in the browser.
   - Type `http://localhost:3000` in the browser.
6. Now you can start coding your app by going to **/src/app** and open file **page.tsx**.
   - You can delete all the previous code.
   - By using the snippet RFC (React Funtional Component) code Home:
     `import React from 'react'

         export default function Home() {
            return (
               <div>Home</div>
            )
         }
         `
   - Go to **globals.css** css file and delete the unnecesary code, just leave the:
     `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
     ` 
7. Change the **metadata** in the **layout.tsx** file.
   - Go to **/src/app**
   - Change export const metadata::
     * `title: "Video Media",`
     * `description: "This is a movie and series database",`
8. Add Prettier to make the app more consice.
   - Via **npm** `npm install --save-dev prettier`
   - via **yarn** `yarn add --dev prettier`
   - Add to the **/** root the file **.prettierrc.js**
   - Open the file and add the configuration:
      `
         module.exports = {
            "semi": false,
            "singleQuote": true,
            "trailingComma": "none",
            "printWidth": 80,
            "tabWidth": 2,
            "useTabs": true
         };
      `
   - Also if you don't have the file **.eslintrc.json** add it into **/** and add the code:
   - `
   - {
      "extends": [
         "next/core-web-vitals",
         "prettier"
      ],
      "rules": {
         "prettier/prettier": "error"
      }
    }
   `
   - If having issues with eslint check your packages
     * **npm** `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
     * **yarn** `yarn add --dev eslint-config-prettier eslint-plugin-prettier`
  
9. Add TailwindCSS to the project.
   - Via **npm** `npm install -D tailwindcss postcss autoprefixer`
   - via **yarn** `yarn add -D tailwindcss postcss autoprefixer`
   - Then `npx tailwindcss init -p` to create the **tailwind.config.js** file.

## Clone the repository
1. Go to [GitHub](https://github.com/)
2. Create new Reposity **VideoMedia** 
   - Go to **Repositories**
   - Then hit in **New** button, usually green color.
   - Type **VideoMedia** in the **Repository name** field.
   - Hit in **Create repository** button.
   - Hit in **Code** button.
   - Copy the **HTTPS** link.
3. Go to Visual Studio Code and open the terminal.
   - Type `git init`
   - Then `git add .`
   - After `git commit -m "Setting up NextJS"`
   - Type `git branch -M main`
   - Now `git remote add origin https://github.com/svei00/videoMedia.git` where **https://github.com/svei00/videoMedia.git** is the name of your repository
   - Finally `git push -u origin main`

## Fixing the LF (Line Feed) and CRLF(Carriage Return Line Feed).
1. Change the Global Configuration: `git config --global core.autocrlf true`
2. Local Configuration (for a specific repository): `git config core.autocrlf true`

### Useful Extensions
- ES7+ React/Redux/React-Native snippets.
- Auto Rename Tag.
- Multiple cursor case preserve.
- Prettier - Code formatter.
- Tailwind CSS IntelliSense.

## Defining the Color Pallette(Theming).
1. Go to **/** folder and open the **tailwind.config.js** file.
2. In the **theme** section add the **colors** section to add the design tokens inside the extend add: 
   `
   colors: { primary: {
                  light: "#BF00FF", // Electric Purple
                  Default: "#7C3AED", // Purple
                  dark: "#0D0D0D",
                  gold: "#D4C19C",
                  text: "#C0C0C0"
                }, 
                secondary: {
                  light: "#7DF9FF", // Electric Blue 
                  Default: "#BDBDBD",
                  dark: "#828282"}, 
                tertiary: {
                  light: "#39FF14", // Neon Green
                  Default: "#E0E0E0",
                  dark: "#C4C4C4"} },
                accent: "#FF00FF", // Neon Pink
   `

## Create the Header Section.
1. Go to **/src/** and create a new folder **components**.
2. Inside the **components** folder create a new file **Header.tsx**.
3. In the **Header.tsx** file, create a React Functional Component with the RFC snippet:
   `
   import React from 'react'

   export default function Header() {
      return (
         <div>Header</div>
      )
   }
   `
4. Now go to **/src/app/** folder and open **layout.tsx** file.
   - In the **RootLayout** function inside the *<body>* tag and before the *{children}* add:
     `
      <body className={inter.className}>
         <Header />
         {children}
      </body>
     `
   - If not auto import do it manually: `import Header from "@/components/Header";`
   - Now you can see the header in the browser.
5. In **/src/components** and create file **MenuItem.tsx**
   - With RFC snippet (React Funtional Component) create:
     `
      import React from 'react'

      export default function MenuItem() {
         return (
            <div>MenuItem</div>
         )
      }
     `
6. Install **ReactIcons** to populate the MenuItems inside the Header.
   - Via **npm** `npm install react-icons`
   - Via **yarn** `yarn add react-icons`
7. Now come back to **Header.tsx** and start working in the Menu.
   - In the second dive around line of code 10 add: `<MenuItem title="home" address="/" Icon={AiFillHome}>`
     * Where the props are: title, address and Icon.
     * ALT + SHIFT + Down Arrow to duplicate the line.
     * If not auto import *AiFillHome* do it manually: `import { AiFillHome } from 'react-icons/ai';`
     * Do the same with `<MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill}>` and import the Icon manually if it won't do automatically.
   - Now you can see the MenuItems in the browser.
8. At the moment the **MenuItem.tsx** should look like this:
   `
      import Link from 'next/link'
      import React from 'react'
      import {iconType} from 'react-icons'

      export interface MenuItemProps {
         title: string,
         address: string,
         Icon: iconType
      }

      const MenuItem = ({title, address, Icon}: MenuItemProps): JSX.Element => {
      // const {title, address, Icon} = props
      return (
         <Link href={address} className='hover:text-purple-600'>
            <Icon className="text-2xl sm:hidden"/>
            <p className='capitalize hidden sm:inline text-sm font-semibold'>{title}</p>
         </Link>
         )
      }

      export default MenuItem;
   `
9. While the Home.tsx** Should look like this:
   `
      import React from 'react'
      import MenuItem from './MenuItem'
      import { AiFillHome } from 'react-icons/ai'
      import { BsFillInfoCircleFill } from 'react-icons/bs'
      import Link from 'next/link';

      interface HeaderProps {

      }

      const Header = ({}:HeaderProps): JSX.Element => {
      
         return (
            <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
               <div className='flex gap-4'>
                  <MenuItem title="home" address="/" Icon={AiFillHome} />
                  <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
               </div>
         
               <Link href={'/'} className='flex gap-1 items-center'>
                  <span className='text-2xl text-gray-900 font bold bg bg-purple-700 py-1 px-2 rounded-lg'>VideoMedia</span>
                  <span className='text-xl hidden sm:inline'>Collection</span>
               </Link>
            </div>
            );
         };
         
         export default Header;
   `


## Add Dark Mode.    
1. Install the package **next-themes** to add the dark mode.
   - Via **npm** `npm install next-themes`
   - Via **yarn** `yarn add next-themes`
2. Now go to **/src/app** and create **Providers.tsx** reasons is that NextJS components are server side and we need a client side.
3. Create a RFC (React Functional Component):
   `
   Add the typescript here. Remember that the Themeprovider is frontEnd and that way we are separating back and front end.
   `
4. In **/src/app/** file **layout.tsx** add the **Providers** component.
   - Go to **RootLayout** funtion and:
     Change:
     `
      <body className={inter.className}>
        <Header />
        {children}
      </body>
     `
     to:
     `
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
     `
5. Go back the the **Providers.tsx** file and add the **ThemeProvider** component.
   - Change:
     `
      const Providers = ({ children }: { children: React.ReactNode }) => {
        return (
          <>
            {children}
          </>
        );
      };
     `
     to:
     `
      const Providers = ({ children }: { children: React.ReactNode }) => {
        return (
          <ThemeProvider attribute='class' defaultTheme='system' enableColorScheme='true'>
            {children}
          </ThemeProvider>
        );
      };
     `
6. Go to root and open **tailwind.config.ts** and add and the very end the line:
   `darkMode: "class",` around line of code 40.
7. Create another component on **/src/app** called **DarkModeSwitch.tsx**
   - Add the RFC (React Functional Component)
      `
      import React from 'react'

         export default function DarkModeSwitch() {
         return (
            <div>DarkModeSwitch</div>
         )
      }

      `
8. Go to **Header.tsx** and add the **DarkModeSwitch** component.
   - Change:
     `
      <div className='flex justify-between items-center'>
         <Link href='/'>
            <span className='text-4xl font-bold text-white'>Movie</span>
            <span className='text-xl hidden sm:inline'>Collection</span>
         </Link>
      </div>
     `
     to:
     `
      <div className='flex justify-between items-center'>
         <Link href='/'>
            <span className='text-4xl font-bold text-white'>Movie</span>9.

9. Files should look like this:
    - **Providers.tsx**:
      `
     'use client'

         import { ReactNode } from "react";
         import {ThemeProvider} from "next-themes";

         interface ProvidersProps {
         children: ReactNode;
         }

         export default function Providers({children}: ProvidersProps) {
         return (
            <ThemeProvider defaultTheme="system" attribute="class">
                     <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
                        {children}
                     </div>
               </ThemeProvider>
            )
         }
         `
      - **DarkModeSwitch.tsx**:
      `
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

      `
   - **Header.tsx**
      `
         import React from 'react'
         import MenuItem from './MenuItem'
         import { AiFillHome } from 'react-icons/ai'
         import { BsFillInfoCircleFill } from 'react-icons/bs'
         import Link from 'next/link';
         import DarkModeSwitch from './DarkModeSwitch';

         interface HeaderProps {


         }

         const Header = ({}:HeaderProps): JSX.Element => {
         
            return (
               <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
                  <div className='flex gap-4'>
                     <MenuItem title="home" address="/" Icon={AiFillHome} />
                     <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
                  </div>
                  <div className='flex gap-4 items-center'>
                  <DarkModeSwitch/>
                  <Link href={'/'} className='flex gap-1 items-center'>
                     <span className='text-2xl text-primary-text font bold bg bg-primary-light hover:bg-secondary-light py-1 px-2 rounded-lg'>VideoMedia</span>
                     <span className='text-xl hidden sm:inline mt-4 mr-4 mb-4 border-t-4 border-r-4 border-b-4 border-primary-orange rounded-tr-md rounded-br-md overflow-x-visible -ml-pxtext-xl hidden sm:inline mt-4 mr-6 mb-4 border-t-4 border-r-4 border-b-4 border-primary-orange rounded-tr-md rounded-br-md overflow-x-visible -ml-1.5 pl-1 pr-2'>Collection</span>
                  </Link>
                  </div>
               
               </div>
               );
            };
            
            export default Header;
      `

## Create the About Page.
1. Go to **/src/app** and create a new folder called **about**.
2. Inside the **about** folder create a new file called **page.tsx**.
   - Create a RFC (React Funtional Component).
     `
      import React from 'react'

         export default function About() {
         
         return (
            <div>About VideoMedia</div>
         )
      }

     `
   - As you can see inmediatelly the route to the pages has been create.
  
  3. The page should look like this:
     `
      import React from 'react'

      const About: React.FC = () => {
      return (
         <div className='max-w-6xl mx-auto p-3 space-y-4 text-justify'>
            <h1 className='text-2xl font-medium text-primary-light'>About</h1> 
            <p>Welcome to our movies and series collection showcase! This website is a dedicated space where movie and series enthusiasts can explore my extensive collection of Blu-rays. Inspired by the layout and functionality of IMDb, our goal is to provide a visually appealing and informative platform for fellow collectors and cinephiles. Whether you're a fan of classic films, modern blockbusters, or hit TV series, you'll find a rich and diverse array of titles meticulously curated for your viewing pleasure.</p>
            <p>Our collection spans various genres and eras, ensuring there's something for everyone. Each entry is accompanied by detailed information, including synopsis, cast and crew, release dates, and personal reviews. This meticulous cataloging not only helps you discover new titles to add to your own collection but also offers insights and recommendations based on your viewing preferences. We aim to create an interactive community where visitors can share their thoughts, rate movies, and engage in discussions about their favorite films and series.</p>
            <p>In addition to showcasing my personal collection, we strive to foster a sense of connection and shared passion among movie lovers. Our platform allows users to track their own collections, create wishlists, and follow updates on newly added Blu-rays. We believe that collecting movies and series is more than just a hobby—it's a way to preserve and celebrate the art of cinema. Thank you for visiting, and we hope you enjoy exploring our collection as much as we have enjoyed building it.</p>
            </div>
      )
      }
      export default About
     `

## Create the Navbar Component.
1. Go to **/src/components** and create a new file called **Navbar.tsx**.
   - Create a RFC (React Funtional Component).
     `
      import React from 'react'
      import NavbarItem from './NavbarItem'

      export default function Navbar() {
      return (
         <div className='flex dark:bg-primary-light bg-secondary-light p-4 lg:text-lg justify-center gap-6'>
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Top Rated" param="fetchTopRated"/>
         </div>
         )
      }

   `
2. Create another React Funtional Component called **NavbarItem.tsx**.
   - Create a RFC (React Funtional Component).
     `
         'use client'

      import Link from 'next/link'
      import { useSearchParams } from 'next/navigation'

      interface NavbarItemProps {
         title: string,
         params: string
      }

      const NavbarItem = ({title, param}): JSX.Element => {
      
      const searchParams = useSearchParams();
      const genre = searchParams.get('genre');

      return (
         <div>
            <Link 
      className={`hover:font-bold ${genre === param ? 'font-bold underline underline-offset-8 decoration-4 decoration-primary-orange rounded-lg' : ''}`} 
      href={`/?genre=${param}`}
      >
      {title}
      </Link>
         </div>
      )
      }

      export default NavbarItem
   `
3. In the **/src/app/layout.tsx** add the *<Navbar>* component. Remember if not Autoimport do it: `import Navbar from "@/components/Navbar";`:
   - Was:
     `
      <Providers>
          <Header />
          {children}
      </Providers>
     `
   - Now:
     `
      <Providers>
          <Header />
          <Navbar />
          {children}
      </Providers>
     `

## Fetch Data from TMDB API in the Home Page.
1. Go to [Google](www.google.com) and search for **TMDB API** to get the API key.
2. Open page [TMBD Page](https://www.themoviedb.org/)
   - Then hit join TMDB and register with your data.
   - Account verification is required. Verify the account.
3. After the verification go to your initiar/avatar and select settings.
   - Then on the left panel hit on **API**
   - If don't have any API **Request** it.
4. On the **root directory** of your app:
   - Create .env.local file and add the API key.
   - Create the variable: **API_KEY** like this:
     `API_KEY = example_123456789`
5. Now ho to **/src/app/page.tsx** and add the following code:
   `
   import Results from "@/components/Results";

      const API_KEY = process.env.API_KEY;

      interface HomeProps {
      searchParams: {
         genre?: string;
      };
      }

      export default async function Home({ searchParams }: HomeProps): Promise<JSX.Element> {
      const genre = searchParams.genre || 'fetchTrending'
      
      const res = await fetch(
         `https://api.themoviedb.org/3${
            genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
         }?api_key=${API_KEY}&language=en-US&page=1`,
         { next: { revalidate: 10000 } } // Revalidate every 10000 seconds
      )

         if (!res.ok) {
            throw new Error('Failed to fetch data')
         }

      const data = await res.json()
      const results = data.results

         return (
            <div>
               <Results results={results} />
            </div>
         )
      }

   `
6. On **/src/componets** create another RFC componet on file **Results.tsx** and import it into **/src/app/page.tsx**
   Code should look like this:
   `
   import React from 'react'

      interface Movie {
         id: number;
         title: string;
         backdrop_path: string;
         overview: string;
         poster_path: string;
         release_date: string;
         vote_average: number;
         vote_count: number;
         popularity: number;
         original_language: string;
         original_title: string;
         genre_ids: number[];
         video: boolean;
         adult: boolean;
      }

   interface ResultsProps {
      results: Movie[];
   }

      const Results = ({results}: ResultsProps): JSX.Element => {
         return (
            <div>
               {results.map((result) => (
            <div key={result.id}>
               <h2>{result.original_title}</h2> 
            </div>
         ))}
            </div>
         )
      }

      export default Results
   `
    

## Handle the Error Using Next.js 14
1. Inside the **/src/app/** create a file called **error.tsx** in *lowercase*.
2. Create a React Functional Component (RFC). 
   Functions should look like this:
   `
   'use client'

      import {useEffect} from 'react'

      interface errorProps {
      error: Error;
      reset: () => void;
      }

      export default function error({error, reset}: errorProps) {

         useEffect(() => {
            console.log(error)
         }, [error]);

      return (
         <div className='text-center mt-10'>
            <h1>Something Went Wrong, Please Try Again Later.</h1>
            <button className='hover:text-primary-Default' onClick={() => reset()}>
                  Try Again, Please.
            </button>
         </div>
      )
   }
   `

## Add Loading Effect Using Next.js 14
1. Go to **/src/app** and create file **loading.tsx** in *lowercase*.
2. Go to website [Loading IO](https://loading.io/)
   - Cutomize your spinner loading animation.
   - Download as SVG
   - Paste into **/public** folder.
3. Create a React Functional Component (RFC). 
   Functions should look like this:
   `
   import React from 'react'

      export default function Loading(): JSX.Element {
      
      return (
         <div className='flex justify-center mt-16'>
            <img className='h-48' src='loading.svg' alt='Loading...'/>
         </div>
      )
      }

   `
   For testing purposes into the loading effect, you can use the following code:
   On **/src/app/page.tsx**
   Change
   `
   const res = await fetch(
      `https://api.themoviedb.org/3${
         genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } } // Revalidate every 10000 seconds
   )   
   To:
   `
   setTimeout(async () => {
      const res = await fetch(
         `https://api.themoviedb.org/3${
            genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
         }?api_key=${API_KEY}&language=en-US&page=1`,
         { next: { revalidate: 10 } } // Revalidate every 10000 seconds
      );

      resolve(res);
      }, 2000); // Delay 2 Seconds
   `

## Add Error Handling Using Next.js 14
1. Go to **/src/app** and create file **error.tsx** in *lowercase*.
2. Create a React Functional Component (RFC). 
   Functions should look like this:
   `
   'use client'

      import {useEffect} from 'react'

      interface errorProps {
      error: Error;
      reset: (
   })
   `

## Add Card Component.
1. Add a new file **Card.tsx** in **/src/app/components**.
2. Create a React Functional Component:
    `
    import Image from 'next/image'
   import Link from 'next/link'
   import React from 'react'
   import { FiThumbsUp } from 'react-icons/fi'

   interface ResultProps {
      id: number;
      backdrop_path?: string;
      poster_path?: string;
      title?: string;
      name?: string;
      overview: string;
      release_date?: string;
      first_air_date?: string;
      vote_count: number;
   }

   interface CardProps {
      result: ResultProps;

   }

      export default function Card({result}: CardProps): JSX.Element {
      return (
         <div className='group cursor-pointer sm:hover:shadow-primary-gold sm-shadow-md rounded-lg sm:border-primary-gold sm:border-2 sm:p-2 sm:rounded-lg sm:shadow-lg sm:shadow-primary-gold sm:shadow-md sm:hover:shadow-primary-gold sm:m-2 sm:hover:shadow-md sm:hover:scale-105 transition-all duration-300 ease-in-out'>
            <Link href={`/movie/${result.id}`}>
                  <Image src={`https://image.tmdb.org/t/p/original/${
                     result.backdrop_path || result.poster_path}`} alt={result.title}
                     width={500}
                     height={300}
                     className="sm:rounded-t-lg group-hover:opacity-75 transition-all duration-300 ease-in-out"
                     ></Image>
                     <div className='p-2'>
                        <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2> {/* The truncate is to add three dots ... if text is larger than 2 rows */} 
                        <p className='line-clamp-2 text-md text-justify'>{result.overview}</p> {/* Line clamp is to show, in this case, the first two lines */}
                        <p className='flex items-center'>
                              {result.release_date || result.first_air_date} 
                              <FiThumbsUp className='h-5 mr-1 ml-3 text-tertiary-light'/>
                              {result.vote_count}
                        </p>
                     </div>
            </Link> 
         </div>
      )
   }
    `
3. On folder **/src/componets** file **Results.tsx** change:
   From:
   `
   const Results = ({results}: ResultsProps): JSX.Element => {
   return (
         <div>
            {results.map((result) => (
         <div key={result.id}>
            <<h2>{result.original_title}</h2>> 
         </div>
      ))}
         </div>
      )
   }

   export default Results

   `
   To:
   `
      import React from 'react'
      import Card from './Card';

      interface Movie {
         id: number;
         title: string;
         backdrop_path: string;
         overview: string;
         poster_path: string;
         release_date: string;
         vote_average: number;
         vote_count: number;
         popularity: number;
         original_language: string;
         original_title: string;
         genre_ids: number[];
         video: boolean;
         adult: boolean;
      }

      interface ResultsProps {
         results: Movie[];
      }

      const Results = ({results}: ResultsProps): JSX.Element => {
      return (
         <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
            {results.map((result) => (
         <div key={result.id}>
            <Card key={result.id} result={result} />
         </div>
      ))}
         </div>
      )
      }

      export default Results
   ` 
4. Go to folder **/** and open file **next.config.mjs**
   On `const nextConfig = {};` add:
   `
   const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: '**'
            },
    ]
 }
};
   `


## Add Movie Page.
1. To create the movie page go to **/app** and similary to about page create folder called **movie** then inside that folder another one called **[id]**. Inside that folder create file **page.tsx**. 
2. On **/app/movie/[id]** folder create file **page.tsx** and add a RFC (React Functional Component):
   `
   import Image from "next/image";
   import { FiThumbsUp } from "react-icons/fi";

   interface MoviePageProps {
      params: {
         id: string;
      }
   }

   interface MovieDetails {
      backdrop_path?: string;
      poster_path?: string;
      title?: string;
      name?: string;
      overview?: string;
      release_date?: string;
      first_air_date?: string;
      vote_count?: number;
   }

   export default async function MoviePage({params}: MoviePageProps): Promise<JSX.Element> {
   
   const movieId = params.id;
   const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`);
   
   if (!res.ok) {
      throw new Error('Failed to fetch movie data');
   }
   
   const movie: MovieDetails = await res.json();

   // console.log(movie); // Test console.log to see what happend with the Movie we bring

   return (
      <div className="w-full">
         <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
         <Image
               src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
               width={500}
               height={300}
               className="rounded-lg"
               style={{maxWidth: "100%", height: "auto"}} // To fix the issue when changing browser size
               ></Image>
         <div className="p-2">
               <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
               <p className="text-lg mb-3 text-justify">{movie.overview}</p>
               <p className="mb-3">
                  <span className="font-semibold mr-1">Date Released:</span>
                  {movie.release_date || movie.first_air_date}
               </p>
               <p className="flex items-center  mb-3">
                  <span className="font-semibold mr-1"><FiThumbsUp className='h-5 mr-2 text-tertiary-light'/></span>
                  {movie.vote_count}
               </p>
               </div>
         </div>
      </div>
   )
   }
   
   `

## Add Search Box.
1. Create a **SearchBox.tsx** React Funtional Component into folder **/src/components**
   `

   `
2. Then add the **<SearchBox />** into **/src/app/** into **layout.tsx** file Afther the *<Navbar/>* Component.
   `<SearchBox />`
3. Create a new page into **/src/app** so create folder **search** then **[searchTerm]** and finally create **page.tsx**
   - Create a RFC:
     `

     `
## Adding Footer:
1. Create a **Footer.tsx** React Funtional Component into folder **/src/components/**
2. This is version 1 of the code:
   `
   import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaTiktok, FaFacebook, FaDribbble } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="border border-t-8 border-secondary-light dark:border-primary-light">
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
          <Link href={'/'} className='flex gap-1 items-center'>
            <span className='text-2xl text-primary-text font bold bg bg-primary-light hover:bg-secondary-light py-1 px-2 rounded-lg'>VideoMedia</span>
            <span className='text-xl sm:inline mt-4 mr-4 mb-4 border-t-4 border-r-4 border-b-4 border-primary-orange rounded-tr-md rounded-br-md overflow-x-visible -ml-1.5 pl-1 pr-2 p-0.875'>Collection</span>
          </Link>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <ul>
              <li><a href="https://portfolio.excelsolutionsv.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light">Portfolio</a></li>
              <li><Link href="/about" className="hover:text-secondary-light dark:hover:text-primary-light">Excel SolutionsV® Blog</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.github.com/svei00" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/ivan-e-villanueva-26253157/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light"><FaLinkedin /></a>
              <a href="https://www.youtube.com/svei00" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light"><FaYoutube /></a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary-orange dark:border-primary-light" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ivan E. Villanueva. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://Instragram.com/svei00" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light"><FaInstagram /></a>
            <a href="#" className="hover:text-secondary-light dark:hover:text-primary-light"><FaFacebook /></a>
            <a href="#" className="hover:text-secondary-light dark:hover:text-primary-light"><FaTiktok /></a>
            <a href="https://x.com/svei00" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light dark:hover:text-primary-light"><FaXTwitter /></a>
            <a href="#" className="hover:text-secondary-light dark:hover:text-primary-light"><FaDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

   `
3. Then add the **<Footer />** into **/src/app/** into **layout.tsx** file Afther the *<SearchBox/>* Component.
   `<Footer />

## Deploy to Hostinger.

- npm build 2:19

## Deploy in Render.
1. Make sure to have those scripts in **package.json**:
   `
   "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
    },
   `
2. Then run:
   - If via **npm** `npm run build` and **npm run postbuild** to export the app.
   - If via **yarn** `yarn build` and **yarn postbuild** to export the app.
3. Then go to [Render](https://render.com/) and create an account if don't have one if yes create new **Web service**
   - Create a new **Web Service**
   - Connect your gitHub account.
4. Configure the **Web Service**
   - **Web Service Name**: `yourChoosenName`
   - **Repository**: `your repository`
   - **Enviroment**: Node
   - **Region**: Choose your nearest region.
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm run start`
5. Set the enviroment variables.
   - **API_KEY**: `your API_KEY`
   - **NEXT_PUBLIC_API_KEY**: `your API_KEY`
6. Set the node version on your **package.json**
   `
   "engines": {
   "node": ">=18.0.0"
   }  
   `
7. Deploy the app.
   - **Deploy**
   - **Deploy**
   - **Deploy**
8. Then you can access your app by the URL.

// Test to see the deploy error

# Bibliography
- [Sahan Ghavidel imDB Clone](https://www.youtube.com/watch?v=69vpmZgDeN8) 
- [NextJS](https://nextjs.org/docs/getting-started/installation)
- [TMDB](https://www.themoviedb.org/?language=en-US)

### Shortcuts Glosary.
- **CTRL + /** - Comment/Uncomment
- **CTRL + SHIFT + P** - Open Command Palette
- **CTRL + P** - Open File
- **CTRL + SHIFT + N** - New File
- **CTRL + SHIFT + W** - Close File
- **CTRL + SHIFT + F** - Find in Files
- **CTRL + SHIFT + G** - Find in Files
- **CTRL + SHIFT + V** - Open Recent
- **CTRL + SHIFT + E** - Open Recent
- **CTRL + SHIFT + O** - Open Folder
- **ALT + SHIFT + Down Arrow** to duplicate the line.

  