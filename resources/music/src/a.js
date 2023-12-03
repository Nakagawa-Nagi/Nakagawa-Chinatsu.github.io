const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listMaxHeight: 10000000,
    order: 'random',
    audio: [{
        name: 'Ayase - シネマ',
        url: 'music/Ayase - シネマ.flac',
        
    },
    {
        name: 'ギガP & 初音ミク & 鏡音リン & 鏡音レン - Ready Steady',
        url: 'music/ギガP & 初音ミク & 鏡音リン & 鏡音レン - Ready Steady.flac',
        
    },
    {
        name: 'ギガP & 可不 - CH4NGE (feat. 可不)',
        url: 'music/ギガP & 可不 - CH4NGE (feat. 可不).flac',
        
    },
    {
        name: 'ずっと真夜中でいいのに。 - あいつら全員同窓会',
        url: 'music/ずっと真夜中でいいのに。 - あいつら全員同窓会.flac',
        
    },
    {
        name: 'ずっと真夜中でいいのに。 - お勉強しといてよ',
        url: 'music/ずっと真夜中でいいのに。 - お勉強しといてよ.flac',
        
    },
    {
        name: 'ピノキオピー & 鏡音リン & 初音ミク - ねぇねぇねぇ。',
        url: 'music/ピノキオピー & 鏡音リン & 初音ミク - ねぇねぇねぇ。.flac',
        
    },
    {
        name: '¿_shimon & v flower - 偽物人間40号',
        url: 'music/¿_shimon & v flower - 偽物人間40号.flac',
        
    },
    {
        name: 'DECO_27 & 初音ミク - 乙女解剖',
        url: 'music/DECO_27 & 初音ミク - 乙女解剖.flac',
        
    },
    {
        name: 'MAISONdes & EMA & たなか - ダンス・ダンス・ダダ',
        url: 'music/MAISONdes & EMA & たなか - ダンス・ダンス・ダダ.mp3',
        cover: 'music/MAISONdes & EMA & たなか - ダンス・ダンス・ダダ.mp3.jpg'
    },
    {
        name: 'YOASOBI - 怪物',
        url: 'music/YOASOBI - 怪物.flac',
        
    },
    {
        name: 'かいりきベア & 初音ミク - ルマ',
        url: 'music/かいりきベア & 初音ミク - ルマ.flac',
        
    },
    {
        name: '初音ミク & GUMI & ギガP & KIRA - GETCHA!',
        url: 'music/初音ミク & GUMI & ギガP & KIRA - GETCHA!.flac',
        
    },
    {
        name: '米津玄師 & 初音ミク & GUMI - マトリョシカ',
        url: 'music/米津玄師 & 初音ミク & GUMI - マトリョシカ.mp3',
        cover: 'music/米津玄師 & 初音ミク & GUMI - マトリョシカ.mp3.jpg'
    },
    {
        name: '星野源 - 恋',
        url: 'music/星野源 - 恋.flac',
        
    },
    {
        name: 'メドミア & 初音ミク & 可不 - 絶対敵対メチャキライヤー',
        url: 'music/メドミア & 初音ミク & 可不 - 絶対敵対メチャキライヤー.flac',
        
    },
    {
        name: '鏡音リン & 鏡音レン & Neru - い～やい～やい～や',
        url: 'music/鏡音リン & 鏡音レン & Neru - い～やい～やい～や.flac',
        
    },
    {
        name: 'ずっと真夜中でいいのに。 - ミラーチューン',
        url: 'music/ずっと真夜中でいいのに。 - ミラーチューン.flac',
        
    },
    {
        name: 'ずっと真夜中でいいのに。 - 猫リセット',
        url: 'music/ずっと真夜中でいいのに。 - 猫リセット.flac',
        
    },
    {
        name: 'みゆな - 缶ビール',
        url: 'music/みゆな - 缶ビール.flac',
        
    },
    {
        name: 'P＊Light,ギガP,初音ミク - Gimme×Gimme',
        url: 'music/P＊Light,ギガP,初音ミク - Gimme×Gimme.flac',
        cover: 'music/P＊Light,ギガP,初音ミク - Gimme×Gimme.flac.jpg'
    },
    {
        name: 'DECO＊27,初音ミク - 妄想感傷代償連盟',
        url: 'music/DECO＊27,初音ミク - 妄想感傷代償連盟.flac',
        cover: 'music/DECO＊27,初音ミク - 妄想感傷代償連盟.flac.jpg'
    },
    {
        name: 'john,初音ミク - アットホーム・クレイジー',
        url: 'music/john,初音ミク - アットホーム・クレイジー.mp3',
        cover: 'music/john,初音ミク - アットホーム・クレイジー.mp3.jpg'
    },
    {
        name: '初音ミク,ryo (supercell) - ワールドイズマイン',
        url: 'music/初音ミク,ryo (supercell) - ワールドイズマイン.mp3',
        cover: 'music/初音ミク,ryo (supercell) - ワールドイズマイン.mp3.jpg'
    },
    {
        name: 'Ayase,初音ミク - 夜に駆ける(初音ミク ver.)',
        url: 'music/Ayase,初音ミク - 夜に駆ける(初音ミク ver.).flac',
        cover: 'music/Ayase,初音ミク - 夜に駆ける(初音ミク ver.).flac.jpg'
    },
    {
        name: 'wowaka,初音ミク - アンノウン・マザーグース',
        url: 'music/wowaka,初音ミク - アンノウン・マザーグース.flac',
        cover: 'music/wowaka,初音ミク - アンノウン・マザーグース.flac.jpg'
    },
    {
        name: 'Ayase,初音ミク - 幽霊東京',
        url: 'music/Ayase,初音ミク - 幽霊東京.flac',
        cover: 'music/Ayase,初音ミク - 幽霊東京.flac.jpg'
    },
    {
        name: '初音ミク,米津玄師 - 砂の惑星',
        url: 'music/初音ミク,米津玄師 - 砂の惑星.flac',
        cover: 'music/初音ミク,米津玄師 - 砂の惑星.flac.jpg'
    },
    {
        name: 'DECO＊27,初音ミク - ヒバナ',
        url: 'music/DECO＊27,初音ミク - ヒバナ.flac',
        cover: 'music/DECO＊27,初音ミク - ヒバナ.flac.jpg'
    },
    {
        name: '眠,Lopu$ - Blame You',
        url: 'music/眠,Lopu$ - Blame You.mp3',
        cover: 'music/眠,Lopu$ - Blame You.mp3.jpg'
    },
    {
        name: 'Lopu$,眠,Aevv - Love Letter ＜3',
        url: 'music/Lopu$,眠,Aevv - Love Letter ＜3.mp3',
        cover: 'music/Lopu$,眠,Aevv - Love Letter ＜3.mp3.jpg'
    },
    {
        name: '煮ル果実,v flower - トラフィック・ジャム',
        url: 'music/煮ル果実,v flower - トラフィック・ジャム.mp3',
        cover: 'music/煮ル果実,v flower - トラフィック・ジャム.mp3.jpg'
    },
    {
        name: '鏡音リン,みきとP - ロキ',
        url: 'music/鏡音リン,みきとP - ロキ.mp3',
        cover: 'music/鏡音リン,みきとP - ロキ.mp3.jpg'
    },
    {
        name: 'Martin Garrix - Oops',
        url: 'music/Martin Garrix - Oops.mp3',
        cover: 'music/Martin Garrix - Oops.mp3.jpg'
    },
    {
        name: '99 - MOB CHOIR',
        url: 'music/99 - MOB CHOIR.m4a',
    },
    {
        name: '光るなら - Goose house',
        url: 'music/光るなら - Goose house.m4a',
        
    },
        {
        name: '花の塔 - さユり',
        url: 'music/花の塔 - さユり.m4a',
        
    },
        {
        name: 'ALIVE(LycoReco Version) - ClariS',
        url: 'music/ALIVE (LycoReco Version) - ClariS.m4a',
        
    },
    {
        name: '米津玄師 - WOODEN DOLL',
        url: 'music/米津玄師 - WOODEN DOLL.flac',
    },
    ]
});