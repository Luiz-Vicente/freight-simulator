import {
	Flex,
	FormControl,
	FormLabel,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
} from "@chakra-ui/react";

export function DimensionsForm() {
	return (
		<Flex gap="5">
			<FormControl>
				<FormLabel
					fontWeight="semibold"
					htmlFor="weight"
				>
					Peso:
				</FormLabel>
				<NumberInput
					focusBorderColor="green.400"
					precision={2}
					step={0.1}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>

			<FormControl>
				<FormLabel
					fontWeight="semibold"
					htmlFor="weight"
				>
					Altura:
				</FormLabel>
				<NumberInput
					focusBorderColor="green.400"
					precision={2}
					step={0.1}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>

			<FormControl>
				<FormLabel
					fontWeight="semibold"
					htmlFor="weight"
				>
					Comprimento:
				</FormLabel>
				<NumberInput
					focusBorderColor="green.400"
					precision={2}
					step={0.1}
				>
					<NumberInputField />
					<NumberInputStepper>
						<NumberIncrementStepper />
						<NumberDecrementStepper />
					</NumberInputStepper>
				</NumberInput>
			</FormControl>
		</Flex>
	);
}
