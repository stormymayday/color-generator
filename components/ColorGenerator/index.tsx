"use client";

import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";

function ColorGenerator() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [colors, setColors] = useState([new Values("#f15025").all(10)]);
    console.log(colors);

    return (
        <main>
            <Form />
            <ColorList />
        </main>
    );
}
export default ColorGenerator;
