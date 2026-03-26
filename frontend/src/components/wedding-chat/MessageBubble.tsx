import { Badge } from "@/components/ui/badge"
import { Heart, Check, CheckCheck } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Message } from "./types"
import { isLocationMessage, isEventMessage, isImageMessage } from "./utils"
import { LocationMessage } from "./LocationMessage"
import { EventMessage } from "./EventMessage"
import { ImageMessage } from "./ImageMessage"
import { TextMessage } from "./TextMessage"

interface MessageBubbleProps {
    message: Message
    isUser: boolean
    isCouple: boolean
    avatarFallback?: string
}

export const MessageBubble = ({ message, isUser, isCouple }: MessageBubbleProps) => {
    const renderMessageContent = () => {
        if (isLocationMessage(message)) {
            return <LocationMessage message={message} />
        }

        if (isEventMessage(message)) {
            return <EventMessage message={message} />
        }

        if (isImageMessage(message)) {
            return <ImageMessage message={message} />
        }

        return <TextMessage text={message.text} />
    }

    return (
        <div className="flex-1">
            {!isUser && !isCouple && (
                <p className="text-xs font-semibold text-gray-600 mb-1 ml-1">
                    {message.senderName}
                </p>
            )}

            <div className={cn(
                "rounded-2xl px-4 py-3 shadow-sm relative",
                isUser
                    ? "bg-gradient-to-r from-[#005c4b] to-[#0a7c6c] text-white rounded-br-none"
                    : isCouple
                    ? "bg-white border border-gray-100 rounded-bl-none"
                    : "bg-[#ffccd5] rounded-bl-none"
            )}>
                {isCouple && (
                    <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                            <Heart className="w-3 h-3 text-rose-500" />
                            <span className="text-xs font-bold text-[#2d6a4f]">
                                {message.senderName}
                            </span>
                        </div>

                        <Badge
                            variant='outline'
                            className="h-4 px-1 text-[10px] border-[#2d6a4f]/20 text-[#2d6a4f]"
                        >
                            Couple
                        </Badge>
                    </div>
                )}

                {renderMessageContent()}

                <div className={cn(
                    "flex items-center justify-end gap-2 mt-2",
                    isUser ? "text-white/70" : "text-gray-400"
                )}>
                    <span className="text-[10px]">
                        {format(message.time, 'h:mm a')}
                    </span>
                    
                    {isUser && (
                        message.read ? (
                            <CheckCheck className="w-3 h-3" />
                        ) : (
                            <Check className="w-3 h-3" />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}