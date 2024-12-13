System.register("chunks:///_virtual/de.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"6197aUO+f5HMKbZZvveQOYc","de",void 0);var a=window,t=e("languages",{load:{txt:"Spielbare Anzeigen werden geladen..."},guide:{txt:"Halten Sie die Taste gedrückt,\num das Auto zu verlangsamen"},btn:{stop:"VERLANG\nSAMEN",again:"Nochmal\nversuchen",down:"Herunterladen"}});a.languages||(a.languages={}),a.languages.de=t,n._RF.pop()}}}));

System.register("chunks:///_virtual/en.ts",["cc"],(function(n){var a;return{setters:[function(n){a=n.cclegacy}],execute:function(){a._RF.push({},"1c9a1YfXVpAcLVqhQgX6fdR","en",void 0);var e=window,t=n("languages",{load:{txt:"Loading playable ads..."},guide:{txt:"Press and hold the button\nto slow down the car."},btn:{stop:"Slow down",again:"Try Again",down:"Download"}});e.languages||(e.languages={}),e.languages.en=t,a._RF.pop()}}}));

System.register("chunks:///_virtual/fr.ts",["cc"],(function(e){var n;return{setters:[function(e){n=e.cclegacy}],execute:function(){n._RF.push({},"ad680A5WIBMTYaR8iTSxjvA","fr",void 0);var a=window,t=e("languages",{load:{txt:"Chargement des annonces jouables..."},guide:{txt:"Appuyez longuement sur le bouton\npour ralentir la voiture"},btn:{stop:"Ralentir",again:"Réessaye",down:"Télécharger"}});a.languages||(a.languages={}),a.languages.fr=t,n._RF.pop()}}}));

System.register("chunks:///_virtual/jp.ts",["cc"],(function(t){var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"a5f8cssug5DY6HiUgytY75f","jp",void 0);var a=window,e=t("languages",{load:{txt:"再生可能な広告を読み込んでいます..."},guide:{txt:"ボタンを長押しして、\n車を減速させます"},btn:{stop:"減速",again:"再試行",down:"ダウンロード"}});a.languages||(a.languages={}),a.languages.jp=e,n._RF.pop()}}}));

System.register("chunks:///_virtual/kr.ts",["cc"],(function(n){var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"f5c767HPcRHUZY/HIqzF03x","kr",void 0);var a=window,e=n("languages",{load:{txt:"플레이어블 광고 로드 중..."},guide:{txt:"버튼을 길게 눌러 차량의\n속도를 줄이세요."},btn:{stop:"감속하다",again:"다시 시도",down:"다운로드하다"}});a.languages||(a.languages={}),a.languages.kr=e,t._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./de.ts","./en.ts","./fr.ts","./jp.ts","./kr.ts","./zh.ts","./zh_tw.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/zh_tw.ts",["cc"],(function(t){var n;return{setters:[function(t){n=t.cclegacy}],execute:function(){n._RF.push({},"421b8WzhspO95hWIqGyBnW7","zh_tw",void 0);var a=window,e=t("languages",{load:{txt:"正在加載可播放廣告..."},guide:{txt:"長按按鈕，\n使汽車減速"},btn:{stop:"減速",again:"再試一次",down:"下載"}});a.languages||(a.languages={}),a.languages.zh_tw=e,n._RF.pop()}}}));

System.register("chunks:///_virtual/zh.ts",["cc"],(function(n){var t;return{setters:[function(n){t=n.cclegacy}],execute:function(){t._RF.push({},"211dek6ZydPWLvWNUGdqhn0","zh",void 0);var e=window,a=n("languages",{load:{txt:"正在加载可播放广告..."},guide:{txt:"长按按钮\n为汽车减速"},btn:{stop:"减速",again:"再试一遍",down:"下载"}});e.languages||(e.languages={}),e.languages.zh=a,t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});