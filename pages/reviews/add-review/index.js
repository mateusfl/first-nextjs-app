import NewReviewForm from "../../../components/review/NewReviewForm"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

function addreview() {
  const client = new ApolloClient({
    uri: "https://api-sa-east-1.hygraph.com/v2/cl6z3pgy501ed01urbi5jggg5/master",
    cache: new InMemoryCache(),
  })
  async function onAddReview(props) {
    const { data } = await client.mutate({
      mutation: gql`
        mutation CreateReview(
          $title: String!
          $image: String!
          $content: String!
        ) {
          createReview(
            data: { title: $title, content: $content, image: $image }
          ) {
            id
          }
        }
      `,
    })
    console.log(data)
  }

  return (
    <>
      <NewReviewForm onAddReview={onAddReview} />
    </>
  )
}

export default addreview
