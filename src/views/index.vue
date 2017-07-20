<template lang="html">
  <div class="content">
    <Table border :columns='header' :data="mydata">

    </Table>
  </div>
</template>

<script>
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
            title: '价格调整',
            key: 'price_adjust'
        },{
            title: '备注',
            key: 'remark'
        }
    ],
    mydata: []
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
