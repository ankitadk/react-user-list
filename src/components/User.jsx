function User({ name, desc, img }) {
  return (
    <>
      <div className="w-[350px] mt-3 mb-3 flex justify-between items-center mx-auto bg-white px-5 py-2 rounded-lg">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src={img}
            alt=""
          />
          <div className="">
            <p className="">{name}</p>
            <p className="text-sm">{desc}</p>
          </div>
        </div>
        <button className="">Follow</button>
      </div>
    </>
  );
}

export default User;
