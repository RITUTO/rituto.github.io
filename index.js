const block = "block";
const none = "none";
document.addEventListener('DOMContentLoaded', function() {
const homebutton = document.getElementById('home');
const rinkubutton = document.getElementById('link');

const home = document.getElementById('ho-mu');
const rinku = document.getElementById('rinku');




rinkubutton.addEventListener('click', function() {
    document.title = "ホームページ|関連リンク"
    home.style.display = none;
    rinku.style.display = block;
});
});
