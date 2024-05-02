import {useEffect, useState} from "react";

export const usePersianNumber = (number: number) => {
    const [PersianNumber, setPersianNumber] = useState<string>('');

    useEffect(() => {
        const convertedNumber = new Intl.NumberFormat('fa-IR', {style: "decimal"}).format(number).replace(/٬/g, "");
        setPersianNumber(convertedNumber)
    }, [number]);

    return PersianNumber;
}