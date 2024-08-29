import { createBrowserRouter } from "react-router-dom";
import { MakeQuotationView, QuotationResult } from "../components";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MakeQuotationView />,
	},
	{
		path: "/result",
		element: <QuotationResult />,
	},
]);
