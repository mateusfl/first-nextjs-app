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
            className="flex justify-between items-center gap-6 w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <a
              href="/"
              className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            >
              Página Inicial
            </a>

            <button
              type="button"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Log in
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
