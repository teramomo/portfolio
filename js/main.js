'use strict';

{
  //IntersectionObserver
  const targets = document.querySelectorAll('.photo');
  console.log(targets);

  //targetと交差したときの処理
  // 第一引数　targetが交差したときの情報
  // 第二引数　監視の状態の情報
  // isIntersecting === true 発火している状態
  const callback = (entries, obs) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.5,
  };

  
  //第一引数：targetが監視領域を交差するたびに呼び出される処理（コールバック関数）
  //第二引数：オプション設定。監視領域の指定、threshold(targetが領域に交差した％)
  // ※コールバック関数は()なし。()を付けると実行された関数が呼び出されるので無限ループになる。

  const observer = new IntersectionObserver(callback, options);

  //targetの監視
  targets.forEach(target => {
    observer.observe(target);
  });












}