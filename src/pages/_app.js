import Layout from "@/components/layout/Index";
import "@/styles/globals.css";
import { SearchProvider } from "@/components/providers/provider-search";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
