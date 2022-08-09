import { Button } from 'flowbite-react'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import ReviewCard from '../../components/ReviewCard'

function listaDeFilmes() {
  return (
    <>
      <NavBar></NavBar>
      <div className="flex flex-col items-center gap-5 mt-8">
        <ul className="flex flex-col gap-3">
          <li>
            <ReviewCard reviewId="1"></ReviewCard>
          </li>
          <li>
            <ReviewCard reviewId="2"></ReviewCard>
          </li>
          <li>
            <ReviewCard reviewId="3"></ReviewCard>
          </li>
        </ul>
        <Button>
          <Link href="/reviews/addreview"> Adicionar Review</Link>
        </Button>
      </div>
    </>
  )
}

export default listaDeFilmes
