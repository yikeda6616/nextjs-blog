import '../styles/global.css'; // You cannot import global CSS anywhere else.

export default function App ({ Component, pageProps }) {
  return <Component {...pageProps} />
}