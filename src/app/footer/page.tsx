import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaXTwitter, FaInstagram, FaTiktok, FaFacebook, FaDribbble } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="border border-t-8 border-secondary-light dark:border-primary-light">
      <div className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image src="/path-to-your-logo.png" alt="Logo" width={80} height={23} />
              <span className="text-secondary-light dark:text-primary-light ml-2 text-xl font-semibold">Blog</span>
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
        <hr className="my-6 border-secondary-light dark:border-primary-light" />
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