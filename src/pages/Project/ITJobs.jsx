import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import Github from "../../assets/icons/github-color-svgrepo-com.svg";
import ITJobsImage from "../../assets/images/avatarITJobs.png";
import ITJobsImage1 from "../../assets/images/ITJobs1.png";
import ITJobsImage2 from "../../assets/images/ITJobs2.png";
import ITJobsImage3 from "../../assets/images/ITJobs3.png";

function ITJobs() {
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
            IT Jobs
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
            Website tuyển dụng IT giúp người dùng tìm kiếm việc làm, khám phá thông tin công ty và xem chi tiết các cơ hội nghề nghiệp trong lĩnh vực IT.
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
              href="https://github.com/pkhang35/recruitment-web"
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
                React, JavaScript, Sass, Ant Design
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
              IT Jobs là một website tuyển dụng dành cho lĩnh vực công nghệ, được xây dựng nhằm kết nối người tìm việc với các cơ hội nghề nghiệp phù hợp.
            </p>

            <p>
              Người dùng có thể tìm kiếm và khám phá các công việc IT, xem thông tin chi tiết về vị trí tuyển dụng cũng như tìm hiểu thông tin của các công ty.
            </p>

            <p>
              Dự án tập trung vào việc xây dựng giao diện trực quan, responsive và mang lại trải nghiệm tìm kiếm việc làm thuận tiện cho người dùng.
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
                Tìm kiếm việc làm
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Cho phép người dùng tìm kiếm và khám phá các vị trí tuyển dụng IT phù hợp với nhu cầu.
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
                Ứng tuyển việc làm
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Ứng viên có thể xem chi tiết công việc và gửi hồ sơ ứng tuyển trực tiếp trên nền tảng.
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
                Đăng tin tuyển dụng
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
                Nhà tuyển dụng có thể đăng thông tin tuyển dụng, mô tả công việc và yêu cầu ứng viên.
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
                Quản lý tuyển dụng
              </h3>

              <p className="leading-7 text-gray-600 dark:text-gray-300">
               Nhà tuyển dụng có thể quản lý các tin tuyển dụng và theo dõi danh sách ứng viên cho từng vị trí.
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
                Sử dụng React Hooks để quản lý state và xử lý
                logic tương tác trong ứng dụng.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Sử dụng React Router để quản lý điều hướng
                giữa các trang.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Sử dụng Ant Design để xây dựng các thành phần
                giao diện và biểu đồ.
              </span>
            </li>

            <li className="flex gap-3 leading-7">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>
                Kết nối dữ liệu với API mock thông qua
                json-server.
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
                src={ITJobsImage}
                alt="DevQuiz"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
             <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={ITJobsImage1}
                alt="DevQuiz"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
             <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={ITJobsImage2}
                alt="DevQuiz"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
             <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={ITJobsImage3}
                alt="DevQuiz"
                className="
                  h-auto
                  w-full
                  object-cover
                "
              />
            </div>
            

            {/* Sau này thêm ảnh ở đây */}
            {/* 
            <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700">
              <img
                src={DevQuizImage2}
                alt="DevQuiz quiz page"
                className="h-auto w-full object-cover"
              />
            </div>
            */}
          </div>
        </section>

      </div>
    </main>
  );
}

export default ITJobs;