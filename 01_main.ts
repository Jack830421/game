import { player } from './01_player';
import { monster } from './01_monster';

let myvar = setInterval(attack, 3000);

function attack() {
    //怪物相關變數
    let A = (monster[Math.floor(Math.random() * monster.length)]);
    let mname = A.Name;
    let mhp = A.HP;
    let mlevel = A.level;
    let mexp = A.exp;
    // let mattack = A.attack;

    //玩家相關變數
    // let pname = B.name;
    // let php =B.HP;
    // let plevel = B.level;
    let pexp = player.exp;
    let pattack = player.attack;
    let pbag = player.bag
    let 玩家現在經驗值 = mexp + pexp;


    //判斷是否進行打怪
    if (player.level >= mlevel) {
        let mitem = A.item[Math.floor(Math.random() * A.item.length)];
        console.log('我們的等級大於' + mname + '，開始進行戰鬥，讓我們打爆它吧')
        fight(mname, pattack, mhp, mexp, mitem);
    } else {
        console.log('怪物等級太高，先放她一馬')
        return;
    };

    //打怪功能，當怪物血量為 0 時，停止 function，並將exp 加入 players  
    function fight(name: string, attack: number, mhp: number, mexp: number, mitem: string) {
        for (let i = 0; i <= (mhp / pattack) + 1; i++) {
            console.log(mname + `被打了` + i + `下，血量剩餘:` + (mhp - (pattack * i)));
            if ((mhp - (pattack * i)) === 0) {
                break;
            }
        };
        console.log('成功擊敗' + name + ',獲得經驗值:' + mexp + ',獲得物品:' + mitem)
        console.log('現在包包中的物品:' + [pbag, mitem])
        let C = pbag.push(mitem)
        console.log('現在包包擁有' + C + '件物品')
        if (C > 3) {
            console.log('警告')}
        if (C >= 5) {
            console.log('物品負重 50% ，無法自動回復血量且無法進行攻擊，請盡快販賣物品')
            clearInterval(myvar);
            sell();
        }
    };
};

function sell() {

}











