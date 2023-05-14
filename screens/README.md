###### tags: `fsstockApp`
# screen

このフォルダには、アプリケーションのユーザーインターフェイスを構成する画面コンポーネントが含まれています。

## サブフォルダ

- `financialStatements`: 利益損失計算書、貸借対照表、キャッシュフロー計算書、株主資本計算書など、財務諸表の異なるタイプの画面が含まれています。
  - `ProfitLossScreen.js`: 利益損失計算書を表示する画面です。
  - `BalanceSheetScreen.js`: 貸借対照表を表示する画面です。
  - `CashFlowScreen.js`: キャッシュフロー計算書を表示する画面です。
  - `ShareholdersEquityScreen.js`: 株主資本計算書を表示する画面です。
- `settings`: ユーザー設定に関連する画面が含まれており、UserSettingsScreenとOtherSettingsScreenが含まれています。
  - `UserSettingsScreen.js`: ユーザー設定を表示・編集する画面です。
  - `OtherSettingsScreen.js`: その他の設定を表示・編集する画面です。
- `user`: ユーザー情報を表示するUserProfileScreenが含まれています。
  - `UserProfileScreen.js`: ユーザーのプロフィール情報を表示する画面です。
- `timeline`: 無限スクロールタイムラインで財務諸表を表示するTimelineScreenが含まれています。
  - `TimelineScreen.js`: 日付ごとの財務諸表を無限スクロールで表示するタイムライン画面です。
