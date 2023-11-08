import styles from './TipButton.module.css';

const TipButton = (
    { tip, setState, selected }
    : { tip: number, setState: (tip: number) => void, selected: number }
) => {
    return (
        <button
          className={selected === tip ? styles.selected_tip: styles.tip}
          data-testid={`tip-${tip}`}
          type="button"
          onClick={() => setState(tip)}
        >
            {tip}{'%'}
        </button>
    );
}

export default TipButton;
