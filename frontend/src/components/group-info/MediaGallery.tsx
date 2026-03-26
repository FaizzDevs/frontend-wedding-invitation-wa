import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Video, FileText, Download } from "lucide-react"
import { MediaItem } from "./types"

interface MediaGalleryProps {
    mediaItems: MediaItem[]
}

export const MediaGallery = ({ mediaItems }: MediaGalleryProps) => {
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-[#1a3a16] text-sm font-bold uppercase tracking-wider">
                    Our gallery
                </h3>
                <Button 
                    variant="ghost" 
                    className="text-[#25D366] text-sm font-medium flex items-center gap-1 hover:bg-[#25D366]/10 p-0"
                >
                    Lihat semua
                    <ChevronRight className="w-4 h-4" />
                </Button>
            </div>

            <div className="overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6">
                <div className="flex gap-2 min-w-max">
                    {mediaItems
                        .filter(item => item.type === 'image' || item.type === 'video')
                        .map((item) => (
                            <div
                                key={item.id}
                                className="relative w-28 h-28 flex-shrink-0 cursor-pointer group overflow-hidden rounded-lg"
                                onClick={() => setSelectedMedia(item)}
                            >
                                {item.type === 'image' ? (
                                    <img 
                                        src={item.url} 
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                                    />
                                ) : (
                                    <div className="relative w-full h-full">
                                        <img 
                                            src={item.url} 
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-black/30" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="bg-black/60 rounded-full p-2">
                                                <Video className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 py-0.5 rounded">
                                            2:34
                                        </div>
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                            </div>
                        ))}
                </div>
            </div>

            {mediaItems.filter(item => item.type === 'document').length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-medium text-[#1a3a16] mb-2">Dokumen</h4>
                    <div className="space-y-2">
                        {mediaItems
                            .filter(item => item.type === 'document')
                            .map(item => (
                                <div key={item.id} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div className="bg-blue-100 p-2 rounded-lg">
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-500">PDF • 2.5 MB</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                        <Download className="w-4 h-4 text-gray-400" />
                                    </Button>
                                </div>
                            ))}
                    </div>
                </div>
            )}

            {/* Media Modal */}
            {selectedMedia && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedMedia(null)}
                >   
                    <button
                        className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
                        onClick={() => setSelectedMedia(null)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
                        onClick={(e) => {
                            e.stopPropagation()
                            const items = mediaItems.filter(item => item.type === 'image' || item.type === 'video')
                            const currentIndex = items.findIndex(item => item.id === selectedMedia.id)
                            const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
                            setSelectedMedia(items[nextIndex])
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {selectedMedia.type === 'image' ? (
                            <img 
                                src={selectedMedia.url}
                                alt={selectedMedia.title}
                                className="max-w-full max-h-full object-contain rounded-lg"
                            />
                        ) : (
                            <div className="text-white text-center">
                                <div className="relative">
                                    <img 
                                        src={selectedMedia.url}
                                        alt={selectedMedia.title}
                                        className="max-w-full max-h-[70vh] object-contain rounded-lg opacity-50"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-[#25D366] rounded-full p-6 cursor-pointer hover:scale-110 transition-transform">
                                            <Video className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </div>

                                <p className="mt-4 text-sm text-white/70">
                                    Klik tombol play untuk memutar video
                                </p>
                            </div>
                        )}

                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-medium">{selectedMedia.title}</p>
                            <p className="text-white/70 text-sm">
                                {selectedMedia.type === 'image' ? 'Foto' : 'Video'}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}