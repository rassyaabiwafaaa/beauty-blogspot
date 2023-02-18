import { createContext } from "react";

export const ContextProvider = createContext(null);

export default function ContextApi({ children }) {
  return <ContextProvider value={data}>{children}</ContextProvider>;
}

export async function getStaticProps() {
  const response = await fetch("https://gorest.co.in/public/v2/posts?per_page=5");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
