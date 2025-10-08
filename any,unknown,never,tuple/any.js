//any,unknown,never,タプル型
/**
 * タプル型の使い道
 * 配列の各要素の型、順番、個数が決まっている
 * 関数の戻り値や、決まった形のデータを表現するのに便利
 * 分割代入と組み合わせて使うことが多い
 */
// 普通の配列：どれも同じ型、個数は自由
var numbers = [1, 2, 3, 4, 5]; // 何個でもOK
var fruits = ["りんご", "みかん"]; // 何個でもOK
// タプル型：型と順番と個数が決まっている
var studentInfo = ["田中太郎", 17, true];
//                  ↑名前    ↑年齢  ↑部活に所属しているか
// この順番と個数を守らないとエラーになる
// const wrongInfo: [string, number, boolean] = ["佐藤", 16]; // エラー！個数が足りない
// const alsoWrong: [string, number, boolean] = [18, "鈴木", false]; // エラー！順番が違う
// RPGキャラクターのステータス [HP, MP, レベル, 名前, 職業]
var hero = [100, 50, 5, "勇者アキラ", "戦士"];
var mage = [60, 120, 7, "魔法使いユキ", "魔法使い"];
// 順番が決まっているので、取り出すときも分かりやすい
var hp = hero[0], mp = hero[1], level = hero[2], charaName = hero[3], job = hero[4];
console.log("anyの出力");
console.log("".concat(charaName, "\u306EHP: ").concat(hp, ", MP: ").concat(mp, ", \u30EC\u30D9\u30EB: ").concat(level, ", \u8077\u696D: ").concat(job));
// 出力: 勇者アキラのHP: 100, MP: 50, レベル: 5, 職業: 戦士
// 計算結果と成功したかどうかを同時に返す関数
function divide(a, b) {
    if (b === 0) {
        return [0, false]; // 割り算失敗
    }
    return [a / b, true]; // 割り算成功
}
// 使う側
var _a = divide(10, 2), result = _a[0], success = _a[1];
if (success) {
    console.log("\u8A08\u7B97\u7D50\u679C: ".concat(result)); // 計算結果: 5
}
else {
    console.log("計算に失敗しました");
}
/**
 * any型:何でも代入できるが、型チェックが働かない
 * 実行時エラーの原因になりやすいので、できるだけ避ける
 * レガシーコードやライブラリとの互換性のために時々使う
 */
// any型：何でも入る（危険）
var magicBox = 42; // 数字OK
magicBox = "Hello"; // 文字列OK
magicBox = true; // 真偽値OK
magicBox = { name: "太郎" }; // オブジェクトOK
magicBox = [1, 2, 3]; // 配列OK
// でも、これが問題...
console.log(magicBox.name); // OK（オブジェクトの時）
//console.log(magicBox.toUpperCase());  // 実行時エラー！（数字や真偽値には.toUpperCase()がない）
// JSONデータを解析する例
var jsonData = '{"id": 123, "username": "yamada"}';
var user2 = JSON.parse(jsonData); // JSON.parseの戻り値はany型
// コンパイル時はエラーにならない（anyだから何でもOK）
console.log(user2.id); // 123（正常）
console.log(user2.username); // yamada（正常）
//console.log(user2.profile.age);     // 実行時エラー！profileプロパティは存在しない
/**
 * unknown型：何でも入るけど、安全にチェックしてから使う
 * anyの安全版。何でも代入できるが、使用前に型チェックが必要
 * 型安全性を保ちながら柔軟な処理ができる
 * JSONデータの処理などで活用
 */
var safeBox = "Hello World";
// そのまま使おうとするとエラーになる
// console.log(safeBox.length);        // エラー！unknownには.lengthがない
// console.log(safeBox.toUpperCase()); // エラー！unknownには.toUpperCase()がない
console.log("unknownの出力");
// 型をチェックしてから使う（型ガード）
if (typeof safeBox === "string") {
    // この中では safeBox は string型として扱われる
    console.log(safeBox.length); // OK！
    console.log(safeBox.toUpperCase()); // OK！
}
// より安全なJSONデータの処理
var jsonData2 = '{"id": 456, "username": "tanaka"}';
var userData = JSON.parse(jsonData2);
// 型をチェックしてから使用
if (typeof userData === "object" && userData !== null) {
    // オブジェクトであることを確認した
    var user = userData; // 型アサーション
    if (user.id && user.username) {
        console.log("\u30E6\u30FC\u30B6\u30FCID: ".concat(user.id, ", \u540D\u524D: ").concat(user.username));
    }
    else {
        console.log("必要なデータが不足しています");
    }
}
else {
    console.log("JSONデータの形式が正しくありません");
}
/**
 * never型 – 「何も入らない」型
 * 何も代入できない型
 * 網羅性チェックで、すべてのケースを処理したかを確認できる
 * エラーを投げる関数や、無限ループの関数の戻り値型としても使用
 */
console.log("neverの出力");
function getCharacterBonus(race) {
    switch (race) {
        case "エルフ":
            return "魔法攻撃力+10";
        case "ドワーフ":
            return "物理防御力+15";
        case "人間":
            return "経験値獲得量+20%";
        default:
            // ここに到達することは「絶対にない」はず
            var check = race; // すべてのケースを処理済みならraceはnever型になる
            throw new Error("\u672A\u5BFE\u5FDC\u306E\u7A2E\u65CF: ".concat(race));
    }
}
console.log(getCharacterBonus("エルフ")); // 魔法攻撃力+10
// もし新しい種族を追加し忘れたら...
// // 新しい種族を追加
// type CharacterRace2 = "エルフ" | "ドワーフ" | "人間" | "オーク";
// function getCharacterBonus2(race: CharacterRace2): string {
//   switch (race) {
//     case "エルフ":
//       return "魔法攻撃力+10";
//     case "ドワーフ":
//       return "物理防御力+15";
//     case "人間":
//       return "経験値獲得量+20%";
//     // case "オーク": を書き忘れた！
//     default:
//       // ここでエラーが発生！"オーク"はnever型に代入できない
//       const check: never = race; // ← ここでコンパイルエラー
//       throw new Error(`未対応の種族: ${race}`);
//   }
// }
