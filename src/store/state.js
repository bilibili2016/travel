/*
 如果用户对浏览器设置，关闭本地存储功能或使用隐身模式，
 localStorage就使用不了，页面会报异常；
 try{}catch(e){}防止此情况发生
 */

let defaultCity = '上海'
try {
  if(localStorage.city){
    defaultCity = localStorage.city
  }
}catch (e) {}

export default {
  city: defaultCity  //首先从localStorage.city中取，取不到值默认是上海
}
