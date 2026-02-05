import { Heart } from "lucide-react"
import { motion } from "framer-motion"

interface WeddingHeaderProps {
    title?: string
    date?: string
    showDecoration?: boolean
}

const WeddingHeader = ({
    title = "The Wedding of Faiz & Dini", 
    date = "Desember 22, 2025",
    showDecoration = true 
}: WeddingHeaderProps) => {
    return (
        <div className="relative flex flex-col items-center gap-8 mb-8">
            {showDecoration && (
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                >
                    <div className="size-40 rounded-full border border-gold/20 bg-gold/5 animate-pulse-slow" />
                </motion.div>
            )}

            <motion.div 
                className="relative z-10 flex size-32 items-center justify-center rounded-full bg-white shadow-xl shadow-deep-green/10 border-2 border-gold/30"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <div className="flex flex-col items-center text-deep-green">
                    <span className="text-4xl font-bold tracking-widest">F & D</span>
                    <div className="h-0.5 w-1/2 bg-gold mt-1 rounded-full" />
                </div>

                {showDecoration && (
                    <motion.div 
                        className="absolute -inset-4 opacity-20"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                        <Heart className="w-full h-full text-rose-500" />
                    </motion.div>
                )}
            </motion.div>

            <motion.div 
                className="flex flex-col items-center text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            >
                <h1 className="text-deep-green text-2xl font-bold tracking-tight px-4">
                    {title}
                </h1>
                <p className="text-deep-green/60 text-sm font-medium mt-1">
                    {date}
                </p>
            </motion.div>

            {showDecoration && (
                <motion.div 
                    className="absolute -top-4 -right-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <Heart className="w-8 h-8 text-rose-500/50" fill="currentColor" />
                </motion.div>
            )}
        </div>
    )
}

export default WeddingHeader