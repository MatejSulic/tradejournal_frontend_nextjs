import { TradeCard } from "@/components/TradeCard";
import { seriesService, tradeService } from "@/services/api"
import Link from "next/link";


export default async function TradesPage(){

    const Trades = await tradeService.getAllTrades()

    if(Trades.length === 0){
        return (<p className="text-gray-500">No logged Trades.</p>)
    }

    return(
    <>
    <div>
    {Trades.map((trade) => (
        <TradeCard key={trade.id} trade={trade}/>
    ))}
    </div>
    <Link href = "/"> Back to Home</Link>
    </>
    );

}