import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import Linkedin from "../../assets/icons/linkedin-svgrepo-com.svg";
import Mail from "../../assets/icons/new-logo-gmail-svgrepo-com.svg";
import Zalo from "../../assets/icons/zalo-svgrepo-com.svg";

function Footer() {
  return (
   <footer className="mt-16 sm:mt-20">
    <div className="container mx-auto px-6">
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          border-t
          border-gray-300
          py-6
          sm:py-8
          dark:border-gray-dark
        "
      >
        <p className="text-center text-sm leading-6 text-gray-600 dark:text-gray-300">
          Thiết kế & xây dựng bởi{" "}
          <span className="font-medium text-primary">
            Phạm Tuấn Khang
          </span>
        </p>
        <ul className="my-5 flex items-center gap-4 sm:gap-5">
          <li>
            <a
              href="https://github.com/pkhang35"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src={Github}
                alt="GitHub"
                className="
                  size-9
                  transition-transform
                  duration-200
                  hover:scale-110
                  sm:size-10
                "
              />
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/pkhang35/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="
                  size-9
                  transition-transform
                  duration-200
                  hover:scale-110
                  sm:size-10
                "
              />
            </a>
          </li>

          <li>
            <a
              href="mailto:pkhang353@gmail.com"
              aria-label="Email"
            >
              <img
                src={Mail}
                alt="Email"
                className="
                  size-9
                  transition-transform
                  duration-200
                  hover:scale-110
                  sm:size-10
                "
              />
            </a>
          </li>

          <li>
            <a
              href="https://zalo.me/0332172749"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zalo"
            >
              <img
                src={Zalo}
                alt="Zalo"
                className="
                  size-9
                  transition-transform
                  duration-200
                  hover:scale-110
                  sm:size-10
                "
              />
            </a>
          </li>
        </ul>
        <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          © 2026 Khang. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
}

export default Footer;