
import { QueryClient, QueryClientProvider } from "react-query"
import Todos from "./Todos"
import Mutation from "./Mutation"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LazyLoading from "./LazyLoading";
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/post" element={<Todos />} />
    <Route path="/createpost" element={<Mutation />} />
    <Route path="/lazylaoding" element={<LazyLoading />} />

    </Routes>
    </BrowserRouter>
    </QueryClientProvider>

  )}
  export default App
 