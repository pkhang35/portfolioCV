import {
ArrowLeft,
  ExternalLink,
  FileText,
  GraduationCap,
} from "lucide-react";

function Education() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-6">
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
        <div className="mb-14">
          <h1
            className="
              font-heading
              text-4xl
              text-gray-900
              dark:text-white
              sm:text-5xl
            "
          >
            Học Vấn
          </h1>
        </div>

        <div className="mx-auto max-w-4xl">
          <section>
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  size-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/10
                  text-primary
                "
              >
                <GraduationCap className="size-6" />
              </div>

              <span className="text-sm text-gray-500 dark:text-gray-400">
                2022 — 2025
              </span>
            </div>

            <h2
              className="
                mt-7
                font-heading
                text-3xl
                text-gray-900
                dark:text-white
                sm:text-4xl
              "
            >
              Công Nghệ Thông Tin
            </h2>

            <h3
              className="
                mt-3
                text-xl
                text-gray-700
                dark:text-gray-200
              "
            >
              Trường Cao Đẳng Kỹ Thuật Cao Thắng
            </h3>

            <p
              className="
                mt-3
                text-base
                text-gray-600
                dark:text-gray-300
              "
            >
              Chuyên ngành: Lập trình Web
            </p>
          </section>

          <section className="mt-14">
            <h2
              className="
                mb-4
                text-2xl
                text-gray-900
                dark:text-white
              "
            >
              Định hướng chuyên môn
            </h2>

            <p
              className="
                max-w-3xl
                leading-7
                text-gray-600
                dark:text-gray-300
              "
            >
              Tập trung phát triển Frontend Web với ReactJS,
              xây dựng giao diện responsive và các ứng dụng
              web hiện đại.
            </p>
          </section>

          <section className="mt-14">
            <h2
              className="
                mb-6
                text-2xl
                text-gray-900
                dark:text-white
              "
            >
              Chứng chỉ & năng lực
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <article
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-lg
                  dark:border-gray-700
                  dark:bg-gray-dark
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <GraduationCap className="size-6" />
                </div>

                <h3
                  className="
                    text-xl
                    text-gray-900
                    dark:text-white
                  "
                >
                  Bằng tốt nghiệp
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Bằng tốt nghiệp ngành Công Nghệ Thông Tin.
                </p>

                <a
                  href="https://drive.google.com/file/d/1O1G0ZMW5Lotb47mJFF5vO6VwejuDQr-_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-primary
                    transition-colors
                    hover:text-primary/80
                  "
                >
                  Xem bằng tốt nghiệp
                  <ExternalLink className="size-4" />
                </a>
              </article>

              <article
                className="
                  group
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary
                  hover:shadow-lg
                  dark:border-gray-700
                  dark:bg-gray-dark
                "
              >
                <div
                  className="
                    mb-5
                    flex
                    size-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <FileText className="size-6" />
                </div>

                <h3
                  className="
                    text-xl
                    text-gray-900
                    dark:text-white
                  "
                >
                  Bảng điểm
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-300
                  "
                >
                  Bảng điểm quá trình học tập tại trường.
                </p>

                <a
                  href="https://drive.google.com/file/d/1kjeZ98Lm_YWyE3g9akhxIWh7JFFrDRwX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-primary
                    transition-colors
                    hover:text-primary/80
                  "
                >
                  Xem bảng điểm
                  <ExternalLink className="size-4" />
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Education;