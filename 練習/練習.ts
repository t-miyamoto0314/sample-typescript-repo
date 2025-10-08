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

const getLength = (text: string) => {
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


const double = (array : number[]) => {
  return array.map((num) => num * 2);
};
console.log(double([100.1,99.9]));
double([1, 2, 3]);
double([10, 20, 30]);
double([]);
// double(["1", "2", "3"]);
// double([1, "2", null]);
// double(1);
// double({});


// const message = (user /* ✍🏼ここに型注釈を書きます */) => {
//   console.log(
//     `${user.name}さん、${user.age}歳です。来年は${user.age + 1}歳ですね。`
//   );
// };

// // ✅ 想定通りのコード。エラーにならないようにしてください
// message({ name: "太郎", age: 30 });
// message({ name: "花子", age: 25 });
// message({ name: "JavaScript", age: 29 });
// message({ name: "TypeScript", age: 11 });

// // ❌ 以下はエラーにしてください
// message({ name: "一郎", age: "30" }); // 年齢を文字列で渡しているのでエラーにしたい
// message({ namae: "二郎", age: 30 }); // キーを間違えているのでエラーにしたい
// message({ name: "三郎" }); // 必須のキーが抜けているのでエラーにしたい
// message({ name: "四郎", age: 30, mail: "shiro@example.com" }); // 不要なキーがあるのでエラーにしたい


interface user {
    name: string;
    age: number;
}
// const message = (user: { name: string; age: number }) => {
const message = (user :user) => {
  console.log(
    `${user.name}さん、${user.age}歳です。来年は${user.age + 1}歳ですね。`
  );
};
message({ name: "太郎", age: 30 });
message({ name: "花子", age: 25 });
message({ name: "JavaScript", age: 29 });
message({ name: "TypeScript", age: 11 });
// message({ name: "一郎", age: "30" }); // 年齢を文字列で渡しているのでエラーにしたい
// message({ namae: "二郎", age: 30 }); // キーを間違えているのでエラーにしたい
// message({ name: "三郎" }); // 必須のキーが抜けているのでエラーにしたい
// message({ name: "四郎", age: 30, mail: "shiro@example.com" }); // 不要なキーがあるのでエラーにしたい



// const happyBirthday = (birthday /* ✍🏼 ここに型注釈を書きます */) => {
//   const today = { year: 2024, month: 1, day: 1 };
//   if (today.month === birthday.month && today.day === birthday.day) {
//     console.log(
//       `ハッピーバースデー！${
//         birthday.year
//           ? ` ${today.year - birthday.year}歳のお誕生日ですね！`
//           : ""
//       }`
//     );
//   } else {
//     console.log("お誕生日ではありません。");
//   }
// };

// // ✅ 想定通りのコード。エラーにならないようにしてください
// happyBirthday({ year: 2000, month: 1, day: 1 });
// happyBirthday({ year: 1995, month: 5, day: 9 });
// happyBirthday({ month: 1, day: 1 });
// happyBirthday({ month: 10, day: 10 });

// // ❌ 以下はエラーにしてください
// happyBirthday({ year: 2000, month: 1 }); // day がないのでエラーにしたい
// happyBirthday({ year: 1995, day: 31 }); // month がないのでエラーにしたい

interface birthday {
    year?: number;
    month: number;
    day: number;
}
const happyBirthday = (birthday :birthday) => {
  const today = { year: 2024, month: 1, day: 1 };
  if (today.month === birthday.month && today.day === birthday.day) {
    console.log(
      `ハッピーバースデー！${
        birthday.year
          ? ` ${today.year - birthday.year}歳のお誕生日ですね！`
          : ""
      }`
    );
  } else {
    console.log("お誕生日ではありません。");
  }
};

happyBirthday({ year: 2000, month: 1, day: 1 });
happyBirthday({ year: 1995, month: 5, day: 9 });
happyBirthday({ month: 1, day: 1 });
happyBirthday({ month: 10, day: 10 });
// happyBirthday({ year: 2000, month: 1 }); // day がないのでエラーにしたい
// happyBirthday({ year: 1995, day: 31 }); // month がないのでエラーにしたい


// const call = (func /* ✍🏼 ここに型注釈を書きます */) => {
//   const rand = Math.random() * 10;
//   func(rand);
// };

// // ✅ 想定通りのコード。エラーにならないようにしてください
// call((num) => {
//   if (num > 5) {
//     console.log(num);
//   }
// });
// call(() => {
//   // 引数を使わなくてもOK
//   console.log("called");
// });

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

interface num{
  num : number;
}
const call = (func :(num) => void) => {
  const rand = Math.random() * 10;
  func(rand);
};

// ✅ 想定通りのコード。エラーにならないようにしてください
call((num) => {
  if (num > 5) {
    console.log(num);
  }
});
call(() => {
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

const isHoliday = (date : Date) => {
  const day = date.getDay();
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

const handleKeyDown = (e :KeyboardEvent) => {
  // ✅ 想定通りのコード。エラーにならないようにしてください
  if (e.key === "Enter") {
    console.log("Enter キーが押されました");
  }
};

document.body.addEventListener("keydown", handleKeyDown);


// // ✍🏼 型定義を追加してください

// // ✅ 想定通りのコード。エラーにならないようにしてください
// window.dataLayer.push({ event: "event_name" });
// window.dataLayer.push({ variable_name: "variable_value" });
// window.dataLayer.push({
//   color: "red",
//   conversionValue: 50,
//   event: "customize",
// });
// window.location; // 既存のプロパティにもアクセスできる
// window.scrollY; // 既存のプロパティにもアクセスできる

// // ❌ 以下はエラーにしてください
// window.dataLayer.toUpperCase(); // 存在しないプロパティにアクセスするとエラーにしたい
// window.bar; // 存在しないプロパティにアクセスするとエラーにしたい


interface Window {
  dataLayer: object[];
}
// ✅ 想定通りのコード。エラーにならないようにしてください
// window.dataLayer.push({ event: "event_name" });
// window.dataLayer.push({ variable_name: "variable_value" });
// window.dataLayer.push({
//   color: "red",
//   conversionValue: 50,
//   event: "customize",
// });
// window.location; // 既存のプロパティにもアクセスできる
// window.scrollY; // 既存のプロパティにもアクセスできる

// // ❌ 以下はエラーにしてください
// window.dataLayer.toUpperCase(); // 存在しないプロパティにアクセスするとエラーにしたい
// window.bar; // 存在しないプロパティにアクセスするとエラーにしたい


// // ✍🏼 エラーが出ないように修正してください
// const win = {
//   gu: "pa",
//   choki: "gu",
//   pa: "choki",
// };

// // ✅ 想定通りのコード。エラーにならないようにしてください
// console.log(`グーに勝つ手は${win["gu"]}`);
// console.log(`グーに勝つ手に勝つ手は${win[win["gu"]]}`);
// console.log(`グーに勝つ手に勝つ手に勝つ手は${win[win[win["gu"]]]}`);

// // ❌ 以下はエラーにしてください
// console.log(`グーに勝つ手は${win["👌"]}`); // 存在しないキーを参照するとエラーにしたい

// ✍🏼 エラーが出ないように修正してください


/**strict モードを有効化: コンパイル時に tsconfig.json ファイルで次を設定
{
  "compilerOptions": {
    "strict": true
  }
}
 */
// const win = {
//   gu: "pa",
//   choki: "gu",
//   pa: "choki",
// } as const;
// type Hand = "gu" | "choki" | "pa";
// const win: Record<Hand, Hand> = {
//   gu: "pa",
//   choki: "gu",
//   pa: "choki",
// };


//上記以外の方法
type Hand = "gu" | "choki" | "pa";

const win: Record<Hand, Hand> = {
  gu: "pa",
  choki: "gu",
  pa: "choki",
};

function isHand(value: string): value is Hand {
  return value === "gu" || value === "choki" || value === "pa";
}

// ✅ 正常動作
if (isHand("gu")) {
  console.log(`グーに勝つ手は${win["gu"]}`);
}

// ❌ エラー発生
if (isHand("👌")) {
  console.log(`グーに勝つ手は${win["👌"]}`); // 型ガードがfalseを返すため実行されない
}


// const items = [
//   { id: 1, name: "item1" },
//   { id: 2, name: "item2" },
//   { id: 3, name: "item3" },
// ];
// const result = items.find((item) => item.id === 1);

// // ✍🏼 エラーにならないように、処理を修正してください

// console.log(result.name);

const items = [
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
const element = document;
if (element) {
  element.addEventListener("click", () => {
    console.log("クリックされました");
  });
}

// // ✍🏼 エラーにならないように処理を修正してください
// document.querySelectorAll(".special-button").forEach((button) => {
//   button.disabled = true;
// });

// ✍🏼 エラーにならないように処理を修正してください
document.querySelectorAll(".special-button").forEach((button) => {
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
} catch (e) {
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

const getDayMessage = (
  day: "MON"| "TUE" | "WED" | "THU" | "FRI"| "SAT"| "SUN"
) => {
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

const dateList: `${number}/${number}/${number}`[] = [
  // ✅ 以下は想定通りの形式。エラーにならないようにしてください
  "2001/8/24",
  "2006/11/30",
  "2009/9/1",

  // // ❌ 以下はエラーにしたいです
  // "2012-8-16", // 区切り文字が違うのでエラーにしたい
  // "20150729", // 区切り文字がないのでエラーにしたい
  // "2021/10", // 日の部分がないのでエラーにしたい
];



// type NavItem = {
//   label: string;
//   href: string; // ✍🏼 この型を修正してください
// };

// const items: NavItem[] = [
//   // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Contact", href: "/contact" },
//   { label: "AbeHiroshi", href: "http://abehiroshi.la.coocan.jp/" },
//   { label: "Google", href: "https://www.google.com" },
//   { label: "Twitter (Currently X)", href: "https://twitter.com" },

//   // ❌ 以下はエラーにしてください
//   { label: "Contact", href: "contact" },
//   { label: "Contact", href: "./contact" },
//   { label: "Example", href: "www.example.com" },
// ];


type NavItem = {
  label: string;
  href: `/${string}` | `${"http" | "https"}://${string}`;
};

const items2: NavItem[] = [
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


// type Pokemon = {
//   name: string;
//   type: string[]; // ✍🏼 この型を修正してください
// };

// // ✅ 以下は想定通りのコードです。エラーにならないようにしてください
// const pikachu: Pokemon = {
//   name: "ピカチュウ",
//   type: ["でんき"],
// };
// const charizard: Pokemon = {
//   name: "リザードン",
//   type: ["ほのお", "ひこう"],
// };

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

type Pokemon = {
  name: string;
  type: [string] | [string, string];
};

// ✅ 以下は想定通りのコードです。エラーにならないようにしてください
const pikachu: Pokemon = {
  name: "ピカチュウ",
  type: ["でんき"],
};
const charizard: Pokemon = {
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

const headOfHead = (array: [string , ...string[]]) => {
  return array[0].charAt(0);
};

// ✅ 想定通りのコード
console.log(headOfHead(["test"])); // t が出力されます
console.log(headOfHead(["hello", "world"])); // h が出力されます
console.log(headOfHead(["Alpha", "Bravo", "Charlie", "Delta"])); // A が出力されます

// ❌ 以下がエラーになれば正解です
// console.log(headOfHead([])); // 実行時にエラーになります



// // ✍🏼 この型を修正してください
// type Shape = {
//   type: string;
//   radius?: number;
//   side?: number;
// };

// const getArea = (shape: Shape) => {
//   switch (shape.type) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.side ** 2;
//   }
// };

// // ✅ 想定通りのコード。エラーにならないようにしてください
// console.log(getArea({ type: "circle", radius: 3 }));
// console.log(getArea({ type: "square", side: 4 }));

// // ❌ 以下はエラーにしてください
// console.log(getArea({ type: "circle" })); // radius がないのでエラーにしたい
// console.log(getArea({ type: "square" })); // side がないのでエラーにしたい
// console.log(getArea({ type: "circle", radius: 2, side: 4 })); // 余計なプロパティがあるのでエラーにしたい
// console.log(getArea({ type: "triangle" })); // 存在しない type なのでエラーにしたい

type Shape =
  | { type: "circle"; radius: number }
  | { type: "square"; side: number };

const getArea = (shape: Shape) => {
  switch (shape.type) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
  }
};

// ✅ 想定通りのコード。エラーにならないようにしてください
console.log(getArea({ type: "circle", radius: 3 }));
console.log(getArea({ type: "square", side: 4 }));

// // ❌ 以下はエラーにしてください
// console.log(getArea({ type: "circle" })); // radius がないのでエラーにしたい
// console.log(getArea({ type: "square" })); // side がないのでエラーにしたい
// console.log(getArea({ type: "circle", radius: 2, side: 4 })); // 余計なプロパティがあるのでエラーにしたい
// console.log(getArea({ type: "triangle" })); // 存在しない type なのでエラーにしたい


type Result =
  | { error: true; message: string }
  | { error: false; value: number };

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

const action = (light: "RED" | "YELLOW" | "GREEN") => {
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


const func = (arg: string) => {
  const parsed: unknown = JSON.parse(arg);
  // ✍🏼 エラーにならないように修正してください
  if (
    typeof parsed === "object" &&
    parsed !== null &&
    "name" in parsed &&
    typeof parsed.name === "string"
  ) {
    console.log(parsed.name.toUpperCase());
  }else{
    console.log("error:"+arg);
  }
};

func(`{ "name": "Alice" }`); // "ALICE"
func(`{ "name": "bob" }`); // "BOB"

func(`{ "name": 404 }`); // 実行時にエラーになります
func(`{ "age": 20 }`); // 実行時にエラーになります
func("null"); // 実行時にエラーになります
func("true"); // 実行時にエラーになります