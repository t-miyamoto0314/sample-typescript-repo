// const getLength = (text /* ✍🏼 ここに型注釈を書きます */) => {
//   return text.length;
// };
// // ✅ 想定通りのコード。エラーにならないようにしてください
// getLength("hello");
// getLength("very long text");
// getLength("");
// // ❌ 以下はエラーにしてください
// getLength(10);
// getLength({});
// getLength(null);
var getLength = function (text) {
    return text.length;
};
console.log(getLength("あいうえお"));
// const double = (array /* ✍🏼 ここに型注釈を書きます */) => {
//   return array.map((num) => num * 2);
// };
// // ✅ 想定通りのコード。エラーにならないようにしてください
// double([1, 2, 3]);
// double([10, 20, 30]);
// double([]);
// // ❌ 以下はエラーにしてください
// double(["1", "2", "3"]);
// double([1, "2", null]);
// double(1);
// double({});
var double = function (array) {
    return array.map(function (num) { return num * 2; });
};
console.log(double([100.1, 99.9]));
double([1, 2, 3]);
double([10, 20, 30]);
double([]);
// const message = (user: { name: string; age: number }) => {
var message = function (user) {
    console.log("".concat(user.name, "\u3055\u3093\u3001").concat(user.age, "\u6B73\u3067\u3059\u3002\u6765\u5E74\u306F").concat(user.age + 1, "\u6B73\u3067\u3059\u306D\u3002"));
};
message({ name: "太郎", age: 30 });
message({ name: "花子", age: 25 });
message({ name: "JavaScript", age: 29 });
message({ name: "TypeScript", age: 11 });
var happyBirthday = function (birthday) {
    var today = { year: 2024, month: 1, day: 1 };
    if (today.month === birthday.month && today.day === birthday.day) {
        console.log("\u30CF\u30C3\u30D4\u30FC\u30D0\u30FC\u30B9\u30C7\u30FC\uFF01".concat(birthday.year
            ? " ".concat(today.year - birthday.year, "\u6B73\u306E\u304A\u8A95\u751F\u65E5\u3067\u3059\u306D\uFF01")
            : ""));
    }
    else {
        console.log("お誕生日ではありません。");
    }
};
happyBirthday({ year: 2000, month: 1, day: 1 });
happyBirthday({ year: 1995, month: 5, day: 9 });
happyBirthday({ month: 1, day: 1 });
happyBirthday({ month: 10, day: 10 });
var call = function (func) {
    var rand = Math.random() * 10;
    func(rand);
};
// ✅ 想定通りのコード。エラーにならないようにしてください
call(function (num) {
    if (num > 5) {
        console.log(num);
    }
});
call(function () {
    // 引数を使わなくてもOK
    console.log("called");
});
// // ❌ 以下はエラーにしてください
// call({}); // 関数以外を渡そうとしているのでエラーにしたい
// call((str) => {
//   // 引数を文字列として使おうとしているのでエラーにしたい
//   if (str.includes("abc")) {
//     console.log(str);
//   }
// });
// call((num, num2) => {
//   // 存在しない引数を使おうとしているのでエラーにしたい
//   console.log("called");
// });
// const isHoliday = (date /* ✍🏼 ここに型注釈を書きます */) => {
//   const day = date.getDay();
//   return day === 0 || day === 6;
// };
// // ✅ 想定通りのコード。エラーにならないようにしてください
// isHoliday(new Date());
// isHoliday(new Date("2024-02-10"));
// isHoliday(new Date("2017-10-12"));
// // ❌ 以下はエラーにしてください
// isHoliday("2024-01-01"); // Date 以外を渡そうとしているのでエラーにしたい
// isHoliday(20381010); // Date 以外を渡そうとしているのでエラーにしたい
var isHoliday = function (date) {
    var day = date.getDay();
    return day === 0 || day === 6;
};
// ✅ 想定通りのコード。エラーにならないようにしてください
isHoliday(new Date());
isHoliday(new Date("2024-02-10"));
isHoliday(new Date("2017-10-12"));
// // ❌ 以下はエラーにしてください
// isHoliday("2024-01-01"); // Date 以外を渡そうとしているのでエラーにしたい
// isHoliday(20381010); // Date 以外を渡そうとしているのでエラーにしたい
// const handleKeyDown = (e /* ✍🏼 ここに型注釈を書きます */) => {
//   // ✅ 想定通りのコード。エラーにならないようにしてください
//   if (e.key === "Enter") {
//     console.log("Enter キーが押されました");
//   }
// };
// document.body.addEventListener("keydown", handleKeyDown);
var handleKeyDown = function (e) {
    // ✅ 想定通りのコード。エラーにならないようにしてください
    if (e.key === "Enter") {
        console.log("Enter キーが押されました");
    }
};
document.body.addEventListener("keydown", handleKeyDown);
var win = {
    gu: "pa",
    choki: "gu",
    pa: "choki",
};
function isHand(value) {
    return value === "gu" || value === "choki" || value === "pa";
}
// ✅ 正常動作
if (isHand("gu")) {
    console.log("\u30B0\u30FC\u306B\u52DD\u3064\u624B\u306F".concat(win["gu"]));
}
// ❌ エラー発生
if (isHand("👌")) {
    console.log("\u30B0\u30FC\u306B\u52DD\u3064\u624B\u306F".concat(win["👌"])); // 型ガードがfalseを返すため実行されない
}
// const items = [
//   { id: 1, name: "item1" },
//   { id: 2, name: "item2" },
//   { id: 3, name: "item3" },
// ];
// const result = items.find((item) => item.id === 1);
// // ✍🏼 エラーにならないように、処理を修正してください
// console.log(result.name);
var items = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
];
// const result = items.find((item) => item.id === 1);
// // console.log(result.name);
// // 修正方法１　オプショナル
// console.log(result?.name);
// // 修正方法２　型チェック
// if (result) {
//   console.log(result.name);
// }
// // ✍🏼 エラーにならないように処理を修正してください
// const element = document.querySelector(".class");
// element.addEventListener("click", () => {
//   console.log("クリックされました");
// });
// ✍🏼 エラーにならないように処理を修正してください
//const element = document.querySelector(".class");
var element = document;
if (element) {
    element.addEventListener("click", function () {
        console.log("クリックされました");
    });
}
// // ✍🏼 エラーにならないように処理を修正してください
// document.querySelectorAll(".special-button").forEach((button) => {
//   button.disabled = true;
// });
// ✍🏼 エラーにならないように処理を修正してください
document.querySelectorAll(".special-button").forEach(function (button) {
    // if (button instanceof HTMLButtonElement) {
    //   button.disabled = true;
    // }
    if ("disabled" in button) {
        button.disabled = true;
    }
});
// document.querySelectorAll("button").forEach((button /* すでに button は HTMLButtonElement 型 */) => {
//     if (button.matches(".special-button")) {
//       button.disabled = true;
//     }
//   });
// try {
//   if (new Date().getFullYear() > 2050) {
//     throw new Error("未定義です。");
//   }
//   console.log("Success");
// } catch (e) {
//   // ✍🏼 エラーにならないように処理を修正してください
//   console.log(e.message);
// }
try {
    if (new Date().getFullYear() > 2050) {
        throw new Error("未定義です。");
    }
    console.log("Success");
}
catch (e) {
    if (e instanceof Error) {
        console.log(e.message);
    }
    //ほかの例
    // if (typeof e === "object" && e !== null && "message" in e) {
    //   console.log(e.message);
    // }
}
// let isScrolled; // ✍🏼 型注釈を追加してください
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     // ✅ 想定通りのコード。エラーにならないようにしてください
//     isScrolled = true;
//   } else {
//     // ❌ エラーにしてください
//     isScrolled = "NO";
//   }
//   if (isScrolled) {
//     console.log("スクロールされました");
//   }
// });
// let isScrolled:boolean;
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     // ✅ 想定通りのコード。エラーにならないようにしてください
//     isScrolled = true;
//   } else {
//     // ❌ エラーにしてください
//     isScrolled = "NO";
//   }
//   if (isScrolled) {
//     console.log("スクロールされました");
//   }
// });
// const checkSuccess = (input: string) /* ✍🏼 返り値の型を設定してください */ => {
//   if (input === "error") {
//     return; // ❌ false を返すのを忘れているのでエラーにしてください
//   }
//   return true; // ✅ 想定通りのコード。エラーにならないようにしてください
// };
// const checkSuccess = (input: string) : boolean=> {
//   if (input === "error") {
//     return; // ❌ false を返すのを忘れているのでエラーにしてください
//   }
//   return true; // ✅ 想定通りのコード。エラーにならないようにしてください
// };
// const getDayMessage = (
//   day: string // ✍🏼 この型を修正してください
// ) => {
//   switch (day) {
//     case "MON":
//     case "TUE":
//     case "WED":
//     case "THU":
//     case "FRI": {
//       return "平日です";
//     }
//     case "SAT":
//     case "SUN": {
//       return "休日です";
//     }
//     default: {
//       return;
//     }
//   }
// };
// // ✅ 想定通りのコード。エラーにならないようにしてください
// console.log(getDayMessage("MON")); // "平日です"
// console.log(getDayMessage("SUN")); // "休日です"
// // ❌ 以下はエラーにしてください
// console.log(getDayMessage("ABC"));
// console.log(getDayMessage("mon"));
// console.log(getDayMessage("Friday"));
// console.log(getDayMessage("SATURDAY"));
var getDayMessage = function (day) {
    switch (day) {
        case "MON":
        case "TUE":
        case "WED":
        case "THU":
        case "FRI": {
            return "平日です";
        }
        case "SAT":
        case "SUN": {
            return "休日です";
        }
        default: {
            return;
        }
    }
};
// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(getDayMessage("MON")); // "平日です"
console.log(getDayMessage("SUN")); // "休日です"
// // ❌ 以下はエラーにしてください
// console.log(getDayMessage("ABC"));
// console.log(getDayMessage("mon"));
// console.log(getDayMessage("Friday"));
// console.log(getDayMessage("SATURDAY"));
// const addItem = (array: number[] /* ✍🏼 この型を修正してください */) => {
//   // ❌ 元の配列を変更してしまうため、エラーにしたい
//   array.push(4);
//   return array;
// };
// const original = [1, 2, 3];
// const newArray = addItem(original);
// console.log(newArray); // [1, 2, 3, 4]
// console.log(original); // （変更するつもりがなかったにも関わらず） [1 ,2, 3, 4] になってしまいます
//修正案１
//const addItem = (array: readonly number[]) => {
//修正案２
//const addItem = (array: ReadonlyArray<number>) => {
//修正案３
// type numRO = Readonly<number[]>;
// const addItem = (array: numRO) => {
// const dateList: string[] /* ✍🏼 この型を修正してください */ = [
//   // ✅ 以下は想定通りの形式。エラーにならないようにしてください
//   "2001/8/24",
//   "2006/11/30",
//   "2009/9/1",
//   // ❌ 以下はエラーにしたいです
//   "2012-8-16", // 区切り文字が違うのでエラーにしたい
//   "20150729", // 区切り文字がないのでエラーにしたい
//   "2021/10", // 日の部分がないのでエラーにしたい
// ];
var dateList = [
    // ✅ 以下は想定通りの形式。エラーにならないようにしてください
    "2001/8/24",
    "2006/11/30",
    "2009/9/1",
    // // ❌ 以下はエラーにしたいです
    // "2012-8-16", // 区切り文字が違うのでエラーにしたい
    // "20150729", // 区切り文字がないのでエラーにしたい
    // "2021/10", // 日の部分がないのでエラーにしたい
];
var items2 = [
    // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "AbeHiroshi", href: "http://abehiroshi.la.coocan.jp/" },
    { label: "Google", href: "https://www.google.com" },
    { label: "Twitter (Currently X)", href: "https://twitter.com" },
    // // ❌ 以下はエラーにしてください
    // { label: "Contact", href: "contact" },
    // { label: "Contact", href: "./contact" },
    // { label: "Example", href: "www.example.com" },
];
// ✅ 以下は想定通りのコードです。エラーにならないようにしてください
var pikachu = {
    name: "ピカチュウ",
    type: ["でんき"],
};
var charizard = {
    name: "リザードン",
    type: ["ほのお", "ひこう"],
};
// // ❌ 以下はエラーにしたいです
// const typeNull: Pokemon = {
//   name: "タイプ：ヌル",
//   // 要素数が0なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
//   type: [],
// };
// const lugia: Pokemon = {
//   name: "ルギア",
//   // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はエスパー・ひこうタイプです）
//   type: ["エスパー", "ひこう", "みず"],
// };
// const terapagos: Pokemon = {
//   name: "テラパゴス",
//   // 要素数が3以上なのでエラーにしたいです（※問題には関係ないですが、本当はノーマルタイプです）
//   type: ["ノーマル", "ほのお", "みず", "でんき", "くさ", "こおり", "かくとう", "どく", "じめん", "ひこう", "エスパー", "むし", "いわ", "ゴースト", "ドラゴン", "あく", "はがね", "フェアリー"],
// };
// const headOfHead = (array: string[] /* ✍🏼 この型を修正してください */) => {
//   return array[0].charAt(0);
// };
// // ✅ 想定通りのコード
// console.log(headOfHead(["test"])); // t が出力されます
// console.log(headOfHead(["hello", "world"])); // h が出力されます
// console.log(headOfHead(["Alpha", "Bravo", "Charlie", "Delta"])); // A が出力されます
// // ❌ 以下がエラーになれば正解です
// console.log(headOfHead([])); // 実行時にエラーになります
var headOfHead = function (array) {
    return array[0].charAt(0);
};
// ✅ 想定通りのコード
console.log(headOfHead(["test"])); // t が出力されます
console.log(headOfHead(["hello", "world"])); // h が出力されます
console.log(headOfHead(["Alpha", "Bravo", "Charlie", "Delta"])); // A が出力されます
var getArea = function (shape) {
    switch (shape.type) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.pow(shape.side, 2);
    }
};
// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(getArea({ type: "circle", radius: 3 }));
console.log(getArea({ type: "square", side: 4 }));
// const sqrt = (input: number): Result => {
//   if (input < 0) {
//     // ✅ 想定通りのコード
//     return { error: true, message: "負の数は受け付けません" };
//   } else if (input === 0) {
//     // ❌ valueを含めていないためエラーにしてください
//     return { error: false };
//   } else if (input === 1) {
//     // ❌ 不要なプロパティを含めているためエラーにしてください
//     return { error: false, value: 1, message: "√1 はちょうど1です" };
//   } else {
//     // ✅ 想定通りのコード
//     return { error: false, value: Math.sqrt(input) };
//   }
// };
// const action = (light: "RED" | "YELLOW" | "GREEN") => {
//   switch (light) {
//     case "RED": {
//       console.log("止まれ");
//       break;
//     }
//     case "GREEN": {
//       console.log("進め");
//       break;
//     }
//     default: {
//       // ❌"YELLOW" に対する処理が抜けているのでエラーにしてください
//       // ✍🏼 このブロックに到達したらエラーになるように修正してください
//       break;
//     }
//   }
// };
// action("RED");
// action("GREEN");
// action("YELLOW");
var action = function (light) {
    switch (light) {
        case "RED": {
            console.log("止まれ");
            break;
        }
        case "GREEN": {
            console.log("進め");
            break;
        }
        default: {
            // ❌"YELLOW" に対する処理が抜けているのでエラーにしてください
            // ✍🏼 このブロックに到達したらエラーになるように修正してください
            //修正案１
            // light satisfies never;
            //修正案２
            // const check: never = light;
            // check;
            break;
        }
    }
};
action("RED");
action("GREEN");
action("YELLOW");
// const func = (arg: string) => {
//   const parsed: unknown = JSON.parse(arg);
//   // ✍🏼 エラーにならないように修正してください
//   console.log(parsed.name.toUpperCase());
// };
// func(`{ "name": "Alice" }`); // "ALICE"
// func(`{ "name": "bob" }`); // "BOB"
// func(`{ "name": 404 }`); // 実行時にエラーになります
// func(`{ "age": 20 }`); // 実行時にエラーになります
// func("null"); // 実行時にエラーになります
// func("true"); // 実行時にエラーになります
var func = function (arg) {
    var parsed = JSON.parse(arg);
    // ✍🏼 エラーにならないように修正してください
    if (typeof parsed === "object" &&
        parsed !== null &&
        "name" in parsed &&
        typeof parsed.name === "string") {
        console.log(parsed.name.toUpperCase());
    }
    else {
        console.log("error:" + arg);
    }
};
func("{ \"name\": \"Alice\" }"); // "ALICE"
func("{ \"name\": \"bob\" }"); // "BOB"
func("{ \"name\": 404 }"); // 実行時にエラーになります
func("{ \"age\": 20 }"); // 実行時にエラーになります
func("null"); // 実行時にエラーになります
func("true"); // 実行時にエラーになります
