import { AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Avatar } from "@radix-ui/react-avatar"
import { ArrowLeft, Calendar, Check, CheckCheck, ChevronRight, ExternalLink, Heart, MapPin, Phone, Send, Sparkles, Video } from "lucide-react"
import React, { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns" 
    
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import LiveMap from "@/components/LiveMap"

// type MessageType = 'text' | 'location' | 'event' | 'image'
type SenderType = 'bride' | 'groom' | 'guest' | 'user'

interface BaseMessage {
    id: string
    text: string
    sender: SenderType
    senderName: string
    time: Date
    read: boolean
}

interface TextMessage extends BaseMessage {
    type: 'text'
}

interface LocationMessage extends BaseMessage {
    type: 'location'
    metadata: {
        image: string
        address: string
    }
}

interface EventMessage extends BaseMessage {
    type: 'event'
    metadata: {
        title: string
        url: string
        icon: React.ReactNode
    }
}

interface ImageMessage extends BaseMessage {
    type: 'image'
    metadata: {
        url: string
        caption?: string
    }
}

type Message = TextMessage | LocationMessage | EventMessage | ImageMessage

const isLocationMessage = (message: Message): message is LocationMessage => {
    return message.type === 'location'
}

const isEventMessage = (message: Message): message is EventMessage => {
    return message.type === 'event'
}

const isImageMessage = (message: Message): message is ImageMessage => {
    return message.type === 'image'
}

const WeddingChat = () => {
    const navigate = useNavigate()
    const messageEndRef = useRef<HTMLDivElement>(null)
    const [newMessage, setNewMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [visibleMessages, setVisibleMessages] = useState(5)

    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Welcome to our big day! 🥂 We are so happy you're here.",
            sender: 'bride',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:42:00'),
            read: true,
            type: 'text'
        },
        {
            id: '2',
            text: "Save the date: June 24th, 2024. Please join us at the Rose Garden Estates!",
            sender: 'groom',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:43:00'),
            read: true,
            type: 'text'
        },
        {
            id: '3',
            text: "Click the link below to view our full itinerary and RSVP:",
            sender: 'bride',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:44:00'),
            read: true,
            type: 'event',
            metadata: {
                title: "Wedding Itinerary & RSVP",
                url: "wedding-faiz-dini.com/rsvp",
                icon: <Calendar className="w-5 h-5" />
            }
        },
        {
            id: '4',
            text: "Can't wait to be there! We already marked our calendars! 🎉",
            sender: 'user',
            senderName: 'You',
            time: new Date('2024-06-24T10:45:00'),
            read: true,
            type: 'text'
        },
        {
            id: '5',
            text: "Here is the location for the ceremony!",
            sender: 'groom',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:48:00'),
            read: true,
            type: 'location',
            metadata: {
                image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800",
                address: "Rose Garden Estates, New York"
            }
        },
        {
            id: '6',
            text: "What's the dress code for the event?",
            sender: 'guest',
            senderName: 'Sarah',
            time: new Date('2024-06-24T10:50:00'),
            read: true,
            type: 'text'
        },
        {
            id: '7',
            text: "Semi-formal / Garden Party attire please! 🌸",
            sender: 'bride',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:52:00'),
            read: true,
            type: 'text'
        },
        {
            id: '8',
            text: "Don't forget to check out our gift registry!",
            sender: 'groom',
            senderName: 'Faiz & Dini',
            time: new Date('2024-06-24T10:55:00'),
            read: true,
            type: 'text'
        }
    ])

    const guests = [
        { name: "Alex", role: "Bride", color: "bg-pink-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
        { name: "Jordan", role: "Groom", color: "bg-emerald-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan" },
        { name: "Sarah", role: "Maid of Honor", color: "bg-purple-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
        { name: "Michael", role: "Best Man", color: "bg-blue-500", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" }
    ]

    const handleLoadMore = () => {
        if (visibleMessages < messages.length) {
            setVisibleMessages(prev => Math.min(prev + 5, messages.length))
        }
    }

    const handleSendMessage = () => {
        if (!newMessage.trim()) return

        const message: Message = {
            id: Date.now().toString(),
            text: newMessage,
            sender: 'user',
            senderName: 'You',
            time: new Date(),
            read: false,
            type: 'text'
        }

        setMessages(prev => [...prev, message])
        setNewMessage('')

        setVisibleMessages(prev => prev + 1)

        setIsTyping(true)
        setTimeout(() => {
            const replies = [
                "Thank you for your message! 💖",
                "We're so excited to see you there!",
                "Can't wait to celebrate with you!",
                "The venue is absolutely stunning!"
            ]

            const randomReply = replies[Math.floor(Math.random() * replies.length)]

            const reply: Message = {
                id: (Date.now() + 1).toString(),
                text: randomReply,
                sender: Math.random() > 0.5 ? 'bride' : 'groom',
                senderName: 'Faiz & Dini',
                time: new Date(),
                read: true,
                type: 'text'
            }

            setMessages(prev => [...prev, reply])
            setVisibleMessages(prev => prev + 1)
            setIsTyping(false)
        }, 1500 + Math.random() * 1000)
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSendMessage()
        }
    }

    const renderMessageContent = (message: Message) => {
        if (isLocationMessage(message)) {
            const yourHomeLink = "https://www.google.com/maps/place/Ali+Ma'sum+dan+Nur+Azizah/@-6.6134803,110.7275904,315m/data=!3m1!1e3!4m6!3m5!1s0x2e712137bee41315:0xc5b17dc5e47a3c3e!8m2!3d-6.6136875!4d110.7269375!16s%2Fg%2F11p09qqx12?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D"

            return (
                <div className="space-y-2">
                    <button
                        onClick={() => {
                            window.open(yourHomeLink, '_blank')
                        }}
                        className="w-full text-left"
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

        if (isEventMessage(message)) {
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

        if (isImageMessage(message)) {
            return (
                <div className="space-y-2">
                    <img 
                        src={message.metadata.url} 
                        alt={message.metadata.caption || "Shared image"}
                        className="rounded-lg max-w-full h-auto"
                    />
                    {message.metadata.caption && (
                        <p className="text-sm">{message.metadata.caption}</p>
                    )}
                </div>
            )
        }

        return (
            <p className="text-sm whitespace-pre-wrap">
                {message.text}
            </p>
        )
    }

    

    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-[#fff0f3] to-white">
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
                            <AvatarFallback >
                                FD
                            </AvatarFallback>
                        </Avatar>

                        <button 
                            className="flex flex-col"
                            onClick={() => navigate('/info')}
                        >
                            <h2 className="text-sm font-bold leading-tight text-white truncate max-w-[150px]">
                                The Wedding of Faiz & Dini
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
                                    150 Participants
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
                    >
                        <Video className="w-5 h-5" />
                    </Button>
                    <Button
                        variant='ghost'
                        size='icon'
                        className="text-white hover:bg-white/20"
                    >
                        <Phone className="w-5 h-5" />
                    </Button>


                </div>
            </motion.header>

            <ScrollArea 
                className="flex-1 px-4 py-4"
            >
                <div className="space-y-4">
                    {visibleMessages < messages.length && (
                        <div className="text-center">
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleLoadMore}
                                className="text-xs text-gray-500 hover:text-gray-700"
                            >
                                Load previous messages
                            </Button>
                        </div>
                    )}

                    <div className="text-center my-6">
                        <Badge className="bg-white/80 py-1 text-gray-600 border border-gray-200 shadow-sm">
                            <Sparkles className="w-3 h-3 mr-2" />
                            Today
                        </Badge>
                    </div>

                    <AnimatePresence>
                        {messages.slice(-visibleMessages).map((message, index) => {
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
                                            <AvatarFallback className="bg-gray-200 text-gray-700 text-xs">
                                                {message.senderName.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    )}

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

                                            {renderMessageContent(message)}

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
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                    {isTyping && (
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
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                        className="w-2 h-2 rounded-full bg-gray-400"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                        className="w-2 h-2 rounded-full bg-gray-400"
                                    />
                                    <motion.div
                                        animate={{ y: [0, -4, 0] }}
                                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                        className="w-2 h-2 rounded-full bg-gray-400"
                                    />
                                    
                                </div>
                            </div>
                        </motion.div>
                    )}

                    <div ref={messageEndRef} />
                </div>
            </ScrollArea>

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
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                    </div>
                    <Button 
                        className="size-10 rounded-full bg-gradient-to-r from-[#2d6a4f] to-[#1b4332] hover:from-[#1b4332] hover:to-[#2d6a4f] disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                    >
                        <Send className="w-5 h-5" />
                    </Button>
                </div>
            </motion.footer>
        </div>
    )
}

export default WeddingChat