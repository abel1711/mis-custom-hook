import { useEffect, useRef, useState } from 'react';

export const useFetch = (url = '') => {
    
    const estaMontado = useRef(true);

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            estaMontado.current = false;
        };
    }, []);

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null,
        });
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                if (estaMontado.current) {
                    setState({
                        loading: false,
                        error: null,
                        data,
                    });
                }
            })
            .catch(()=>{
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo realizar la petición',
                })
            })
    }, [url]);

    return state;
};
