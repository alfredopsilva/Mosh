import { Button } from "./Button"
import { useState } from "react"

interface Props{
    size: number,
    children: string
}

const ExpandableText = ({size, children}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)
    if(children.length <= size) return <>{children}</>
    
    const text = isExpanded ? children : children.substring(0,size);
    
    return (
        <>
            <p>{text} ...</p>
            <Button text={isExpanded ? "Less" : "More"} type={"primary"} onClickButton={() => setIsExpanded(!isExpanded)}/>
        </>
    )
    
 
}

export default ExpandableText