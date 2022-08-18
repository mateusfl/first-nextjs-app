import { Label, TextInput, Button, Textarea } from "flowbite-react"
import { useRef } from "react"
import Link from "next/link"

function NewReviewForm(props) {
  /*   function submitHandler(event) {
    event.preventDefault()

    const inputTitle = event.target.title.value
    const inputImage = event.target.image.value
    const inputContent = event.target.review.value

    const reviewData = {
      title: inputTitle,
      image: inputImage,
      content: inputContent,
    }
    props.onAddReview(reviewData)
  } */

  const titleRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()

  function submitHandler(event) {
    event.preventDefault()

    const inputTitle = titleRef.current.value
    const inputImage = imageRef.current.value
    const inputContent = contentRef.current.value

    const reviewData = {
      title: inputTitle,
      image: inputImage,
      content: inputContent,
    }

    props.onAddReview(reviewData)
  }

  return (
    <>
      <div className="flex flex-col items-center text-left mt-12">
        <h1 className="text-2xl font-bold">Escreva uma nova review</h1>
        <form
          className="flex flex-col gap-4 mt-5 w-80 sm:w-96"
          onSubmit={submitHandler}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Título Do Filme" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="Insira o título do filme"
              required={true}
              ref={titleRef}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Link Para Imagem Do Filme" />
            </div>
            <TextInput
              id="image"
              type="text"
              placeholder="Insira o link para a imagem do filme"
              required={true}
              ref={imageRef}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="review" value="Sua Review" />
            </div>
            <Textarea
              id="review"
              type="text"
              placeholder="Escreva aqui sua review"
              rows="5"
              required={true}
              ref={contentRef}
            />
          </div>
          <div className="flex gap-3 justify-around">
            <Button type="submit">Criar nova review</Button>
            <Link href=".">
              <a>
                <Button type="button" color="failure">
                  Cancelar review
                </Button>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default NewReviewForm
