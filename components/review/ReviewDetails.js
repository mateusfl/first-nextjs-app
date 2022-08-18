function ReviewDetails(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 mt-8">
        <div>
          <img
            className="rounded-lg lg:w-[150px] lg:h-[200px]"
            src={props.image}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">{props.title}</h3>
          <p className="mt-4 w-80 h-fit">{props.content}</p>
        </div>
      </div>
    </>
  )
}

export default ReviewDetails
