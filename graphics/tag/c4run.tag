

<!-- プレイ中画面RTA情報タグ -->
<run-info>
    <div id="{opts.cid}" class="top">
        <div class="game">
            { game }
        </div>
        <div class="category">
            { category }
        </div>
        <div class="estimate">
            <span class="label">目標タイム</span><br />
            <span class="time">{ estimate }</span>
        </div>
    </div>

    <style>
        div.top {
            height: 135px;
            width: 90%;
            padding: 0px 5%;
            position: absolute;
            bottom: 0px;
            left: 0px;
            border-top: 4px #ffcd00 solid;
        }

        div.game {
            padding-top: 30px;
            width: 40%;
            height: 1.25em;
            text-align: center;
            font-size: 32px;
            border-bottom: 4px #ffcd00 solid;
        }

        div.category {
            padding-top: 0.25em;
            width: 40%;
            height: 50%;
            text-align: center;
            font-size: 26px;
        }

        div.estimate {
            position: absolute;
            top: 30px;
            left: 40%;
            width: 40%;
            text-align: center;
        }

        div.estimate span {
            display: inline-block;
        }

        .label {
            font-size: 26px;
            padding: 0.2em 0.5em;
            background-color: rgba(255, 205, 0, 1.0);
            border-radius: 0.2em;
        }

        .time {
            font-size: 42px;
        }
    </style>
    <script>
        // Get observer | Observerの取得
        this.observer = opts.observer;

        // Set listener to update values | 値更新時のイベントリスナ定義
        this.observer.on('update:run-info', (data) => {
            this.game = data.game || 'no game';
            this.category = data.category || 'no category';
            this.estimate = data.estimate || '99:99:99';
            this.update();
        });
    </script>
</run-info>

<!-- プレイ中画面プレイヤー情報タグ -->
<player-info>
    <div id="{opts.cid}">
        <dl>
            <dt>Player</dt><br />
            <dd>{name}</dd>
            <dt>Twitter</dt><br />
            <dd each="{twitter, i in twitters}">{twitter}</dd>
            <dt>Twitch</dt><br />
            <dd each="{twitch, j in twitches}">{twitch}</dd>
        </dl>
    </div>

    <style>
        div {
            border: 4px #ffcd00 solid;
            border-radius: 5px;
            padding: 5px 0.5em;
        }

        dl {
            margin: 0px;
        }

        dt {
            margin: 0.25em 0px;
        }

        dt {
            padding: 0.2em 0.5em;
            background-color: rgba(255, 205, 0, 1.0);
            border-radius: 0.2em;
            display: inline-block;
            margin-top: 0.5em;
        }

        dd {
            margin: 0px;
            margin-left: 0.5em;
        }
    </style>
    <script>
        // Get Observer | Observerの取得
        this.observer = opts.observer;

        // Set Listener to update values | 値更新時のイベントリスナ定義
        this.observer.on('update:player-info', (data) => {
            this.name = data.name || 'no name';
            this.twitters = data.twitters || [];
            this.twitches = data.twitches || [];
            this.update();
        });
    </script>
</player-info>

<!-- セットアップ画面情報タグ -->
<setup-info>
    <div>
        <h1>C4RUN RTAリレー</h1>
        <p class="label">Up Next</p>
        <dl>
            <dt>Game</dt>
            <dd>{game}</dd>
            <dt>Category</dt>
            <dd>{category}</dd>
            <dt>Player</dt>
            <dd>{player}</dd>
            <dt>Estimate</dt>
            <dd>{estimate}</dd>
        </dl>
    </div>
    <style>
        div {
            position: absolute;
            top:50px;
            left:75px;
            width: 720px;
            border: 4px #ffcd00 solid;
            border-radius: 5px;
            padding: 5px 0.5em;
        }

        h1 {
            font-size: 48px;
        }
        
        p.label {
            border-bottom: 2px #ffcd00 solid;
            font-size: 24px;
            margin-bottom: 5px;
            text-align: right;
        }
        dl {
            margin: 0px 20px;
            font-size: 28px;
            font-weight:bold;
        }

        dt {
            margin: 0.1em 0px;
        }

        dt {
            padding: 0.1em 0.2em;
            background-color: rgba(255, 205, 0, 1.0);
            border-radius: 0.2em;
            display: inline-block;
            margin-top: 0.25em;
        }

        dd {
            margin: 0px;
            margin-left: 0.5em;
        }
    </style>
    <script>
        // Get Observer | Observerの取得
        this.observer = opts.observer;

        // Set Listener to update values | 値更新時のイベントリスナ定義
        this.observer.on('update:setup-info', (data) => {
            this.game = data.game || 'no game';
            this.category = data.category || 'no category';
            this.player = data.player || 'no player';
            this.estimate = data.estimate || '99:99:99';
            this.update();
        });
    </script>
</setup-info>