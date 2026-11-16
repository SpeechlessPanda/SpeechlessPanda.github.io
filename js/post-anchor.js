/* 「项目收藏」的页内锚点（#proj-*）：目标条目常位于折叠的
   <details class="toggle"> 里，浏览器既不会自动展开也不会滚动过去，这里补上。
   只接管指向本页 #proj-* 的链接（相对或绝对 URL 都算），其余锚点保持主题原有行为。 */
;(function () {
  var OFFSET = 71 // 与导航栏高度对齐
  var PREFIX = '#proj-'
  var SETTLE_MS = 1500 // 字体、图片加载会改动上方高度，跳完这段时间内持续校准
  var pending = null // { target, until }

  function openAncestors(el) {
    var node = el
    while (node && node !== document.body) {
      if (node.tagName === 'DETAILS' && !node.open) node.open = true
      node = node.parentElement
    }
  }

  function align(target) {
    var top = target.getBoundingClientRect().top + window.pageYOffset - OFFSET
    window.scrollTo(0, top)
  }

  function tame() {
    // 用户自己动了滚动条就不再抢
    pending = null
  }

  function jump(hash) {
    if (!hash || hash.indexOf(PREFIX) !== 0) return false
    var id
    try {
      id = decodeURIComponent(hash.slice(1))
    } catch (e) {
      id = hash.slice(1)
    }
    var target = document.getElementById(id)
    if (!target) return false

    openAncestors(target)
    align(target)
    pending = { target: target, until: Date.now() + SETTLE_MS }
    requestAnimationFrame(tick)
    return true
  }

  function tick() {
    if (!pending) return
    if (Date.now() > pending.until) {
      pending = null
      return
    }
    align(pending.target)
    requestAnimationFrame(tick)
  }

  ;['wheel', 'touchstart', 'keydown'].forEach(function (evt) {
    window.addEventListener(evt, tame, { passive: true })
  })

  function normalizedPath(path) {
    return path.replace(/index\.html$/, '')
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    var link = e.target.closest && e.target.closest('a[href]')
    if (!link) return
    var url
    try {
      url = new URL(link.getAttribute('href'), window.location.href)
    } catch (err) {
      return
    }
    // 文首清单写的是绝对 URL（RSS 需要），本站预览时域名不同，同路径也按本页处理。
    var sameOrigin = url.origin === window.location.origin
    if (!sameOrigin && url.hash.indexOf(PREFIX) !== 0) return
    if (normalizedPath(url.pathname) !== normalizedPath(window.location.pathname)) return
    if (jump(url.hash)) {
      e.preventDefault()
      history.replaceState(null, '', url.hash)
    }
  })

  window.addEventListener('hashchange', function () {
    jump(window.location.hash)
  })
  document.addEventListener('pjax:complete', function () {
    if (window.location.hash) jump(window.location.hash)
  })

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (window.location.hash) jump(window.location.hash)
    })
  } else if (window.location.hash) {
    jump(window.location.hash)
  }
})()
