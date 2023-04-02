export default function Nav() {
  return (
    <>
      <h1 className="text-9xl font-serif font-extrabold text-gray-800">
        IOAN{"'"}S BLOG
      </h1>
      <div className="flex items-center justify-evenly w-full border-y-2 border-black">
        <div className="date flex items-center justify-center gap-3 px-6">
          Saturday, 02 September 2023
        </div>
        <div className="date flex items-center justify-center gap-3 flex-1 border-x-2 border-black">
          <button>BLOG</button>
          <button>ABOUT</button>
          <button>WEBSITE</button>
        </div>
        <div className="date flex items-center justify-center gap-3 px-6">
          <div>Posts: 5</div>
          <div>Price: 0$</div>
        </div>
      </div>
    </>
  );
}
