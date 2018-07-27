# position
1. position:static 静态定位|常规流定位|自然定位

| 作用 | 是元素定位于常规/自然流之中 | 
| -------- | -------- |
| 特点    | 1：忽略top,bottom,left,right或者z-index声明<br/>2：两个相领元元素如果都设置了外边距，那么外边距两者重叠|

2. position:relative 相对定位

|作用|使元素成为|
| -------- | -------- |
| 特点    | 1：可以使用bottom,left,right,top来进行相对定位（定位是相对与自己的常规流位置）<br/>2：相对定位的元素不会离开常规流<br>3：任何元素都可以设置relative，他的绝对定位后代可以相对于它进行绝对定位|

3.position:absolute 决定定位|使元素脱离常规流

|作用|使元素成为|
| -------- | -------- |
| 特点    | 1：脱离常规流<br/>2：设置尺寸要注意百分比是基于谁的-最近定位的祖先元素<br/>3：lrtb如果设置0，它将对齐最近定位祖先元素的个边（可以用此来居中）<br/>3：lrtb如果都设置auto，它将恢复到常规流<br/>4：z-index可以控制堆叠顺序|

4：position：fixed 固定定位

|作用|基本和绝对定位差不多|
| -------- | -------- |
|特点|1：继承absolute的特点<br/>2：固定定位元素不会随着视口的滚动二滚动|

5：position：sticky 磁贴定位|粘贴定位|吸附定位

|作用|relative+fixed的完美结合，制造出吸附效果|
| -------- | -------- |
|特点|1：如果产生偏移，原位置还是会在常规流中<br/>2：如果它最近祖先元素有有滚动，那么它的偏移标尺就是最近的祖先元素<br/>3：如果最近祖先元素每有滚动，那么它的偏移的标尺是视口|
# flex
flex弹性盒子布局
采用flex布局的元素，称为flex容器。他的所有子元素自动成为容器成员，称为flex项目（flex item）,简称“项目”

![Alt text](https://ws1.sinaimg.cn/large/6ca89370gy1fto7tbovnuj20fn099q3f.jpg) 
* 主轴（main axis）是沿着 flex 元素放置的方向延伸的轴（比如页面上的横向的行、纵向的列）。该轴的开始和结束被称为 main start 和 main end。
* 交叉轴（cross axis）是垂直于 flex 元素放置方向的轴。该轴的开始和结束被称为 cross start 和 cross end。
* 设置了 display: flex 的父元素（在本例中是 <section>）被称之为 flex 容器（flex container）。
* 在 flex 容器中表现为柔性的盒子的元素被称之为 flex 项（flex item）（本例中是 <article> 元素。

|属性|作用|属性值|
| -------- | -------- | -------- |
|flex-direction|决定主轴的方向|row（默认）、row-reverse、column、column-reverse|
|flex-wrap|如果一条周线排列不下，如何换行|nowwap(默认)、wrap（第一行在上方）、wrap-reverse（第一行在下方）|
|flex-flow|是flex-direction与flex-wrap的属性间歇形式|默认值：row nowwrap|
|justify-content|定义项目在主轴上的对齐方式|flex-start(默认值)：左对齐、flex-end：右对齐、center居中、space-between：两端对齐，项目间距相等、space-around：每个项目两侧的间隔相等|
|align-items|定义项目在交叉轴上如何对齐|flex-start：交叉轴的起点对齐、flex-end：交叉轴的终点对齐、center：交叉轴的终点对齐、baseline：项目的第一行文字的基线、stretch（默认值）：项目未设置高度或者auto，将占满整个容器的高度|
