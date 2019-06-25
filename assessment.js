(function Diagnosis() {
  'use strict';
  const userNameInput = document.getElementById('user-name');
  //const userNameInputValue = document.getElementById('user-name');.value;
  const assessmentButton = document.getElementById('assessment');
  const resultDivided = document.getElementById('result-area');
  const tweetDivided = document.getElementById('tweet-area');
  const UnderDiagnosis = document.getElementById('UnderDiagnosis-area');
  var addResultArea = document.getElementById('result-area');
  const doButton  = document.getElementById('do1');
  const doNotButton = document.getElementById('do2');
  const ugokasuhelp = document.getElementById('ugokasu');
  var sinaidebutton = document.getElementById('do2');
  var sinaide = null;
  var header = document.getElementById('result-area')
  // しないでを押したときの返事
  const sinaideAnswers = [
    'するよね!',
    'まさか診断しないわけないよね',
    '診断しなさい',
    'お願い♡',
    'するよね...',
    'しないと怒るよ',
    'いい加減怒りますよ!💢💢',
    'するでをクリックしてこださいお願いします',
    'えっ',
    'してよ…',
    'きみは診断しないフレンズなんだね',
    'なるほどきみはそういうやつだったのか',
    'これが最後だからね',
    'フリじゃないよ',
    '本当だよ',
    'これで最後だよ',
    'No signal',
    '___'
  ]

  //console.log(userNameInput).value;
  doNotButton.onclick = () =>{//しないでをクリックしたときの処理
    console.log("'しないで'をクリックしたで");
    
    if (sinaide >= sinaideAnswers.length - 1) {
    }
    else {
      sinaide = sinaide + 1;
      document.getElementById('ask').innerText = sinaideAnswers[sinaide];
    }
    console.log(sinaide);
    console.log(sinaideAnswers[sinaide] + " 17行目");
    
  };
  doButton.onclick = () =>{//するでのボタンを押したときの処理
    console.log("'するで'をクリックしたで");
    doButton.classList.add('ugokasuueni');
    ugokasuhelp.classList.add('ugokasuDoA');
    setTimeout(() => {
      console.log("2000msたったよ");
      document.getElementById("ugokasu").remove();
    }, 2000);
  };


  /**
  * 指定した要素の子どもを全て除去する
  * @param {HTMLElement} element HTMLの要素
  */
  function removeAllChildren(element) {
    while (element.firstChild) { // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
  assessmentButton.onclick = () => {
  console.log("くりっくしたで");
  };
  assessmentButton.onclick = () => {
  //const userName = userNameInput.value;
  const userName = userNameInput.value;
  if (userName.length === 0) { // 名前が空の時は処理を終了する
    return;
  }
  // if (userName.length === 0) {
  //   return;
  // };
  // const userName = userNameInput.value;
  //   if (userName.length === 0) { // 名前が空の時は処理を終了する
  //     return;
  //   }
  setTimeout(() => {
      //classを追加ついかして揺れる
     // var addResultArea = document.getElementById('result-area');
      addResultArea.classList.add("addresult-area");
    console.log("classを追加しました");
    assessmentButton.classList.add("Notactive");
      //診断中を追加
    removeAllChildren(resultDivided);
      //const header = document.createElement('table');
      addResultArea.innerHTML = '<table class="loadtable"><td><p class="load4">診断中</p></td><td><p class="load1"></p></td><td><p class="load2"></p></td><td><p class="load3"></p></td></table>';
      // resultDivided.appendChild(header);
      // document.write
    }, 1);
  setTimeout(() => {
    //classを削除
    addResultArea.classList.remove("addresult-area");
    console.log("classを削除しました");
    assessmentButton.classList.remove("Notactive");
    
  }, 5999);
  console.log("診断結果");
    setTimeout(() => {
    // 診断結果表示エリアの作成
    removeAllChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = (result);
    resultDivided.appendChild(paragraph);

    // ツイートエリアの作成
    // ツイートエリアの作成
    removeAllChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='  + encodeURIComponent('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
      anchor.innerText = 'Tweet #あなたのいいところ';
    tweetDivided.appendChild(anchor);
    twttr.widgets.load();
  }, 6000);
  //assessmentButton.onclickはここまで
  };

  // userNameInput.onkeydown = (event) => {
  //   if (event.keyCode === 13) {
  //     assessmentButton.onclick();
  // }
  //};
  
  const answers = [
    '{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
    '{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    '{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
    '{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
    '{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
    '{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
    '{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
    '{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
    '{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
    '{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
    '{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
    '{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
    '{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
    '{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
    '{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
    '{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
  ];

  /**
  * 名前の文字列を渡すと診断結果を返す関数
  * @param {string} userName ユーザーの名前
  * @return {string} 診断結果
  */
  function assessment(userName) {
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfcharCode = 0;
    for (let i = 0; i < userName.length; i++) {
      sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
    }

    // 文字のコード番号の合計を回答の数で割って添字の数値を求める
    const index = sumOfcharCode % answers.length;
    let result = answers[index];

    result = result.replace(/{userName}/g, userName);
    return result;
  }

  // テストコード
  console.assert(
    assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  );
})();
// setTimeout(() => {
//   console.log("３秒");
  
// }, 3000);
// setTimeout(() => {
//   console.log("4秒");
  
// }, 4000);
