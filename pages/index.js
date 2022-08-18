import { Button } from "flowbite-react"
import Link from "next/link"

function Home() {
  return (
    <>
      <div className="flex justify-center gap-14 mt-24 w-full h-48 ">
        <div className="flex flex-col justify-evenly items-center  w-40">
          <img
            className="rounded-full drop-shadow-lg "
            src="https://placehold.jp/120x120.png"
            alt="imagem"
          />
          <p className="text-xl text-center font-semibold my-2">Usuario1</p>
          {/* <p className="text-ellipsis">Lorem ipsum dolor</p> */}
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Link href="/reviews">
            <a>
              <Button>Reviews Feitas</Button>
            </a>
          </Link>
          <Link href="/lista">
            <a>
              <Button>Lista de Filmes</Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
