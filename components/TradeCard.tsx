import { Trade } from "@/types/trade";

interface TradeProp{
    trade: Trade
}



export function TradeCard({trade}: TradeProp){

    return(
        <div>
        <p>{trade.direction}</p>
        <p>{trade.entry_time}</p>
        <p>{trade.result}</p>
        <p>{trade.rr}</p>
        <p>{trade.pnl}</p>
        <p>{trade.psychology_score}</p>
        </div>

    )
}