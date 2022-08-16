import NewReviewForm from "../../../components/NewReviewForm"

function addreview() {
  function onAddReview(reviewData) {
    console.log(reviewData)
    //Função que irá usar os dados do form
  }
  return (
    <>
      <NewReviewForm onAddReview={onAddReview} />
    </>
  )
}

export default addreview
