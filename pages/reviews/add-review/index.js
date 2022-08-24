import NewReviewForm from "../../../components/review/NewReviewForm"
import { gql, useMutation } from "@apollo/client"

const useCreateReview = gql`
  mutation CreateReview($title: String!, $image: String!, $content: String!) {
    createReview(data: { title: $title, content: $content, image: $image }) {
      id
    }
  }
`

function addreview() {
  const [createReview] = useMutation(gql`
    mutation CreateReview($title: String!, $image: String!, $content: String!) {
      createReview(data: { title: $title, content: $content, image: $image }) {
        id
      }
    }
  `)
  async function onAddReview(props) {
    await createReview({
      variables: {
        title: props.title,
        image: props.image,
        content: props.content,
      },
    })

    //mutation para publicar a review

    console.log(useCreateReview)
  }

  return (
    <>
      <NewReviewForm onAddReview={onAddReview} />
    </>
  )
}

export default addreview
