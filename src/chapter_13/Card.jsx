function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div
            style={{
                margin: 8,
                padding: 8,
                borderRadius: 8,
                boxShadow: "0px 0px 4px grey",
                backgroundColor: backgroundColor || "white", /* specialization 사용부분 */
            }}
        >
            {title && <h1>{title}</h1>}
            {children} {/* containment 사용부분 */}
        </div>
    );
}

export default Card;