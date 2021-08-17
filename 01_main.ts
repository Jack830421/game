import { player } from './01_player';
import {monster} from './01_monster';

//怪物相關變數
let A = (monster[Math.floor(Math.random() * monster.length)]);
let mname = A.Name;
let mhp = A.HP;
let mlevel = A.level;
let mexp = A.exp;
// let mattack = A.attack;
let mitem = A.item[Math.floor(Math.random() * A.item.length)];

//玩家相關變數
// let pname = B.name;
// let php =B.HP;
// let plevel = B.level;
let pexp = player.exp;
let pattack = player.attack;
let pitem = player.bag
let 玩家現在經驗值 = mexp + pexp;
let 玩家現在包包物品 = pitem + mitem;

//判斷是否進行打怪
if (player.level >= mlevel) {
    console.log('我們的等級大於' + mname + '，開始進行戰鬥，讓我們打爆它吧')
    fight(mname, pattack, mhp, mexp, mitem);
} else {
    console.log('怪物等級太高，先放她一馬')
};

//打怪功能，當怪物血量為 0 時，停止 function，並將exp 加入 players  
function fight(name: string, attack: number, mhp: number, mexp: number, mitem: string) {
    let num = attack;//30
    let num2 = mhp;//120
    for (let i = 0; i <= (num2 / num) + 1; i++) {
        console.log(name + `被打了` + i + `下，血量剩餘:` + (num2 - (num * i)));
        if ((num2 - (num * i)) === 0) {
            break;
        }
    };
    console.log('成功擊敗' + name +',獲得經驗值:' + mexp + ',獲得物品:' + mitem)
    
};

console.log(玩家現在經驗值)
console.log(玩家現在包包物品)

//需要寫紀錄功能
function 將物品裝入包包 (){
    
}











