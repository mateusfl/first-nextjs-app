import { Button } from 'flowbite-react'
import NavBar from '../components/NavBar'
import Link from 'next/link'

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center gap-14 mt-24 w-full h-48 ">
        <div className="flex flex-col justify-evenly items-center  w-40">
          <img
            className="rounded-full drop-shadow-lg "
            src="https://placehold.jp/120x120.png"
            alt="imagem"
          />
          <p className="text-xl text-center font-semibold my-2">Usuario1</p>
          <p className="text-ellipsis">Lorem ipsum dolor</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <Link href="/reviews">
            <Button>Reviews Feitas</Button>
          </Link>
          <Link href="/lista">
            <Button>Lista de Filmes</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
