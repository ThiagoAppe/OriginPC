import React, { useState } from "react";
import PrimeraEleccion from "../components/primeraEleccion";
import SegundaEleccion from "../components/segundaEleccion";

const BuildUrPC = () => {
  const [step, setStep] = useState(1); // Controla el paso actual
  const [selectedOption, setSelectedOption] = useState(null); // Opción del primer paso
  const [finalSelection, setFinalSelection] = useState(null); // Opción final seleccionada

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setStep(2); // Avanzar al siguiente paso
  };

  const handleFinalSelection = (option) => {
    setFinalSelection(option);
    alert(`Has elegido: ${option}`); // Aquí puedes redirigir o manejar la elección final
  };

  const handleGoBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="container my-5">
      {step > 1 && (
        <div className="mb-4">
          <button className="btn btn-secondary" onClick={handleGoBack}>
            Volver al paso anterior
          </button>
        </div>
      )}

      {step === 1 && <PrimeraEleccion onSelect={handleSelectOption} />}
      {step === 2 && (
        <SegundaEleccion
          selectedOption={selectedOption}
          onSelect={handleFinalSelection}
        />
      )}
    </div>
  );
};

export default BuildUrPC;
