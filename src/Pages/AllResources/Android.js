import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';

export default function Android() {
  return (
    <>
      <Navbar />
      <div>
        <section className="text-gray-600 body-font text">

          <div className="px-5 py-24 mx-auto flex flex-wrap">
            <h1 className="text-2xl text-center font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
              ANDROID DEVELOPMENT
            </h1>

            <div className="flex flex-wrap w-full">

              <div className="lg:w-3/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                    </svg>
                  </div>

                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                      Choose an Android Development Path
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Android app development offers various paths, including native app development, cross-platform development, and more. Choose the one that aligns with your goals and project requirements. Some popular options include Java and Kotlin for native development and frameworks like Flutter for cross-platform development.
                    </p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 18v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1m18-2H3a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2zM6 12v-2a2 2 0 012-2h8a2 2 0 012 2v2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font capitalize text-xl text-white mb-1 tracking-wider">
                      Learn Android UI Design
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Android UI design is crucial for creating engaging and user-friendly apps. Familiarize yourself with XML layout files, Material Design guidelines, and best practices to create visually appealing user interfaces.
                    </p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-bold title-font text-xl text-white mb-1 tracking-wider">
                      Build Android Projects
                    </h2>
                    <p className="leading-relaxed text-white text-justify">
                      Hands-on experience is key to becoming proficient in Android app development. Start by building small projects to practice your skills. As you progress, you can work on more complex apps and gain a deeper understanding of app architecture, databases, and user interactions.
                    </p>
                  </div>
                </div>
              </div>
              <img
                className="lg:w-2/5 md:w-1/2 object-contain object-center rounded-lg md:mt-0 mt-12"
                src="https://www.elluminatiinc.com/wp-content/uploads/2020/07/blog/androidappdevelopmenttools.png"
                alt="Android App Development"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="px-5 py-0 mx-auto">
            <div className="flex flex-col text-left w-full mb-10">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                Choose An Android Development Path
              </h1>
              <p className="w-full text-left mx-auto leading-relaxed text-base">
                Android app development offers various paths, including native app development, cross-platform development, and more. Choose the one that aligns with your goals and project requirements. Some popular options include Java and Kotlin for native development and frameworks like Flutter for cross-platform development.
              </p>
            </div>
            <div className="flex flex-wrap -m-2">
              {androidDevelopmentPaths.map((path) => (
                <div key={path.title} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                      alt="path"
                      className="w-16 h-16 bg-gray-100 object-contain object-center flex-shrink-0 rounded-full mr-4"
                      src={path.image}
                    />
                    <div className="flex-grow">
                      <Link to={path.to}>
                        <h2 className="text-white title-font font-bold underline text-xl">
                          {path.title}
                        </h2>
                      </Link>
                      <p className="text-white">{path.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>



        <Footer />
      </div>
    </>
  )
}

const androidDevelopmentPaths = [
  {
    title: "Native Development",
    image: "https://png.pngtree.com/png-clipart/20230825/original/pngtree-mobile-android-operating-system-with-latest-version-installed-picture-image_8721522.png",
    description: "Native app development involves building Android apps using platform-specific languages like Java or Kotlin. It provides high performance and access to native device features.",
  },
  {
    title: "Cross-Platform Development",
    image: "https://appinventiv.com/wp-content/uploads/sites/1/2019/09/Best-10-Cross-platform-app-frameworks-to-consider-in-2020.png",
    description: "Cross-platform development allows you to create Android apps using a single codebase that can run on multiple platforms. Popular frameworks include Flutter, React Native, and Xamarin.",
  },
  {
    title: "Java",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3O6qVi6VFkEDOxPqjKsAHcRPacOfyhmIDEEPocKzmvOqY-RUhrDay7ZCAVAT7D7oaTE&usqp=CAU",
    description: "Java is a widely used programming language for Android app development. It offers strong community support and a rich ecosystem of libraries and tools.",
  },
  {
    title: "Kotlin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8kR9W4a2KR6Mg6uJ_Mxe7e_UVIUeoQtIZfdD7EjSTBYWNFWsa2DT0Obrr0uGpP0C7xp8&usqp=CAU",
    description: "Kotlin is the official language for Android app development. It's known for its conciseness and modern features, making it a preferred choice for many developers.",
  },
  {
    title: "Flutter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymUrbs2H6p32KIMGMRHdLVGRxuLrkUSgJEPbdKnnIBURsnmwezznm6gqXO8nzGm5efO0&usqp=CAU",
    description: "Flutter is a popular open-source framework for building natively compiled applications for mobile, web, and desktop from a single codebase. It's great for cross-platform Android app development.",
  },
];