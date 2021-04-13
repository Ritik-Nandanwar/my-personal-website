import Link from "next/link";

export default function Back() {
  return (
    <Link href="/">
      <a className="bg-blue-400 w-screen p-10"> All Players</a>
    </Link>
  );
}
