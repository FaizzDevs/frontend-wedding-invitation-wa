import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Video } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Guest } from "./types"

interface ChatHeaderProps {
    title: string
    participantsCount: number
    guests: Guest[]
}

export const ChatHeader = ({ title, participantsCount, guests }: ChatHeaderProps) => {
    const navigate = useNavigate()

    return (
        <motion.header
            className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] text-white shadow-lg"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
        >
            <div className="flex items-center gap-2">
                <Button
                    variant='ghost'
                    size='icon'
                    className="text-white hover:bg-white/20"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-3">
                    <Avatar className="size-10 border-2 border-white/20 rounded-full">
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=AlexJordan" />
                        <AvatarFallback>
                            FD
                        </AvatarFallback>
                    </Avatar>

                    <button 
                        className="flex flex-col"
                        onClick={() => navigate('/info')}
                    >
                        <h2 className="text-sm font-bold leading-tight text-white truncate max-w-[150px]">
                            {title}
                        </h2>
                        <div className="flex items-center gap-1">
                            <div className="flex -space-x-1">
                                {guests.slice(0, 3).map(guest => (
                                    <div
                                        key={guest.name}
                                        className={`size-3 rounded-full border border-white ${guest.color}`}
                                    />
                                ))}
                            </div>

                            <p className="text-[11px] text-white/70">
                                {participantsCount} Participants
                            </p>
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-1">
                <Button
                    variant='ghost'
                    size='icon'
                    className="text-white hover:bg-white/20"
                    onClick={() => navigate('/live-call')}
                >
                    <Video className="w-5 h-5" />
                </Button>
            </div>
        </motion.header>
    )
}