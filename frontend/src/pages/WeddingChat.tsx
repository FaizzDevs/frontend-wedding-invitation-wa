import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"
import { Sparkles } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChatHeader } from "@/components/wedding-chat/ChatHeader"
import { MessageBubble } from "@/components/wedding-chat/MessageBubble"
import { MessageInput } from "@/components/wedding-chat/MessageInput"
import { TypingIndicator } from "@/components/wedding-chat/TypingIndicator"
import { useWeddingChat } from "@/hooks/useWeddingChat"
import { Message, Guest } from "@/components/wedding-chat/types"

const WeddingChat = () => {
    const now = new Date()

    const initialMessages: Message[] = [
        {
            id: '1',
            text: "Assalamu’alaikum Warahmatullahi Wabarakatuh 🙏\n\nDengan penuh rasa syukur dan kebahagiaan, kami ingin mengundang Bapak/Ibu/Saudara/i untuk hadir dalam hari bahagia pernikahan kami.",
            sender: 'bride',
            senderName: 'Mempelai',
            time: now,
            read: true,
            type: 'text'
        },
        {
            id: '2',
            text: "InsyaAllah acara pernikahan kami akan dilaksanakan pada:\n\n📅 Senin, 24 Juni 2024\nKami sangat berharap kehadiran dan doa restu dari Bapak/Ibu/Saudara/i.",
            sender: 'groom',
            senderName: 'Mempelai',
            time: new Date(now.getTime() + 1000),
            read: true,
            type: 'text'
        },
        {
            id: '3',
            text: "Silakan klik info grup untuk melihat detail acara dan melakukan konfirmasi kehadiran (RSVP):",
            sender: 'bride',
            senderName: 'Mempelai',
            time: new Date(now.getTime() + 2000),
            read: true,
            type: 'text',
        },     
        {
            id: '4',
            text: "Berikut adalah lokasi acara pernikahan kami:",
            sender: 'groom',
            senderName: 'Mempelai',
            time: new Date(now.getTime() + 3000),
            read: true,
            type: 'location',
            metadata: {
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800",
                address: "Rose Garden Estates, New York"
            }
        },  
        {
            id: '6',
            text: "Feel free buat kirim ucapan dan doa kalian di chat ini yaa 🤍🥂",
            sender: 'groom',
            senderName: 'Mempelai',
            time: new Date(now.getTime() + 4000),
            read: true,
            type: 'text'
        },
        {
            id: '7',
            text: "What's the dress code for the event?",
            sender: 'guest',
            senderName: 'Sarah',
            time: new Date(now.getTime() + 5000),
            read: true,
            type: 'text'
        },
        {
            id: '8',
            text: "Can't wait to be there! We already marked our calendars! 🎉",
            sender: 'user',
            senderName: 'You',
            time: new Date(now.getTime() + 6000),
            read: true,
            type: 'text'
        },
    ]

    const guests: Guest[] = [
        { name: "Alex", role: "Bride", color: "bg-pink-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
        { name: "Jordan", role: "Groom", color: "bg-emerald-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" },
        { name: "Sarah", role: "Maid of Honor", color: "bg-purple-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
        { name: "Michael", role: "Best Man", color: "bg-blue-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" }
    ]

    const {
        messages,
        newMessage,
        isTyping,
        visibleMessages,
        messageEndRef,
        setNewMessage,
        handleLoadMore,
        handleSendMessage,
        handleKeyPress
    } = useWeddingChat(initialMessages)

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-[#fff0f3] to-white">
            <ChatHeader 
                title="The Wedding of Faiz & Dini"
                participantsCount={150}
                guests={guests}
            />

            <ScrollArea className="flex-1 px-4 py-4">
                <div className="space-y-4">
                    {visibleMessages < messages.length && (
                        <div className="text-center">
                            <button
                                onClick={handleLoadMore}
                                className="text-xs text-gray-500 hover:text-gray-700"
                            >
                                Load previous messages
                            </button>
                        </div>
                    )}

                    <div className="text-center my-6">
                        <Badge className="bg-white/80 py-1 text-gray-600 border border-gray-200 shadow-sm">
                            <Sparkles className="w-3 h-3 mr-2" />
                            Today
                        </Badge>
                    </div>

                    <AnimatePresence>
                        {messages
                            .slice(-visibleMessages)
                            .map((message, index) => {
                                const isUser = message.sender === 'user'
                                const isCouple = message.sender === 'bride' || message.sender === 'groom'

                                return (
                                    <motion.div
                                        key={message.id}
                                        className={cn(
                                            "flex gap-2 max-w-[85%]",
                                            isUser ? "ml-auto" : "mr-auto"
                                        )}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {!isUser && !isCouple && (
                                            <Avatar className="size-6 mt-auto">
                                                <div className="bg-gray-200 text-gray-700 text-xs rounded-full w-full h-full flex items-center justify-center">
                                                    {message.senderName.charAt(0)}
                                                </div>
                                            </Avatar>
                                        )}

                                        <MessageBubble 
                                            message={message}
                                            isUser={isUser}
                                            isCouple={isCouple}
                                        />
                                    </motion.div>
                                )
                            })}
                    </AnimatePresence>

                    {isTyping && <TypingIndicator />}

                    <div ref={messageEndRef} />
                </div>
            </ScrollArea>

            <MessageInput 
                value={newMessage}
                onChange={setNewMessage}
                onSend={handleSendMessage}
                onKeyPress={handleKeyPress}
            />
        </div>
    )
}

export default WeddingChat