import Values from "values.js";

interface SingleColorProps {
    color: Values;
    index: number;
}

function SingleColor({ color, index }: SingleColorProps) {
    const { hex, weight } = color;

    const saveToClipboard = async () => {
        if (navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                alert("Color copied to clipboard!");
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error) {
                alert("Failed to copy color to clipboard!");
            }
        } else {
            alert(`Clipboard access not available!`);
        }
    };

    return (
        <article
            className={index > 10 ? "color color-light" : "color"}
            style={{ background: `#${hex}` }}
            onClick={saveToClipboard}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">#{hex}</p>
        </article>
    );
}
export default SingleColor;
