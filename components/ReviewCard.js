import { Button } from "flowbite-react"
import Link from "next/link"

function ReviewCard(props) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Link href={`reviews/filme${props.id}`}>
          <div className="flex  items-center cursor-pointer bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={props.image}
              alt=""
            ></img>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {props.content}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-2 items-center">
          <Button>editar</Button>
          <Button color="failure">apagar</Button>
        </div>
      </div>
    </>
  )
}

export default ReviewCard
