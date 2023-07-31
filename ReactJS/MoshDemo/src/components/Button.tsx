
interface Props { 
    text: string,
    type: string,
    onClickButton: () => void,
}

export const Button = ({text, type, onClickButton}: Props) => {
    return (
        <button type="button" 
            className={`btn btn-${type}`}
            onClick={onClickButton}>
                {text}</button>
    )
}
