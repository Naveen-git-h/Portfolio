import logo from "../assets/naveenlogo.png"
import {FaGithub,FaInstagram,FaLinkedin} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="/" aria-label="Home">
            <img src={logo} className="mx-2" width={60} height={50}/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xi">
            <a href="https://www.linkedin.com/in/naveen-dugana-590465269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin></FaLinkedin>
            </a>

            <a href="https://github.com/Naveen-git-h" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub></FaGithub>
            </a>

            <a href="https://www.instagram.com/imnaveen_0/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram></FaInstagram>
            </a>

            <a href="/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaSquareXTwitter></FaSquareXTwitter>
            </a>
        </div>
    </nav>
  )
}

export default Navbar