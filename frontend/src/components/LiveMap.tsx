import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'

const API_KEY = import.meta.env.VITE_PUBLIC_GOOGLE_MAPS_API_KEY || ''

const mapContainerStyle = {
    height: '500px',
    width: '100%',
    borderRadius: '12px'
}

const center = {
    lat: -6.6136875,
    lng: 110.7269375
}

export default function LiveMap() {
    const mapRef = useRef<google.maps.Map | null>(null)
    const [infoWindowOpen, setInfoWindowOpen] = useState(false)
    const [isMapLoaded, setIsMapLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const styleRef = useRef<HTMLStyleElement | null>(null)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const style = document.createElement('style')
        style.id = 'google-maps-custom-styles' 
        style.innerHTML = `
            .gm-style-mtc button,
            .gm-style-mtc div {
                font-size: 12px !important;
                padding: 6px 12px !important;
                height: 32px !important;
            }
            .gm-style-mtc {
                transform: scale(0.85);
            }
            .gm-control-active,
            .gm-svpc,
            .gm-fullscreen-control {
                width: 32px !important;
                height: 32px !important;
            }
        `
        
        styleRef.current = style
        
        document.head.appendChild(style)

        return () => {
            if (styleRef.current && document.head.contains(styleRef.current)) {
                document.head.removeChild(styleRef.current)
            }
        }
    }, [])

    const onLoad = (map: google.maps.Map) => {
        mapRef.current = map
        setIsMapLoaded(true)
    }

    const handleMarkerClick = () => {
        setInfoWindowOpen(!infoWindowOpen)
    }

    return (
        <LoadScript googleMapsApiKey={API_KEY}>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%', minHeight: isMobile ? '300px' : '400px' }}>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={17}
                    onLoad={onLoad}
                    onClick={() => setInfoWindowOpen(false)}
                    options={{
                        gestureHandling: 'greedy',
                        scrollwheel: true,
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: true,
                        fullscreenControl: true
                    }}
                >
                    {isMapLoaded && (
                        <Marker
                            position={center}
                            onClick={handleMarkerClick}
                            icon={{
                                url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                scaledSize: new window.google.maps.Size(20, 20)
                            }}
                        />
                    )}

                    {infoWindowOpen && isMapLoaded && (
                        <InfoWindow
                            position={center}
                            onCloseClick={() => setInfoWindowOpen(false)}
                        >
                            <div className='p-3 font-sans max-w-[250px]'>
                                <h3 className='m-0 mb-2 text-gray-800 text-base font-semibold'>
                                    Lokasi Acara Wedding
                                </h3>
                                <p className='m-0 mb-3 text-sm text-gray-600'>
                                    Jl. Contoh 123<br />
                                    Jepara
                                </p>

                                <div className='flex gap-2'>
                                    <button
                                        onClick={() => {
                                            window.open(
                                                `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`,
                                                '_blank'
                                            )
                                        }}
                                        className='flex-1 px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md cursor-pointer text-sm font-medium transition-colors'
                                    >
                                        Petunjuk Arah
                                    </button>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </LoadScript>
    )
}