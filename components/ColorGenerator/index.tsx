"use client";

import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";

function ColorGenerator() {
    const [colors, setColors] = useState<Values[]>(
        new Values("#f15025").all(10)
    );

    const addColor = (color: string) => {
        try {
            const newColors = new Values(color).all(10);
            setColors(newColors);
            // toast.success("color added");
        } catch (error: unknown) {
            if (error instanceof Error) {
                // toast.error(error.message);
            } else {
                // toast.error("Oops! Something went wrong!");
            }
        }
    };

    return (
        <main>
            <Form addColor={addColor} />
            <ColorList colors={colors} />
            {/* <ToastContainer position="top-center" /> */}
        </main>
    );
}
export default ColorGenerator;
