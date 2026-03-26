import { Message, LocationMessage, EventMessage, ImageMessage } from './types'

export const isLocationMessage = (message: Message): message is LocationMessage => {
    return message.type === 'location'
}

export const isEventMessage = (message: Message): message is EventMessage => {
    return message.type === 'event'
}

export const isImageMessage = (message: Message): message is ImageMessage => {
    return message.type === 'image'
}