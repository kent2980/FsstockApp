###### tags: `fsstockApp`
# components

このフォルダには、アプリケーション全体で再利用可能なコンポーネントが含まれています。

## サブフォルダ

- `common`: 複数の画面で使用されるHeaderやFooterなど、共通のコンポーネントが含まれています。
  - `Footer.js`: アプリケーションのフッター部分を定義するコンポーネントです。
  - `Header.js`: アプリケーションのヘッダー部分を定義するコンポーネントです。
- `buttons`: GoogleLoginButtonのようなカスタムボタンコンポーネントが含まれています。
  - `GoogleLoginButton.js`: Googleログインボタンを定義するコンポーネントです。
- `charts`: 財務データを表示するためのBarChart、LineChart、PieChartなどのチャートコンポーネントが含まれています。
  - `BarChart.js`: 棒グラフを表示するコンポーネントです。
  - `LineChart.js`: 折れ線グラフを表示するコンポーネントです。
  - `PieChart.js`: 円グラフを表示するコンポーネントです。
- `timeline`: 無限スクロールタイムライン機能に関連するコンポーネントが含まれており、InfiniteScrollTimelineやFinancialStatementCardが含まれています。
  - `InfiniteScrollTimeline.js`: 無限スクロールのタイムラインを実現するコンポーネントです。
  - `FinancialStatementCard.js`: 財務諸表の情報を表示するカードコンポーネントです。
- `stock`: 銘柄データに関連するコンポーネントが含まれており、InfiniteScrollStockListが含まれています。
  - `InfiniteScrollStockList.js`: 無限スクロールで銘柄リストを表示するコンポーネントです。
