import Values from "values.js";
import { v4 as uuidv4 } from "uuid";
import SingleColor from "./SingleColor";

interface ColorListProps {
    colors: Values[];
}

function ColorList({ colors }: ColorListProps) {
    return (
        <section className="colors">
            {colors.map((color, index) => {
                return (
                    <SingleColor key={uuidv4()} color={color} index={index} />
                );
            })}
        </section>
    );
}
export default ColorList;
