
export interface 玩家模型 {
    Name: string;
    HP: number;
    level: number;
    exp: number;
    attack: number;
    money: number;
    bag: 背包模型[];
}

interface 背包模型 {
    物品: string,
    數量: number, 
    價格:number
}



// let 玩家資料: 玩家模型 = {
    // Name: '志強',
    // HP: 500,
    // level: 1,
    // exp: 0,
    // attack: 20,
    // bag: []
// }






