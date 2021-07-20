import Link from "next/link";
import Head from "next/head";

export default function HelloWorld() {
  return (
    <>
      <Head>
        <title>Hello, World.</title>
      </Head>
      <h1>Hello, World.</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
