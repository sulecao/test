```
$ cnpm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
```

html的class 写出className



![1585485710485](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\1585485710485.png)

![1585486686220](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\1585486686220.png)

![1585486781507](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\1585486781507.png)

修改数据用setState,直接修改state不会重新渲染

![1585488906606](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\1585488906606.png)

父传子

props

子传父

调用父传子的函数



列表渲染

![1585582298073](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\1585582298073.png)

生命周期



事件

在 React 中另一个不同点是你不能通过返回 `false` 的方式阻止默认行为。你必须显式的使用 `preventDefault` 。





插槽









路由

- react-router：提供了router的核心api。如Router、Route、Switch等，但没有提供有关dom操作进行路由跳转的api；
- react-router-dom：提供了BrowserRouter、Route、Link等api，可以通过dom操作触发事件控制路由。

那么我们要怎么用呢？
首先，react-router-dom里包含了react-router的依赖，因此我们在安装的时候只需要安装后者即可。

```
npm install react-router-dom --save
```



redux

```undefined
npm install --save react-redux
npm install --save redux
```







## **React插槽**

组建中写入内容，这些内容可以被识别和控制。React需要自己开发支持插槽功能。

 

原理：

组件中写入的HTML，可以传入到props中。

 

组件中的HTML内容直接全部插入



 

 

组件中根据HTML内容的不同，插入的位置不同。



 

 

 

## **React 路由**

根据不同的路径，显示不同的组件（内容）；React使用的库react-router-dom;

 

安装



 

 

ReactRouter三大组件：

Router：所有路由组件的根组件（底层组件），包裹路由规则的最外层容器。

属性：basename->设置跟此路由根路径，router可以在1个组件中写多个。

Route:路由规则匹配组件，显示当前规则对应的组件

Link:路由跳转的组件

 

 

注意：如果要精确匹配，那么可以在route上设置exact属性。

 

 

Router使用案例



 

 

Link组件可以设置to属性来进行页面的跳转，to属性可以直接写路径的字符串，也可以通过1个对象，进行路径的设置，如



 

Link的replace属性：点击链接后，将新地址替换成历史访问记录的原地址。

 

动态路由实现：



 

## **重定向组件**

如果访问某个组件时，如果有重定向组件，那么就会修改页面路径，使得页面内容显示为所定向路径的内容

 

用例：



 

 

## **Switch组件**

让switch组件内容的route只匹配1个，只要匹配到了，剩余的路由规则将不再匹配

 



 

 

## **Redux** 

Store:数据仓库，保存数据的地方。

State:state是1个对象，数据仓库里的所有数据都放到1个state里。

Action:1个动作，触发数据改变的方法。

Dispatch:将动作触发成方法

Reducer:是1个函数，通过获取动作，改变数据，生成1个新state。从而改变页面

安装





初始化数据
获取数据



 

修改数据（通过动作修改数据）



 

修改视图（监听数据的变化，重新渲染内容）



 

## **React-redux**

安装



 cnpm install react-redux --save

概念：

Provider组件：自动的将store里的state和组件进行关联。

MapStatetoProps：这个函数用于将store的state映射到组件的里props

mapdispatchToProps:将store中的dispatch映射到组件的props里，实现了方法的共享。

Connect方法：将组件和数据（方法）进行连接

 

使用：

初始化数据，实例化store



 

数据的获取，数据的修改

要state映射到到组件的props中，将修改数据的方法映射到组件的props中



 

 