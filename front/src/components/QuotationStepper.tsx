import {
	Box,
	Step,
	StepIcon,
	StepIndicator,
	StepNumber,
	Stepper,
	StepSeparator,
	StepStatus,
	StepTitle,
} from "@chakra-ui/react";

const steps = [{ title: "Coleta" }, { title: "Entrega" }, { title: "Dimensões" }];

export function QuotationStepper({
	activeStep,
	setActiveStep,
}: {
	activeStep: number;
	setActiveStep: (step: number) => void;
}) {
	return (
		<Stepper
			colorScheme="green"
			index={activeStep}
		>
			{steps.map((step, index) => (
				<Step
					key={index}
					onClick={() => setActiveStep(index)}
				>
					<StepIndicator>
						<StepStatus
							complete={<StepIcon />}
							incomplete={<StepNumber />}
							active={<StepNumber />}
						/>
					</StepIndicator>

					<Box flexShrink="0">
						<StepTitle>{step.title}</StepTitle>
					</Box>

					<StepSeparator />
				</Step>
			))}
		</Stepper>
	);
}
