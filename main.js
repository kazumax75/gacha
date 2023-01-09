// ガチャデータを取得する
function getConfig() {
    return [
        { id: 'はずれ', val: 50 },
        { id: '当たり', val: 40 },
        { id: '大当たり', val: 10 },
    ]
}

// 設定データを元にガチャ抽選を行う
function gachaRun(_config) {

    // ロジック通すための前処理。pを昇順ソート。非破壊的なソート
    const config = _config.slice().sort((a, b) => {
        return (a.val < b.val) ? -1 : 1;
    });

    const min = 1; // 最小値
    const max = 100; // 最大値

    // 乱数生成（抽選）
    const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
    console.log(randomNum);
    let result = [];
    let totalProb = 0;
    for (let i = 0; i < config.length; i++) {
        totalProb += config[i].val;
        if (randomNum <= totalProb) {
            result = config[i];
            break;
        }
    };

    return result;
}

// 実行
const config = getConfig();
console.log(gachaRun(config));
console.log(config);