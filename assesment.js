'use strict';

const userNameInput = document.getElementById('user-name');
const assesmentButton = document.getElementById('assesment');
const resultDivision = document.getElementById("result-area");
const tweetDivision = document.getElementById("tweeet-area");


assesmentButton.onclick = function () {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return; //名前が空の時は処理を終了する
    }

    //ここから下は名前が入ってる

    //  診断結果表示エリアの作成
    resultDivision.innerText = '';

    const header = document.createElement('h3');//h3タグを作る
    header.innerText = '診断結果';//中身の文章を設定
    resultDivision.appendChild(header);//divの子要素として追加

    const paragraph = document.createElement('p');
    const result = assesment(userName);
    paragraph.innerText = result;
    resultDivision.appendChild(paragraph);

    //  ツイートエリアの作成
    tweetDivision.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue = `https://twitter.com/intent/tweet?button_hashtag=${encodeURIComponent('あなたのいいところ')}&ref_src=twsrc%5Etfw`;

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', "twitter-hashtag-button");
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Xにポスト #あなたのいいところ';

tweetDivision.appendChild(anchor);


const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivision.appendChild(script);

}
const answers = [
    `###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。`,
    `###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。`,
    `###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。`,
    `###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。`,
    `###userName###のいいところは知識です。博識な###userName###を多くの人が頼りにしています。`,
    `###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。`,
    `###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が助けられます。`,
    `###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を惹かれます。`,
    `###userName###のいいところは決断力です。###userName###がする決断にいつも助けられる人がいます。`,
    `###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。`,
    `###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。`,
    `###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。`,
    `###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。`,
    `###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。`,
    `###userName###のいいところはその全てです。ありのままの###userName###自身がいいところなのです。`,
    `###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。`,
];
/**
 * 名前の文字列を渡すと診断結果を返す関数です
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assesment(userName) {
    //全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharcode = 0;
    for (let i = 0; i < userName.length; i++) {
        sumOfCharcode = sumOfCharcode + userName.charCodeAt(i);
    }

    //文字コード番号の合計を解答の数で割って添え字の数値を求めます。
    const index = sumOfCharcode % answers.length; // 0 ~ nswers.length - 1 の間の数値
    let result = answers[index];
    result = result.replaceAll('###userName###', userName);
    return result;
}
console.log(assesment('太郎'));
console.log(assesment('きゅうり'));
console.log(assesment('きゅうり'));

console.assert(
    assesment('太郎') === assesment('太郎'),
    '同じ名前で診断をした場合に同じ結果になっていません'
);
let header = document.getElementById("header");
let degree = 0;//角度
function rotateHeader(){
    degree += 6;
    degree %= 360;//360度を超えないようにする
    if (degree === 90){
        header.setAttribute('class' , 'back');
    } else if (degree === 270){
        header.setAttribute('class', 'face');
    }
    header.style.transform = `rotatex(${degree}deg)`;
}
setInterval(rotateHeader, 35);//

userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
        assesmentButton.onclick();//enterキーでボタンクリックしたときと同じ関数を実行
    }

}

