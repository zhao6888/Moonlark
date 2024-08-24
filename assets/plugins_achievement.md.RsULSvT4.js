import{_ as e,c as a,o as i,a2 as t}from"./chunks/framework.Sicmpk4x.js";const g=JSON.parse('{"title":"Achievement","description":"","frontmatter":{},"headers":[],"relativePath":"plugins/achievement.md","filePath":"plugins/achievement.md"}'),o={name:"plugins/achievement.md"},n=t('<h1 id="achievement" tabindex="-1">Achievement <a class="header-anchor" href="#achievement" aria-label="Permalink to &quot;Achievement&quot;">​</a></h1><blockquote><p>Import 位置: <code>src.plugins.nonebot_plugin_achievement</code></p></blockquote><div class="tip custom-block"><p class="custom-block-title">成就ID</p><p>每个成就都有一个唯一的 ID，是一个 <a href="https://github.com/Moonlark-Dev/Moonlark/blob/main/src/plugins/nonebot_plugin_item/registry/registry.py#L8" target="_blank" rel="noreferrer"><code>ResourceLocation</code></a> 对象。</p></div><h2 id="成就注册" tabindex="-1">成就注册 <a class="header-anchor" href="#成就注册" aria-label="Permalink to &quot;成就注册&quot;">​</a></h2><p>成就文件为 <a href="https://github.com/Moonlark-Dev/Moonlark/tree/main/src/plugins/nonebot_plugin_achievement/achievements" target="_blank" rel="noreferrer"><code>src/plugins/nonebot_plugin_achievement/achievements/&lt;namespace&gt;.json</code></a>，其中 <code>&lt;namespace&gt;</code> 为成就的命名空间，一般与成就所在的插件名一致。</p><h3 id="结构" tabindex="-1">结构 <a class="header-anchor" href="#结构" aria-label="Permalink to &quot;结构&quot;">​</a></h3><ul><li><code>lang</code>: 插件本地化信息 <ul><li><code>plugin</code>: 本地化插件名</li><li><code>key</code>: 成就本地化基键（即二级键名）</li></ul></li><li><code>achievements</code>: 成就表</li></ul><h4 id="成就表" tabindex="-1">成就表 <a class="header-anchor" href="#成就表" aria-label="Permalink to &quot;成就表&quot;">​</a></h4><p>成就表使用 <code>key-value</code> 对应，键为成就的 <code>path</code>，值为成就的信息，结构如下：</p><ul><li><code>required_unlock_count</code>: 需要解锁次数（请求解锁指定次数后成就才算达成）</li><li><code>awards</code>: 奖励表（为 <a href="https://github.com/Moonlark-Dev/Moonlark/blob/main/src/plugins/nonebot_plugin_item/types.py#L5" target="_blank" rel="noreferrer"><code>list[DictItemData]</code></a>）</li></ul><h3 id="本地化" tabindex="-1">本地化 <a class="header-anchor" href="#本地化" aria-label="Permalink to &quot;本地化&quot;">​</a></h3><p>成就的名称需要本地化，同命名空间所有成就的标题都在同一个二级键下。与 <code>lang</code> 的配置对应为：<code>&lt;plugin&gt;.&lt;key&gt;.&lt;成就path&gt;</code></p><h2 id="请求解锁" tabindex="-1">请求解锁 <a class="header-anchor" href="#请求解锁" aria-label="Permalink to &quot;请求解锁&quot;">​</a></h2><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> unlock_achievement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(id_: ResourceLocation, user_id: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, count: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><code>id_</code>: 成就的ID</li><li><code>user_id</code>: 解锁成就的用户</li><li><code>count</code>: 请求解锁的次数</li></ul><h3 id="解锁次数" tabindex="-1">解锁次数 <a class="header-anchor" href="#解锁次数" aria-label="Permalink to &quot;解锁次数&quot;">​</a></h3><p>对于部分需要多次挑战累加才能解锁的成就可以使用“解锁次数”，在调用 <code>unlock_achievement</code> 时会累加 <code>count</code> 参数，如果总数大于等于 <code>required_unlock_count</code> 的值，成就就会真正被解锁。</p>',18),s=[n];function l(c,r,h,d,p,u){return i(),a("div",null,s)}const m=e(o,[["render",l]]);export{g as __pageData,m as default};
