import type { IMessageStats } from "../entities/message/message.model"

export const getStats: () =>  Promise<IMessageStats | undefined> = async () => {
    try{
        const res = await fetch("https://kitek.ktkv.dev/feedback/api/stats")
        if(!res.ok) throw new Error("HTTP Error")
        const data: IMessageStats = await res.json()
    return data
    } catch (error) {
        return undefined
    }
}