// ==UserScript==
// @name         HappyLeetcode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://leetcode-cn.com/*
// @grant        none

// @grant        window.onload
// @grant        unsafeWindow
// ==/UserScript==


// 添加用户自定义样式
function addUserStyle(){
    let style_ = '<style>.content__1Y2H{font-size: 16px}</style>';
    document.body.insertAdjacentHTML('beforeend', style_);
}


(function() {
    'use strict';
    addUserStyle();

})();