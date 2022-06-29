import "../../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import { AppRouter } from "./api/trpc/[trpc]";
import Inspect from "inspx";
import { useState, useEffect } from "react";
import { Layout } from "../components/layout/Layout";
import { LocationContext } from "../context/Location.context";
import { CommandPalletContext } from "../context/CommandPallet.context";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [location, setLocation] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      e.preventDefault();
      if ((e.metaKey || e.ctrlKey) && e.code === "KeyK") {
        setIsOpen(!isOpen);
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        e.preventDefault();
        if ((e.metaKey || e.ctrlKey) && e.code === "KeyK") {
          setIsOpen(!isOpen);
        }
      });
    };
  });

  return (
    <Inspect>
      <CommandPalletContext.Provider value={{ isOpen, setIsOpen }}>
        <LocationContext.Provider value={{ location, setLocation }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </LocationContext.Provider>
      </CommandPalletContext.Provider>
    </Inspect>
  );
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: true,
})(MyApp);
