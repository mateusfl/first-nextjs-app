import { Label, TextInput, Button, Textarea } from 'flowbite-react'

function addReview() {
  return (
    <>
      <div className="flex flex-col items-center text-left mt-12">
        <h1 className="text-2xl font-bold">Escreva sua nova review</h1>
        <form className="flex flex-col gap-4 mt-5 w-1/2">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="titulo" value="Título Do Filme" />
            </div>
            <TextInput
              id="titulo"
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

          <Button href="/reviews" type="submit">
            Criar nova review
          </Button>
        </form>
      </div>
    </>
  )
}

export default addReview
