'use strict'

/* Get Infomation List from configure json (/bundles/cfg/c4run-18win.json) */
/* 設定ファイル(/bundles/cfg/c4run-18win.json)から表示情報のリストを取得 */
const runList = nodecg.bundleConfig.runList;
const playerList = nodecg.bundleConfig.playerList;

/* Get Replicant | Replicantを取得 */
// Index of playing run in RunList | プレイ中のRTAのRTAリスト内インデックス
const playRun = nodecg.Replicant('playRun');
// Index of setup run in RunList | セットアップ中のRTAのRTAリスト内インデックス
const setupRun = nodecg.Replicant('setupRun');

/* Define Observer, it send the data to riot tags */
/* Observerを定義, カスタムタグのマウント時に送信される */
const observer = riot.observable(); // This is given when riot.mount on html

/* Update Information on Play View */
/* プレイ中表示の情報を更新 */
/* Define Event Listener | イベントリスナの定義 */
playRun.on('change', (newVal) => {
    if (newVal) {
        _update(newVal);
    }
});

function _update(runIdx) {
    console.log(runIdx);
    /* Get Information from Run Index | 表示情報をインデックスから取得 */
    const runInfo = runList[runIdx];
    /* Get Index of Player List | プレイヤーリストのインデックス取得 */
    const playerIdxs = runInfo.player;

    /* Update run-info | run-infoタグを更新 */
    const rundata = {}
    rundata.game = runInfo.game;
    rundata.category = runInfo.category;
    rundata.estimate = runInfo.estimate;

    // Trigger the event update:run-info
    // update:run-infoイベントを発火
    observer.trigger('update:run-info', rundata)

    /* Update player-info | player-infoタグを更新 */
    const playerdata = {}
    playerdata.name = runInfo.playername
    const twitters = []
    const twitches = []
    for (var i = 0; i < playerIdxs.length; i++) {
        const player = playerList[playerIdxs[i]];
        twitters.push(player.twitter);
        twitches.push(player.twitch);
    }
    playerdata.twitters = twitters;
    playerdata.twitches = twitches;

    // Trigger the event update:player-info
    // update:player-infoイベントを発火
    observer.trigger('update:player-info', playerdata)
}

function updateDefault() {
    if (playRun.value) {
        _update(playRun.value);
    }
}