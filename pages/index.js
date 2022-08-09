import { Button } from 'flowbite-react'
import NavBar from '../components/NavBar'
import Link from 'next/link'

function Home() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex justify-center gap-14 w-full h-48 ">
        <div className="flex flex-col justify-evenly">
          <img
            className="rounded-full"
            src="https://placehold.jp/100x100.png"
            alt="imagem"
          />
          <p>Dados do usuario</p>
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
