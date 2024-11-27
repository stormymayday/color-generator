"use client";

import { useState, FormEvent } from "react";

export default function Form() {
    const [color, setColor] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    return (
        <section className="container">
            <h4>color generator</h4>
            <form className="color-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="#f15025"
                />
                <button
                    className="btn"
                    type="submit"
                    style={{ background: color }}
                >
                    submit
                </button>
            </form>
        </section>
    );
}
