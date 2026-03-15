import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
    Volume2, 
    MicOff, 
    Grid3x3, 
    PhoneOff,
    ChevronDown,
    Lock,
    UserPlus,
    ChevronUp
} from "lucide-react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const WeddingWhatsAppCall = () => {
    const navigate = useNavigate()

    return (
        <div 
            className="relative flex h-screen w-full flex-col overflow-hidden max-w-md mx-auto"
            style={{
                background: 'radial-gradient(circle at top, #1a3c28 0%, #0a1a10 100%)'
            }}
        >
            <div className="flex items-center p-4 justify-between bg-transparent">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate(-1)}
                    className="text-slate-100 hover:bg-white/20 size-12 shrink-0 rounded-full"
                >
                    <ChevronDown className="w-6 h-6" />
                </Button>
                
                <div className="flex flex-col items-center flex-1">
                    <div className="flex items-center gap-1 opacity-80">
                        <Lock className="w-3 h-3 text-slate-100" />
                        <span className="text-xs font-medium uppercase tracking-widest text-slate-100">
                            End-to-end encrypted
                        </span>
                    </div>
                    <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em]">
                        WhatsApp Call
                    </h2>
                </div>
                
                <div className="flex w-12 items-center justify-end">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-slate-100 hover:bg-white/20 size-12 rounded-full"
                    >
                        <UserPlus className="w-5 h-5" />
                    </Button>
                </div>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-4 pb-20">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#13ec5b]/20 rounded-full scale-110 blur-xl"></div>
                        <Avatar className="relative h-40 w-40 border-2 border-[#13ec5b]/30 shadow-2xl">
                            <AvatarImage 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClqctmqTiJI_DTqnveAXbQv6X6ZOrzoB5deA5TXJFEEncFnkm1k3WK_aNmPk2hZ0WaM_KzWWUOyQP18HX3B9h_5oA7egH4pXHHiBGjs0lutOuNvAeGy87--5W8faIHYoxIOSgsj5SsbxkabFGvQrBy9oF_bC_ex6tFhqXq4Ez9C2yrK_GBpFp-Ycw4PECcZPOZpJxPKnXklFDIibF_08of18vhT6EUMHbN5QmTNzwZEXhJRAmmNtM_gGFWmpRgqnR1-FsKQ8tikgI" 
                                alt="Wedding Couple"
                                className="object-cover"
                            />
                        </Avatar>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center space-y-2">
                        <h1 className="text-slate-100 text-3xl font-bold leading-tight tracking-tight px-6">
                            The Wedding of A & B
                        </h1>
                    </div>
                </div>
            </div>

            <div className="bg-[#12261b]/90 backdrop-blur-md rounded-t-[2.5rem] p-6 pb-8 space-y-8">
                <div className="flex items-center justify-between px-4">
                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-14 rounded-full bg-slate-100/10 text-slate-100 hover:bg-slate-100/20"
                        >
                            <Volume2 className="w-6 h-6" />
                        </Button>
                        <span className="text-xs font-medium text-slate-400">Speaker</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-14 rounded-full bg-slate-100/10 text-slate-100 hover:bg-slate-100/20"
                        >
                            <MicOff className="w-6 h-6" />
                        </Button>
                        <span className="text-xs font-medium text-slate-400">Mute</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="size-14 rounded-full bg-slate-100/10 text-slate-100 hover:bg-slate-100/20"
                        >
                            <Grid3x3 className="w-6 h-6" />
                        </Button>
                        <span className="text-xs font-medium text-slate-400">Keypad</span>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => navigate(-1)}
                            className="size-14 rounded-full bg-red-500 text-white shadow-lg shadow-red-500/30 hover:bg-red-600 active:scale-95 transition-transform"
                        >
                            <PhoneOff className="w-6 h-6" />
                        </Button>
                        <span className="text-xs font-medium text-slate-400">End</span>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 pt-2">
                    <div className="flex flex-col items-center animate-bounce">
                        <ChevronUp className="w-5 h-5 text-slate-400" />
                    </div>
                    <p className="text-slate-400 text-sm font-medium">
                        Swipe up to message
                    </p>
                    
                    <div className="h-1.5 w-32 rounded-full bg-slate-100/20 mt-4" />
                </div>
            </div>
        </div>
    )
}

export default WeddingWhatsAppCall