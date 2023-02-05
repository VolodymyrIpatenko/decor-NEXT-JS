import '@/styles/globals.css';
import SharedLayout from '../components/sharedLayout/Layout';
import { BreakpointProvider } from 'react-socks';

export default function App({ Component, pageProps }) {
  return (
    <BreakpointProvider>
      <SharedLayout>
        <Component {...pageProps} />
      </SharedLayout>
    </BreakpointProvider>
  );
}
