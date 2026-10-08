/* ============================================================
   SITE_CONFIG — サイトの編集用設定（コード知識は不要です）
   ------------------------------------------------------------
   ● 公式LINEのURLを変えたいとき
       下の lineUrl の "https://..." の部分を書き換えて保存するだけ。
       ページ内の「LINEで予約」「LINEで相談」などのボタンに自動反映されます。
   ● GitHub 上でこのファイルを開いて編集 → 保存すれば、
       数分後に自動でサイトに反映されます（コード編集ツールは不要）。
   ============================================================ */
window.SITE_CONFIG = {
  // 公式LINE 友だち追加URL（ここを書き換えるだけでOK）
  lineUrl: "https://lin.ee/on5wj3I",
};

/* ------------------------------------------------------------
   ↓ ここから下は触らなくて大丈夫です。
     上の設定を、ページ内の該当ボタンに反映する処理です。
   ------------------------------------------------------------ */
(function () {
  var cfg = window.SITE_CONFIG || {};
  function apply() {
    if (cfg.lineUrl) {
      document.querySelectorAll('[data-link="line"]').forEach(function (a) {
        a.setAttribute("href", cfg.lineUrl);
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
