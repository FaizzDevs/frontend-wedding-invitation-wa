import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Camera, ChevronRight, Church, Clock, Crown, FileText, Flower2Icon, MapPin, MoreVertical, PersonStanding, Search, Send, Smile, Sparkle, UserPlus, Users, Verified, Video } from "lucide-react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { color, motion } from "framer-motion"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

interface Guest {
    id: string
    name: string
    role: string
    image: string
    status: 'attending' | 'maybe' | 'pending'
    message: string
    isBrideGroom?: boolean
}

interface Event {
    id: string
    title: string
    date: string
    time: string
    icon: React.ReactNode
    color: string
    location: string
}

interface MediaItem {
    id: string
    type: 'image' | 'video' | 'document'
    url: string
    title: string 
}

const GroupInfo = () => {
    const navigate = useNavigate()
    const [timeLeft, setTimeLeft] = useState({
        days: 124,
        hours: 12,
        minutes: 45,
        seconds: 30
    })
    const [wishMessage, setWishMessage] = useState('')

    const events: Event[] = [
        {
            id: '1',
            title: 'Akad Nikah (Ceremony)',
            date: 'Saturday, 24 August 2024',
            time: '08:00 AM - 10:00 AM',
            icon: <Church className="w-5 h-5" />,
            color: 'from-green-500 to-emerald-600',
            location: 'Masjid Al-Hikmah, Jakarta'
        },
        {
            id: '2',
            title: 'Grand Reception',
            date: 'Saturday, 24 August 2024',
            time: '11:00 AM - 02:00 PM',
            icon: <Flower2Icon className="w-5 h-5" />,
            color: 'from-pink-500 to-rose-600',
            location: 'The Grand Ballroom, Jakarta'
        }
    ]

    const mediaItems: MediaItem[] = [
        { id: '1', type: 'image', url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Wedding Rings' },
        { id: '2', type: 'image', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6', title: 'Wedding Bouquet' },
        { id: '3', type: 'image', url: 'https://images.unsplash.com/photo-1519657337289-0776534f2b3f', title: 'Wedding Dress' },
        { id: '4', type: 'video', url: 'https://images.unsplash.com/photo-1519741497674-611481863552', title: 'Venue Tour' },
        { id: '5', type: 'document', url: '', title: 'Wedding Itinerary.pdf' }
    ]

    const guests: Guest[] = [
        {
            id: '1',
            name: 'John & Jane',
            role: 'Bride & Groom',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnJane',
            status: 'attending',
            message: 'So excited to celebrate with all of you!',
            isBrideGroom: true
        },
        {
            id: '2',
            name: 'Sarah Wilson',
            role: 'Maid of Honor',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
            status: 'attending',
            message: "Can't wait to celebrate with you both! So happy for you!"
        },
        {
            id: '3',
            name: 'Michael Chen',
            role: 'Best Man',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
            status: 'maybe',
            message: 'Huge congrats! Checking my flights now.'
        },
        {
            id: '4',
            name: 'Emma Davis',
            role: 'Bridesmaid',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
            status: 'attending',
            message: 'So happy for you both! ❤️'
        },
        {
            id: '5',
            name: 'David Miller',
            role: 'Groomsman',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
            status: 'pending',
            message: 'Will confirm soon!'
        }
    ]

    const weddingDetails = [
        { icon: Calendar, label: 'Date', value: 'August 24, 2024' },
        { icon: Clock, label: 'Time', value: '8:00 AM onwards' },
        { icon: Users, label: 'Guests', value: '250 people' },
        { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                const totalSeconds =
                    prev.days * 86400 +
                    prev.hours * 3600 +
                    prev.minutes * 60 +
                    prev.seconds - 1
                
                    if (totalSeconds <= 0) {
                        clearInterval(timer)
                        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
                    }

                    return {
                        days: Math.floor(totalSeconds / 86400),
                        hours: Math.floor((totalSeconds % 86400) / 3600),
                        minutes: Math.floor((totalSeconds % 3600) / 60),
                        seconds: totalSeconds % 60
                    }
            })
        }, 1000)

        return () => clearInterval(timer)
    } , [])

    const handleSendWish = () => {
        if (wishMessage.trim()) {
            setWishMessage('')
        }
    }

    const getStatusBadge = (status: Guest['status']) => {
        switch (status) {
            case 'attending':
                return <div>Attending</div>
                
            case 'maybe':
                return <div>Maybe</div>

            case 'pending':
                return <div>Pending</div>
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white">
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
                            Group Info
                        </h2>
                        <p className="text-xs text-gray-500">
                            Faiz & Dini's Wedding
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

            <div className="pb-20">
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
                                <span>
                                    Created on Dec 22, 2025
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <Users className="w-4 h-4 mr-2" />
                                <span>
                                    Group • 250 Participants
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <Separator className="bg-pink-100" />

                <motion.section
                    className="px-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-4">
                        Description
                    </h3>

                    <Card className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 border-pink-100">
                        <CardContent className="p-6">
                            <p className="text-gray-800 text-[15px] leading-relaxed">
                                We are getting married! Join us in celebrating our love and the start of our new Journey together.
                                Your presence is our greatest gift. We Can't wait to see you there!
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <Sparkle className="w-4 h-4 text-pink-500" />
                                <span className="text-xs text-gray-500">
                                    #FaizDiniDec2025 • #TheBigDay
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                <Separator className="bg-pink-100" />

                <motion.section
                    className="px-6 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-6">
                        Countdown to the I Do's
                    </h3>

                    <div className="grid grid-cols-4 gap-3">
                        {Object.entries(timeLeft).map(([key, value]) => (
                            <Card
                                key={key}
                                className="bg-gradient-to-b from-pink-50 to-white border-pink-100"
                            >
                                <CardContent className="p-4 text-center">
                                    <motion.p
                                        key={value}
                                        className="text-[#1a3a16] text-lg font-extrabold"
                                        initial={{ scale: 0.5 }}
                                        animate={{ scale: 1 }}
                                    >
                                        {value.toString().padStart(2, '0')}
                                    </motion.p>
                                    <p className="text-[#db2777] text-[10px] uppercase font-bold mt-1">
                                        {key}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <Progress value={75} className="mt-6 h-2 bg-pink-100" />
                    <p className="text-xs text-gray-500 text-center mt-2">
                        124 days to go!
                    </p>
                </motion.section>

                <Separator className="bg-pink-100" />

                <motion.section
                    className="px-6 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-4">
                        Wedding Details
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {weddingDetails.map((detail) => (
                            <Card key={detail.label} className="border-pink-100">
                                <CardContent className="p-4 flex flex-col items-center text-center">
                                    <div className="size-10 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 flex items-center justify-center mb-2">
                                        <detail.icon className="w-5 h-5 text-[#1a3a16]" />
                                    </div>

                                    <p className="text-xs text-gray-500">
                                        {detail.label}
                                    </p>
                                    <p className="text-sm font-semibold text-[#1a3a16]">
                                        {detail.value}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </motion.section>

                <Tabs defaultValue="events" className="px-6 py-6">
                    <TabsList className="grid w-full grid-cols-2 mb-6 bg-pink-100/50">
                        <TabsTrigger value="events" className="data-[state=active]:bg-white">
                            <Calendar className="w-4 h-4 mr-2" />
                            Events
                        </TabsTrigger>
                        <TabsTrigger value="media" className="data-[state=active]:bg-white">
                            <Camera className="w-4 h-4 mr-2" />
                            Media
                        </TabsTrigger>
                    </TabsList>

                    {/* Tabs Events */}
                    <TabsContent value="events" className="space-y-4">
                        <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-4">
                            Event Schedule
                        </h3>
                        {events.map((event) => (
                            <Card
                                key={event.id}
                                className="border-pink-100 py-2 rounded-s rounded-e"
                            >
                                <CardContent className="p-4">
                                    <div className="flex gap-4">
                                        <div className={`size-9 text-white rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center shrink-0`}>
                                            {event.icon}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex items-start justify-between">
                                                <h4 className="font-bold text-sm text-[#1a3a16]">
                                                    {event.title}
                                                </h4>
                                                <Badge className={cn(
                                                    "text-xs",
                                                    event.color.includes('green') ? 'bg-green-500/10 text-green-600' : 'bg-pink-500/10 text-pink-600'
                                                )}>
                                                    {event.color.includes('green') ? 'Ceremony' : 'Reception'}
                                                </Badge>
                                            </div>

                                            <p className="text-xs text-gray-500 mt-1">
                                                {event.date}
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                {event.time}
                                            </p>

                                            <div className="flex items-center gap-1 mt-2">
                                                <MapPin className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-500">
                                                    {event.location}
                                                </span>
                                            </div>

                                            <div className="flex flex-col gap-2 mt-4">
                                                <Button size='sm' className={`text-xs h-8 bg-gradient-to-r ${event.color}`}>
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    Add to Calendar
                                                </Button>
                                                <Button size='sm' variant='outline' className="text-xs h-8">
                                                    <MapPin className="w-3 h-3 mr-1" />
                                                    Get Directions
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                        
                    </TabsContent>

                    {/* Tabs Media */}
                    <TabsContent value="media" className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-[#1a3a16] text-sm font-bold">
                                Media, Links & Docs
                            </h3>

                            <div className="flex items-center gap-1 text-[#db2777] cursor-pointer hover:underline text-sm font-medium">
                                <span>128 items</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {mediaItems.map((item) => (
                                <Card
                                    key={item.id}
                                    className="border-pink-100 rounded-s rounded-e overflow-hidden"
                                >
                                    <div className="aspect-square relative">
                                        {item.type === 'image' && (
                                            <>
                                                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Camera className="w-8 h-8 text-purple-500" />
                                                </div>
                                            </>
                                        )}

                                        {item.type === 'video' && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center">
                                                <Video className="w-8 h-8 text-purple-500" />
                                            </div>
                                        )}

                                        {item.type === 'document' &&  (
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                                                <FileText className="w-8 h-8 text-blue-500" />
                                            </div>
                                        )}

                                        <Badge className="absolute top-2 right-2 text-[10px] px-1 py-0">
                                            {item.type}
                                        </Badge>
                                    </div>

                                    <CardContent className="p-2">
                                        <p className="text-xs font-medium truncate">
                                            {item.title}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>

                <Separator className="bg-pink-100 h-2" />

                <motion.section
                    className="px-6 py-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="text-[#1A3A16] text-sm font-bold uppercase tracking-wider mb-4">
                        Venue & Location
                    </h3>
                    <Card className="border-2 border-pink-100 overflow-hidden">
                        <div className="aspect-video relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-pink-100/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <MapPin className="w-16 h-16 text-pink-400/50" />
                            </div>
                        </div>

                        <CardContent className="p-4 bg-gradient-to-r from-pink-50/30 to-rose-50/30">
                            <div className="flex items-start gap-3 mb-4">
                                <MapPin className="w-5 h-5 text-[#db2777] mt-1" />
                                <div>
                                    <h4 className="font-bold text-[#1a3a16] mb-1">
                                        The Grand Ballroom
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        Jl. Wedding Celebration No. 1, South Jakarta, Indonesia
                                    </p>
                                </div>
                            </div>

                            <Button className="w-full py-2.5 flex items-center mb-4 justify-center gap-2 bg-white border border-pink-200 text-[#1a3a16] hover:bg-pink-50 shadow-sm">
                                <MapPin className="w-4 h-4" />
                                Get Directions
                            </Button>
                        </CardContent>
                    </Card>
                </motion.section>

                <Separator className="bg-pink-100 h-2" />

                <div className="space-y-4 px-6 py-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-[#1a3a16] text-sm font-bold">
                            250 Participants
                        </h3>
                        <Button variant='ghost' size='icon' className="text-[#db2777]">
                            <Search className="w-4 h-4" />
                        </Button>
                    </div>

                    <div className="border-pink-100 rounded-s rounded-e">
                        <div className="p-4">
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
                                onKeyDown={(e) => e.key === 'Enter' && handleSendWish()}
                            />
                        </div>

                        <Button
                            className="size-8 rounded-full bg-gradient-to-r from-[#25d366] to-[#128C7E] shadow-lg shadow-[#25d366]/30 hover:scale-105 transition-transform disabled:opacity-50"
                        >
                            <Send className="text-white w-5 h-5" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default GroupInfo