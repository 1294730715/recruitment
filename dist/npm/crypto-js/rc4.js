!function(e,r,i){"object"==typeof exports?module.exports=exports=r(require("./core.js"),require("./enc-base64.js"),require("./md5.js"),require("./evpkdf.js"),require("./cipher-core.js")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],r):r(e.CryptoJS)}(this,function(e){return function(){function r(){for(var e=this._S,r=this._i,i=this._j,t=0,o=0;o<4;o++){r=(r+1)%256,i=(i+e[r])%256;var s=e[r];e[r]=e[i],e[i]=s,t|=e[(e[r]+e[i])%256]<<24-8*o}return this._i=r,this._j=i,t}var i=e,t=i.lib,o=t.StreamCipher,s=i.algo,c=s.RC4=o.extend({_doReset:function(){for(var e=this._key,r=e.words,i=e.sigBytes,t=this._S=[],o=0;o<256;o++)t[o]=o;for(var o=0,s=0;o<256;o++){var c=o%i,n=r[c>>>2]>>>24-c%4*8&255;s=(s+t[o]+n)%256;var f=t[o];t[o]=t[s],t[s]=f}this._i=this._j=0},_doProcessBlock:function(e,i){e[i]^=r.call(this)},keySize:8,ivSize:0});i.RC4=o._createHelper(c);var n=s.RC4Drop=c.extend({cfg:c.cfg.extend({drop:192}),_doReset:function(){c._doReset.call(this);for(var e=this.cfg.drop;e>0;e--)r.call(this)}});i.RC4Drop=o._createHelper(n)}(),e.RC4});