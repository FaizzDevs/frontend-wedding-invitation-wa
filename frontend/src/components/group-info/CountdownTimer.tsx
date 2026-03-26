import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { motion } from "framer-motion"

interface CountdownTimerProps {
    timeLeft: {
        days: number
        hours: number
        minutes: number
        seconds: number
    }
    totalDays: number
}

export const CountdownTimer = ({ timeLeft, totalDays }: CountdownTimerProps) => {
    const progress = (totalDays - timeLeft.days) / totalDays * 100

    return (
        <div className="px-6 py-6">
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

            <Progress value={progress} className="mt-6 h-2 bg-pink-100" />
            <p className="text-xs text-gray-500 text-center mt-2">
                {timeLeft.days} days to go!
            </p>
        </div>
    )
}