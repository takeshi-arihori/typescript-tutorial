# ESLintとは
ESLintは一般的に「リンター(linter)」というジャンルのツールです。リンターは、プログラムを静的に解析し、バグや問題点を発見するツール

## コンパイラとリンターの違い
コンパイラの本質は、ある言語から別の言語に変換することです。TypeScriptコンパイラの場合は、TypeScriptからJavaScriptへの変換です。
リンターの本質は、プログラムの問題点を指摘することです。言語から言語への変換は行いません。

Next.jsは最初からESLintが導入されています。実務でNext.jsプロジェクトでESLintを使う場合は、導入ステップは省略できます。


## Shareable configを導入

shareable configは、誰かが設定したルールのプリセットです。これを導入すると、自分でルールを設定する手間が省けます。
#### yarnで``eslint-config-airbnb-base``、``eslint-plugin-import``をインストール
```
yarn add -D \
  'eslint-config-airbnb-base@^15' \
  'eslint-plugin-import@^2'
```

```
.eslintrc.js

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  extends: ["airbnb-base"],
};
```

#### テスト
チェックを試すために、src/helloWorld.jsを次の内容に置き換えてください。
```
src/helloWorld.js
export const hello_world = "Hello World";
console.log(hello_world);
```

#### 実行
```
npx eslint src
```
