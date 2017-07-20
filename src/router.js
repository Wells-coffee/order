const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
},{
    path: '/add',
    meta: {
        title: '添加'
    },
    component: (resolve) => require(['./views/add.vue'], resolve)
}];
export default routers;
