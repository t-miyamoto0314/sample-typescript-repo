/**
 * リテラルの例
 */
// これは、型の拡張・型の絞り込みにおいて、多くのサポートをもたらします。
// ( example:type-widening-and-narrowing )
// そして、はじめにそれを網羅する価値があります。
// リテラルは集合型よりも具体的なサブタイプです。
// どういうことかと言うと、型システム内部では
// 「Hello World」は文字列ですが、文字列は「Hello World」ではありません。
var helloWorld = "Hello World";
var hiWorld = "Hi World"; // これはletなので文字列型です
allowsAnyString(helloWorld);
allowsAnyString(hiWorld);
allowsOnlyHello(helloWorld);
allowsFirstFiveNumbers(1);
//allowsFirstFiveNumbers(10);//エラー
var potentiallyAnyNumber = 3;
//allowsFirstFiveNumbers(potentiallyAnyNumber);//エラー
// しかし、このルールは混み入ったオブジェクトには適用されません。
var myUser = {
    name: "Sabrina",
};
// 定数として定義された `name："Sabrina"` であっても
// `name：string` に変換されてしまいます。
// こうなるのは、nameプロパティがいつでも変更できるからです。
myUser.name = "Cynthia";
// なぜならmyUserのnameプロパティは変更できるため、
// TypeScriptは型システムにおいてリテラル型を使用できません。
// しかしながら、次の機能でこれを許容することができます。
var myUnchangingUser = {
    name: "Fatma",
};
// 「as const」をオブジェクトに適用すると、
// 変更できるオブジェクトの代わりに、
// 変更できないオブジェクトになります。
//yUnchangingUser.name = "Raîssa";//エラー
// 「as const」はコード中でインラインリテラルを扱ったり、
// 固定データを扱うための素晴らしいツールです。
// 「as const」は配列でも動作します。
var exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }];
