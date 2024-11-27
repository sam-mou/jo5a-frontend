import { Link } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import LogoJoga from "../assets/images/LogoJoga.png";
import GitHubIcon from "../assets/images/GithubIcon.png";
import LinkedinIcon from "../assets/images/LinkedinIcon.png";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#161733" }} className="w-full m-0 p-0">
      <PageContainer>
        <div className="w-full pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            <div className="flex flex-col items-start">
              <img src={LogoJoga} alt="The Spoon Logo" className="h-20 w-auto mb-4" />
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-white text-end text-sm font-bold mb-2">Joga</h4>
              <ul className="text-white text-xs space-y-2">
                <li>
                  <Link to="/organize-game" className="hover:underline">Organize a Game</Link>
                </li>
                <li>
                  <Link to="/pitches" className="hover:underline">Pitches</Link>
                </li>
                <li>
                  <Link to="/my-profile" className="hover:underline">My Profile</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-start">
              <h4 className="text-white text-sm font-bold mb-2">Legal</h4>
              <ul className="text-white text-xs space-y-2">
                <li>
                  <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-use" className="hover:underline">Terms of Use</Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 my-4" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
            <div className="text-white text-xs text-left">
              © 2024{" "}
              <a href="/" className="hover:underline">
                JOGA
              </a>
              . All Rights Reserved.
            </div>  
            <div></div>
            <div className="flex justify-end space-x-4 mb-4 md:mb-0">
              <a href="https://github.com/sam-mou/jo5a-frontend" target="_blank">
                <img src={GitHubIcon} alt="GitHub" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/samy-mouahbi-920433161/" target="_blank" >
                <img src={LinkedinIcon} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}

export default Footer;
