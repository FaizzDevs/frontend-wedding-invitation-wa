import { ImageMessage as ImageMessageType } from "./types"

interface ImageMessageProps {
    message: ImageMessageType
}

export const ImageMessage = ({ message }: ImageMessageProps) => {
    return (
        <div className="space-y-2">
            <img 
                src={message.metadata.url} 
                alt={message.metadata.caption || "Shared image"}
                className="rounded-lg max-w-full h-auto"
            />
            {message.metadata.caption && (
                <p className="text-sm">{message.metadata.caption}</p>
            )}
        </div>
    )
}