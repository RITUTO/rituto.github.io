const block = "block";
const none = "none";
document.addEventListener('DOMContentLoaded', function() {
//ボタンのセットアップ
const homebutton = document.getElementById('home');
const rinkubutton = document.getElementById('link');
const toolbutton = document.getElementById('turu');
const rirekkibutton = document.getElementById('rirekki');
const home = document.getElementById('ho-mu');
const rinku = document.getElementById('rinku');
const tool = document.getElementById('tool');
const rireki = document.getElementById('rireli');
//処理など
tool.style.display = none;
rinku.style.display = none;
rireki.style.display = none;

rinkubutton.addEventListener('click', function() {
    document.title = "ホームページ|関連リンク"
    home.style.display = none;
    rinku.style.display = block;
    tool.style.display = none;
    rireki.style.display = none;

});
homebutton.addEventListener('click', function() {
    document.title = "ホームページ|ホーム"
    home.style.display = block;
    rinku.style.display = none;
    tool.style.display = none;
    rireki.style.display = none;

});
toolbutton.addEventListener('click', function() {
    document.title = "ホームページ|ツール"
    home.style.display = none;
    rinku.style.display = none;
    tool.style.display = block;
    rireki.style.display = none;

});
rirekkibutton.addEventListener('click', function() {
    document.title = "ホームページ|履歴など"
    home.style.display = none;
    rinku.style.display = none;
    tool.style.display = none;
    rireki.style.display = block;

});

});



