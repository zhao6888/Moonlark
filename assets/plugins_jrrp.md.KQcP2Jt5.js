import{_ as a,c as s,o as i,a2 as e}from"./chunks/framework.Sicmpk4x.js";const g=JSON.parse('{"title":"Jrrp","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/jrrp.md","filePath":"plugins/jrrp.md"}'),t={name:"plugins/jrrp.md"},r=e('<h1 id="jrrp" tabindex="-1">Jrrp <a class="header-anchor" href="#jrrp" aria-label="Permalink to &quot;Jrrp&quot;">​</a></h1><blockquote><p>Import 包名: <code>src.plugins.nonebot_plugin_jrrp.jrrp</code></p></blockquote><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><h3 id="def-get-luck-value-user-id-str-int" tabindex="-1"><code>def get_luck_value(user_id: str) -&gt; int</code> <a class="header-anchor" href="#def-get-luck-value-user-id-str-int" aria-label="Permalink to &quot;`def get_luck_value(user_id: str) -&gt; int`&quot;">​</a></h3><p>获取指定用户的幸运值。</p><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><ul><li><code>user_id</code> (str): 用户 ID。</li></ul><h4 id="返回" tabindex="-1">返回 <a class="header-anchor" href="#返回" aria-label="Permalink to &quot;返回&quot;">​</a></h4><p>用户今日的人品值。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>对于所有人品值 <code>a</code>，<code>0 &lt;= a &lt;= 100</code>。</p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><h3 id="声明依赖" tabindex="-1">声明依赖 <a class="header-anchor" href="#声明依赖" aria-label="Permalink to &quot;声明依赖&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> nonebot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> require</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">require(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nonebot_plugin_jrrp&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="获取用户人品值" tabindex="-1">获取用户人品值 <a class="header-anchor" href="#获取用户人品值" aria-label="Permalink to &quot;获取用户人品值&quot;">​</a></h3><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> src.plugins.nonebot_plugin_jrrp.jrrp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_luck_value</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">jrrp </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> get_luck_value(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1234567890&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>',15),l=[r];function n(h,p,o,d,c,k){return i(),s("div",null,l)}const _=a(t,[["render",n]]);export{g as __pageData,_ as default};