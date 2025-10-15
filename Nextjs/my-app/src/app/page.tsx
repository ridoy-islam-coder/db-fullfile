import Link from "next/link";
import AbutePage from "./abute/page";


export default function Home() {
  return (
     <div>

    console.log(process.env.MY_SECRET_KEY);
        <AbutePage />
        <Link href="/abute">Go to Abute Page</Link>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
     </div>
  );
}
