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


# Bibliography
- [Sahan Ghavidel imDB Clone](https://www.youtube.com/watch?v=69vpmZgDeN8) 
- [NextJS](https://nextjs.org/docs/getting-started/installation)
- [TMDB](https://www.themoviedb.org/?language=en-US)

  29:00