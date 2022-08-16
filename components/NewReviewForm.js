import { Label, TextInput, Button, Textarea } from "flowbite-react"
import Link from "next/link"

function NewReviewForm(props) {
  function submitHandler(event) {
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
  }
  return (
    <>
      <div className="flex flex-col items-center text-left mt-12">
        <h1 className="text-2xl font-bold">Escreva sua nova review</h1>
        <form
          className="flex flex-col gap-4 mt-5 w-[25rem]"
          onSubmit={submitHandler}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Título Do Filme" />
            </div>
            <TextInput
              id="title"
              type="text"
              placeholder="placeholder"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="image" value="Link Para Imagem Do Filme" />
            </div>
            <TextInput
              id="image"
              type="text"
              placeholder="placeholder"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="review" value="Sua Review" />
            </div>
            <Textarea
              id="review"
              type="text"
              placeholder="placeholder"
              rows="5"
              required={true}
            />
          </div>
          <div className="flex gap-3">
            <Button type="submit">Criar nova review</Button>
            <Link href="./">
              <Button type="button" color="failure">
                Cancelar review
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}
export default NewReviewForm
