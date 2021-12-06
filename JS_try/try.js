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

// 「マウスクリック」イベントを設定する
// マウス操作のイベントとして「マウスオーバー」と「マウスアウト」を学んできましたが、もちろん、「マウスクリック」のイベントも設定できます。
// ここでは、HTML要素がクリックされたときに、以下の2つのイベントが行われるように設定します。
// .box1がクリックされたときは、box1-extのclassを追加する
// マウスアウトされたときは、box1-extのclassを削除する
// マウスクリックのイベントには、.click( )もあります。しかし、clickの場合は、クリックされた時点でイベントが終わってしまいます。
// 今回は、クリック後に複数のイベントが行われるようにしたいので、onを付けた以下のような書き方をします。

// 【マウスクリックイベントの記述】
// $('.セレクタ名').on('click', function() {
//   イベント発生時に行われる処理
// })

// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext')
//   })
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext')
//   })
// })

// 実際のWebサイト開発では複数の対象を操作したいケースがほとんどです。
// その際に便利なのが操作対象を指定できるthisとchildrenです。
// thisとchildrenの違い
// 「this」はイベントが発生した要素のみを変化させます。
// 「children」はHTML要素直下のすべての子要素を取得できます。
// 例えばthisを使うと正方形にクリックした時、その正方形のみslideUPして消えていく
// 機能を作れます。
// 例えばchildrenを使うとリスト(ul要素)の子要素であるli内の文字列がすべて
// 黒色から赤色に変化する機能を作れます
// thisやchildrenを使うと変更したい要素を簡単に指定できて便利です。

// thisとは
// 「this」は、イベントが発生した要素のみ変化させたいときに使います。

// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp()
//   })

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp()
//   })

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp()
//   })

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   })
// })

// $(function(){
//   $('.box1').on('click',function(){
//     $(this).slideUp()
//   })
// })
// thisは、「クリックされた要素」を指しています。
// 前のコードでは、それぞれの正方形に個別にclass属性を指定していました。
// 今回のコードでは、「box1クラスの正方形がクリックされたとき、this（クリックされた要素）のみslideUpさせる」という設定になります。

// thisを使うと、このように多くの処理をまとめて書くことができて、とても便利です。
// ただし、コード上からでは、何をクリックしたときに動作するのか判別しにくいデメリットもあります。

// childrenとは
// 「children」は、HTML要素直下のすべての子要素を取得するときに使います。
// $(function(){
//   $('button').on('click',function(){
//     $('ul').children().css('color','red')
//   })
// })
