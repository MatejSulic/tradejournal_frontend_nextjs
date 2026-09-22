import { statsService } from "../services/api";

export default async function Home() {
  const Stats = await statsService.getStats();

  return (
    <>
    <main className="p-8">
      <p className="text-lg">Stats</p>
<p className="text-lg"> Winrate: {(Stats.winrate * 100).toFixed(2)}%</p>
<p className="text-lg"> Average RR: {Stats.average_rr.toFixed(2)} RR</p>
<p className="text-lg"> Total Trades: {Stats.total_trades}</p>
<p className="text-lg"> Average Risk: {Stats.average_risk.toFixed(2)} $</p>

<p className="text-lg"> Win/Loss/BE: </p>
<p className="text-lg"> Win: {Stats.win_loss_be.win}</p>
<p className="text-lg"> Loss: {Stats.win_loss_be.loss}</p>
<p className="text-lg"> BE: {Stats.win_loss_be.be}</p>

    </main>
    </>
  );
}