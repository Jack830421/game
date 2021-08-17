export interface Monster{
    Name: string;
    HP: number;
    level: number;
    exp: number;
    attack: number;
    item?: string[];
}

export let monster = [
    {
        Name: '波利',HP: 170,level: 1,exp: 32,attack: 3,item: ['蘋果', '加勒比結晶石', '波利卡'] },
    {
        Name: '綠棉蟲',HP: 180,level: 1,exp: 30,attack: 3,item: ['棉花', '綠棉蟲卡']},
    {
        Name: '波波利',HP: 300,level: 3,exp: 50,attack: 20,item: ['蘋果', '加勒比結晶石', '黏稠液體', '波波利卡']},
];


