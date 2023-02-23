import Layout from '../layouts/Page.astro';
import { AuthContextProvider } from '../stores/authContext';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}

export default MyApp