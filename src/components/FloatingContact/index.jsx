import { Mail } from "lucide-react";
import Zalo from "../../assets/icons/zalo-svgrepo-com.svg";

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="mailto:pkhang353@gmail.com"
        aria-label="Liên hệ qua Email"
        className="
          group
          relative
          flex
          size-14
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          p-3
          text-primary
          shadow-lg
          shadow-gray-300/30
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-110
          hover:bg-primary
          hover:text-white
          hover:shadow-xl
          dark:border-gray-700
          dark:bg-gray-dark
          dark:shadow-black/30
          dark:hover:bg-primary
        "
      >
        <Mail
          className="
            size-6
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        />
      </a>

      <a
        href="https://zalo.me/0332172749"
        target="_blank"
        rel="noreferrer"
        aria-label="Liên hệ qua Zalo"
        className="
          group
          relative
          flex
          size-14
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          p-2
          shadow-lg
          shadow-gray-300/30
          transition-all
          duration-300
          hover:-translate-y-1
          hover:scale-110
          hover:shadow-xl
          dark:border-gray-700
          dark:bg-gray-dark
          dark:shadow-black/30
        "
      >
        <span
          className="
            absolute
            inset-0
            -z-10
            rounded-full
            bg-primary/30
            animate-ping
          "
        />

        <img
          src={Zalo}
          alt="Zalo"
          className="
            relative
            size-full
            object-contain
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        />
      </a>
    </div>
  );
}

export default FloatingContact;