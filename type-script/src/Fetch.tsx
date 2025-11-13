import { useEffect, useState } from "react"
import type { IMessage, IMessageStats } from "./entities/message/message.model"
import { getStats } from "./api/api.stats"

const Fetch = () => {
    const [posts, setPosts] = useState<IMessage[]>([])
    const [stats, setStats] = useState<undefined | IMessageStats>(undefined)

    useEffect(() => {
        const fethPosts = async () => {
        setStats(await getStats())
        try {
            const res = await fetch("https://kitek.ktkv.dev/feedback/api/messages")
            if (!res.ok) throw new Error("HTTP Error")
            const data: IMessage[] = await res.json()
            //console.log(data)
            setPosts(data)
            } catch (error) {
                console.error(error)
            }
        }
        fethPosts()
    }, [])
    
    return(
        <div className="container">
            {posts.map((el) => (
                <h1>{el.content}</h1>
            ))}
            {stats && Object.entries(stats).map((el) =>(
                <div>
                    <span>{el[0]}</span>
                    <span>{el[1]}</span>
                </div>
            ))}
        </div>
    )
}
export default Fetch