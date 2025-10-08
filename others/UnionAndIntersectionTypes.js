// 型共用体は、いくつかの型である可能性がある
// オブジェクトを宣言する一つの方法です。
// 例：
var handleArtistsResponse = function (response) {
    if (response.error) {
        console.error(response.error.message);
        return;
    }
    console.log(response.artists);
};
// これにより、artistIDと、htmlまたはmarkdownを含んでいる
// リクエストのみを作成することができます。
var workingRequest = {
    artistID: "banksy",
    markdown: "Banksy is an anonymous England-based graffiti artist...",
};
/*
以下はエラー
const badRequest: CreateArtistBioRequest = {
  artistID: "banksy",
};
*/
