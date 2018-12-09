'use strict'

/* Get Run List from configure json (/bundles/cfg/c4run-18win.json) */
/* 設定ファイル(/bundles/cfg/c4run-18win.json)からRun（RTA）のリストを取得 */
const runList = nodecg.bundleConfig.runList;

/* Set Replicant | Replicantを設定 */
// Index of playing run in RunList | プレイ中のRTAのRTAリスト内インデックス
const playRun = nodecg.Replicant('playRun', {defaultValue: 0, persistent: false});
// Index of setup run in RunList | セットアップ中のRTAのRTAリスト内インデックス
const setupRun = nodecg.Replicant('setupRun', {defaultValue: 0, persistent: false});

/* DOM in dashboard | ダッシュボード内DOM */
const playViewEle = $('select[name="play-view"');
const setupViewEle = $('select[name="setup-view"');

/* Add Option(s) to dashboard | ダッシュボードに項目追加 */
for (var i = 0; i < runList.length; i++) {
    playViewEle.append($('<option />').val(i).text(runList[i].game + "(" + runList[i].category + ")"));
    setupViewEle.append($('<option />').val(i).text(runList[i].game + "(" + runList[i].category + ")"));
}

/* Handler of change value of playing run | プレイ中ゲームの項目変化ハンドラ*/
const changeValueOnPlayView = (idx) => {
    if (idx > -1) {
        playRun.value = idx;
    }
}

/* Handler of change value of playing run | セットアップ中ゲームの項目変化ハンドラ*/
const changeValueOnSetupView = (idx) => {
    if (idx > -1) {
        setupRun.value = idx;
    }
}
