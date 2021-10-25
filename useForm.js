import { useState } from 'react';

export const useForm = (valoresIniciales = {}) => {
    const [valores, setValores] = useState(valoresIniciales);

    const reset = ()=>{
        setValores(valoresIniciales);
    }
    const cambiosInput = ({ target }) => {
        setValores({
            ...valores,
            [target.name]: target.value,
        });
    };

    return [valores, cambiosInput, reset];
};
