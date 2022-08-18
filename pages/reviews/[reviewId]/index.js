import ReviewDetails from "../../../components/review/ReviewDetails"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

const client = new ApolloClient({
  uri: "https://api-sa-east-1.hygraph.com/v2/cl6z3pgy501ed01urbi5jggg5/master",
  cache: new InMemoryCache(),
})

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        reviews {
          id
        }
      }
    `,
  })

  const paths = data.reviews.map((review) => ({
    params: { reviewId: review.id },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const id = context.params.reviewId
  const { data } = await client.query({
    query: gql`
      query GetReviewbyId{
        review(where: { id: "${id}" }) {
          image
          title
          content
        }
      }
    `,
  })
  return {
    props: {
      reviews: data.review,
    },
  }
}

function review(props) {
  return (
    <>
      <ReviewDetails
        image={props.reviews.image}
        title={props.reviews.title}
        content={props.reviews.content}
      />
    </>
  )
}

export default review
