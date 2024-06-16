import Link from 'next/link';

export default async function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="my-auto space-y-8 ">
        <h2>Not Found: </h2>
        <p>Could not find requested resource</p>
        <p>
          Go to
          <Link href="/" className=" btn-filled ml-5  inline-block">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
