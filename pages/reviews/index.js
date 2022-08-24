import { Button } from "flowbite-react"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Link from "next/link"
import ReviewList from "../../components/review/ReviewList"

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
]

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cl6z3pgy501ed01urbi5jggg5/master",
    cache: new InMemoryCache(),
  })
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        reviews {
          id
          image
          title
          slug
          content
          stage
        }
      }
    `,
  })
  //usar os dados dessa lista de reviews
  //pra verificar se cada uma foi publicada ou não
  return {
    props: {
      reviews: data.reviews,
    },
  }
}

/* export async function getStaticProps() {
  //coletar os dados do banco de dados
  return {
    //retornar um objeto contendo os props para a página
    props: {
      reviews: lista,
    },
  }
} */

function listaDeFilmes(props) {
  return (
    <>
      <div className="flex flex-col items-center gap-12 mt-8">
        <ReviewList reviews={props.reviews} />

        <Button>
          <Link href="reviews/add-review"> Adicionar Review</Link>
        </Button>
      </div>
    </>
  )
}

export default listaDeFilmes
