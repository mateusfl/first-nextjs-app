import ReviewCard from "./ReviewCard"

function ReviewList(props) {
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-8">
        <ul className="flex flex-col gap-7">
          {props.reviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              title={review.title}
              image={review.image}
              content={review.content}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ReviewList
