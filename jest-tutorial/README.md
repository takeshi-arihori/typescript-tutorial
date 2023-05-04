# Jestと使ってTypeScriptの関数をテストする方法

## Jestとは
JavaScriptのフレームワークで、TypeScriptで書くこともできる。
React, Vue, Node.js向けのパッケージのテストも行える。

## 環境構築

#### 環境構築完成後のファイル
```
├── jest.config.js ... Jestの設定ファイル
├── node_modules ... jestやtypescriptがインストールされたフォルダ
├── package.json
├── tsconfig.json ... TypeScriptの設定ファイル
└── yarn.lock
```


プロジェクトルートにpackage.jsonを作ってください。

``touch package.json``
#### package.jsonの内容は次のようにします。
```
package.json
{
  "name": "jest-tutorial",
  "license": "UNLICENSED"
}
```

#### TypeScriptのインストール
プロジェクトにTypeScriptをインストールします。

``yarn add -D typescript``
次に、tsconfig.jsonを生成します。

``yarn tsc --init``

#### Jestをインストールする
Jestをプロジェクトにインストールしましょう。インストールが必要なパッケージは、次の3つです。
```
jest
ts-jest
@types/jest
```

これらのインストールは次のコマンドで、一度にインストールできます。
```
yarn add -D 'jest@^28.0.0' 'ts-jest@^28.0.0' '@types/jest@^28.0.0'
```
jestはJest本体です。JavaScriptだけのプロジェクトであれば、このパッケージを入れるだけでテストが始められます。
ts-jestは、JestをTypeScriptに対応させるためのものです。ts-jestを入れると、TypeScriptで書いたテストコードを、コンパイルの手間なしにそのまま実行できるようになります。
@types/jestはJestのAPIの型定義ファイルです。TypeScriptの型情報を付与されるので、テストコードの型チェックが行えるようになります。

#### Jestの設定ファイルを作る
JestはそのままではTypeScriptを直接テストできません。なので、ここではJestでTypeScriptコードがテストできるように設定を加えます。

次のコマンドを実行すると、Jestの設定ファイルjest.config.jsが生成されます。
```
yarn ts-jest config:init
```
#### テスト用ファイルを作成
Jestで実行できるテストファイルには命名規則があります。
ファイル名が.test.tsまたは.spec.tsで終わるものが、テストファイルになります。動作確認用のファイルとして、
```
touch check.test.ts
```

#### テストコード実装
```
yarn jest
```


#### テスト結果

```
ts-jest[versions] (WARN) Version 5.0.4 of typescript installed has not been tested with ts-jest. If you're experiencing issues, consider using a supported version (>=4.3.0 <5.0.0-0). Please do not report issues in ts-jest if you are using unsupported versions.
  console.log
    OK

      at Object.<anonymous> (check.test.ts:2:11)

 PASS  ./check.test.ts
  ✓ check (21 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.025 s
Ran all test suites.
```


#### テストコード作成
```
├── isZero.ts ... テスト対象ファイル
├── isZero.test.ts ... テストコードのファイル
├── jest.config.js
├── node_modules
├── package.json
├── tsconfig.json
└── yarn.lock
```