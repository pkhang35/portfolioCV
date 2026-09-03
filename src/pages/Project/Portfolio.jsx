import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import PortfolioImage from "../../assets/images/avatarPortfolio.png";
import Portfolioone from "../../assets/images/portfolio1.png";
import Portfoliotwo from "../../assets/images/portfolio2.png";

function Portfolio() {
  return (
    <main className="py-24">
      <div className="container mx-auto px-6">

        {/* Back */}
        <a
          href="/"
          className="
            mb-10
            inline-flex
            items-center
            gap-2
            text-sm
            text-gray-500
            transition-colors
            duration-200
            hover:text-primary
            dark:text-gray-400
          "
        >
          <ArrowLeft className="size-4" />
          Quay lại Portfolio
        </a>

        {/* Hero */}
        <section className="mb-20">
          <p className="mb-3 font-medium tracking-wider text-primary">
            DỰ ÁN
          </p>

          <h1
            className="
              mb-6
              text-5xl
              text-gray-900
              dark:text-white
              sm:text-6xl
            "
          >
            Portfolio
          </h1>

          <p
            className="
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Website portfolio cá nhân được xây dựng nhằm giới thiệu thông tin, kỹ năng, kinh nghiệm và các dự án Frontend đã thực hiện. Giao diện tập trung vào sự tối giản, hiện đại, responsive và hỗ trợ Dark Mode.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-primary
                px-5
                py-3
                text-sm
                font-medium
                text-white
                transition-all
                duration-200
                hover:-translate-y-1
                hover:shadow-lg
                hover:shadow-primary/20
              "
            >
              Xem Demo
              <ExternalLink className="size-4" />
            </a>

            <a
              href="https://github.com/pkhang35/portfolioCV"
              target="_blank"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border
                border-primary
                px-5
                py-3
                text-sm
                font-medium
                text-primary
                transition-all
                duration-200
                hover:-translate-y-1
                hover:bg-primary
                hover:text-white
              "
            >
              <img src={Github} className="size-4" />
              GitHub
            </a>
          </div>
        </section>

        {/* Project information */}
        <section className="mb-20" data-aos="fade-up">
          <div
            className="
              grid
              gap-6
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              sm:grid-cols-3
              sm:p-8
              dark:border-gray-700
              dark:bg-gray-dark
            "
          >
            {/* Year */}
            <div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Năm
              </p>

              <p className="font-medium text-gray-900 dark:text-white">
                2026
              </p>
            </div>

            {/* Role */}
            <div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Vai trò
              </p>

              <p className="font-medium text-gray-900 dark:text-white">
                Frontend Developer
              </p>
            </div>

            {/* Technologies */}
            <div>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Công nghệ & kỹ thuật
              </p>

              <p className="font-medium text-gray-900 dark:text-white">
                React, JavaScript, Tailwind CSS
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mb-20" data-aos="fade-up">
          <h2
            className="
              mb-6
              text-3xl
              text-gray-900
              dark:text-white
            "
          >
            Mô tả
          </h2>

          <div className="max-w-3xl space-y-5 leading-8 text-gray-600 dark:text-gray-300">
            <p>
              Portfolio là website cá nhân được xây dựng để giới thiệu bản thân và định hướng phát triển trong lĩnh vực Frontend Development.
            </p>

            <p>
              Website cung cấp các thông tin về kỹ năng, kinh nghiệm, quá trình học tập và những dự án đã thực hiện, giúp nhà tuyển dụng dễ dàng tìm hiểu về năng lực và quá trình phát triển của tôi.
            </p>

            <p>
              Dự án tập trung vào việc xây dựng giao diện hiện đại, responsive và tối ưu trải nghiệm người dùng trên nhiều kích thước màn hình.
            </p>
          </div>
        </section>

        {/* Main features */}
        <section className="mb-20" data-aos="fade-up">
          <h2
            className="
              mb-8
              text-3xl
              text-gray-900
              dark:text-white
            "
          >
            Các tính năng chính
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                p-6
                dark:border-gray-700
              "
            >
              <CheckCircle2 className="mb-4 size-6 text-primary" />

              <h3 className="mb-2 text-xl text-gray-900 dark:text-white">
                Giới thiệu cá nhân
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Thông tin tổng quan về bản thân, định hướng và mục tiêu phát triển trong lĩnh vực Frontend.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                p-6
                dark:border-gray-700
              "
            >
              <CheckCircle2 className="mb-4 size-6 text-primary" />

              <h3 className="mb-2 text-xl text-gray-900 dark:text-white">
                Hiển thị kỹ năng
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Trình bày các công nghệ và kỹ năng Frontend đã học và sử dụng trong quá trình phát triển dự án.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                p-6
                dark:border-gray-700
              "
            >
              <CheckCircle2 className="mb-4 size-6 text-primary" />

              <h3 className="mb-2 text-xl text-gray-900 dark:text-white">
                Showcase dự án
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Hiển thị các dự án đã thực hiện kèm mô tả, công nghệ sử dụng và liên kết Demo/GitHub.
              </p>
            </div>

            <div
              className="
                rounded-2xl
                border
                border-gray-200
                p-6
                dark:border-gray-700
              "
            >
              <CheckCircle2 className="mb-4 size-6 text-primary" />

              <h3 className="mb-2 text-xl text-gray-900 dark:text-white">
                Responsive & Dark Mode
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Giao diện thích ứng với nhiều kích thước màn hình và hỗ trợ chuyển đổi giữa Light Mode và Dark Mode.
              </p>
            </div>

          </div>
        </section>

        {/* Technical highlights */}
        <section className="mb-20" data-aos="fade-up">
          <h2
            className="
              mb-6
              text-3xl
              text-gray-900
              dark:text-white
            "
          >
            Điểm nổi bật về kỹ thuật
          </h2>

          <ul className="max-w-3xl space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Xây dựng giao diện bằng React và tổ chức
                component theo hướng tái sử dụng.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Sử dụng React Router để quản lý điều hướng giữa các trang.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Sử dụng Tailwind CSS để xây dựng giao diện và responsive layout.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Sử dụng Lucide React cho hệ thống icon.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Implement Dark Mode với Tailwind CSS và lưu trạng thái theme.
              </span>
            </li>
          </ul>
        </section>

        {/* Images */ }
        <section data-aos="fade-up">
          <h2
            className="
              mb-8
              text-3xl
              text-gray-900
              dark:text-white
            "
          >
            Hình ảnh dự án
          </h2>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={PortfolioImage}
                alt="Portfolio"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Sau này thêm ảnh ở đây */}
            
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={Portfolioone}
                alt="Portfolio page"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={Portfoliotwo}
                alt="Portfolio page project"
                className="h-auto w-full object-cover"
              />
            </div>
           
          </div>
        </section>

      </div>
    </main>
  );
}

export default Portfolio;