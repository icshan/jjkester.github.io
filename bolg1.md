## 如何看待前端及web前端知识体系

	大约在几个礼拜前，看到winter老师在极客时间平台上出了一个教程，叫做重学前端教程，然后我突然有个想法，想整理下web前端开发需要的一些技术栈以及点点滴滴，颠覆前端开发者以及学习者的惯向思维，前端就是由html、css以及js组成的，其实学习前端，进阶前端要学习和应用的要比这个多得多。
	话不多说，跟着思维导图撸起来~

### 思维导图

所有的知识框架中，都有一个知识dom，都是以结构型来展示的，其实，web前端知识体系dom结构可能有人会分为其他种类，其实大同小异，有自己的知识体系结构，撸清楚，那就是自己的知识体系，如何组织，把什么知识和什么知识分类到一块，这个是一个真正需要我们去思考的，这里我参考了我的博客中，关注的自认为写的比较好的一个“王福朋”，后续我自己总结出来的，如图下

<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_01.png" width = "400" height = "260" alt="图片名称" 
align=center>

这个我们按照顺序往下看，按照顺序和大家解释一下：
<ol>
	<li>首先，理论知识是必须的，不然我们连整个体系都不知道，我们只知道画界面写交互这样的前端叫做coder，不叫工程师，身为工程师要有整个web站的理论知识以及开发语言的基本知识</li>
	<li>有了理论知识就能开始编码了，确实如此，但是现在不乏也有人来用框架来实现敏捷开发，这个咱就不纠结了</li>
	<li>有了这些理论知识，前端大牛就开始捣鼓库的开发来方便前端开发者的开发，我就问大家一个问题：vue、react、angular大家都会用其之一吧~哈哈，再不济，Jquery总要用
	</li>
	<li>最后，开发的目的是要用程序是要运行在相应的环境中，那么久有如何高效、稳定运行的道道了~</li>
</ol>






### 分类

一、理论知识  
                                                                                                                                
说到这，我先问问大家，小时候大家应该都看过武侠小说吧，这里我先致敬金庸老先生，至少教会了我很多武侠武术名称和人物，天下武功，要想练好，无非是练好内功与外功，咱们技术开发人员学习一门技术也是一样的，分外功和内功，如图所示。

<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_02.png" width = "400" height = "260" alt="图片名称" 
align=center>

**外功**：首先，就是要对http协议有一个深刻的了解，这个很重要，对于以后开发来言，有很重要的联系，后续文章中会有详细的剖析http协议，这里预防针，大家可以去看看《图解http》这本书，以及我们js、html、css的基本功了
                                                                                                                                           
**内功**：内功怎么说呢，没有这个有外功也能做出效果来，但是那不是最完美的程序，有了内功能让你更上一层楼，内功设计模式、面向对象、算法、数据结构等这些都是大学所学的，哈哈，大学没需要，工作中来慢慢还吧~   ps ：我就是这一类人

**PS**：这里我说说我对W3C标准以及HTTP协议的分类，如下图 

<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_03.png" width = "400" height = "260" alt="图片名称" 
align=center>
<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_03.png" width = "400" height = "260" alt="图片名称" 
align=center>

二、类库框架 
                                                                                                                                       
上面基本上是前端必备的理论知识了，那我们是否可以直接来做开发了，按照几年前来说是可以的，学习学习JQuery就可以上手开发了，但是前端技术这么活跃，大牛为我们前端打下的江山不是白来的，为我们做出的贡献很多.

那我们来看看有哪些框架以及库,如下图：

<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_05.png" width = "400" height = "260" alt="图片名称" 
align=center>

 这里我来解释下，js运行环境有两种，一种是浏览器中，一个是node服务端。这就是所谓的全局windows和global
 
    以上是我列举的一些常见的框架，其实在我学习当中还有很多大牛自己研发的框架，这里就不一一列举了
    
其次，我比较注重的一点，如果是对于初学者来说，一定要把jquery的源码阅读一遍，这个会给到自己一个很好的效果，因为jquery的设计思路非常的美妙，读懂以后，对以后自己编码有很大的提高。


三、编码开发 
                                                                                                                                   
编码开发也是开发中一块重要的地方，对开发工具的选择是对开发效率的一个很好的提高，下图我列举了一些我比较喜欢用的开发工具，以及模块化定义AMD和CMD的选择，提交版本的选择，在几年前，应该还有大部分使用svn的，现在应该大部分用的git。

开发好了，那么接下来就是大量的调试 debug，前端一遍推荐Chrome以及firebug这个看自己爱好了。

 <img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_06.png" width = "400" height = "260" alt="图片名称" 
align=center>

四、运行环境
      
上面已经说到了运行环境问题，分两种：浏览器以及node服务端。这里主要讲解浏览器端的

针对上线产品，不同产品有不同产品的需求，相应要兼容版本低的浏览器，这时候需要做浏览器的兼容性，例如css hack以及js hack。现在很多ToC的产品需要适配各个端的屏幕，pc、平板以及手机，这时候需要做响应式布局的打算。（其实，国内大部分适配手机都是有M站的，映射到M站的url有一套H5的前端样式）

在产品上线之前我们还必须要做web安全性以及性能优化，比如ToC产品暴露用户隐私或者被攻击这些都是要考虑的，性能优化也是提升用户量的一个重要因素，设想谁愿意在用一个产品的时候，翻阅一个页面加载漫长。哈哈，曾今我就遇到过，这个是不能忍受的。  

如下图：

<img src="https://github.com/icshan/jjkester.github.io/blob/master/image/blog1_07.png" width = "400" height = "260" alt="图片名称" 
align=center>


未完，待续  ~   持续更新

（脑子一热，就开始撸起来了，怎么说呢，想整合下前端知识点，这也算是自己的一个巩固吧，能学习到的万分荣欣，有异议，可以留言讨论讨论~PS：思维导图在我的github站点 https://github.com/icshan/jjkester.github.io/tree/master/image  欢迎下载）
