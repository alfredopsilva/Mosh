import { useState } from "react";

interface Props {
    items: string[],
    heading: string,
    onSelectedItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectedItem }: Props) {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>My Group List of {heading}</h1>
            <ul className="list-group">
                {items.map((item, index) =>
                    <li
                        className={selectedIndex === index
                            ? 'list-group-item active' : 'list-group-item'}
                        key={item}
                        onClick={() => {
                            onSelectedItem(item);
                            setSelectedIndex(index);
                        }}>
                        {item}
                    </li>)}
            </ul>
        </>
    );
}

export default ListGroup;
