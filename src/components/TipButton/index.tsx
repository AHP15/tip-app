
const TipButton = (
    { tip, setState }
    : { tip: number, setState: (tip: number) => void }
) => {

    return (
        <button type="button" onClick={() => setState(tip)}>
            {tip}
        </button>
    );
}

export default TipButton;
