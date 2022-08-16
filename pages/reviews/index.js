import { Button } from "flowbite-react"
import Link from "next/link"
import ReviewList from "../../components/ReviewList"

function listaDeFilmes() {
  const lista = [
    {
      id: "review01",
      image: "https://picsum.photos/150",
      title: "titulo review 01",
      content: "lorem ipsum",
    },
    {
      id: "review02",
      image: "https://picsum.photos/150",
      title: "titulo review 02",
      content: "lorem ipsum",
    },
    {
      id: "review03",
      image: "https://picsum.photos/150",
      title: "titulo review 03",
      content: "lorem ipsum",
    },
  ]
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-8">
        <ReviewList reviews={lista} />

        <Button>
          <Link href="/reviews/add-review"> Adicionar Review</Link>
        </Button>
      </div>
    </>
  )
}

export default listaDeFilmes
