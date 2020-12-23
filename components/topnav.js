import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function TopNav({ selected }) {
  const [isOn, setIsOn] = useState(false);

  const getSelectedClass = (title) => {
    return title === selected
      ? "bg-gray-900 text-white"
      : "text-gray-300 hover:bg-gray-700 hover:text-white";
  };

  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/">
                    <a
                      className={`${getSelectedClass(
                        "Home"
                      )} px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link href="/people">
                    <a
                      className={`${getSelectedClass(
                        "People"
                      )} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      People
                    </a>
                  </Link>
                  <Link href="/publications">
                    <a
                      className={`${getSelectedClass(
                        "Publications"
                      )} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Publications
                    </a>
                  </Link>
                  <Link href="/opportunities">
                    <a
                      className={`${getSelectedClass(
                        "Opportunities"
                      )} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Opportunities
                    </a>
                  </Link>

                  <Link href="/projects">
                    <a
                      className={`${getSelectedClass(
                        "Projects"
                      )} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Projects
                    </a>
                  </Link>

                  <Link href="/software">
                    <a
                      className={`${getSelectedClass(
                        "Software"
                      )} hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      Software
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                onClick={() => setIsOn(!isOn)}
              >
                <span className="sr-only">Open main menu</span>

                {!isOn ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`${isOn ? "" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <a
                className={`${getSelectedClass(
                  "Home"
                )} block px-3 py-2 rounded-md text-base font-medium`}
              >
                Home
              </a>
            </Link>
            <Link href="/people">
              <a
                className={`${getSelectedClass(
                  "People"
                )} hover:text-white block px-3 py-2 rounded-md text-sm font-medium`}
              >
                People
              </a>
            </Link>
            <Link href="/publications">
              <a
                className={`${getSelectedClass(
                  "Publications"
                )} hover:text-white block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Publications
              </a>
            </Link>
            <Link href="/opportunities">
              <a
                className={`${getSelectedClass(
                  "Opportunities"
                )} hover:text-white block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Opportunities
              </a>
            </Link>

            <Link href="/projects">
              <a
                className={`${getSelectedClass(
                  "Projects"
                )} hover:text-white block px-3 py-2 rounded-md text-sm font-medium`}
              >
                Projects
              </a>
            </Link>

            <Link href="/software">
              <a
                className={`${getSelectedClass(
                  "Software"
                )} hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                Software
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
