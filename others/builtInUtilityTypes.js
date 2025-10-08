/**
 * Partial<Type>,Readonly<Type>,Record<KeysFrom, Type>,Pick<Type, Keys>
 *
 */
var navigationInfo = {
    home: { title: "Home", url: "/" },
    about: { title: "About", url: "/about" },
    contact: { title: "Contact", url: "/contact" },
    stickers: { title: "Stickers", url: "/stickers/all" },
};
// InstanceType<Type>
// クラスインスタンス、またはコンストラクタ関数を持つオブジェクトから、
// そのインスタンスの型を作成します。
var StickerCollection = /** @class */ (function () {
    function StickerCollection() {
    }
    return StickerCollection;
}());
// ThisType<Type>
// 他の型とは違い、ThisTypeは新しい型を返しません。
// 関数で使われるthisの型を型引数に受け取った型に変換します。
// ThisTypeはTSConfigのnoImplicitThisがtrue
// の場合にしか使えません。
// https://www.typescriptlang.org/docs/handbook/utility-types.html
