export const  calculateTip = (
    bill: number | string,
    tip: number | string,
    people: number | string
) => {
    return (Number(bill) * Number(tip) / 100 / Number(people)).toFixed(2);
};
export const calculateTotal = (
    bill: number | string,
    tip: number | string,
    people: number | string
) => {
    return (Number(bill) / Number(people) + Number(calculateTip(bill, tip, people))).toFixed(2);
};
