import { Trade } from "@/types/trade";
import { Card} from "@/components/ui/card";

interface TradeProp {
  trade: Trade;
}

export function TradeCard({ trade }: TradeProp) {
  const isWin = trade.result?.toUpperCase() === "WIN";
    const formattedDate = trade.entry_time.split("T")[0]; 
  return (
    <Card className="w-full max-w-sm p-4 space-y-3">
      <div className="flex justify-between items-center font-bold">
        <span>{trade.direction}</span>

        <span className={`text-white px-2 py-1 rounded ${isWin ? "bg-cyan-500" : "bg-purple-500"}`}>
          {trade.result}
        </span>
      </div>

      <div className="text-xs text-muted-foreground">
        {formattedDate}
      </div>

      <div className="flex justify-between items-center text-sm pt-2 border-t">
        <div>
          <span className="text-xs text-muted-foreground block">PnL</span>
          <span className={`font-semibold ${(trade.pnl ?? 0) >= 0 ? "text-green-600" : "text-red-600"}`}>
            ${trade.pnl}
          </span>
        </div>

        <div>
          <span className="text-xs text-muted-foreground block">R:R</span>
          <span className="font-semibold">{trade.rr}R</span>
        </div>

        <div>
          <span className="text-xs text-muted-foreground block">Psychology</span>
          <span className="font-semibold">{trade.psychology_score}/10</span>
        </div>
      </div>
    </Card>
  );
}