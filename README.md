<!--
 * @Author: httishere
 * @Date: 2021-08-13 11:29:16
 * @LastEditTime: 2022-08-26 15:38:30
 * @LastEditors: TinaHuang0183 
 * @Description: In User Settings Edit
 * @FilePath: /notion/README.md
-->
# [notion-widget](http://httishere.gitee.io/notion/)

## Features

-- 2022/08 v1.2.1 --

- [ ] 个性名片
- [x] 日历（多样式
- [x] 番茄钟
- [x] 圆盘时钟

-- 2022/04/03 v1.2.0 --

- [x] 周开始选择（周一/周日）
  - [x] blue week
  - [x] calendar
  - [x] 选择周
- [ ] 参数加密（便于参数解密以及中文支持）
- [x] 时钟样式
- [ ] 中文转译拼接
- [ ] 自定义颜色 / 自定义背景
- [ ] 自适应暗黑模式
- [ ] 加载速度
- [x] 图床问题 （临时放在github上）
- [x] 官方调整暗黑颜色

## Demos

- 倒计时&进度条：[DEMO](http://httishere.gitee.io/notion/progress.html)

- 简易日期倒计时：[DEMO](http://httishere.gitee.io/notion/days-matter.html)
  - 自定义目标日期和目标日名称，url参数：day（目标日期），name（目标日名称）

- 引用块（多风格）：
  - 乳白色字体：适合短分案，大字体，标题等，[DEMO](http://httishere.gitee.io/notion/quote.html?text=test)
    - 自定义文案内容，url参数：text（文案内容）

  - 边框阴影文案：适合繁体和英文文案，中等字体，该字体无法识别部分简体字，[DEMO](http://httishere.gitee.io/notion/quote2.html?text=test)
    - 自定义文案内容，url参数：text（文案内容）

  - 细文字：适合繁体和英文文案，中等字体，该字体无法识别部分简体字，[DEMO](http://httishere.gitee.io/notion/quote3.html?text=test)
    - 自定义文案内容，url参数：text（文案内容）

  - 可爱英文手写体：仅适用于英文，[DEMO](http://httishere.gitee.io/notion/quote-EN.html?text=test)
    - 自定义文案内容，url参数：text（文案内容）

- 日历
  - 范围日历：显示所给范围的日历内容，需要给定开始时间和结束时间（**目前仅支持当前月**）。
  - 当前日历：显示当前时间的月份日期定位。

- 天气组件：目前固定杭州天气，来源[weatherwidget](weatherwidget.io)。