
export interface Stats{
    winrate: number;
    average_rr: number;
    total_trades:number;
    average_risk:number;
    win_loss_be:{
        win: number;
        loss: number;
        be: number;
    }
}