import { Card, CardContent } from "@/components/ui/card"
import { WeddingDetail } from "./types"

interface WeddingDetailsProps {
    details: WeddingDetail[]
}

export const WeddingDetails = ({ details }: WeddingDetailsProps) => {
    return (
        <div className="px-6 py-6">
            <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider mb-4">
                Wedding Details
            </h3>

            <div className="grid grid-cols-2 gap-3">
                {details.map((detail) => (
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
        </div>
    )
}