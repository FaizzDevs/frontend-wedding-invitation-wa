interface TextMessageProps {
    text: string
}

export const TextMessage = ({ text }: TextMessageProps) => {
    return (
        <p className="text-sm whitespace-pre-wrap">
            {text}
        </p>
    )
}