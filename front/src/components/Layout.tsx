import { Flex, Heading, Box } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<Flex direction="column">
			<Box
				p="5"
				bgColor="green.500"
			>
				<Heading
					as="h6"
					size="sm"
					color="white"
				>
					Home
				</Heading>
			</Box>

			<Box px="5rem" py="5rem">{children}</Box>
		</Flex>
	);
}
