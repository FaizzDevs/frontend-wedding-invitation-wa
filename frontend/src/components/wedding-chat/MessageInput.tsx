import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { motion } from "framer-motion"

interface MessageInputProps {
    value: string
    onChange: (value: string) => void
    onSend: () => void
    onKeyPress: (e: React.KeyboardEvent) => void
}

export const MessageInput = ({ value, onChange, onSend, onKeyPress }: MessageInputProps) => {
    return (
        <motion.footer
            className="sticky bottom-0 bg-white border-t border-gray-100 p-3 shadow-lg"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
        >
            <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-100 rounded-full flex items-center px-4">
                    <Input 
                        className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 placeholder:text-sm"
                        placeholder="Type a message..."
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={onKeyPress}
                    />
                </div>
                <Button 
                    className="size-10 rounded-full bg-gradient-to-r from-[#2d6a4f] to-[#1b4332] hover:from-[#1b4332] hover:to-[#2d6a4f] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onSend}
                    disabled={!value.trim()}
                >
                    <Send className="w-5 h-5" />
                </Button>
            </div>
        </motion.footer>
    )
}