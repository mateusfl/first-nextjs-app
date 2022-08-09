import { Button } from 'flowbite-react'

function NavBar() {
  return (
    <>
      <nav className="bg-gray-200 shadow-md px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className=" container flex flex-wrap justify-between items-center mx-auto">
          <a href="" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              🎥 Review De Filmes
            </span>
          </a>
          <div
            className="flex justify-between items-center gap-3 w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <a
              href="/"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              Página Inicial
            </a>
            <Button>Log In</Button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
