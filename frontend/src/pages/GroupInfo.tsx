// pages/GroupInfo.tsx
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Camera, Church, Flower2Icon, Clock, MapPin, Users, CreditCard, Wallet, Gift, Sparkle } from "lucide-react"
import { GroupInfoHeader } from "@/components/group-info/GroupInfoHeader"
import { CountdownTimer } from "@/components/group-info/CountdownTimer"
import { WeddingDetails } from "@/components/group-info/WeddingDetails"
import { EventSchedule } from "@/components/group-info/EventSchedule"
import { MediaGallery } from "@/components/group-info/MediaGallery"
import { WeddingGift } from "@/components/group-info/WeddingGift"
import { ParticipantsList } from "@/components/group-info/ParticipantsList"
import { WishInput } from "@/components/group-info/WishInput"
import { useCountdown } from "@/hooks/useCountdown"
import { Event, MediaItem, Guest, BankAccount, WeddingDetail } from "@/components/group-info/types"
import { motion } from "framer-motion"

const GroupInfo = () => {
    const timeLeft = useCountdown()
    const totalDays = 124 // You can calculate this dynamically

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
        { id: '2', type: 'image', url: 'https://asset.kompas.com/crops/oqkedR1xevyhQ42OK0GAPQCfOJg=/38x51:962x667/1200x800/data/photo/2020/03/02/5e5cf004a6805.jpg', title: 'Wedding Bouquet' },
        { id: '3', type: 'image', url: 'https://image.idntimes.com/post/20211108/9-ed52ce8b7adc17db78f63d4bd1c2063d.jpg', title: 'Wedding Dress' },
        { id: '4', type: 'video', url: 'https://i.pinimg.com/736x/61/b2/07/61b207fb32603ec63ef43bb04b813afb.jpg', title: 'Venue Tour' },
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

    const weddingDetails: WeddingDetail[] = [
        { icon: Calendar, label: 'Date', value: 'August 24, 2024' },
        { icon: Clock, label: 'Time', value: '8:00 AM onwards' },
        { icon: Users, label: 'Guests', value: '250 people' },
        { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' }
    ]

    const bankAccounts: BankAccount[] = [
        {
            id: '1',
            bankName: 'Bank Rakyat Indonesia (BRI)',
            accountNumber: '1234567890',
            accountName: 'Muhammad Faiz Al Izza',
            icon: <CreditCard className="w-5 h-5" />,
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: '2',
            bankName: 'Bank Jago',
            accountNumber: '1234567890',
            accountName: 'Muhammad Faiz Al Izza',
            icon: <Wallet className="w-5 h-5" />,
            color: 'from-yellow-500 to-yellow-600'
        },
        {
            id: '3',
            bankName: 'Seabank',
            accountNumber: '1234567890',
            accountName: 'Muhammad Faiz Al Izza',
            icon: <Gift className="w-5 h-5" />,
            color: 'from-orange-500 to-orange-600'
        },
    ]

    const handleSendWish = (message: string) => {
        // Handle sending wish - you can add API call here
        console.log('Sending wish:', message)
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50/50 to-white">
            <GroupInfoHeader 
                title="Group Info"
                subtitle="Faiz & Dini's Wedding"
                createdDate="Dec 22, 2025"
                participantsCount={250}
            />

            <div className="pb-20">
                <Separator className="bg-pink-100 h-2" />

                <motion.section
                    className="px-6 py-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-4">
                        Description
                    </h3>

                    <div className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 border border-pink-100 rounded-lg p-6">
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
                    </div>
                </motion.section>

                <Separator className="bg-pink-100 h-2" />

                <CountdownTimer timeLeft={timeLeft} totalDays={totalDays} />

                <Separator className="bg-pink-100 h-2" />

                <WeddingDetails details={weddingDetails} />

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

                    <TabsContent value="events" className="space-y-4">
                        <EventSchedule events={events} />
                    </TabsContent>

                    <TabsContent value="media" className="space-y-4">
                        <MediaGallery mediaItems={mediaItems} />
                    </TabsContent>
                </Tabs>

                <Separator className="bg-pink-100 h-2" />

                <WeddingGift bankAccounts={bankAccounts} />

                <Separator className="bg-pink-100 h-2" />

                <ParticipantsList guests={guests} totalCount={250} />

                <WishInput onSendWish={handleSendWish} />
            </div>
        </div>
    )
}

export default GroupInfo