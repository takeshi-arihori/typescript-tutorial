// tsc --strictNullChecks sayHello.ts
// チェックを厳格にするオプションを指定
// 本来はNext.jsなどのフレームワークがコンパイルを実行してくれるため、tscコマンドを用いて実行する必要はない

function sayHello (firstName: string){
  console.log('Hello ' + firstName)
}

let firstName: string = 'Takeshi'
sayHello(firstName)