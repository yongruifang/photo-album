# Photoalbum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# 创建应用程序
`npm install -g @angular/cli`
创建本项目
`ng new photoalbum --style scss --prefix pa`
接受默认的安装配置，一路回车
> SCSS为使用样式混入等提供了丰富的语法
启动Angular服务器，监视文件是否发生变化
`ng serve --open`
端口4200，显示默认Angular示例页面
![界面](./src/assets/ui-init.png)
# 安装Angular Material
```bash
ng add @angular/material @angular/cdk @angular/animation @angular/flex-layout
```

# 创建FileUpload组件
`ng generate component components/fileupload`
创建了四个文件 *.html, *.scss, *.spec.ts, *.ts
创建服务，服务就是一个类，它使用@Injectable装饰器
我们将创建一个服务，使其读入一个使用文件选择器选择的文件，
从而能够在图片上传对话框和主屏幕上显示该文件，或者将其传输并保存到数据库。
`ng generate service Services/FilePreviewService`

# 存档点1
![存档点1](src/assets/ui-arch1.png)

Server目录的主线任务 [记录](server/Readme.md)

# 显示图片

- 应用程序如何知道IPictureModel的实例什么时候可以用。
使用RxJS监视图片。（JS反应式扩展）
所谓的观察者模式。
通过RxJS，不再与事件耦合，可以使用RxJS创建复杂的订阅机制。
控制我们反应的通知数量。或者只订阅满足特定条件的数据和变化。

需要对应用程序的两个动作做出反应，
1. 当页面加载时，从服务器加载图片，需要对加载每张图片的行为做出反应。
2. 当用户在对话框中选择一张图片并选择Save时，对话框关闭，同时我们触发保存到数据库的操作，并在页面上显示该图片。

我们将创建服务来满足这两个需求，
核心问题：在做出反应之后，订阅者需要做什么。
我们创建一个简单的基类。

# 传输数据
`ng g service services/TransferData`

