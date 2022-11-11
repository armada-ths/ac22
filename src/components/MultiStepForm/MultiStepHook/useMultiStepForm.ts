import { ReactElement, useState} from 'react';

export function useMultiStepForm(steps: ReactElement[]){
    const [currentStep, setCurrentStep] = useState<number>(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    }

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }

    function goTo(index: number) {
        if (index >= 0 && index < steps.length) {
            setCurrentStep(index);
        }
    }
    
    return {
        currentStep,
        step: steps[currentStep],
        steps,
        isFirst: currentStep === 0,
        isLast: currentStep === steps.length - 1,
        nextStep,
        prevStep, 
        goTo,
    }
}