import React, { createContext, useContext, useState, useEffect } from "react";

interface ExerciseData {
    series: number;
    reps: number[];
    loads: number[];
    date: string; // Adiciona a propriedade date
}

interface FormData {
    treino: string;
    exercises: Record<string, ExerciseData>; // Alterado para string
}

interface FormContextProps {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    treinoOptions: Record<string, string[]>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [formData, setFormData] = useState<FormData>(() => {
        // Carrega os dados do Local Storage ao inicializar
        const savedData = localStorage.getItem("formData");
        return savedData ? JSON.parse(savedData) : { treino: "", exercises: {} };
    });

    const treinoOptions: Record<string, string[]> = {
        A1: [
            "T bar row",
            "Remada baixa com triângulo (pronada ou neutra)",
            "Supino inclinado smith (banco 30°)",
            "Supino reto máquina (polia)",
            "Desenvolvimento máquina (polia)",
            "Tríceps francês unilateral (polia)",
            "Tríceps polia alta (barra reta ou V)",
        ],
        B1: [
            "RDL",
            "Cadeira flexora unilateral (máquina zerada)",
            "Leg press 45°",
            "Cadeira extensora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca unilateral polia baixa (bayesian curl)",
        ],
        A2: [
            "Remada curvada com halteres (pronada)",
            "Puxada alta (pegada neutra ou triângulo)",
            "Supino inclinado máquina (polia)",
            "Supino reto máquina (polia)",
            "Tríceps polia alta (barra reta ou V)",
            "Tríceps francês unilateral (polia)",
            "Elevação unilateral (polia baixa pegador)",
        ],
        B2: [
            "Cadeira flexora",
            "Agachamento livre",
            "Cadeira extensora",
            "Elevação pélvica smith",
            "Mesa flexora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca unilateral polia baixa (bayesian curl)",
        ],
        A3: [
            "Remada polia baixa unilateral (neutra)",
            "T bar row máquina",
            "Supino inclinado smith (banco 30°)",
            "Supino reto máquina convergente",
            "Desenvolvimento com halteres (banco 75°)",
            "Tríceps polia alta (barra reta ou V)",
            "Tríceps cruzado polia (unilateral)",
        ],
        B3: [
            "Cadeira flexora",
            "Leg press 45°",
            "Sumo deadlift",
            "Cadeira extensora",
            "Bíceps rosca polia baixa (barra reta)",
            "Bíceps rosca martelo halteres (simultâneo)",
            "Elevação lateral com halter sentado (banco 90°)",
        ],
    };

    useEffect(() => {
        // Salva os dados no Local Storage sempre que formData for atualizado
        localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

    return (
        <FormContext.Provider value={{ formData, setFormData, treinoOptions }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider");
    }
    return context;
};