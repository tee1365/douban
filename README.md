`https://tee1365.github.io/douban/build`

React 数据获取为什么一定要在 componentDidMount 里面调用？
`https://segmentfault.com/q/1010000008133309`

this.setState 是异步操作，不会立即更新，如果想更新完毕后执行可以写在后面的回调函数里

使用 svg 图标时 xlink:href 需要写成 xlinkHref

可以用`<React.Fragment></React.Fragment>`来代替`<div></div>`

使用在设置 keys 时用 id 代替 index

把 navbar 中的 link 改为 navlink，有默认的选中样式

## 问题

1. 搜索页面无法重置  
   解决方法 1：点击按钮强制刷新(部署到 github pages 后出错)
   解决方法 2：通过 react-router 传入的 props 判断 url 是否改变，url 改变清空 state

2. DetailsPage 组件 render 两次，第一次 state 为空，第二次才能获取到数据  
   解决方法：设置一个 flag 判断是不是第二次刷新，第二次刷新时再渲染组件

3. github pages 预览出错
   解决方法：package 里加 homepage

4. github pages 动态路由 刷新 404
   没找到解决方法

5. 豆瓣禁止访问图片
   img 标签内加上 referrerPolicy="no-referrer"

## todo

1. MovieItem 根据 filter 添加细节 -

2. 右下角返回顶部，返回上一页 -

   使用一种适合 react 的 css(现在 import css 的方法是 create-react-app 自带的) -

3. 有的导演或演员不存在页面，取消蓝色导航

test