import Image from "next/image";
import { CourseCollapsibleCard } from "@/components/CourseCollapsibleCard";
import { NavigationMenu } from "@/components/NavigationMenu";

/**
 * Midland Center Page
 *
 * A branded center experience page showcasing courses with collapsible module details.
 * Features: Hero section, course listings with expandable modules, feature cards, testimonials
 */
export default function Home() {
  // Dummy course data matching the Figma design structure
  const courses = [
    {
      id: "course-1",
      title: "Church Board Leadership Essentials",
      description:
        "This course, led by Dr. Scott Cormode of Fuller Seminary, provides a foundational guide for church elders to develop a leadership posture rooted in humility, listening, and emotional intelligence. It outlines the structural, relational, and spiritual responsibilities essential for serving on a church board while offering practical skills for navigating conflict and shepherding a congregation.",
      imageUrl: "/midland/Midland-BoardLeadership1-Thumbnail.png",
      modules: [],
    },
    // {
    //   id: "course-2",
    //   title: "Lorem Ipsum Dolor Sit Consectetur",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imageUrl: "/midland/midland2.png",
    //   modules: [
    //     {
    //       id: "module-1",
    //       title: "Lorem Ipsum Dolor Sit Consectetur",
    //       duration: "Approx. 2 Hours",
    //     },
    //     {
    //       id: "module-2",
    //       title: "Lorem Ipsum Dolor Sit Consectetur",
    //       duration: "Approx. 2 Hours",
    //     },
    //     {
    //       id: "module-3",
    //       title: "Lorem Ipsum Dolor Sit Consectetur",
    //       duration: "Approx. 2 Hours",
    //     },
    //     {
    //       id: "module-4",
    //       title: "Lorem Ipsum Dolor Sit Consectetur",
    //       duration: "Approx. 2 Hours",
    //     },
    //   ],
    // },
    // {
    //   id: "course-3",
    //   title: "Lorem Ipsum Dolor Sit Consectetur",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imageUrl: "/midland/midland3.png",
    //   modules: [],
    // },
    // {
    //   id: "course-4",
    //   title: "Lorem Ipsum Dolor Sit Consectetur",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   imageUrl: "/midland/midland4.png",
    //   modules: [],
    // },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center w-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between w-full px-4 py-3 bg-white border-b md:px-6 lg:px-8 border-gray-900/5">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative w-32 h-10 sm:w-[209.767px] sm:h-[61.5px]">
            <Image
              src="/midland/midlandlogo.png"
              alt="Fuller Equip Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="hidden sm:block text-[9px] font-reckless leading-2.75 tracking-[0.63px] uppercase text-gray-400 text-center">
            Powered by Fuller Equip
          </p>
        </div>
        <NavigationMenu />
      </nav>

      <main className="flex w-full flex-col">
        {/* Hero Section */}
        <section className="w-full px-4 pt-10 pb-6 h-54 lg:h-106 bg-white md:px-8 lg:px-16 xl:px-26 md:pt-16 lg:pt-20">
          <div className="flex flex-col gap-3 md:gap-4 max-w-198">
            <p className="text-sm md:text-lg font-normal leading-5 md:leading-6 tracking-[0.18px] uppercase text-[#cab777]">
              Online Leadership Training
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-medium leading-tight md:leading-[1.1] lg:leading-15 tracking-[-0.5px] md:tracking-[-1.8px] text-gray-900 font-reckless">
              First Presbyterian Midland Training
              {/* <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Sit Consectetur */}
            </h1>
            <p className="text-sm font-normal leading-5 text-gray-900 md:text-base md:leading-6">
              Training resources designed to support and equip First Presbyterian
              Midland leaders.
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section className="flex flex-col w-full h-auto gap-6 px-4 pb-12 md:px-8 lg:px-16 xl:px-26 md:pb-18">
          {courses.map((course, index) => (
            <div key={course.id}>
              <CourseCollapsibleCard
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                modules={course.modules}
                defaultOpen={index === 1}
              />
              {index < courses.length - 1 && (
                <div className="w-full h-px my-4 bg-gray-200 md:my-6" />
              )}
            </div>
          ))}
        </section>

        {/* Features Section */}
        {/* <section className="w-full px-4 md:px-8 lg:px-16 xl:px-26 py-10 md:py-16 lg:py-20 bg-[#f7f7f7] flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-sm md:text-lg font-normal leading-5 md:leading-6 tracking-[0.18px] uppercase text-[#cab777]">
            LOREM IPSUM DOLOR
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight md:leading-[1.2] lg:leading-15 tracking-[-0.5px] md:tracking-[-1.44px] text-gray-900 font-reckless">
            Lorem ipsum Dolor.
          </h2>
          <p className="text-sm font-normal leading-5 text-gray-900 md:text-base md:leading-6 max-w-198">
            Lorem ipsum dolor sit amet consectetur adipiscing elit t et massa
            mi..
          </p>
        </div>

        <div className="flex flex-col w-full max-w-6xl gap-4 md:flex-row md:gap-6 lg:gap-8">
          <div className="flex-1 bg-white border-t-4 border-[#6c83b0] px-4 md:px-6 py-6 md:py-10">
            <div className="flex flex-col gap-4 md:justify-between md:h-auto lg:h-64.75">
              <h3 className="text-xl font-medium leading-7 text-gray-900 md:text-2xl md:leading-8 font-reckless">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-normal leading-5 text-gray-900 md:text-base md:leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          </div>

          <div className="flex-1 bg-white border-t-4 border-[#cab777] px-4 md:px-6 py-6 md:py-10">
            <div className="flex flex-col gap-4 md:justify-between md:h-auto lg:h-64.75">
              <h3 className="text-xl font-medium leading-7 text-gray-900 md:text-2xl md:leading-8 font-reckless">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-normal leading-5 text-gray-900 md:text-base md:leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          </div>

          <div className="flex-1 bg-white border-t-4 border-[#013e79] px-4 md:px-6 py-6 md:py-10">
            <div className="flex flex-col gap-4 md:justify-between md:h-auto lg:h-64.75">
              <h3 className="text-xl font-medium leading-7 text-gray-900 md:text-2xl md:leading-8 font-reckless">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-normal leading-5 text-gray-900 md:text-base md:leading-6">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna sit amet consectetur. Lorem
                ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      </main>

      {/* Powered By */}
      <footer className="mt-auto w-full px-4 md:px-8 lg:px-16 xl:px-26 py-10 md:py-16 lg:py-20 bg-gray-100 flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <p className="text-sm font-normal leading-5 text-gray-500 md:text-base md:leading-6">
            This learning experience is powered by:
          </p>
          <Image
            src="/fullerEquip_Logo.png"
            alt="Fuller Equip"
            width={80}
            height={24}
            className="h-5 w-auto sm:h-6"
          />
        </div>
      </footer>
    </div>
  );
}
