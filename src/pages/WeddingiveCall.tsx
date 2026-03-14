import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera, MicOff, Phone, UserPlus, Volume2 } from "lucide-react"
import { useNavigate } from "react-router-dom"
import videokol from '/videokol.mp4'

const WeddingLiveCall = () => {
    const navigate = useNavigate()

    return(
        <div className="relative flex h-screen w-full flex-col bg-background-dark overflow-hidden max-w-md mx-auto shadow-2xl">
            <Button
                variant='ghost'
                size='icon'
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 z-20 text-slate-100 hover:bg-white/20 rounded-full"
            >
                <ArrowLeft className="w-6 h-6" />
            </Button>

            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={videokol} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            <div className="relative z-10 flex items-center justify-between p-4 pt-12">
                <div className="flex items-center gap-3">
                    <div className="flex flex-col">
                        <h2 className="text-slate-100 text-lg font-bold leading-tight tracking-tight">
                            Live from the reception
                        </h2>
                        <span className="text-slate-300 text-sm font-medium">
                            04.22
                        </span>
                    </div>
                </div>

                <Button
                    variant='ghost'
                    size='icon'
                    className="text-slate-300 hover:bg-white/20 rounded-full backdrop-blur-md bg-white/10"
                >
                    <UserPlus className="w-5 h-5" />
                </Button>
            </div>

            <div className="mt-auto relative z-10 px-6 pb-12">
                <div className="mb-8 flex justify-end">
                    <div className="w-24 h-36 rounded border-2 border-white/30 overflow-hidden shadow-xl">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4XyCa9iur47XHs1_Sb0HVY4YUySnYis6reQNLaYlYyXYoNiQZ2ELH5Ve09KPvF7rE44xPEnH5i_W9irgXn182zyxQ1pQe_Vi4qgZeTpKNRhZ5VBtuXyHu1yp6nvaleYfjq9x87rWZGfxoPbg9NQsJXuqnXRDGIUcpAlL7Zc2MBu5OCq8LjSy1sAWApYHxaoUwSKJrZhKnqqT0blRqMMRhAkeRJXUdD_kbG7RCvdsdB-MCbRHIw83KjT6AMORpyD7DFDTvH-aLMJM')" }}
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between bg-black/40 backdrop-blur-xl rounded-xl border border-white/10">
                    <Button
                        variant='ghost'
                        className="flex flex-col items-center gap-1 h-auto py-2 px-3 hover:bg-white/20 text-slate-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10">
                            <MicOff className="w-6 h-6" />
                        </div>
                    </Button>

                    <Button
                        variant='ghost'
                        className="flex flex-col items-center gap-1 h-auto py-2 px-3 hover:bg-white/20 text-slate-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10">
                            <Camera className="w-6 h-6" />
                        </div>
                    </Button>

                    <Button
                        variant='ghost'
                        className="flex flex-col items-center gap-1 h-auto py-2 px-3 hover:bg-white/20 text-slate-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10">
                            <Volume2 className="w-6 h-6" />
                        </div>
                    </Button>

                    <Button
                        variant='ghost'
                        className="flex flex-col items-center gap-1 h-auto py-2 px-3 hover:bg-white/20 text-slate-100"
                    >
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10">
                            <Phone className="w-6 h-6" />
                        </div>
                    </Button>
                </div>
            </div>

            <div />
        </div>
    )
}

export default WeddingLiveCall