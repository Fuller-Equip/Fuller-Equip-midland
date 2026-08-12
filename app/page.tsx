import Image from "next/image";
import { CourseCollapsibleCard } from "@/components/CourseCollapsibleCard";
import {
  CourseGroupCard,
  type CourseGroup,
} from "@/components/CourseGroupCard";
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
      courseUrl:
        "http://modules.fuller.edu/demo/midland-pres/church-board-leadership-essentials/scormcontent",
    },
    {
      id: "course-2",
      title: "Youth Ministry Volunteer Essentials",
      description:
        "The Youth Ministry Volunteer Essentials course trains and empowers you to effectively serve teens during these formative years.",
      imageUrl: "/midland/midland2.png",
      modules: [],
      courseUrl:
        "https://modules.fuller.edu/demo/midland-pres/youth-ministry-volunteer-essential/scormcontent",
    },
    {
      id: "course-3",
      title: "How to Lead a Small Group",
      description:
        "In the course, How to Lead a Small Group, learn practical skills and spiritual insights to organize a small group that promotes authenticity and sharpens members’ faith in Jesus.",
      imageUrl: "/midland/small-group-thumbnail.png",
      modules: [],
      courseUrl:
        "https://modules.fuller.edu/demo/midland-pres/small-group/scormcontent/",
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

  // Rendered last, below the course group — no courseUrl yet, so the card shows
  // a disabled "Coming Soon" button instead of "View Course".
  const comingSoonCourse = {
    id: "course-4",
    title: "Living on Mission in Your Community",
    description:
      "In this Living on Mission in Your Community course, you will learn from experts (including authors, entrepreneurs, private and public-sector leaders, and more) as they share practical ways to live out Christ’s call to serve others by recognizing and meeting the needs of the people in your local community.",
    imageUrl: "/midland/living-on-mission-thumbnail.png",
    modules: [],
    courseUrl: "",
  };

  const childrensMinistryGroup: CourseGroup = {
    label: "Course",
    title: "Children's Ministry Volunteer Essentials",
    description: (
      <>
        <p>
          In the course, Children&apos;s Ministry Volunteer Essentials, learn ways to
          positively impact children that last beyond Sunday morning.
        </p>
      </>
    ),
    // description: (
    //   <>
    //     <p>
    //       Make a Lasting Kingdom Impact: Become an Essential Voice in a
    //       Child&apos;s Faith Journey
    //     </p>
    //     <p>
    //       Research suggests that for important faith messages to
    //       &quot;stick,&quot; children need to hear them repeatedly from many
    //       trusted adults. In this course,{" "}
    //       <strong className="font-semibold text-gray-900">
    //         Children&apos;s Ministry Volunteer Essentials
    //       </strong>
    //       , you&apos;ll discover how to positively contribute to
    //       children&apos;s spiritual growth in ways that last far beyond Sunday
    //       morning.
    //     </p>
    //     <p>
    //       Join{" "}
    //       <strong className="font-semibold text-gray-900">
    //         Meredith Miller
    //       </strong>
    //       , a pastor and writer with over 20 years of experience, as you learn
    //       to recognize developmental stages, prepare transformational lessons,
    //       and create meaningful conversations that help kids get to know God.
    //     </p>
    //     <p>Course Highlights</p>
    //     <ul>
    //       <li>
    //         Understand your unique role as a mentor in a child&apos;s spiritual
    //         ecosystem.
    //       </li>
    //       <li>
    //         Identify and adapt to different stages of childhood development to
    //         make your teaching more effective.
    //       </li>
    //       <li>
    //         Learn actionable ways to prepare lessons, facilitate discussion,
    //         and support families with confidence and joy starting this week.
    //       </li>
    //     </ul>
    //   </>
    // ),
    imageUrl: "/midland/midland3.png",
    courses: [
      {
        id: "cmve-welcome",
        title: "Welcome to Children's Ministry Volunteer Essentials",
        description:
          "An introduction to the heart, purpose, and expectations of serving in children's ministry.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/welcome-to-childrens-ministry-volunteer-essentials/scormcontent/",
      },
      {
        id: "cmve-lesson-1",
        title: "Lesson 1: Serving Children and Families",
        description:
          "Learn what it means to serve children well and partner with their families.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-1-serving-children-and-families/scormcontent/",
      },
      {
        id: "cmve-lesson-2",
        title: "Lesson 2: Helping Children Get to Know God",
        description:
          "Practical ways to help children encounter God and grow in their faith.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-2-helping-children-get-to-know-god/scormcontent/",
      },
      {
        id: "cmve-lesson-3",
        title: "Lesson 3: Understanding the Ages and Stages of Children",
        description:
          "Understand child development across ages and stages so you can meet children where they are.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-3-understanding-the-ages-and-stages-of-children/scormcontent/",
      },
      {
        id: "cmve-lesson-4",
        title: "Lesson 4: Supporting Families and Children",
        description:
          "Discover how to come alongside families and support children through every season.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-4-supporting-families-and-children/scormcontent/",
      },
      {
        id: "cmve-lesson-5",
        title: "Lesson 5: Preparing for Your Time with Children",
        description:
          "Practical preparation so you can show up ready and make the most of your time with children.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-5-preparing-for-your-time-with-children/scormcontent/",
      },
      {
        id: "cmve-lesson-6",
        title: "Lesson 6: Setting Expectations for Children",
        description:
          "Set clear, age-appropriate expectations that create a safe and welcoming environment.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-6-setting-expectations-for-children/scormcontent/",
      },
      {
        id: "cmve-lesson-7",
        title: "Lesson 7: Connecting with Children and Families",
        description:
          "Build meaningful, lasting connections with the children and families you serve.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/lesson-7-connecting-with-children-and-families/scormcontent/",
      },
      {
        id: "cmve-next-steps",
        title: "Putting It All Together & Next Steps",
        description:
          "Bring everything together and map out your next steps as a children's ministry volunteer.",
        imageUrl: "/midland/midland3.png",
        courseUrl:
          "https://modules.fuller.edu/demo/midland-pres/childrens-ministry-volunteer-essentials/putting-it-all-together-next-steps/scormcontent/",
      },
    ],
  };

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
              Training resources designed to support and equip First
              Presbyterian Midland leaders.
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
                courseUrl={course.courseUrl}
                defaultOpen={index === 1}
              />
              <div className="w-full h-px my-4 bg-gray-200 md:my-6" />
            </div>
          ))}

          {/* Course Group — expands to list its courses */}
          <CourseGroupCard group={childrensMinistryGroup} />

          <div className="w-full h-px my-4 bg-gray-200 md:my-6" />
          <CourseCollapsibleCard
            title={comingSoonCourse.title}
            description={comingSoonCourse.description}
            imageUrl={comingSoonCourse.imageUrl}
            modules={comingSoonCourse.modules}
            courseUrl={comingSoonCourse.courseUrl}
          />
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
