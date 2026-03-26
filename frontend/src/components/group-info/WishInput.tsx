import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Smile, Send } from "lucide-react"
import { motion } from "framer-motion"

interface WishInputProps {
    onSendWish: (message: string) => void
}

export const WishInput = ({ onSendWish }: WishInputProps) => {
    const [wishMessage, setWishMessage] = useState('')

    const handleSend = () => {
        if (wishMessage.trim()) {
            onSendWish(wishMessage)
            setWishMessage('')
        }
    }

    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-pink-100 p-4"
        >
            <div className="max-w-[500px] mx-auto flex items-center gap-3">
                <div className="flex-1 bg-gradient-to-r from-pink-50/40 to-rose-50/40 rounded-full flex items-center px-4 border border-pink-100">
                    <Button variant='ghost' size='icon' className="text-[#db2777]">
                        <Smile className="w-5 h-5" />
                    </Button>

                    <Input 
                        placeholder="Leave a wish for the couple..."
                        value={wishMessage}
                        onChange={(e) => setWishMessage(e.target.value)}
                        className="border-0 bg-transparent focus-visible:ring-0 placeholder:text-pink-300 placeholder:text-sm"
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                </div>

                <Button
                    onClick={handleSend}
                    className="size-8 rounded-full bg-gradient-to-r from-[#25d366] to-[#128C7E] shadow-lg shadow-[#25d366]/30 hover:scale-105 transition-transform disabled:opacity-50"
                >
                    <Send className="text-white w-5 h-5" />
                </Button>
            </div>
        </motion.div>
    )
}