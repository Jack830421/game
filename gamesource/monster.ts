export interface 怪物模型 {
    Name: string;
    HP: number;
    level: number;
    exp: number;
    attack: number;
    item: string;
    itemcore: number;
}
    
export enum 怪物前綴 {
    '弱小的',
    '一般的',
    '強大的',
    '堅固的',
    '虛弱的',
    '神秘的',
    '笨重的',
    '強壯的',
    '偏執的',
    '敏捷的',
    '隱忍的',
    '堅韌的',
    '無畏的',
    '狡猾的',
    '輕靈的',
    '好戰的',
    '汗血的',
    '聰慧的',
    '全能的',
    '瘋癲的',
    '入魔的',
    '虔誠的',
    '嗜血的',
    '堅定的',
    '激進的',
    '暴怒的',
    '肥胖的',
    '領主級的',
    '首領級的',
    '魔王級的',
    '主神級的'
}

export enum 怪物名稱 {
    '嫩寶',
    '菇菇仔',
    '藍寶',
    '木妖',
    '紅寶',
    '綠水靈',
    '肥肥',
    '菇菇寶貝',
    '緞帶肥肥',
    '黑木妖'
}

export interface 物品模型 {
    item: string;
    itemcore: number;
}

export let 物品列表: 物品模型[] = [
    { item:  "嫩寶殼", itemcore: 1 },
    { item: "菇菇孢子", itemcore: 2 },
    { item: "藍寶殼", itemcore: 3 },
    { item: "樹枝", itemcore: 4 },
    { item: "紅寶殼", itemcore: 5 },
    { item: "綠水靈珠", itemcore: 6 },
    { item: "豬頭", itemcore: 7 },
    { item: "菇菇帽", itemcore: 8 },
    { item: "緞帶", itemcore: 9 },
    { item: "黑樹枝", itemcore: 10 }
]
