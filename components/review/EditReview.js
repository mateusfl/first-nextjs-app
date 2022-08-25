import { Label, TextInput, Button, Textarea } from 'flowbite-react'
import { useRef } from 'react'
import Link from 'next/link'
import slugify from 'slugify'

export function EditReview(props) {
  const titleRef = useRef()
  const imageRef = useRef()
  const contentRef = useRef()

  function editHandler(event) {
    event.preventDefault()

    const inputTitle = titleRef.current.value
    const inputImage = imageRef.current.value
    const inputContent = contentRef.current.value

    const EditedReviewData = {
      title: inputTitle,
      slug: slugify(inputTitle),
      image: inputImage,
      content: inputContent,
    }

    props.onEditReview(EditedReviewData)
  }

  return (
    <>
      <div className="flex flex-col items-center text-left mt-12">
        <h1 className="text-2xl font-bold">Editar review</h1>
        <div>
          <form
            className="flex flex-col gap-4 mt-5 w-80 sm:w-96"
            onSubmit={editHandler}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Título Do Filme" />
              </div>
              <TextInput
                id="title"
                type="text"
                defaultValue={props.title}
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
                defaultValue={props.image}
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
                rows="5"
                defaultValue={props.content}
                required={true}
                ref={contentRef}
              />
            </div>
            <div className="flex gap-3 justify-around">
              <Button type="submit">Salvar edições</Button>
              <Link href={`../${props.reviewslug}`}>
                <a>
                  <Button type="button" color="failure">
                    Cancelar edição
                  </Button>
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
