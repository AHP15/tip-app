export const  calculateTip = (bill: number, tip: number, people: number) => {
    return Number(
        (bill * tip / 100 / people).toFixed(2)
    );
};
export const calculateTotal = (bill: number, tip: number, people: number) => {
    return Number(
        (bill / people + Number(calculateTip(bill, tip, people))).toFixed(2)
    );
};
