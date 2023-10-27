# 引入对Express的支持
Express是一个中间件框架

# 跨域请求共享
Cross Origin Request Sharing
启用CORS时，让已知的外部位置能够访问我们网站上的受限操作。
站点不同，需要启用CORS来允许提交请求。
否则从Angular发出请求给Express，并不会返回任何东西。
首先，在Express项目中添加cors中间件。
`npm install cors @types/cors --save`
添加CORS支持

# 把请求 路由到 合适的请求处理程序
## 提供路由支持

# 使用MongoDB, 流行的Mongoose包
`npm install mongoose @types/mongoose --save-dev`

创建schema, 代表要保存到数据库中的对象。

Server类写代码 关联 路由和数据库
扩展构造函数
将Server改写为一个抽象类，添加一个AddRouting方法。
阻止任何人直接实例化服务器。