import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Search, UserPlus } from "lucide-react"
import { Guest } from "./types"
import { cn } from "@/lib/utils"

interface ParticipantsListProps {
    guests: Guest[]
    totalCount: number
}

export const ParticipantsList = ({ guests, totalCount }: ParticipantsListProps) => {
    return (
        <div className="space-y-4 px-6 py-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#1a3a16] text-sm font-bold">
                    {totalCount} Participants
                </h3>
                <Button variant='ghost' size='icon' className="text-[#db2777]">
                    <Search className="w-4 h-4" />
                </Button>
            </div>

            <div className="border-pink-100 rounded-s rounded-e">
                <div className="px-4">
                    <div className="flex items-center gap-4 cursor-pointer group">
                        <div className="size-8 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7E] flex items-center justify-center group-hover:shadow-lg shadow-[#25d366]/20 transition-all">
                            <UserPlus className="w-4 h-4 text-white" />
                        </div>

                        <div>
                            <span className="font-bold text-[#25d366] text-[13px]">
                                Confirm Your RSVP / Join Group
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {guests.map((guest) => (
                    <div
                        key={guest.id}
                        className="border-pink-100 rounded-s rounded-e"
                    >
                        <div className="px-4">
                            <div className="flex items-start gap-4 pb-2">
                                <Avatar className={cn(
                                    "size-8 ring-2",
                                    guest.isBrideGroom ? "ring-pink-300" : "ring-pink-100"
                                )}>
                                    <AvatarImage src={guest.image} />
                                </Avatar>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-[#1a3a16]">
                                                {guest.name}
                                            </h4>
                                            <p className="text-xs text-gray-500 italic">
                                                "{guest.message}"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-pink-500/20" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}