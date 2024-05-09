import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="space-y-8 my-auto ">
        <h2>Not Found: </h2>
        <p>Could not find requested resource</p>
        <p>
          Go to
          <Link href="/" className=" ml-5 inline-block  btn-filled">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
