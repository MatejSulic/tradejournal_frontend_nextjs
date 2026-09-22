import { Stats } from '../types/stats'

const API_URL = 'http://127.0.0.1:8000'

export const statsService = {
    async getStats(): Promise<Stats> {
        const res = await fetch(`${API_URL}/stats`)

        if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`)
        return (await res.json()) as Stats
    },
}