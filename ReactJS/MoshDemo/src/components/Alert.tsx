
interface Props {
    initialString: string,
    secondString: string,
    onCloseButton: () => void
}

const Alert = ({ initialString, secondString, onCloseButton }: Props) => {
    return (
        <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{initialString}</strong> {secondString}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onCloseButton}></button>
            </div>
        </>
    )
}

export default Alert