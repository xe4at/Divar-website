import defaultOptions from "./configs/reactQuery";

import { BrowserRouter } from "react-router-dom";

import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Router />
            <Toaster />
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
