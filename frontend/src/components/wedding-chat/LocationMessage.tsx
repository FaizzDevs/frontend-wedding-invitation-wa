import { MapPin, ExternalLink } from "lucide-react"
import LiveMap from "@/components/LiveMap"
import { LocationMessage as LocationMessageType } from "./types"

interface LocationMessageProps {
    message: LocationMessageType
}

export const LocationMessage = ({ message }: LocationMessageProps) => {
    const yourHomeLink = "https://www.google.com/maps/place/Ali+Ma'sum+dan+Nur+Azizah/@-6.6134803,110.7275904,315m/data=!3m1!1e3!4m6!3m5!1s0x2e712137bee41315:0xc5b17dc5e47a3c3e!8m2!3d-6.6136875!4d110.7269375!16s%2Fg%2F11p09qqx12?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"

    return (
        <div className="space-y-2">
            <button
                className="w-full text-left"
                onClick={() => {
                    window.open(yourHomeLink, '_blank')
                }}
            >
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-gray-100 relative group">
                    <LiveMap />
                    
                    <div className="absolute inset-0 flex items-end p-3">
                        <div className="flex items-center gap-2 text-white">
                            <MapPin className="w-4 h-4" />
                            <span className="text-xs font-medium line-clamp-1">
                                {message.metadata.address}
                            </span>
                        </div>
                    </div>

                    <div className="absolute top-2 right-2 bg-white/90 rounded-full p-1">
                        <ExternalLink className="w-4 h-4 text-[#2d6a4f]" />
                    </div>
                </div>
            </button>

            <p className="text-sm">
                {message.text}
            </p>
        </div>
    )
}