import { ChakraProvider } from "@chakra-ui/react";
import { router } from "./routes/index.js";
import { RouterProvider } from "react-router";

function App() {
	return (
		<ChakraProvider>
			<RouterProvider router={router} />
		</ChakraProvider>
	);
}

export default App;
