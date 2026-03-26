export type SenderType = 'bride' | 'groom' | 'guest' | 'user'

export interface BaseMessage {
    id: string
    text: string
    sender: SenderType
    senderName: string
    time: Date
    read: boolean
}

export interface TextMessage extends BaseMessage {
    type: 'text'
}

export interface LocationMessage extends BaseMessage {
    type: 'location'
    metadata: {
        image: string
        address: string
    }
}

export interface EventMessage extends BaseMessage {
    type: 'event'
    metadata: {
        title: string
        url: string
        icon: React.ReactNode
    }
}

export interface ImageMessage extends BaseMessage {
    type: 'image'
    metadata: {
        url: string
        caption?: string
    }
}

export type Message = TextMessage | LocationMessage | EventMessage | ImageMessage

export interface Guest {
    name: string
    role: string
    color: string
    image: string
}