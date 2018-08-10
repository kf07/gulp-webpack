// module.exportを使ってhello関数を定義する。
export var hello = function (message) {
    log(message);
};
function log(message) {
    document.body.innerHTML = ("" + message);
    console.log(message + "\u3092\u51FA\u529B\u3057\u307E\u3057\u305F\u3042\uFF53");
}
//# sourceMappingURL=sub.js.map