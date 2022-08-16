function review() {
  return (
    <>
      <div className="flex justify-center gap-5 mt-8">
        <div>
          <img
            className="rounded-lg w-[200px] h-[300px]"
            src="https://picsum.photos/150"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-2xl">titulo do filme</h3>
          <p className="mt-4 w-80 h-fit">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem necessitatibus inventore facere minima, dolore ad
            nesciunt repellendus ipsa
          </p>
        </div>
      </div>
    </>
  )
}

export default review
