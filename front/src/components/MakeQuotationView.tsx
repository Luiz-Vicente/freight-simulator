import { Button, Flex, Heading, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Layout } from "./Layout";
import { useState } from "react";
import { ArrowForwardIcon, Search2Icon } from "@chakra-ui/icons";
import { AddressForm, DimensionsForm, QuotationStepper } from ".";
import { useLoadQuotation } from "../use-cases";

export function MakeQuotationView() {
	const [tabIndex, setTabIndex] = useState(0);
	const [collectionAddress, setCollectionAddress] = useState({
		zipCode: "",
		street: "",
		number: "",
		complement: "",
		neighborhood: "",
		city: "",
		state: "",
		country: "",
	});

	const [deliveryAddress, setDeliveryAddress] = useState({
		zipCode: "",
		street: "",
		number: "",
		complement: "",
		neighborhood: "",
		city: "",
		state: "",
		country: "",
	});

	const data = {
		collectionAddress: {
			zipCode: "83322220",
			street: "Rua Rio Uruguai",
			number: "325",
			complement: "casa 1",
			neighborhood: "Weissópolis",
			city: "Pinhais",
			state: "Paraná",
			country: "Brasil",
		},
		deliveryAddress: {
			zipCode: "80240-031",
			street: "Avenida Iguaçu",
			number: "2820",
			complement: "",
			neighborhood: "Rebouças",
			city: "Curitiba",
			state: "Paraná",
			country: "Brasil",
		},
		heightCM: 100,
		widthCM: 100,
		lengthCM: 100,
		shopkeeperId: "3aa6448b-9170-4111-93e2-3b578d5775b3",
	};
	useLoadQuotation(data);

	const handleNext = () => {
		const nextIndex = tabIndex + 1;
		setTabIndex(nextIndex);
	};

	const handleBack = () => {
		const prevIndex = tabIndex - 1;
		setTabIndex(prevIndex);
	};

	return (
		<Layout>
			<Flex
				direction="column"
				alignItems="center"
			>
				<Flex
					direction="column"
					w="50%"
				>
					<Heading as="h1">Faça uma cotação</Heading>
					<Flex
						as="form"
						flexDirection="column"
						marginY="30px"
						gap="5"
					>
						<QuotationStepper
							activeStep={tabIndex}
							setActiveStep={setTabIndex}
						/>

						<Tabs
							p="0"
							mt="5"
							index={tabIndex}
						>
							<TabPanels p="0">
								<TabPanel p="0">
									<AddressForm address={collectionAddress} />
									<Flex
										mt="5"
										gap="5"
									>
										<Button
											mt="5"
											onClick={handleBack}
											isDisabled={tabIndex === 0}
										>
											Voltar
										</Button>
										<Button
											mt="5"
											onClick={handleNext}
											rightIcon={<ArrowForwardIcon />}
										>
											Próximo
										</Button>
									</Flex>
								</TabPanel>
								<TabPanel p="0">
									<AddressForm />
									<Flex
										mt="5"
										gap="5"
									>
										<Button
											mt="5"
											onClick={handleBack}
										>
											Voltar
										</Button>
										<Button
											mt="5"
											onClick={handleNext}
											rightIcon={<ArrowForwardIcon />}
										>
											Próximo
										</Button>
									</Flex>
								</TabPanel>
								<TabPanel p="0">
									<DimensionsForm />
									<Flex
										mt="5"
										gap="5"
									>
										<Button
											mt="5"
											onClick={handleBack}
										>
											Voltar
										</Button>
										<Button
											mt="5"
											leftIcon={<Search2Icon />}
											onClick={() => (window.location.href = "/result")}
										>
											Buscar opções
										</Button>
									</Flex>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Flex>
				</Flex>
			</Flex>
		</Layout>
	);
}
