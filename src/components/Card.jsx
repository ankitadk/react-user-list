function Card({ desc, img, title, type, ratings }) {
  return (
    <>
      <div
        className="border p-2 rounded-lg w-[250px] m-"
        onClick={() => {
          alert(`You ordered ${title}`);
        }}
      >
        <div className="relative">
          <img src={img} alt="" className="rounded-lg" />
          {ratings >= 4.8 ? (
            <div className="absolute bg-green-50 text-green-800 rounded-full text-sm px-3 py-[1px] bottom-0 m-2">
              Best Seller
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="mt-2">{title}</p>
          <span
            className={
              type == "veg"
                ? "w-2 h-2 bg-green-600 rounded-full"
                : "w-2 h-2 bg-red-700 rounded-full"
            }
          ></span>
        </div>
        <p className="text-sm text-neutral-600">{desc}</p>
      </div>
    </>
  );
}

export default Card;
