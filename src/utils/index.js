import theme from 'constants/index'

/**
 * 切换主题函数
 */
export const changeTheme = themeValue => {
  let links = document.querySelectorAll('link')
  let flag = true
  let reg = /\/static\/theme\/(.+)\//
  for (let i = 0, len = links.length; i < len; i++) {
    let href = links[i].href
    if (reg.test(href)) {
      flag = false
      links[i].href = href.replace(RegExp.$1, themeValue)
    }
  }
  if (flag) {
    let head = document.querySelector('head')
    for (let i = 0, len = theme.length; i < len; i++) {
      let href = `/static/theme/${themeValue}/${theme[i]}.css`
      let link = document.createElement('link')
      link.href = href
      link.rel = 'stylesheet'
      link.type = 'text/css'
      head.appendChild(link)
    }
  }
  localStorage.setItem('themeValue', themeValue)
}
