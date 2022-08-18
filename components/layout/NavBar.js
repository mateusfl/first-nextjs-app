import { Button } from "flowbite-react"
import Link from "next/link"

function NavBar() {
  let isHomePage = false
  if (typeof window !== "undefined") {
    if (window.location.pathname == "/") {
      isHomePage = true
    }
  }
  return (
    <>
      <nav className="bg-gray-200 shadow-md px-2 w-full sm:px-4 py-2.5 dark:bg-gray-900">
        <div className=" container flex flex-wrap justify-around items-center mx-auto">
          <div
            className={`flex items-center gap-5 ${
              isHomePage ? "invisible" : ""
            }`}
          >
            <Link href=".">
              <div className="cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            🎥
          </span>
          <div
            className="flex justify-center items-center gap-3 w-fit md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <Link href="/" className="block py-2 pr-4 pl-3 ">
              <div className="cursor-pointer">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
            </Link>
            {/* <Button>Log In</Button> */}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
