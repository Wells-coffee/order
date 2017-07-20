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
