CSS:
```html
<style>
pre.terminal, pre.terminal code { background:#000; color:#fff; }
</style>
```

### 方法D: 直接 HTML を書く (確実・局所)
```html
<pre class="terminal" style="background:#000;color:#fff;padding:10px;"><code>git status
git log --oneline
</code></pre>
```

---

## 例 (推奨: 方法B)

```html
<style>
pre code.language-bash { background:#000; color:#fff; }
</style>
```

```bash
git log --oneline
git revert 1a2b3c4d
```

## 例 (クラス方式: 方法C)

```html
<style>
pre.terminal, pre.terminal code { background:#000; color:#fff; }
</style>
```

```bash {.terminal}
git revert <commit-hash>
```

## 例 (HTML 直書き: 方法D)

<pre class="terminal" style="background:#000;color:#fff;padding:10px;"><code>git revert -m 1 abcdef0
</code></pre>

// ...end