import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { HighlightedOperator } from "./HighlightedOperator";
import { Layout } from "./Layout";

export function QuotationResult() {
	return (
		<Layout>
			<Flex
				alignItems="center"
				direction="column"
			>
				<Flex
					direction="column"
					w="50%"
				>
					<Box mb="5">
						<Heading>Resultado da busca</Heading>
						<Text>Nosso sistema encontrou os melhores operadores para você:</Text>
					</Box>

					<Flex
						gap="5"
						direction="column"
					>
						{<HighlightedOperator />}
						{<HighlightedOperator />}
					</Flex>
				</Flex>
			</Flex>
		</Layout>
	);
}
