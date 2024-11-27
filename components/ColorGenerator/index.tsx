"use client";

import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";

function ColorGenerator() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [colors, setColors] = useState<Values[]>(
        new Values("#f15025").all(10)
    );

    return (
        <main>
            <Form />
            <ColorList colors={colors} />
        </main>
    );
}
export default ColorGenerator;
