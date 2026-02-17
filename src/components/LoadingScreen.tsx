import { RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

interface LoadingScreenProps{
    message?: string
    progress?: number
}

const LoadingScreen = ({
    message = 'Entering Chat...',
    progress = 65
}: LoadingScreenProps) => {
    return (
        <div className=" flex-col items-center gap-4 w-full max-w-[280px]">
            <div className="h-1.5 w-full bg-white/50 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-green-500 rounded-full shadow-[0_0_10px_rgba(37,211,102,0.4)]" 
                    initial={false}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                />
            </div>

            <div className="flex items-center gap-2 mt-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                    <RefreshCw className="text-green-500 size-4" />
                </motion.div>
                <p className="text-deep-green/70 text-xs font-semibold tracking-wide">
                    {message}
                </p>
            </div>
        </div>
    )
}

export default LoadingScreen