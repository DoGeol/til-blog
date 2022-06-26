import{_ as e,r as o,o as c,c as l,a as n,e as t,w as p,F as r,b as s,d as i}from"./app.cfdec6ef.js";var u="/til-blog/assets/scope_01.f49269f8.png";const k={},d=n("h1",{id:"scope-\u1107\u116E\u110C\u1166-var-let-const",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#scope-\u1107\u116E\u110C\u1166-var-let-const","aria-hidden":"true"},"#"),s(" Scope (\uBD80\uC81C: var, let, const)")],-1),b=n("hr",null,null,-1),m=n("h1",{id:"\u1106\u1169\u11A8\u110E\u1161",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u1106\u1169\u11A8\u110E\u1161","aria-hidden":"true"},"#"),s(" \uBAA9\uCC28")],-1),h={class:"table-of-contents"},f=s("Scope\uB780?"),v=s("\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC804\uC5ED \uBCC0\uC218, \uBCC0\uC218\uB294 \uC5B4\uB5BB\uAC8C \uC624\uC5FC\uB418\uB098?"),_=s("1. var \uD0A4\uC6CC\uB4DC"),g=s("2. \uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504"),y=i('<h2 id="scope\u1105\u1161\u11AB" tabindex="-1"><a class="header-anchor" href="#scope\u1105\u1161\u11AB" aria-hidden="true">#</a> Scope\uB780?</h2><div class="custom-container tip"><p class="custom-container-title">Javascript\uC758 \uC2A4\uCF54\uD504 \uC694\uC57D</p><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC2A4\uCF54\uD504(scope)\uB780 \uBCC0\uC218\uB098 \uD568\uC218\uAC00 \uAC00\uC9C0\uB294 \uC720\uD6A8 \uBC94\uC704\uB97C \uB9D0\uD55C\uB2E4.</p></div><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC1C\uBC1C\uC744 \uC9C4\uD589\uD558\uB2E4\uBCF4\uBA74 <code>\uC804\uC5ED \uBCC0\uC218 \uC624\uC5FC</code>\uC774\uB77C\uB294 \uB9D0\uC744 \uC885\uC885 \uBCF4\uAC8C\uB420 \uAC83\uC774\uB2E4.<br> ES5\uB97C \uC0AC\uC6A9\uD558\uB358 \uC2DC\uC808\uC5D0\uB294 \uBCC0\uC218\uC758 \uC120\uC5B8 \uC704\uCE58\uB098 \uC120\uC5B8\uD558\uB294 \uBC29\uBC95\uC5D0 \uB530\uB77C \uAC12\uC774 \uB2EC\uB77C\uC9C0\uAE30 \uB54C\uBB38\uC5D0, \uBCC0\uC218\uAC00 \uC624\uC5FC\uB418\uC9C0 \uC54A\uB3C4\uB85D \uC2E0\uACBD\uC368\uC57C\uD588\uB2E4.</p><p>ES6\uB97C \uC0AC\uC6A9\uD558\uB294 \uD604\uC7AC, \uC2A4\uCF54\uD504\uC5D0 \uB300\uD55C \uAC1C\uB150\uC744 \uBAB0\uB77C\uB3C4 \uCF54\uB529\uD558\uB294 \uAC83\uC5D0 \uBB38\uC81C\uB294 \uC5C6\uC9C0\uB9CC, \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 \uD2B9\uC9D5\uC774\uAE30 \uB54C\uBB38\uC5D0 \uCF54\uB529\uC744 \uD558\uBA74\uC11C \uBC1C\uC0DD\uD558\uB294 \uBB38\uC81C\uB97C \uC774\uD574\uD558\uAE30 \uC704\uD574\uC11C\uB294 \uBC18\uB4DC\uC2DC \uD544\uC694\uD558\uACE0 \uC54C\uC544\uB46C\uC57C\uD558\uB294 \uAC1C\uB150\uC774\uB2E4.</p><p>\uB530\uB77C\uC11C, \uC774 \uAE00\uC758 \uB0B4\uC6A9\uC740 \uC2A4\uCF54\uD504\uC5D0 \uB300\uD574 \uACF5\uBD80\uD558\uACE0 \uC54C\uAC8C\uB41C \uAC83\uC744 \uC815\uB9AC\uD55C \uAC83\uC774\uB2E4.</p><h2 id="\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u110B\u1166\u1109\u1165-\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1107\u1167\u11AB\u1109\u116E-\u1107\u1167\u11AB\u1109\u116E\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110B\u1169\u110B\u1167\u11B7\u1103\u116C\u1102\u1161" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u110B\u1166\u1109\u1165-\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1107\u1167\u11AB\u1109\u116E-\u1107\u1167\u11AB\u1109\u116E\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110B\u1169\u110B\u1167\u11B7\u1103\u116C\u1102\u1161" aria-hidden="true">#</a> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC804\uC5ED \uBCC0\uC218, \uBCC0\uC218\uB294 \uC5B4\uB5BB\uAC8C \uC624\uC5FC\uB418\uB098?</h2><p>\uBCC0\uC218\uAC00 \uC624\uC5FC\uB418\uB294 \uAC00\uC7A5 \uC77C\uBC18\uC801\uC778 \uACBD\uC6B0\uB294 <em>\uBCC0\uC218\uBA85\uC774 \uB3D9\uC77C</em>\uD558\uC5EC <em>\uBCC0\uC218\uAC00 \uC7AC\uD560\uB2F9</em>\uB418\uB294 \uACBD\uC6B0\uC77C \uAC83\uC774\uB2E4.<br> \uC774\uC720\uB294 \uC5EC\uB7EC\uAC00\uC9C0\uAC00 \uC788\uC9C0\uB9CC <code>var \uD0A4\uC6CC\uB4DC</code>\uC640 <code>\uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</code> \uB54C\uBB38\uC5D0 \uBE48\uBC88\uD558\uAC8C \uC77C\uC5B4\uB09C\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.</p><h3 id="_1-var-\u110F\u1175\u110B\u116F\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_1-var-\u110F\u1175\u110B\u116F\u1103\u1173" aria-hidden="true">#</a> 1. var \uD0A4\uC6CC\uB4DC</h3><p>ES5\uC5D0\uC11C \uBCC0\uC218\uB97C \uC120\uC5B8\uD558\uB294 \uBC29\uBC95\uC740 <code>var</code> \uD0A4\uC6CC\uB4DC\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC720\uC77C\uD558\uB2E4.</p><blockquote><p>\u{1F4A1} \uBA3C\uC800, var\uB97C \uD1B5\uD55C \uBCC0\uC218 \uC120\uC5B8 \uACFC\uC815\uC5D0 \uB300\uD574\uC11C \uAC04\uB2E8\uD558\uAC8C \uC54C\uC544\uBCF4\uC790. (\uC774\uD6C4 \uB530\uB85C \uD3EC\uC2A4\uD305\uD558\uC5EC \uC790\uC138\uD788 \uC124\uBA85 \uC608\uC815)<br><img src="'+u+`"><br> var\uC758 \uBCC0\uC218 \uC120\uC5B8 \uACFC\uC815\uC740 3\uB2E8\uACC4\uB85C \uC9C4\uD589\uB418\uB294\uB370 \uC120\uC5B8, \uCD08\uAE30\uD654 \uB2E8\uACC4\uB294 \uB3D9\uC2DC\uC5D0 \uC9C4\uD589\uB418\uBA70, \uD560\uB2F9(3)\uC740 \uBCC0\uC218\uC5D0 \uD560\uB2F9\uB418\uB294 \uCF54\uB4DC\uC5D0 \uB3C4\uB2EC\uD558\uBA74 \uC774\uB8E8\uC5B4\uC9C4\uB2E4.</p></blockquote><p>\uC544\uB798\uB294 <code>var</code> \uD0A4\uC6CC\uB4DC\uB85C \uC120\uC5B8\uD55C \uBCC0\uC218\uC758 \uBB38\uC81C\uC810\uC774\uB2E4. <s>(\uC0AC\uC2E4 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 \uD2B9\uC9D5(\uC624\uB958)\uC774\uB77C\uACE0 \uBCF4\uB294 \uAC83\uC774 \uB354 \uC815\uD655\uD558\uB2E4)</s></p><table><thead><tr><th style="text-align:center;">\uBC88\uD638</th><th>\uC885\uB958</th><th style="text-align:left;">\uBB38\uC81C\uC810</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td>\uC911\uBCF5 \uC120\uC5B8 \uD5C8\uC6A9</td><td style="text-align:left;">\uC758\uB3C4\uD558\uC9C0 \uC54A\uC740 \uC7AC\uD560\uB2F9\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC74C</td></tr><tr><td style="text-align:center;">2</td><td>var \uD0A4\uC6CC\uB4DC \uC0DD\uB7B5 \uAC00\uB2A5</td><td style="text-align:left;">\uC758\uB3C4\uD558\uC9C0 \uC54A\uC740 \uBCC0\uC218\uC758 \uC804\uC5ED\uD654\uB098 \uC120\uC5B8, \uC7AC\uD560\uB2F9\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC74C</td></tr><tr><td style="text-align:center;">3</td><td>\uBCC0\uC218 \uD638\uC774\uC2A4\uD305</td><td style="text-align:left;">\uBCC0\uC218\uB97C \uC120\uC5B8\uD558\uAE30 \uC804\uC5D0 \uCC38\uC870\uAC00 \uAC00\uB2A5\uD558\uC5EC \uC120\uC5B8 \uC2DC\uC810\uC774 \uC560\uB9E4\uBAA8\uD638 \uD574\uC9C8 \uC218 \uC788\uC74C</td></tr></tbody></table><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u2460 undefined : \uBB38\uC81C\uC8103 - \uBCC0\uC218 \uD638\uC774\uC2A4\uD305</span>
name <span class="token operator">=</span> <span class="token string">&#39;capt&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u2461 capt : \uBB38\uC81C\uC8102 - var \uD0A4\uC6CC\uB4DC \uC0DD\uB7B5 \uAC00\uB2A5</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;iron_man&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;iron_man2&#39;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u2462 iron_man2 : \uBB38\uC81C\uC8101 - \uC911\uBCF5 \uC120\uC5B8 \uD5C8\uC6A9</span>
<span class="token punctuation">{</span>
  <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;hulk&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u2463 hulk</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><hr><p>\u2460 \uC5D0\uC11C \uC5D0\uB7EC\uAC00 \uC544\uB2CC undefined\uAC00 \uCF58\uC194\uC5D0 \uCC0D\uD788\uAC8C \uB418\uB294\uB370, \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294 \uC774\uC720\uB294 <code>\uD638\uC774\uC2A4\uD305</code> \uC774 \uBC1C\uC0DD\uD558\uC5EC \uC2A4\uCF54\uD504 \uCD5C\uC0C1\uB2E8\uC73C\uB85C <code>var name;</code>\uC774 \uB04C\uC5B4\uC62C\uB824\uC9C0\uAE30 \uB54C\uBB38\uC774\uB2E4.(\uC5C4\uBC00\uD788 \uB9D0\uD558\uBA74 global object\uC5D0 name\uC774 \uC120\uC5B8\uB418\uACE0 undefined\uB85C \uCD08\uAE30\uD654\uB418\uB294 \uAC83)</p><ul><li>[\uACB0\uB860] \uCF58\uC194\uC5D0\uC11C \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC544 \uBCC0\uC218\uAC00 \uC120\uC5B8\uB41C \uAC83\uC744 \uD30C\uC545\uD558\uAE30 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uB2E4.</li></ul><hr><p>\u2461 \uC5D0\uC11C capt\uB294 \uC774\uBBF8 \uD638\uC774\uC2A4\uD305\uC73C\uB85C \uC778\uD574 name \uBCC0\uC218\uAC00 \uC120\uC5B8, \uCD08\uAE30\uD654\uAC00 \uB418\uC5B4\uC788\uC5B4 \uD560\uB2F9\uB418\uC5C8\uB2E4\uACE0\uB3C4 \uBCFC \uC218 \uC788\uC9C0\uB9CC, \uC2E4\uC81C\uB85C\uB294 \uBB38\uC81C\uC8102\uC758 \uC774\uC720\uB85C \uC0DD\uB7B5\uD558\uC5EC\uB3C4 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294\uB2E4.</p><ul><li>[\uACB0\uB860] \uC774\uC804\uC5D0 \uBCC0\uC218\uAC00 \uC120\uC5B8\uB418\uC5C8\uB294\uC9C0 \uD30C\uC545\uD558\uAE30 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC774 \uBC1C\uC0DD \uD560 \uC218 \uC788\uC74C</li></ul><hr><p>\u2462 \uC5D0\uC11C\uB294 var name\uC774 \uC120\uC5B8\uB418\uC5B4\uC788\uC9C0\uB9CC, \uB2E4\uC2DC \uC120\uC5B8\uD558\uC5EC\uB3C4 \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uB294 \uAC83\uC744 \uD655\uC778 \uD560 \uC218 \uC788\uB2E4.</p><ul><li>[\uACB0\uB860] \uC774\uC804\uC5D0 \uBCC0\uC218\uAC00 \uC120\uC5B8\uB418\uC5C8\uB294\uC9C0 \uD30C\uC545\uD558\uAE30 \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC774 \uBC1C\uC0DD \uD560 \uC218 \uC788\uC74C</li></ul><hr><p>\u2463 \uC740 \uB2E4\uC74C\uC73C\uB85C \uC124\uBA85\uD560 <code>\uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</code>\uC758 \uB0B4\uC6A9\uC774\uB2E4.</p><ul><li>[\uACB0\uB860] \uCF54\uB4DC\uC5D0\uC11C\uB294 \uBE14\uB85D \uB808\uBCA8 \uC2A4\uCF54\uD504\uB97C \uB098\uD0C0\uB0B4\uB294\uB370, \uBE14\uB85D \uB808\uBCA8\uC5D0\uC11C\uB294 \uC804\uC5ED\uC73C\uB85C \uC120\uC5B8\uB418\uC5B4, name \uBCC0\uC218\uC5D0 \uC7AC\uD560\uB2F9 \uB418\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uB2E4.</li></ul><hr><p>\uB530\uC9C0\uACE0\uBCF4\uBA74 <strong>&quot;\uBCC0\uC218\uBA85\uC774 \uB3D9\uC77C\uD558\uC9C0 \uC54A\uAC8C \uC798 \uAC1C\uBC1C\uD558\uBA74 \uB418\uB294\uAC70 \uC544\uB2CC\uAC00?&quot;</strong> \uB77C\uACE0 \uC0DD\uAC01\uD574\uBCFC\uC218 \uC788\uC9C0\uB9CC, \uC810\uC810 \uB298\uC5B4\uB098\uB294 \uCF54\uB4DC\uB77C\uC778\uACFC \uC720\uC9C0\uBCF4\uC218\uC640 \uAD00\uB9AC\uB97C \uC704\uD574 \uD30C\uC77C\uC744 \uBD84\uB9AC\uD558\uB2E4\uBCF4\uBA74 \uBCC0\uC218\uBA85\uC774 \uACB9\uCE58\uB294 \uACBD\uC6B0\uB294 \uB192\uC740 \uD655\uB960\uB85C \uBC1C\uC0DD\uD560 \uC218 \uC788\uB2E4.</p><p>\uC774\uC678\uC5D0\uB3C4 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 <em>\uBCC0\uC218 \uC120\uC5B8</em>\uC740 \uB2E4\uB978 \uC5B8\uC5B4\uC640\uB294 \uB2E4\uB974\uAC8C \uD0C0\uC785(type)\uC744 \uBD80\uC5EC\uD558\uC9C0 \uC54A\uACE0 \uC720\uC5F0\uD558\uAC8C \uD0C0\uC785\uC774 \uBD80\uC5EC\uB418\uB294 \uB4F1\uC758 \uD2B9\uC9D5\uC774\uBA74\uC11C \uBB38\uC81C\uC810\uC774 \uC788\uB2E4. \uC774\uB7F0 \uC720\uC5F0\uD568\uC740 \uC7A5\uC810\uC774\uAE30\uB3C4 \uD558\uC9C0\uB9CC, \uC624\uB958\uAC00 \uBC1C\uC0DD\uD558\uAE30 \uC27D\uAC8C \uB9CC\uB4E4\uAE30 \uB54C\uBB38\uC5D0 \uC8FC\uC758\uD574\uC57C\uD55C\uB2E4.</p><h3 id="_2-\u1112\u1161\u11B7\u1109\u116E-\u1105\u1166\u1107\u1166\u11AF-\u1109\u1173\u110F\u1169\u1111\u1173" tabindex="-1"><a class="header-anchor" href="#_2-\u1112\u1161\u11B7\u1109\u116E-\u1105\u1166\u1107\u1166\u11AF-\u1109\u1173\u110F\u1169\u1111\u1173" aria-hidden="true">#</a> 2. \uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// testComponent.js - html\uC5D0 import</span>
<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
  window<span class="token punctuation">.</span>components <span class="token operator">=</span> window<span class="token punctuation">.</span>components <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">var</span> <span class="token constant">COMPONENT_NAME</span> <span class="token operator">=</span> <span class="token string">&#39;test&#39;</span>
  
  <span class="token keyword">var</span> <span class="token function-variable function">component</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">containerClass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> defaultPrarms <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">isApiDone</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> defaultPrarms<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> $container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>containerClass<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>$container<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  component<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">setElement</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  window<span class="token punctuation">.</span>components<span class="token punctuation">[</span><span class="token constant">COMPONENT_NAME</span><span class="token punctuation">]</span> <span class="token operator">=</span> component<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// app.js</span>
window<span class="token punctuation">.</span>components<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token string">&#39;.app_container&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\uC704\uC758 \uCF54\uB4DC\uB294 ES5\uB97C \uC0AC\uC6A9\uD558\uBA70 \uAC1C\uBC1C\uD558\uB358 \uC2DC\uC808\uC5D0 \uC2E4\uC81C\uB85C \uC0AC\uC6A9\uD558\uB358 \uCF54\uB4DC\uC758 \uC608\uC2DC\uC774\uB2E4. \uCF54\uB4DC\uB97C \uBCF4\uBA74 <code>component</code>\uB77C\uB294 \uD568\uC218\uB97C \uC120\uC5B8\uD558\uACE0 defaultParams\uB77C\uB294 \uAC1D\uCCB4 \uBCC0\uC218\uB97C \uC120\uC5B8\uD588\uB2E4.</p><p>\uB2F9\uC2DC \uAC1C\uBC1C\uD558\uBA74\uC11C \uD06C\uAC8C \uC758\uBB38\uC744 \uAC16\uC9C0\uC54A\uACE0 \uCEE8\uBCA4\uC158\uC5D0 \uB9DE\uCDB0 \uAC1C\uBC1C\uC744 \uC9C4\uD589\uD588\uC9C0\uB9CC, \uC2A4\uCF54\uD504 \uAC1C\uB150\uC744 \uC54C\uAC8C\uB418\uBA74\uC11C \uD574\uB2F9 \uBC29\uBC95\uC774 <code>\uC804\uC5ED \uBCC0\uC218</code>\uB85C \uC778\uD55C \uBCC0\uC218 \uC624\uC5FC \uBC29\uC9C0\uB97C \uC704\uD574 \uD568\uC218\uB97C \uC120\uC5B8\uD55C \uAC83\uC744 \uC54C \uC218 \uC788\uC5C8\uB2E4.</p><p>\uADF8\uB807\uB2E4\uBA74 \uC65C \uD568\uC218\uB97C \uC120\uC5B8\uD558\uACE0 \uADF8 \uC548\uC5D0\uC11C \uBCC0\uC218\uB97C \uC120\uC5B8\uD55C \uAC83\uC77C\uAE4C?</p><table><thead><tr><th>\uC885\uB958</th><th style="text-align:left;">\uD2B9\uC9D5</th><th>\uC608\uC2DC</th></tr></thead><tbody><tr><td>\uBE14\uB85D \uB808\uBCA8 \uC2A4\uCF54\uD504</td><td style="text-align:left;">\uCF54\uB4DC \uBE14\uB85D \uB0B4\uC5D0\uC11C \uC120\uC5B8\uB41C \uBCC0\uC218\uB294 \uBE14\uB85D \uB0B4\uC5D0\uC11C\uB9CC \uC720\uD6A8\uD558\uB2E4. \uBE14\uB85D \uC678\uBD80\uC5D0\uC11C\uB294 \uCC38\uC870\uD560 \uC218 \uC5C6\uB2E4.</td><td>if, switch, for, while \uB4F1</td></tr><tr><td>\uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</td><td style="text-align:left;">\uD568\uC218 \uB0B4\uC5D0\uC11C \uC120\uC5B8\uB41C \uBCC0\uC218\uB294 \uD568\uC218 \uB0B4\uC5D0\uC11C\uB9CC \uC720\uD6A8\uD558\uBA70, \uD568\uC218 \uC678\uBD80\uC5D0\uC11C\uB294 \uCC38\uC870\uD560 \uC218 \uC5C6\uB2E4.</td><td>function</td></tr></tbody></table><p>\uC2A4\uCF54\uD504\uB294 \uBCF4\uD1B5 2\uAC00\uC9C0\uAC00 \uC788\uB294\uB370, \uB300\uBD80\uBD84\uC758 \uACBD\uC6B0 <code>\uBE14\uB85D(block) \uB808\uBCA8 \uC2A4\uCF54\uD504</code>\uB97C \uB530\uB974\uC9C0\uB9CC, \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 <code>\uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504</code>\uB97C \uB530\uB978\uB2E4.<br> \uC704\uC758 \uC124\uBA85\uB300\uB85C \uD568\uC218 \uB808\uBCA8 \uC2A4\uCF54\uD504\uC5D0\uC11C\uB294 \uD568\uC218 \uB0B4\uC5D0 \uC120\uC5B8\uB41C \uBCC0\uC218\uB97C \uC678\uBD80\uC5D0\uC11C \uCC38\uC870\uD560 \uC218 \uC5C6\uAE30 \uB54C\uBB38\uC5D0 <code>defaultParams</code> \uBCC0\uC218\uB97C \uB2E4\uB978\uACF3\uC5D0\uC11C \uC120\uC5B8\uD574\uB3C4 <strong>test \uCEF4\uD3EC\uB10C\uD2B8</strong>\uC758 defaultParams \uBCC0\uC218\uAC00 \uC601\uD5A5\uC744 \uBC1B\uC544 \uC624\uC5FC\uB420 \uC5FC\uB824\uB97C \uD558\uC9C0 \uC54A\uC544\uB3C4 \uB41C\uB2E4.</p>`,35);function w(x,E){const a=o("RouterLink");return c(),l(r,null,[d,b,m,n("nav",h,[n("ul",null,[n("li",null,[t(a,{to:"#scope\u1105\u1161\u11AB"},{default:p(()=>[f]),_:1})]),n("li",null,[t(a,{to:"#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u110B\u1166\u1109\u1165-\u110C\u1165\u11AB\u110B\u1167\u11A8-\u1107\u1167\u11AB\u1109\u116E-\u1107\u1167\u11AB\u1109\u116E\u1102\u1173\u11AB-\u110B\u1165\u1104\u1165\u11C2\u1100\u1166-\u110B\u1169\u110B\u1167\u11B7\u1103\u116C\u1102\u1161"},{default:p(()=>[v]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#_1-var-\u110F\u1175\u110B\u116F\u1103\u1173"},{default:p(()=>[_]),_:1})]),n("li",null,[t(a,{to:"#_2-\u1112\u1161\u11B7\u1109\u116E-\u1105\u1166\u1107\u1166\u11AF-\u1109\u1173\u110F\u1169\u1111\u1173"},{default:p(()=>[g]),_:1})])])])])]),y],64)}var N=e(k,[["render",w],["__file","scope.html.vue"]]);export{N as default};
