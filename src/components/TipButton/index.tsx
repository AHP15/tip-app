const TipButton = (
    { tip, setState, selected }
        : { tip: number, setState: (tip: number) => void, selected: number }
) => {
    return (
        <button
            className={`${selected === tip ? 'bg-teal-700 text-white' : 'bg-gray-200 text-teal-700'} py-2 rounded-md font-semibold hover:bg-teal-500`}
            data-testid={`tip-${tip}`}
            type="button"
            onClick={() => setState(tip)}
        >
            {tip}{'%'}
        </button>
    );
}

export default TipButton;

