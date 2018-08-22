`https://tee1365.github.io/douban/build`

React数据获取为什么一定要在componentDidMount里面调用？
`https://segmentfault.com/q/1010000008133309`

使用svg图标时xlink:href需要写成xlinkHref

## 问题

1.  搜索页面无法重置  
    解决方法1：点击按钮强制刷新(部署到github pages后出错)
    解决方法2：通过react-router传入的props判断url是否改变，url改变清空state

2.  DetailsPage组件render两次，第一次state为空，第二次才能获取到数据  
    解决方法：设置一个flag判断是不是第二次刷新，第二次刷新时再渲染组件

3.  github pages预览出错
    解决方法：package里加homepage

4.  github pages 动态路由 刷新404
    没找到解决方法

5.  豆瓣禁止访问图片
    img标签内加上referrerPolicy="no-referrer"

## todo

1.  MovieItem 根据filter添加细节 -

2.  右下角返回顶部，返回上一页 -

3.  使用一种适合react的css
