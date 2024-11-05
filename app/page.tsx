import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-x-2 p-24">
        <Link href={'/test'} className={'underline'} >Click me</Link>
    </main>
  );
}
