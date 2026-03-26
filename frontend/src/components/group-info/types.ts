export interface Guest {
    id: string
    name: string
    role: string
    image: string
    status: 'attending' | 'maybe' | 'pending'
    message: string
    isBrideGroom?: boolean
}

export interface Event {
    id: string
    title: string
    date: string
    time: string
    icon: React.ReactNode
    color: string
    location: string
}

export interface MediaItem {
    id: string
    type: 'image' | 'video' | 'document'
    url: string
    title: string 
}

export interface BankAccount {
    id: string
    bankName: string
    accountNumber: string
    accountName: string
    icon: React.ReactNode
    color: string
}

export interface WeddingDetail {
    icon: React.ElementType
    label: string
    value: string
}