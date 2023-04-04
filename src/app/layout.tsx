import Nav from './components/Nav';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex justify-center">
        <div className="flex w-3/4 flex-col p-20 items-center">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
