// TODO: dynamic data

import Link from 'next/link';

export default function Nav() {
  const date = new Date().toDateString();
  return (
    <div className="my-3">
      <h1 className="text-9xl font-serif font-extrabold text-gray-800">
        IOAN{"'"}S BLOG
      </h1>
      <div className="text-xl flex items-center justify-evenly w-full border-y-2 border-black">
        <div className="date flex items-center justify-center gap-3 px-6">
          {date}
        </div>
        <div className="date flex items-center justify-center gap-3 flex-1 border-x-2 border-black">
          <Link href="/">BLOG</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="https://latrovaliev.dev">WEBSITE</Link>
        </div>
        <div className="date flex items-center justify-center gap-3 px-6">
          <div>Posts: 5</div>
        </div>
      </div>
    </div>
  );
}
