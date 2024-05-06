export const PersianNumber = (number: number) => {
    return new Intl.NumberFormat('fa-IR', {style: "decimal"}).format(number).replace(/٬/g, "");
}