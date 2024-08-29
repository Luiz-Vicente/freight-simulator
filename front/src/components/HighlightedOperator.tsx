import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Badge, Flex, Heading, Text } from "@chakra-ui/react";

export function HighlightedOperator() {
	return (
		<Flex direction="column">
			<Flex
				bgColor="green.800"
				alignItems="center"
				justifyContent="center"
				p="2"
				borderTopRadius="10"
			>
				<Text color="white">Operador mais barato</Text>
			</Flex>
			<Flex
				bgColor="gray.100"
				p="5"
				borderBottomRadius="10"
				direction="column"
			>
				<Flex
					position="relative"
					alignItems="center"
				>
					<Heading
						as="h5"
						size="md"
						mb="5"
					>
						Operador de Frete 1
					</Heading>
				</Flex>

				<Text>
					<PhoneIcon mr="5" />
					(11) 1111-1111{" "}
				</Text>
				<Text>
					<EmailIcon mr="5" />
					operador@email.com
				</Text>
				<Flex
					justifyContent="end"
					gap="2"
				>
					<Badge
						borderWidth="1px"
						borderStyle="solid"
						borderColor="green.400"
						py="2"
						px="3"
						borderRadius="20"
						colorScheme="green"
					>
						Preço: 120,00
					</Badge>
					<Badge
						borderWidth="1px"
						borderStyle="solid"
						borderColor="green.400"
						py="2"
						px="3"
						borderRadius="20"
						colorScheme="green"
					>
						Prazo: 3 dias
					</Badge>
				</Flex>
			</Flex>
		</Flex>
	);
}
