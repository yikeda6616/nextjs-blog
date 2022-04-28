import Head from "next/head"
import Link from "next/link"
import Script from "next/script"

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload" // Load this particular script lazily during browser idle time
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)} // Run any JavaScript code immediately after the script has finished loading.
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}