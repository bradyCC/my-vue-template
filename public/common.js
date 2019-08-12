//适配rem,750基准 0.01rem === 1px
window.onresize = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
};
window.onresize();
