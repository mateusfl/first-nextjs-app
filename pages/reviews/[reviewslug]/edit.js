import NavBar from '../../../components/layout/NavBar'
import { EditReview } from '../../../components/review/EditReview'
import { ApolloClient, InMemoryCache, gql, useMutation } from '@apollo/client'
import Router from 'next/router'

const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6z3pgy501ed01urbi5jggg5/master',
  cache: new InMemoryCache(),
})

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        reviews {
          slug
        }
      }
    `,
  })
  const paths = data.reviews.map((review) => ({
    params: { reviewslug: review.slug },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const slug = context.params.reviewslug
  const { data } = await client.query({
    query: gql`
      query GetReviewbyslug{
        review(where: { slug: "${slug}" }) {
          image
          title
          slug
          content
        }
      }
    `,
  })

  return {
    props: {
      review: data.review,
    },
  }
}

function editreview(props) {
  let currentSlug = props.review.slug

  const [UpdateReview] = useMutation(gql`
    mutation EditReview(
      $title: String!
      $slug: String!
      $slug1: String!
      $content: String!
      $image: String!
    ) {
      updateReview(
        data: { title: $title, slug: $slug, content: $content, image: $image }
        where: { slug: $slug1 }
      ) {
        slug
      }
    }
  `)

  async function onEditReview(props) {
    const res = await UpdateReview({
      variables: {
        title: props.title,
        slug: props.slug,
        slug1: currentSlug,
        image: props.image,
        content: props.content,
      },
    })
    if (res) {
      Router.push('..')
      console.log('editado')
    }
  }

  return (
    <>
      <NavBar isDynamic="true" reviewslug={props.review.slug}></NavBar>
      <div>
        <EditReview
          onEditReview={onEditReview}
          reviewslug={props.review.slug}
          content={props.review.content}
          title={props.review.title}
          image={props.review.image}
        />
      </div>
    </>
  )
}

export default editreview
