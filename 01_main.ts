import { Players } from "./01_player";
import { Monsters } from "./01_monster";

//玩家角色
let players: Players = { Name: '志強', HP: 500, level: 2, exp: 0, attack: 30 };

//怪物角色
let monsters: Monsters = { Name: '波利', HP: 170, level: 1, exp: 32, attack: 3 };
let monsters2: Monsters = { Name: '綠棉蟲', HP: 180, level: 1, exp: 30, attack: 3 };

const Monsters = [monsters, monsters2];
const random = Math.floor(Math.random() * Monsters.length);

const mname = Monsters[random].Name;
let mlevel = Monsters[random].level;
let mhp = Monsters[random].HP;
let mexp = Monsters[random].exp;
let pattack = players.attack;


//判斷是否進行打怪
if (players.level >= mlevel) {
    console.log('我們的等級大於' + mname + '，開始進行戰鬥，讓我們打爆它吧')
    let g_exp = fight(mname,pattack, mhp, mexp);
    console.log('exp:' + g_exp);
} else {
    console.log('怪物等級太高，先放她一馬')
};

//打怪功能，當怪物血量為 0 時，停止 function，並將exp 加入 players  
function fight(name: string, attack: number, mhp: number, mexp: number) {
    let num = attack;//30
    let num2 = mhp;//120
    for (let i = 0; i <= (num2 / num) + 1; i++) {
        console.log(name + `被打了` + i + `下，血量剩餘:` + (num2 - (num * i)));
        if ((num2 - (num * i)) === 0){
            console.log("死了")
            break;
        }
    };
    //players.exp = players.exp + monsters.exp;
    console.log('成功擊敗' + name + '獲得:' + mexp + '的經驗值')
    return mexp;
};



