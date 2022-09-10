import { Button } from 'flowbite-react'
import Link from 'next/link'

function ReviewCard(props) {
  return (
    <>
      <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
        <Link href={`reviews/${props.slug}`}>
          <div className="flex min-w-fit w-8 items-center cursor-pointer bg-white rounded-lg border shadow-md  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover max-w-[100px] h-[120px] rounded-l-lg "
              src={props.image.url}
              alt=""
            ></img>
            <div className="flex flex-col w-60 justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}
              </h5>
              <p className="mb-3 font-normal text-gray-500 truncate dark:text-gray-400">
                {props.content}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ReviewCard
