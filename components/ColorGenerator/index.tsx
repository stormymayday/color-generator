"use client";

import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ToastContainer, toast } from "react-toastify";

function ColorGenerator() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [colors, setColors] = useState<Values[]>(
        new Values("#f15025").all(10)
    );

    return (
        <main>
            <Form />
            <ColorList colors={colors} />
            <ToastContainer position="top-center" />
        </main>
    );
}
export default ColorGenerator;
