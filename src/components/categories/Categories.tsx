
export const Categories = () => {
  return (
    <section
      className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5"
    >


      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/bedroom.png"
            alt="bedroom cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Bedroom
          </p>
        </div>
      </a>



      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/matrass.png"
            alt="Matrass cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Matrass
          </p>
        </div>
      </a>



      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/outdoors.png"
            alt="kitchen cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Outdoor
          </p>
        </div>
      </a>



      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/product-bigsofa.png"
            alt="bedroom cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Sofa
          </p>
        </div>
      </a>



      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/kitchen.png"
            alt="bedroom cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Kitchen
          </p>
        </div>
      </a>



      <a href="#">
        <div className="relative cursor-pointer">
          <img
            className="mx-auto h-auto w-auto brightness-50 duration-300 hover:brightness-100"
            src="./assets/images/living-room.png"
            alt="bedroom cathegory image"
          />

          <p
            className="pointer-events-none absolute top-1/2 left-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-xl"
          >
            Living room
          </p>
        </div>
      </a>
    </section>
  )
}
