import { useToast } from '@/hooks/use-toast'
import { Calendar, Camera, CheckCircle, Clock, Crown, Flower2, Heart, MapPin, Sparkles, Users, } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Confetti from 'react-confetti'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Invitation = () => {
    const navigate = useNavigate()
    const { toast } = useToast()
    const [isJoining, setIsJoining] = useState(false)
    const [hasJoined, setHasJoined] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleJoinGroup = async () => {
        setIsJoining(true)

        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsJoining(false)
        setHasJoined(true)
        setShowConfetti(true)

        toast({
            title: "🎉 Welcome to the Group",
            description: "You're new part of Faiz & Dini Wedding Celebration",
            duration: 3000
        })

        setTimeout(() => {
            navigate('/chat')
        }, 3000)
    }

    const guests = [
        { name: "Sarah", role: "Bride", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
        { name: "James", role: "Groom", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
        { name: "Lisa", role: "Maid of Honor", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa" },
        { name: "Michael", role: "Best Man", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael" }
    ]

    return (
        <div className='min-h-screen flex items-center justify-center chat-walpaper relative overflow-hidden'>
            {showConfetti && (
                <Confetti 
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={200}
                    gravity={0.1}
                />
            )}

            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full blur-3xl' />
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-emerald-200/20 to-cyan-200/20 rounded-full blur-3xl' />

                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className='absolute'
                        style={{
                            // eslint-disable-next-line react-hooks/purity
                            left: `${Math.random() * 100}%`,
                            // eslint-disable-next-line react-hooks/purity
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    >
                        <Heart className='w-6 h-6 text-rose-200/50' />
                    </motion.div>
                ))}
            </div>

            <div className='relative z-10 container mx-auto px-4 py-8 max-w-md'>
                <motion.div
                    className='text-center mb-8'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Badge
                        variant='outline'
                        className='mb-4 border-emerald-200 text-green-600 bg-green-50'
                    >
                        <Sparkles className='w-3 h-3 mr-2' />
                        Exclusive Invitation
                    </Badge>

                    <h1 className='text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4'>
                        Faiz & Dini
                    </h1>

                    <p className='text-green-600 mb-6 text-sm'>
                        Invite you to join their special day celebration
                    </p>
                </motion.div>

                <motion.div
                    className='flex justify-center -space-x-4 mb-8'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                >
                    {guests.slice(0, 2).map((guest, index) => (
                        <Avatar
                            key={guest.name}
                            className={`w-20 h-20 border-4 border-white shadow-lg ${index === 0 ? 'ring-2 ring-green-300' : 'ring-2 ring-emerald-300'}`}
                        >
                            <AvatarImage src={guest.image} />
                            <AvatarFallback>
                                {guest.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                >
                    <Card className='border-0 bg-gradient-to-r from-emerald-50 to-green-50'>
                        <CardContent className='p-5'>
                            <div className='flex items-center justify-between'>
                                <div>
                                    <div className='flex items-center gap-2 mb-2'>
                                        <Users className='w-4 h-4 text-emerald-600' />
                                        <span className='font-semibold text-emerald-900 text-sm'>150 guests joined</span>
                                    </div>

                                    <Progress value={75} className='h-2 bg-emerald-200' />
                                </div>

                                <div className='flex -space-x-2'>
                                    {guests.map((guest) => (
                                        <Avatar
                                            key={guest.name}
                                            className='w-8 h-8 border-2 border-white'
                                        >
                                            <AvatarImage src={guest.image} />
                                            <AvatarFallback>
                                                {guest.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key="buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.7 }}
                        className="space-y-4"
                    >
                        <Button
                            size='lg'
                            onClick={handleJoinGroup}
                            disabled={isJoining}
                            className='w-full h-10 text-base font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg hover:shadow-xl rounded-full'
                        >
                            {isJoining ? (
                                <>
                                    <div className='mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                                    Joining Group
                                </>
                            ) : (
                                <>
                                    <Heart className='mr-2 h-4 w-4' />
                                    Join Wedding Group
                                </>
                            )}
                        </Button>
                    </motion.div>
                </AnimatePresence>

                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className='mt-10 pt-6 border-t border-gray-200 text-center flex flex-col gap-4'
                >
                    <p className='text-xs text-green-600'>
                        Created with <Heart className='inline w-3 h-3 text-rose-500' /> by FaizDini
                    </p>
                    <p className='text-xs text-green-500'>
                        © 2024 Faiz & Dini Wedding Celebration
                    </p>
                </motion.footer>
            </div>
        </div>
    )
}

export default Invitation