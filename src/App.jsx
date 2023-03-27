
import { QueryClient, QueryClientProvider } from "react-query"
import Todos from "./Todos"
import Mutation from "./Mutation"
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Todos />
      <Mutation />
      {/* "here is testing" */}
    </QueryClientProvider>
  )}
  export default App
 