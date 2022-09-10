import NavBar from '../../../components/layout/NavBar'
import ReviewDetails from '../../../components/review/ReviewDetails'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

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
          image{url}
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

function review(props) {
  console.log(props.review.image)
  return (
    <>
      <NavBar></NavBar>
      <ReviewDetails
        image={props.review.image}
        title={props.review.title}
        slug={props.review.slug}
        content={props.review.content}
      />
    </>
  )
}

export default review
