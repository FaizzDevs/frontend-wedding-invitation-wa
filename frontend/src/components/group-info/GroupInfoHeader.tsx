import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, MoreVertical, Users, Verified } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface GroupInfoHeaderProps {
    title: string
    subtitle: string
    createdDate: string
    participantsCount: number
}

export const GroupInfoHeader = ({ title, subtitle, createdDate, participantsCount }: GroupInfoHeaderProps) => {
    const navigate = useNavigate()

    return (
        <>
            <motion.header
                className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 border-b border-pink-100 shadow-sm"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
            >
                <div className="flex items-center gap-3">
                    <Button
                        variant='ghost'
                        size='icon'
                        className="rounded-full hover:bg-pink-50"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </Button>

                    <div className="flex flex-col">
                        <h2 className="text-[#1a3a16] text-lg font-bold leading-tight">
                            {title}
                        </h2>
                        <p className="text-xs text-gray-500">
                            {subtitle}
                        </p>
                    </div>
                </div>
                <Button
                    variant='ghost'
                    className="rounded-full hover:bg-pink-50"
                    size='icon'
                >
                    <MoreVertical className="w-5 h-5" />
                </Button>
            </motion.header>

            <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <div className="aspect-[4/3] md:aspect-[21/9] relative ">
                    <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-r from-green-500/20 to-pink-500/20" />
                        <div className="bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center absolute inset-0 opacity-20" />
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-6 left-6 flex items-center gap-2">
                        <h1 className="text-white text-2xl md:text-3xl font-bold">
                            Faiz & Dini's Big Day
                        </h1>
                        <Verified className="w-6 h-6 text-[#25d366] fill-current" />
                    </div>
                </div>

                <div className="px-6 py-4">
                    <div className="flex items-center gap-4 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>Created on {createdDate}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Users className="w-4 h-4 mr-2" />
                            <span>Group • {participantsCount} Participants</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}