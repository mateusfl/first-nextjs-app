import NavBar from '../../../components/layout/NavBar'
import NewReviewForm from '../../../components/review/NewReviewForm'
import { gql, useMutation } from '@apollo/client'
import Router from 'next/router'

function addreview() {
  const [createReview] = useMutation(gql`
    mutation CreateReview(
      $title: String!
      $slug: String!
      $image: String!
      $content: String!
    ) {
      createReview(
        data: { title: $title, slug: $slug, content: $content, image: $image }
      ) {
        id
      }
    }
  `)
  async function onAddReview(props) {
    const res = await createReview({
      variables: {
        title: props.title,
        slug: props.slug,
        image: props.image,
        content: props.content,
      },
    })
    if (res) {
      Router.push('.')
      console.log('review criada')
    }
  }

  return (
    <>
      <NavBar></NavBar>
      <NewReviewForm onAddReview={onAddReview} />
    </>
  )
}

export default addreview
