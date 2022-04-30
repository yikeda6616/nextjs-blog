import { AppProps } from 'next/app';
import '../styles/global.css'; // You cannot import global CSS anywhere else.

export default function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}