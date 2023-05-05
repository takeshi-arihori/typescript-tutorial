# Reactコンポーネントのテスト

- UIテストのためのライブラリ群testing-libraryを使ったテストの作成
- Jestを使ったスナップショットテストの作成

## Reactプロジェクトの作成
テストに使用するためのReactプロジェクトを作成します。下記コマンドを実行してください。
```
npx create-react-app component-test-tutorial --template typescript
```

```
cd component-test-tutorial
```

次のコマンドを実行してください。
```
yarn start
```

## テスト対象のコンポーネントを作成

```
cd src
touch SimpleButton.tsx
```

## テストを実行

```
yarn test
```


```
 PASS  src/App.test.tsx
 PASS  src/SimpleButton.test.tsx

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        3.214 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.

```




# スナップショット

「スナップショットテスト」はコンポーネントの全体の状態を確かめるためのテストです。
より正確には、コンポーネントのDOMをまるごと保存し、その保存したDOMと、テスト実行時にコンポーネントを描画して生成したDOMとが一致するかを確認します
(DOMとは何かがよく分からない場合、ここではひとまず「コンポーネントを表すオブジェクト」程度に捉えてください)。

「スナップショットテスト」は簡単に書くことができます。それでいてスタイルなど含めた全体の確認ができるので、手軽なリグレッションテストとして活用できます。
一方で、そうであるからこそコンポーネントを一旦作り終えるまでは機能しないテストですので、テストファーストの開発には不向きです。

#### テスト
コンポーネントの描画には@testing-library/reactのrender関数を、スナップショットの照合にはJestのtoMatchSnapshot()関数をそれぞれ使用して次のように書くことができます。

```
import { render } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

test("描画されてすぐはOFFと表示されている", () => {
  const view = render(<SimpleButton />);
  expect(view.container).toMatchSnapshot();
});
```

#### テスト結果

```
 PASS  src/App.test.tsx
 PASS  src/SimpleButton.test.tsx
 › 1 snapshot written.

Snapshot Summary
 › 1 snapshot written from 1 test suite.

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   1 written, 1 total
Time:        3.372 s
Ran all test suites related to changed files.

Watch Usage: Press w to show more.

```

このときsrcディレクトリの中に__snapshots__というディレクトリが自動で追加されている
