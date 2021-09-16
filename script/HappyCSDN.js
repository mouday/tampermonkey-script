// ==UserScript==
// @name         HappyCSDN
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  做一个快乐的CV工程师
// @author       Mouday
// @email        pengshiyuyx@163.com

// @match        *://blog.csdn.net/*/article/details/*
// @match        *://*.blog.csdn.net/article/details/*

// @grant        none
// ==/UserScript==

// 新tab打开文章内部链接，取消中间跳转，加快coding步伐
function openLinkOnNewTab(){
    for(let a of [...document.querySelectorAll('#article_content a')]){
        a.target = '_blank';
        a.addEventListener('click', (e) => {
            e.stopPropagation()
        });
    }
}

// 移除复制小尾巴，保护delete键
function removeCopyAppend(){
    document.querySelector('#article_content').addEventListener('copy', function(e){
        e.stopPropagation()
    })
}


// 移除下载推荐栏，避免点错浪费时间
function removeDownloadRecommendBox(){
    document.querySelector('.second-recommend-box').style.display = 'none';
    document.querySelector('.first-recommend-box').style.display = 'none';

}

(function() {
    'use strict';
    openLinkOnNewTab();
    removeCopyAppend();
    removeDownloadRecommendBox();

})();