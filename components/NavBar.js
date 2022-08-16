import { Button } from "flowbite-react"
import Link from "next/link"

function NavBar() {
  return (
    <>
      <nav className="bg-gray-200 shadow-md px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className=" container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex items-center gap-5">
            <Link href="./">
              <div className="cursor-pointer">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </div>
            </Link>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              🎥 Review De Filmes
            </span>
          </div>
          <div
            className="flex justify-center items-center gap-3 w-fit md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <Link href="/" className="block py-2 pr-4 pl-3 ">
              Página Inicial
            </Link>
            <Button>Log In</Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
