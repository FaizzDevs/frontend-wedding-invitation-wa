import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Gift, Eye, EyeOff, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import { BankAccount } from "./types"

interface WeddingGiftProps {
    bankAccounts: BankAccount[]
}

export const WeddingGift = ({ bankAccounts }: WeddingGiftProps) => {
    const [showBankNumbers, setShowBankNumbers] = useState<{[key: string]: boolean}>({})
    const [copiedAccount, setCopiedAccount] = useState<string | null>(null)

    const toggleShowBankNumber = (bankId: string) => {
        setShowBankNumbers(prev => ({
            ...prev,
            [bankId]: !prev[bankId]
        }))
    }

    const copyToClipboard = (text: string, bankId: string) => {
        navigator.clipboard.writeText(text)
        setCopiedAccount(bankId)
        setTimeout(() => setCopiedAccount(null), 2000)
    }

    return (
        <div className="px-6 py-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider">
                    Wedding Gift
                </h3>
                <Badge variant='outline' className="bg-pink-50 text-pink-600 border-pink-200">
                    Digital Wedding Gift
                </Badge>
            </div>

            <Card className="border-pink-100 rounded-lg overflow-hidden">
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-4">
                    <div className="flex items-center gap-3 text-white">
                        <Gift className="w-6 h-6" />
                        <div>
                            <p className="font-semibold">
                                Kirim Kado Digital
                            </p>
                            <p className="text-xs text-white/80">
                                Doa dan hadiah terbaik untuk kedua mempelai
                            </p>
                        </div>
                    </div>
                </div>

                <CardContent className="p-4 space-y-3">
                    <p className="text-sm text-gray-600 mb-3">
                        Bagi yang ingin mengirimkan hadiah pernikahan, dapat melalui rekening berikut:
                    </p>

                    {bankAccounts.map((bank) => (
                        <div
                            key={bank.id}
                            className="border border-pink-100 rounded-lg p-4 hover:border-pink-200 transition-colors"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className={`size-10 rounded-full bg-gradient-to-r ${bank.color} flex items-center justify-center text-white`}>
                                        {bank.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-xs text-[#1a3a16]">{bank.bankName}</p>
                                        <p className="text-xs text-gray-500">{bank.accountName}</p>
                                    </div>
                                </div>

                                <Button
                                    variant='ghost'
                                    size='icon'
                                    className="h-8 w-8 text-gray-400 hover:text-[#1a3a16]"
                                    onClick={() => toggleShowBankNumber(bank.id)}
                                >
                                    {showBankNumbers[bank.id] ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </Button>
                            </div>

                            {showBankNumbers[bank.id] && (
                                <motion.div
                                    className="mt-3 flex items-center justify-between bg-pink-50/50 p-3 rounded-lg"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div>
                                        <p className="text-xs text-gray-500">No. Rekening</p>
                                        <p className="font-mono font-bold text-[#1a3a16]">{bank.accountNumber}</p>
                                    </div>

                                    <Button
                                        variant='ghost'
                                        size='sm'
                                        className="h-8 text-[#25d366] hover:text-[#128C7E] hover:bg-[#25d366]/10"
                                        onClick={() => copyToClipboard(bank.accountNumber, bank.id)}
                                    >
                                        {copiedAccount === bank.id ? (
                                            <>
                                                <Check className="w-4 h-4" />
                                                <span className="text-xs">Tersalin!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4"/>
                                                <span className="text-xs">Salin</span>
                                            </>
                                        )}
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    )
}