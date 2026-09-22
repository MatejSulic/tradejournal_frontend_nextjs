import { TraedImage } from "./tradeImage";

export type Direction = `long` | `short` ;
export type Result = 'win' | 'loss' | 'be' | 'notrade'
export type RiskManagement = 'lower' | 'perfect' | 'higher'
export interface Trade{
    id: number
    direction: Direction;
    entry_time: string;
    result: Result;
    rr: number;
    pnl: number | null;
    psychology_score: number;
    pychology_notes: string;
    risk_management: RiskManagement | null;
    series_id: number | null;
    premarket_bias: string | null;
    entry_reason_notes: string | null;
    improvements: string | null;
    category_ids: number[];
    images: TraedImage[]

}