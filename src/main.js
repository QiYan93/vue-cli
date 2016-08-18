//es6语法：
import main from './components/main';
Vue.http.options.emulateJSON = true;
var App = Vue.extend({});
var router = new VueRouter({
  hashbang:false
//   history:true
});
router.map({
    '/main':{
        name:'main',
        component:main
    }
});
router.redirect({
    '*':"/main"
});
router.start(App, '#container');


Vue.config.debug = false;//开启错误提示