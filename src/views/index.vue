<template lang="html">
  <div class="content">
    <Table border :columns='header' :data="mydata">

    </Table>
  </div>
</template>

<script>
import Util from '../libs/util';

export default {
  data () {
        return {
          header: [
              {
                title: '姓名',
                key: 'username'
            },{
                title: '成交价',
                key: 'price'
            },{
                title: '手机号',
                key: 'mobile'
            },{
                title: '地区',
                key: 'location'
            },{
                title: '快递',
                key: 'express_type'
            },{
                title: '快递单号',
                key: 'express_id'
            },{
                title: '快递费',
                key: 'express_price'
            },{
                title: '利润',
                key: 'profit'
            },{
                title: '备注',
                key: 'remark'
            },{
                title: '操作',
                key: 'action',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'text',
                                size: 'small'
                            },
                            on: {
                                click: () =>{
                                    this.getExpressInfo(params.row.express_type, params.row.express_id);
                                }
                            }
                        }, '查询')
                    ])
                }
            }
        ],
        mydata: []
        }
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            Util.ajax.get('order', {}).then((resp) => {
                console.log(resp);
                this.mydata = resp.data;
            })
        },
        getExpressInfo (exp_name, exp_id) {
            let url = 'https://www.baidu.com/s?wd=' + exp_name + ' ' + exp_id;
            window.open(url);
        }
    }
}
</script>

<style lang="Less">
  .content{
    width: 95%;
    margin: 10px auto;
    height: 100%;
    background: #fff;
    padding: 20px 0px;
  }
  .my-form{
    width:50%;
    margin: 20px auto;
  }
</style>
