// 変数の書き方
// alert('Hello World')
// let hello = 'Hello World'
// alert(hello)

// JavaScriptでは、変数名の前にletを付ける
// letの後ろに変数名と内容（初期値）、letについてhttps://www.sejuku.net/blog/58429
// let int1 = 1
// alert(int1)

// alert('Hello' + 'World')

// 四則演算の書き方
// str=Stringオブジェクトは、文字列を扱うためのオブジェクトです。文字列型はJavaScriptの基本データ型なのでオブジェクトではありませんが、
// これをオブジェクトとして扱えるようにするのが、ビルトインとして組み込まれているStringオブジェクトです。このような基本データ型をオブジェクト
// として扱えるようにするオブジェクトのことを「ラッパーオブジェクト」と呼びます。Stringオブジェクトのプロパティやメソッドを使うことで、
// 「文字列の中の一部を取り出す」とか「文字列の長さを調べる」のような操作が行えます。
// let str1 = 'Hello'
// let str2 = 'World!!'
// alert(str1 + str2)

// 条件分岐
// let orange = 100
// let apple = 120

// else if＝どちらの変数がtrueだった時に行う

// if(orange < apple){
//   alert('みかんの値段がりんごより安い')
// } else if(orange == apple){
//   alert('みかんとりんごが同じ値段')
// } else{
//   alert('みかんの値段がりんごより高い')
// }

// 繰り返し処理
// let max = 100
// let num = 1
// let count = 0
// num＝「num」は「number」の略で「数値」の意味

// while文
// 「while文」では、条件式が真（true）である間は繰り返し処理が実行されます。
// 繰り返される回数は決まっていない。
// while(num < max){
//   num = num * 2
//   count = count + 1
// }
// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です')

// do...while文
// do...while文では、条件式のtrue／falseに関わらず、最初の1回だけは必ず処理が行われます。
// その後、条件式を評価して、繰り返し処理を続けるか／抜けるかを決めていきます。

// 【do...while文の記述】

// do{
//   最低1回は行われる処理
// }while(条件式)

// for文
// 「for文」は、決められた回数の処理を繰り返すときに使います。
// 「繰り返す回数」を初期値で設定する
// 「条件を満たす場合の処理」を記述する
// for文は、「10回まで繰り返し」などのように、決められた回数内で繰り返し処理を行いたい場合に使われます。

// 【for文の記述】

// for ( 初期値; 条件式; 増減値 ){
//   繰り返し処理
// }

// let i
// let num = 0
// for (i = 1;i < 11;i ++ ){
//   num = num + i
// }
// alert('1から10まで足し算した結果は' + num + 'です');

