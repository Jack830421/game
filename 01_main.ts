import { Players } from "./01_player";
import { Monsters } from "./01_monster";

//玩家角色
let players: Players = { Name: '志強', HP: 500, level: 2, exp: 0, attack: 30 };


//怪物角色
let monsters: Monsters = { Name: '波利', HP: 170, level: 1, exp: 32, attack: 3 };
let monsters2: Monsters = { Name: '綠棉蟲', HP: 180, level: 1, exp: 30, attack: 3 };

const Monsters = ['波利','綠棉蟲'];

const random = Math.floor(Math.random() * Monsters.length);
console.log( Monsters[random]);

//判斷是否進行打怪
if (players.level >= monsters.level) {
    console.log('我們的等級大於' + monsters.Name + '，開始進行戰鬥，讓我們打爆它吧')
    fight();
} else {
    console.log('怪物等級太高，先放她一馬')
};

//打怪功能，當怪物血量為 0 時，停止 function，並將exp 加入 players  
function fight() {
    let num = players.attack;//30
    let num2 = monsters.HP;//120
    for (let i = 0; i <= (num2 / num) + 1; i++) {
        console.log(monsters.Name + `被打了` + i + `下，血量剩餘:` + (num2 - (num * i)));
        if ((num2 - (num * i)) <= 0) {
            console.log('成功擊敗了'+ monsters.Name);
        }
    };
    players.exp = players.exp + monsters.exp;
    console.log('成功擊敗' + monsters.Name + '獲得:' + players.exp + '的經驗值')
};


