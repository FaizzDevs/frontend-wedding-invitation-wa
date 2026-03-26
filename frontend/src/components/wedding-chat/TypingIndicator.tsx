import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export const TypingIndicator = () => {
    return (
        <motion.div
            className="flex gap-2 max-w-[85%]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
        >
            <Avatar className="size-6">
                <AvatarFallback className="bg-gradient-to-br from-pink-500 to-emerald-500 text-white text-xs">
                    FD
                </AvatarFallback>
            </Avatar>

            <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                    {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay }}
                            className="w-2 h-2 rounded-full bg-gray-400"
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}