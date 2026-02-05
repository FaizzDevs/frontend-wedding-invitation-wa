import { Flower2, Heart } from "lucide-react"
import LoadingScreen from "../components/LoadingScreen"
import WeddingHeader from "../components/WeddingHeader"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const EnterChat = () => {
    const navigate = useNavigate()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(() => navigate('/invitation'), 500)
                    return 100
                }
                return prev + 5
            })
        }, 100)

        return () => clearInterval(interval)
    }, [navigate])

    return (
        <motion.div 
            className="relative flex min-h-screen w-full flex-col items-center justify-center chat-walpaper safe-area-top safe-area-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="layout-container flex h-full grow flex-col items-center justify-center px-6">
                <WeddingHeader />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <LoadingScreen />
                </motion.div>
            </div>

            <motion.div 
                className="absolute bottom-10 flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.6, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-deep-green/40">
                    From
                </p>
                <div className="flex items-center gap-1.5">
                    <Heart className="w-5 h-5 text-rose-500" fill="currentColor" />
                    <span className="text-deep-green font-bold text-base">
                        FaizDini
                    </span>
                </div>
            </motion.div>

            <motion.div 
                className="absolute top-10 right-10 size-20 opacity-20 text-rose-500"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <Flower2 className="w-full h-full" />
            </motion.div>

            <motion.div 
                className="absolute bottom-20 left-10 size-16 opacity-20 text-rose-500"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                <Heart className="w-full h-full" />
            </motion.div>

            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-gold/10"
                    style={{
                        // eslint-disable-next-line react-hooks/purity
                        width: Math.random() * 10 + 5,
                        // eslint-disable-next-line react-hooks/purity
                        height: Math.random() * 10 + 5,
                        // eslint-disable-next-line react-hooks/purity
                        left: `${Math.random() * 100}%`,
                        // eslint-disable-next-line react-hooks/purity
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        // eslint-disable-next-line react-hooks/purity
                        x: [0, Math.random() * 10 - 5, 0],
                    }}
                    transition={{
                        // eslint-disable-next-line react-hooks/purity
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

        </motion.div>
    )
}

export default EnterChat