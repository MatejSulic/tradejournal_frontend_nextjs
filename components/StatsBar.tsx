import { Stats } from "@/types/stats";

interface StatsProp {
  stats:Stats
}

export function StatsBar({ stats }: StatsProp) {
  return (
    <div className="flex justify-around items-center w-full p-4 space-y-3 border rounded-md">
      <div className="flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Winrate</span>
        <span className="font-semibold">{(stats.winrate * 100).toFixed(2)}%</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Average R:R</span>
        <span className="font-semibold">{stats.average_rr.toFixed(2)}R</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Total Trades</span>
        <span className="font-semibold">{stats.total_trades}</span>
      </div>

      <div className="flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Average Risk</span>
        <span className="font-semibold">{stats.average_risk.toFixed(2)}$</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xs text-muted-foreground">Win/Loss/BE</span>
        <span className="font-semibold">{stats.win_loss_be.win}/{stats.win_loss_be.loss}/{stats.win_loss_be.be}</span>
      </div>
    </div>
  );
}