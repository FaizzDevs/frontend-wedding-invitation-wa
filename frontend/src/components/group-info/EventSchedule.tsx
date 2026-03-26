import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Event } from "./types"

interface EventScheduleProps {
    events: Event[]
}

export const EventSchedule = ({ events }: EventScheduleProps) => {
    return (
        <div className="space-y-4">
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
        </div>
    )
}