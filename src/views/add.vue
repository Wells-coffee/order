<template lang="html">
  <div class="content">
    <Form :model="order" :label-width="80" class="my-form">
        <Form-item label="姓名" prop="name">
            <Input v-model="order.username" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="成交价" prop="name">
            <Input v-model="order.price" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="手机号" prop="name">
            <Input v-model="order.mobile" placeholder="请输入手机号"></Input>
        </Form-item>
        <Form-item label="地区" prop="name">
            <Input v-model="order.location" placeholder="请输入地区"></Input>
        </Form-item>
        <Form-item label="快递" prop="name">
            <Input v-model="order.express_type" placeholder="请输入地区"></Input>
        </Form-item>
        <Form-item label="快递单号" prop="name">
            <Input v-model="order.express_id" placeholder="请输入快递单号"></Input>
        </Form-item>
        <Form-item label="快递费" prop="name">
            <Input v-model="order.express_price" placeholder="请输入快递费"></Input>
        </Form-item>
        <Form-item label="价格调整" prop="name">
            <Input v-model="order.price_adjust" placeholder="价格调整"></Input>
        </Form-item>
        <Form-item label="备注" prop="name">
            <Input v-model="order.remark" placeholder="备注"></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit('formCustom')">提交</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>

        </Form-item>

    </Form>
  </div>
</template>

<script>
import Util from '../libs/util';
export default {
  data () {
        return {
          order: {
            username: '',
            profit: 0
          }
        }
    },
    methods: {
        handleSubmit () {
            console.log('sumbit');
            this.order.profit = this.order.price - this.order.express_price;
            Util.ajax.post('order', this.order).then((resp) => {
                console.log(resp);
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
