if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let o = {};
    const l = (e) => i(e, t),
      u = { module: { uri: t }, exports: o, require: l };
    s[t] = Promise.all(n.map((e) => u[e] || l(e))).then((e) => (r(...e), o));
  };
}
define(["./workbox-f3e6b16a"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "./assets/index-m2qoQfTy.css", revision: null },
        { url: "./assets/index-YvLXT7M5.js", revision: null },
        { url: "./assets/Rc-ZuERFJCN.js", revision: null },
        { url: "./assets/web-vitals-BptxjviT.js", revision: null },
        { url: "./index.html", revision: "191236e06b386c141ed6b3d4cb63a0fa" },
        { url: "./registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        { url: "./favicon.svg", revision: "2f580ef4a0c82db16f97a31b8d7d6f67" },
        { url: "./robots.txt", revision: "e232f8308190c040e3711172d401a8ac" },
        {
          url: "./manifest.webmanifest",
          revision: "49b5c2c0de825be91249b1ceb5374f04",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("./index.html"))
    );
});
