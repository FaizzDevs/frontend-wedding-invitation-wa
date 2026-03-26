import { useEffect, useState, useCallback } from 'react'

interface TimeLeft {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const useCountdown = (targetDate?: Date): TimeLeft => {
    const getDefaultDate = () => {
        if (targetDate) return targetDate
        
        const date = new Date()
        date.setDate(date.getDate() + 124)
        date.setHours(12, 45, 30)
        return date
    }

    const [endDate] = useState(getDefaultDate)
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => {
        const now = new Date().getTime()
        const distance = endDate.getTime() - now

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }
    })

    const calculateTimeLeft = useCallback((): TimeLeft => {
        const now = new Date().getTime()
        const distance = endDate.getTime() - now

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        }
    }, [endDate])

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [calculateTimeLeft])

    return timeLeft
}