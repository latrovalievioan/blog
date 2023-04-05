import { mockPost } from './mockPost';

export default function Home() {
  const posts = [
    mockPost,
    mockPost,
    mockPost,
    mockPost,
    mockPost,
    mockPost,
    mockPost,
    mockPost,
  ];

  return (
    <div className="w-full gap-5 grid grid-cols-3">
      {posts.map((p, i) => {
        console.log('map');
        return (
          <div key={i}>
            <div className="flex">
              <h2 className="text-2xl font-bold flex-1">{p.title}</h2>
              <div>{p.createdAt}</div>
            </div>
            <h3 className="text-xl font-bold text-gray-400 flex-1">
              {p.subtitle}
            </h3>
            <div className="text-justify">
              {p.desctiption}{' '}
              <button className="underline">Read more...</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
