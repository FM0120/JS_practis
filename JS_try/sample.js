// 再宣言
// 一度、宣言した変数名で再度、変数宣言を行うことを再宣言といいます。
// 再宣言を行うことができるのはvarのみとなります。
// letやconstでは再宣言はできず、エラーになります。
// varによる再宣言

// var nickname = "taro"
// console.log(nickname)
// var nickname = "ichiro"
// console.log(nickname)

// letによる再宣言
// let nickname = "taro"
// console.log(nickname)
// let nickname = "ichiro"
// console.log(nickname)

// 再代入
// 変数に値を代入した後で、別の値を代入することを再代入と言います。
// 再代入はvarとletで、可能です。constでは再代入ができません。

// varによる再代入
// var nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// letによる再代入
// let nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// constによる再代入、constでは再宣言と再代入ができません。
// const nickname = "taro"
// console.log(nickname)
// nickname = "jiro"
// console.log(nickname)

// スコープ
// 変数にはスコープ（有効範囲）というものがあります。
// 定義した変数の有効範囲になります。

// グローバルスコープとローカルスコープが存在します。
// またローカルスコープには次のものが存在します。

// ・関数スコープ
// ・ブロックスコープ

// var str = "webcamp" //グローバルスコープ

// function foo() {
//   console.log(str)
//   var y = "hello" //関数スコープ
// }

// foo()
// console.log(y)
// yはfooという関数の中でvarによって宣言された、関数スコープになります。
// この場合、関数の外からyを参照しようとしても有効範囲外となりエラーとなります。

// letのスコープ
// letではブロックスコープ（ローカルスコープ）の変数を宣言することができます。
// ブロックとは() 、{}の組で区切られものを指します。

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }
// console.log(i)
// ブロック外から参照したためエラーになりました。
// letによる変数宣言では宣言されたブロック内が有効範囲となります。


// constのスコープ
// constのスコープはletと同じブロックスコープになります。
// var str = "webcamp"

// function foo() {
//   console.log(str)
//   var str = "dmm webcamp"
//   console.log(str)
// }

// foo()
// 変数の巻き上げとは関数内のどの部分で変数を宣言したとしても、関数冒頭で変数を宣言したことになるというものです。
// また、今回の場合、グローバルスコープのstrという変数と、関数スコープのstrという同名の変数が存在しますが、console.log(str)が関数内で使用されているため、
// 関数スコープのstrが参照されます。

// 変数宣言の使い分け
// letは再代入が可能であり、constは再代入が不可能です。
// constで宣言した変数に値を格納した場合、新たに値を代入することはできませんでした。
// 基本的に、新たに値を代入する必要のないものに関してはconstで宣言していくことになります。
// letは再代入をする場面において、使用すべきものとなります。
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// 関数とは
// 同じプログラムを何度も記述するのは、効率的ではありません。そんなときに使われるのが「関数」です。
// 「関数（function）」は、繰り返し使われる一連の処理を1つにまとめたものです。
// 関数の形で定義しておき、毎回同じプログラムを書く代わりに、この関数を呼び出すことで処理を実行します。
// JavaScriptでは、functionに続けて関数名を書き、{ }内に処理内容を記述します。
// function 関数名(){
//   処理内容
// }

// 「引数」と「戻り値」
// 関数を効率的に利用するには、「引数」と「戻り値」を理解しておきましょう。
// 入力する値を「引数（ひきすう）」、出力される値を「戻り値（もどりち）」といいます。
// 関数に引数を渡したいときは、( )内に引数を書きます。
// 引数は「,」でつないで複数の指定も可能です。複数指定すると、それぞれ順番に引数が格納されていきます。
// この関数の結果を出力したいときは、return内に戻り値を渡します。
// こうすると、関数の処理結果が呼び出し元から利用できるようになります。

// function 関数名(引数){
//   処理
//   return 戻り値;
// }
// 引数に文字列を指定し、文字列同士の結合結果を出力する関数を作成してみます。

// function addStrings(strA){
// // functionの後に、関数名「addString」を記述し、引数として「strA」を定義しています。
//   let addStr = "Hello" + strA
//   // 変数名「addStr」に、「Hello 」の文字列と、関数の引数「strA」に設定されている文字列を結合しています。
//   return addStr
//   // 結合結果の格納された「addStr」を、関数の戻り値としています。returnを記述することで、出力結果が表示されます。
// }

// // メイン部分
// let alertString;
// alertString = addString("WebCamp");

// // 作成した関数を呼び出す
// alert(alertString);

// // 作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// 複数の関数で表示できるようにする

// 関数は、複数定義することもできます。
// 入力ダイアログで値を入力する

// ここまでは、alert()関数でアラートウィンドウを表示させていました。
// 今回は、入力もできるように設定していきます。
// ブラウザ上で文字を入力する場合、通常はフォームが使われます。

// let promptStr = prompt('何か好きな文字を入力してください。')

// alert(promptStr);

// 複数の関数を定義する
// 次に、入力した値を処理する関数を作成していきます。

// 今回は、ユーザが入力したじゃんけんの手（グー・チョキ・パー）と、
// JavaScriptがランダムに出すじゃんけんの手を比較し、勝ち負けの結果を表示させる関数を定義します。

// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
// alert('あなたの選んだ手は' + user_hand + 'です。')

// function getJShand(){
//   let js_hand_num = Math.floor( Math.random() * 3 )

//   if(js_hand_num == 0){
//     js_hand = "グー"
//   } else if(js_hand_num == 1){
//     js_hand = "チョキ"
//   } else if(js_hand_num == 2){
//     js_hand = "パー"
//   }

//   return js_hand;
// }

// じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
//   let js_hand_num = Math.floor(Math.random()*3)
//   let hand_name

//   if(js_hand_num == 0){
//     hand_name = "グー"
//   } else if(js_hand_num == 1){
//     hand_name = "チョキ"
//   } else if(js_hand_num == 2){
//     hand_name = "パー"
//   }

//   return hand_name;
// }
// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user,js){
//   let winLoseStr
//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }
//   return winLoseStr;
// }

// promptとは、ユーザーの入力を受け付けるためのダイアログを表示するために使います。 ダイアログに入力した内容を表示することや、入力内容によって処理を分岐させることができます。 
// また、ダイアログには初期値を設定することもできます。

// while (条件式) 実行する文; for 文が指定した回数だけ繰り返す場合に主に利用されるのに対して、
// while 文は指定した条件が満たされなくなるまで回数に制限なく繰り返しを行う場合に主に利用されます。
// また for 文と異なり初期化式や変化式といったものがありません。
// &&=左辺も右辺もtrueの場合にtrue（左辺 かつ 右辺）
// !=右の値と左の値が違うか比べるときに使う
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
// while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
// // &&=左辺も右辺もtrueの場合にtrue（左辺 かつ 右辺）
// // !=右の値と左の値が違うか比べるときに使う
//   alert('グー・チョキ・パーのいずれかを入力して下さい')
//   user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。')
// }
// let js_hand = getJShand()
// let judge = winLose(user_hand, js_hand)

// if (user_hand != null){
//   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。')
// } else {
//   alert("またチャレンジしてね")
// }

// function getJShand(){
//   let js_hand_num = Math.floor(Math.random() * 3)
//   let hand;
//   if (js_hand_num == 0){
//     hand = "グー"
//   } else if (js_hand_num == 1){
//     hand = "チョキ"
//   } else if (js_hand_num == 2){
//     hand = "パー"
//   }
//   return hand;
// }

// function winLose(user, js){
//   let winLoseStr;
//   if (user == "グー"){
//     if (js == "グー"){
//       winLoseStr = "あいこ"
//     } else if (js == "チョキ"){
//       winLoseStr = "勝ち"
//     } else if (js == "パー"){
//       winLoseStr = "負け"
//     }
//   } else if (user == "チョキ"){
//     if (js == "グー"){
//       winLoseStr = "負け"
//     } else if (js == "チョキ"){
//       winLoseStr = "あいこ"
//     } else if (js == "パー"){
//       winLoseStr = "勝ち"
//     }
//   } else if (user == "パー"){
//     if (js == "グー"){
//       winLoseStr = "勝ち"
//     } else if (js == "チョキ"){
//       winLoseStr = "負け"
//     } else if (js == "パー"){
//       winLoseStr = "あいこ"
//     }
//   }
//   return winLoseStr
// }