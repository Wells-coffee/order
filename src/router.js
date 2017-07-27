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
},{
    path: '/device',
    meta: {
        title: '设备'
    },
    component: (resolve) => require(['./views/device.vue'], resolve)
}];
export default routers;
