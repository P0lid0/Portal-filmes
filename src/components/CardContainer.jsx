export default function CardContainer({ titulo, children }) {
    return (
        <div>
            <h1 className="mt-4  ">{titulo}</h1>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}