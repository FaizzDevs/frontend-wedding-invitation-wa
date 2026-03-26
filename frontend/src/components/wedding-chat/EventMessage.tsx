import { ChevronRight } from "lucide-react"
import { EventMessage as EventMessageType } from "./types"

interface EventMessageProps {
    message: EventMessageType
}

export const EventMessage = ({ message }: EventMessageProps) => {
    return (
        <div className="space-y-2">
            <p className="text-sm">
                {message.text}
            </p>

            <div className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-pink-50 to-rose-50 p-3 border border-pink-100">
                <div className="size-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white shrink-0">
                    {message.metadata.icon}
                </div>

                <div className="flex-1 overflow-hidden">
                    <p className="text-gray-900 text-sm font-bold truncate">
                        {message.metadata.title}
                    </p>
                    <p className="text-gray-500 text-xs truncate">
                        {message.metadata.url}
                    </p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
        </div>
    )
}