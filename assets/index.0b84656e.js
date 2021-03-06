import {initializeApp as u} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import {getAuth as p, onAuthStateChanged as m, GoogleAuthProvider as c, signInWithPopup as g} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
import {getDatabase as h, set as b, ref as d, get as y, child as w} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-database.js";
const v = function() {
    const o = document.createElement("link").relList;
    if (o && o.supports && o.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        n(e);
    new MutationObserver(e=>{
        for (const r of e)
            if (r.type === "childList")
                for (const a of r.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(e) {
        const r = {};
        return e.integrity && (r.integrity = e.integrity),
        e.referrerpolicy && (r.referrerPolicy = e.referrerpolicy),
        e.crossorigin === "use-credentials" ? r.credentials = "include" : e.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const r = s(e);
        fetch(e.href, r)
    }
};
v();
const L = {
    apiKey: "AIzaSyDTtWnHVEJNKdB5ZsQLDFX6C0srQCzsbwo",
    authDomain: "copy-transfer.firebaseapp.com",
    databaseURL: "https://copy-transfer-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "copy-transfer",
    storageBucket: "copy-transfer.appspot.com",
    messagingSenderId: "331430639763",
    appId: "1:331430639763:web:2286db44864a25529f3566"
}
  , S = u(L)
  , l = p()
  , f = h(S);
let i;
function j() {
    const t = new c;
    g(l, t).then(o=>{
        c.credentialFromResult(o).accessToken,
        o.user
    }
    ).catch(o=>{}
    )
}
document.querySelector("#sign").addEventListener("click", t=>{
    j()
}
);
m(l, t=>{
    t && (i = t.uid,
    console.log(t),
    document.querySelector("#name").innerHTML = t.email)
}
);
async function k() {
    b(d(f, "users/" + i), {
        text: await navigator.clipboard.readText()
    }),
    alert("pasted")
}
function A() {
    y(w(d(f), `users/${i}`)).then(t=>{
        if(t.exists()) {navigator.clipboard.writeText(t.val().text)} 
       
    }
    ).catch(t=>{
        alert("signin or check your connection")
    }
    )
}
document.querySelector("#copy").addEventListener("click", A);
document.querySelector("#paste").addEventListener("click", k);
