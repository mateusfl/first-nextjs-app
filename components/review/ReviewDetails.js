import { Button } from 'flowbite-react'
import Link from 'next/link'

function ReviewDetails(props) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 mt-8">
        <div>
          <img
            className="rounded-lg w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]"
            src={props.image}
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">{props.title}</h3>
          <p className="mt-4 w-80 h-fit">{props.content}</p>
        </div>
        <div className="flex mt-8 gap-2 items-center">
          <Link href={`${props.slug}/edit`}>
            <Button>editar</Button>
          </Link>
          <Link href={`${props.slug}/delete`}>
            <Button color="failure">apagar</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ReviewDetails
