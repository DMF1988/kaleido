# kaleido
为系统化地学习一整套web单页应用的设计、构建、开发、发布相关技术而创建的这个项目，这个项目将从数据库的设计开始一直到上线发布涵盖完整的项目周期。项目的业务目标定义为个人图片管理、分享工具类似于QQ空间，可以通过这个web app上传自己的照片，写下自己的心情并分享给好友。

1、数据采用MySQL6。
==================
2、后端构建工具及技术栈。
=======================
    2.1、采用SpringMVC作为web框架。
    2.2、ORM框架选用了Mybatis。
    2.3、maven为后端项目提供包管理以及构建服务。
3、前端构建工具及技术栈。
=======================
    3.1、安装node，已安装请跳过。
    3.2、npm install -g bower全局安装bower以便使用bower命令，已安装请跳过。
    3.3、npm install -g grunt-cli全局安装grunt cli模块以便使用grunt命令，已安装请跳过。
    3.4、npm install安装package.json中定义的node模块到本地。
    3.5、bower install安装bower.json中定义的js、css库到本地。
    3.6、grunt serve命令启动web服务，服务启用了livereload配置，对LESS、html、js的修改不用按F5刷新即可呈现，如果想要关闭这个特性请在Gruntfile.js文件中进行配置。
    3.7、grunt test命令将对项目进行测试(暂缺)。
    3.8、grunt build命令对项目进行打包，打包项目包括删除临时文件,编译LESS,合并压缩重命名js、html、css等，默认打包目录为dist。