import * as readline from 'readline';
//引入各項interface
import { 玩家模型 } from './gamesource/player'
import { 怪物前綴 } from './gamesource/monster'
//function資料庫
import { 經驗值計算, 放進背包, 是否掉落物品, 檢查背包數量, 打怪, 販售, 動態怪物生成 } from './gamesource/funtionlib';
//function 資料庫

//玩家資料宣告
let 玩家資料: 玩家模型
//設定初始值
玩家資料 = {
    Name: '志強',
    HP: 500,
    level: 1,
    exp: 0,
    attack: 20,
    money: 0,
    bag: []
}
//輸入玩家姓名
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//將輸入的姓名存到玩家資料
rl.question('角色名稱?', name => {
    console.log(name);
    玩家資料.Name = name || '志強';
    console.log(`玩家 ${name || 'Hexgen'} 您好，歡迎來到楓之谷掛機遊戲!`);
    rl.close();
    let action = setInterval(main, 1000);
});
//
/******************************************************/
//定時器，每秒啟動一次主程式
//主程式
function main() {
    打怪(玩家資料);
    //清除定時器
    // clearInterval(action);
    //重新啟動定時器
    // action = setInterval(main, 1000);
}











