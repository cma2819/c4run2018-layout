'use strict'

/* Get Infomation List from configure json (/bundles/cfg/c4run-18win.json) */
/* 設定ファイル(/bundles/cfg/c4run-18win.json)から表示情報のリストを取得 */
const runList = nodecg.bundleConfig.runList;
const playerList = nodecg.bundleConfig.playerList;

/* Get Replicant | Replicantを取得 */
// Index of setup run in RunList | セットアップ中のRTAのRTAリスト内インデックス
const setupRun = nodecg.Replicant('setupRun');

/* Define Observer, it's send the data to custom tags */
/* Observerを定義, カスタムタグのマウント時に送信される */
const observer = riot.observable(); // This is given when riot.mount on html

/* Update Information on Setup View */
/* セットアップ表示の情報を更新 */
setupRun.on('change', (runIdx) => {
    /* Get Information from Run Index | 表示情報をインデックスから取得 */
    const runInfo = runList[runIdx];

    /* Update run-info | run-infoタグを更新 */
    const rundata = {}
    rundata.game = runInfo.game;
    rundata.category = runInfo.category;
    rundata.player = runInfo.playername
    rundata.estimate = runInfo.estimate;

    // Trigger the event update:setup-info
    // update:setup-infoイベントを発火
    observer.trigger('update:setup-info', rundata)
});

/* Animation(?) for text "準備中" */
/* 準備中テキストのアニメーションもどき */
let g_text_turn = 0;
const prepareTexts = ['準備中', '準備中.', '準備中..', '準備中...'];　// ここすごいださい
// Loop by 1 second | 1秒ごとに繰り返す
setInterval(() => {
    g_text_turn = (g_text_turn + 1) % 4;
    $('#prepare-text').text(prepareTexts[g_text_turn]);
}, 1000);