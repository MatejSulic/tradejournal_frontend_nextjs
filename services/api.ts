import { Stats } from '@/types/stats'
import { Series } from '@/types/series'
import { Category } from '@/types/category'
import { Trade } from '@/types/trade'

const API_URL = 'http://127.0.0.1:8000'

export const statsService = {
    async getStats(): Promise<Stats> {
        const res = await fetch(`${API_URL}/stats`)

        if (!res.ok) throw new Error(`Failed to fetch stats: ${res.status}`)

        return (await res.json()) as Stats
    },
}

export const seriesService = {
    async getSeries(): Promise<Series[]> {
        const response = await fetch(`${API_URL}/series`)

        if (!response.ok) throw new Error(`Failed to fetch series: ${response.status}`)
            
        return (await response.json()) as Series[]
    }
}

export const categoryService = {
   async getCategories(): Promise<Category[]> {
    const response = await fetch(`${API_URL}/categories`)

    if(!response.ok) throw new Error(`Failed to fetch from categories: ${response.status}`)

    return (await response.json()) as Category[]
   }
}

export const tradeService = {
    async getAllTrades(): Promise<Trade[]> {
        const res = await fetch(`${API_URL}/trades`)

        if(!res.ok) throw new Error(`Failed to fetch trades: ${res.status}`)

        return(await res.json()) as Trade[]
    }
}

