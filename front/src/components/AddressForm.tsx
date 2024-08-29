import { Flex, FormControl, FormLabel, Grid, GridItem, Input, Select } from "@chakra-ui/react";

export function AddressForm() {
	return (
		<Flex
			direction="column"
			gap="5"
		>
			<Grid
				templateColumns="repeat(6, 1fr)"
				gap="5"
			>
				<GridItem colSpan={2}>
					<FormControl>
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Estado:
						</FormLabel>
						<Select
							focusBorderColor="green.400"
							placeholder="Selecione"
						>
							<option value="Paraná">PR</option>
							<option value="São Paulo">SP</option>
							<option value="Rio de Janeiro">RJ</option>
							<option value="Minas Gerais">MG</option>
							<option value="Rio Grande do Sul">RS</option>
							<option value="Santa Catarina">SC</option>
							<option value="Bahia">BA</option>
							<option value="Pernambuco">PE</option>
							<option value="Ceará">CE</option>
							<option value="Goiás">GO</option>
							<option value="Pará">PA</option>
							<option value="Paraíba">PB</option>
							<option value="Espírito Santo">ES</option>
							<option value="Amazonas">AM</option>
							<option value="Maranhão">MA</option>
							<option value="Rio Grande do Norte">RN</option>
							<option value="Alagoas">AL</option>
							<option value="Piauí">PI</option>
							<option value="Mato Grosso">MT</option>
							<option value="Mato Grosso do Sul">MS</option>
							<option value="Sergipe">SE</option>
							<option value="Rondônia">RO</option>
							<option value="Tocantins">TO</option>
							<option value="Acre">AC</option>
							<option value="Amapá">AP</option>
							<option value="Roraima">RR</option>
						</Select>
					</FormControl>
				</GridItem>

				<GridItem colSpan={2}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Cidade:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>

				<GridItem colSpan={2}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Bairro:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>
			</Grid>
			<Grid
				templateColumns="repeat(5, 1fr)"
				gap="5"
			>
				<GridItem colSpan={3}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Rua:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>

				<GridItem colSpan={1}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Nº:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>

				<GridItem colSpan={1}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							Complemento:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>
			</Grid>
			<Grid
				templateColumns="repeat(5, 1fr)"
				gap="5"
			>
				<GridItem colSpan={2}>
					<FormControl colorScheme="green">
						<FormLabel
							fontWeight="semibold"
							htmlFor="origin"
						>
							CEP:
						</FormLabel>
						<Input
							focusBorderColor="green.400"
							type="text"
							id="origin"
							name="origin"
						/>
					</FormControl>
				</GridItem>
			</Grid>
		</Flex>
	);
}
