import logo from "../assets/slogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the dropdown menu
  };

  return (
   <nav className="sticky mb-20 flex flex-col md:flex-row items-center justify-between py-6 px-4">
      <div className="flex items-center gap-4">
        <img
          className="w-10 cursor-pointer"
          src={logo}
          alt="logo"
          onClick={() => window.location.reload()}
        />

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-6 text-sm md:text-base text-white ml-4">
          <a href="#home" className="hover:text-violet-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-violet-400 transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-violet-400 transition">
            Skills
          </a>
          <a href="#about" className="hover:text-violet-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-violet-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button (Only visible on mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden absolute top-20 left-0 w-full bg-neutral-800 text-white flex flex-col items-center gap-4 py-4 transition-all duration-300`}
      >
        <a href="#home" className="hover:text-violet-400 transition">
          Home
        </a>
        <a href="#projects" className="hover:text-violet-400 transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-violet-400 transition">
          Skills
        </a>
        <a href="#about" className="hover:text-violet-400 transition">
          About
        </a>
        <a href="#contact" className="hover:text-violet-400 transition">
          Contact
        </a>
      </div>

      {/* Social Icons (Always visible) */}
      <div className="mt-4 md:mt-0 flex items-center gap-4 text-2xl text-white">
        <a
          href="https://linkedin.com/in/amanpradeepthakur/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gunnerx7"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://x.com/sigmaaman"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://instagram.com/amanpthakur"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://drive.google.com/file/d/1UCBNUoX0ORYa3d0HgXfoqxBEGblqCaDR/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-4 py-2 rounded-full text-sm md:text-base bg-neutral-900 text-white transition duration-300 hover:shadow-[0_0_18px_4px_rgba(168,85,247,0.6)]"
          aria-label="Resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
