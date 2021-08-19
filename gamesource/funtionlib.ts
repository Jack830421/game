import { 玩家模型 } from './player'
import { 怪物前綴, 怪物名稱, 怪物模型, 物品列表 } from './monster'

//檢查玩家
export function 檢查玩家狀態(玩家資料: 玩家模型) {
};

//經驗值計算( 升等所需經驗值 )
export function 經驗值計算(level: number) {
    return (level * 10) ** 2
};

//玩家經驗值統計
export function 玩家經驗值統計(玩家資料: 玩家模型, exp: number) {

};

//怪物生成
export function 動態怪物生成(玩家資料: 玩家模型) {
    let 基礎怪物資料: 怪物模型;
    //隨機選擇怪物名稱的前綴
    let 隨機前綴 = Math.round(Math.random() * (Object.keys(怪物前綴).length / 2 - 1));
    //隨機怪物名稱
    let 隨機名稱 = Math.round(Math.random() * (Object.keys(怪物名稱).length / 2 - 1));
    //組合前綴和名稱
    let generatormonster = 怪物前綴[隨機前綴] + 怪物名稱[隨機名稱];
    //隨機選擇怪物掉落物品
    let 隨機物品 = Math.round(Math.random() * (物品列表.length - 1));
    基礎怪物資料 = {
        Name: generatormonster,
        HP: 0, //之後修改
        level: 玩家資料.level + 1,//之後修改
        exp: 0,//之後修改
        attack: 0,//之後修改
        item: 物品列表[隨機物品].item,//之後修改
        itemcore: 物品列表[隨機物品].itemcore//之後修改
    }
    return 基礎怪物資料
};

//打怪戰鬥
export function 打怪(玩家資料: 玩家模型) {
    var 隨機怪物 = 動態怪物生成(玩家資料);
    let 是否掉落 = 是否掉落物品();
    if (是否掉落 == true) {
        放進背包(玩家資料, 隨機怪物.item, 1, 隨機怪物.itemcore);
        console.log(`${玩家資料.Name} 遇到了 ${leftpad(隨機怪物.Name, 8, '　')}，掉落了${leftpad(隨機怪物.item, 5, '　')} x 1個`)
        檢查背包數量(玩家資料)
    } else {
        console.log(`${玩家資料.Name} 遇到了 ${leftpad(隨機怪物.Name, 8, '　')}，可惜沒掉材料`)
        檢查背包數量(玩家資料)
    }
};

function leftpad(str: any, len: number, ch: any) {
    str = String(str);
    var i = -1;
    if (!ch && ch !== 0) ch = ' ';
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
};

export function 是否掉落物品() {
    //獲取100之內的任意一個整數，將機率分成100份;
    var n1 = Math.round(Math.random() * 100);
    //n1 > 20 沒掉落物品，< 20 則掉落
    if (n1 > 20) return false; return true;
};


//檢查背包內是否已有此物品 , 有 -> 直接加上 ； 無 ->直接放入
export function 放進背包(玩家資料: 玩家模型, item: string, count: number, gold: number) {
    //是否已放入背包
    let isPut = false;
    //先檢查包包是否有該物品存在 用for loop 
    for (const x of 玩家資料.bag) {
        //存在的話 把數量+1
        if (x.物品 == item) {
            x.數量 = x.數量 + count;
            //把檢查用布林值改成true
            isPut = true;
        } else {
            //如果已放入,回傳玩家資料
            if (isPut == true) {
                return 玩家資料
            }
        }
    }
    //如果迴圈整個跑完還沒放進去，就直接push到裡面
    if (isPut == false) {
        return 玩家資料.bag.push({ 物品: `${item}`, 數量: count, 價格: gold })
    }
};

//檢查背包數量
export function 檢查背包數量(玩家資料: 玩家模型) {
    //宣告初始值為0
    let 背包材料總數量 = 0;
    for (const x of 玩家資料.bag) {
        背包材料總數量 = 背包材料總數量 + x.數量
    }
    // console.log('背包內材料數量為:' + 背包材料總量);
    if (背包材料總數量 >= 25) {
        console.log(`背包內材料數量為: ${背包材料總數量}，出發賣東西囉~`);
        販售(玩家資料)
        console.log(`現在擁有 ${玩家資料.money} 元`);
    }
    return 玩家資料
};

//販售
export function 販售(玩家資料: 玩家模型) {
    console.log('販賣東西中 ~')
    let 販售總額 = 0;
    for (const x of 玩家資料.bag) {
        console.log(`賣掉 ${x.數量}個 ${x.物品},共得到${x.數量 * x.價格} 元`);
        販售總額 = 販售總額 + (x.數量 * x.價格)
    }
    玩家資料.money = 玩家資料.money + 販售總額;
    玩家資料.bag = [];
    console.log(`這波賺了${販售總額}元`);
};





