import { useState, useRef, useEffect } from 'react'
import { Message } from '@/components/wedding-chat/types'

export const useWeddingChat = (initialMessages: Message[]) => {
    const [messages, setMessages] = useState<Message[]>(initialMessages)
    const [newMessage, setNewMessage] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [visibleMessages, setVisibleMessages] = useState(8)
    const messageEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages, visibleMessages])

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

    return {
        messages,
        newMessage,
        isTyping,
        visibleMessages,
        messageEndRef,
        setNewMessage,
        handleLoadMore,
        handleSendMessage,
        handleKeyPress
    }
}