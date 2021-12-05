// $(document).ready(function () {
//   $('body').html('<h1>Hello jQuery!!</h1>');
// });

// <!-- jQueryを使うには、HTMLと紐づけする必要があります。
// このとき、HTMLの読み込みが終わってからjQueryが実行されるように記述する必要があります。 -->

// <!-- $(document).ready(function () {
//   // jQueryプログラムの内容
// }); -->

// // 頻繁に使うコードなので、省略形も用意されています。
// $(function(){
//   // jQueryプログラムの内容
// });


// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   })
// })

// CSSのスタイルをjQueryで変更するときは、「CSSメソッド」を使います。
// 1つのCSSを記述するときは、プロパティと値をそれぞれ「'」で囲み、間を「,」で区切るシンプルな書き方をします。
// $('セレクタ').css('background-color','#0000FF')
// 今回のように複数のプロパティを指定するときは、少し書き方が変わります。
// 【CSSメソッドの書き方】

// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',

//   :
//   :

//   'プロパティn': '値n'
// })

// アニメーションを追加する
// 上から下へスライド jQueryは、HTMLがすべて読み込まれてから動作するように設定しなければなりません。

// $(function(){
//   $('.box1').slideDown()
// })

// 下から上へスライドさせる
// この場合、表示されている要素を隠すアニメーションになるので、app.cssファイル内のdisplay: none;の記述は不要です。
// $(function(){
//   $('.box1').slideUp()
// });

// 要素を表示・非表示する
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'})
// });

// 非表示の要素をjQueryで表示させる
// $(function(){
//   $('.box1').hide();
// });

// 確認問題
// $(function(){
//   $('.box1').slideDown();
// })
// $(function(){
//   $('.box1').show()
//   $('.box1').css({
//   'background-color':'#0000FF',
//   'width': '200px',
//   'height': '100px'}).slideUp()
// })

/* 「マウスオーバー」イベント、「マウスアウト」イベント */
/* ブラウザの操作は、マウスやタッチパッドを使って行うのが一般的です。
このとき、HTML要素上にマウスカーソルが重なっている状態を「マウスオーバー（mouseover）」といいます。
一方、HTML要素からマウスカーソルが外れることを「マウスアウト（mouseout）」といいます。 */

/* jQueryで「マウスオーバー」イベントを設定する */
// $(function(){
//   $('.box1').mouseover(function(){
//   $('.box1').css({'background-color':'#0000FF'})
//   })
// })
// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// })

// 「マウスアウト」イベントを追加する
// ただし、この記述では、「マウスオーバー」の状態しか検出されません。
// 青色の正方形からマウスカーソルが外れたときに、再び赤色に戻る設定も必要です。
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});
//   });
// });

// class属性を追加する/解除する
// マウスカーソルの状況に応じて、そのCSSを追加（または解除）するように設定。
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext')
//   })
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext')
//   })
// })
