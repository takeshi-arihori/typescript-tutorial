# Prettierでコード整形を自動化

## Why Pretter?
コードスタイルを統一ため


```
npm install -g yarn
```


```
mkdir prettier-tutorial
cd prettier-tutorial
```

#### package.json
```
{
  "name": "prettier-tutorial",
  "license": "UNLICENSED"
}
```

#### Pretterのインストール
```
yarn add -D 'prettier@^2'
```

#### TypeScriptの自動整形
```
mkdir src
touch src/helloWorld.ts
```

#### Pretterコマンド
ファイルの書き換えを一緒に実行する
```
yarn prettier --write src
```
整形完了

