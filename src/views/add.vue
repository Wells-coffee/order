<template lang="html">
  <div class="content">
    <Form :model="order" :label-width="80" class="my-form">
        <Form-item label="姓名" prop="name">
            <Input v-model="order.username" placeholder="请输入姓名"></Input>
        </Form-item>
        <Form-item label="成交价" prop="name">
            <Input v-model="order.price" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="成本" prop="name">
            <Select v-model="device_id" @on-change="typeChange()">
                <Option v-for="item in device_types" :value="item.id" :key="item.id">{{item.cost}}</Option>
            </Select>
        </Form-item>
        <Form-item label="手机号" prop="name">
            <Input v-model="order.mobile" placeholder="请输入手机号"></Input>
        </Form-item>
        <Form-item label="地区" prop="name">
            <!-- <Input v-model="order.location" placeholder="请输入地区"></Input> -->
            <Cascader :data="cityArr" v-model="order.location"></Cascader>
        </Form-item>
        <Form-item label="快递" prop="name">
            <!-- <Input v-model="order.express_type" placeholder="请输入地区"></Input> -->
            <Select v-model="order.express_type">
                <Option v-for="item in express" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
        </Form-item>
        <Form-item label="快递单号" prop="name">
            <Input v-model="order.express_id" placeholder="请输入快递单号"></Input>
        </Form-item>
        <Form-item label="快递费" prop="name">
            <Input v-model="order.express_price" placeholder="请输入快递费"></Input>
        </Form-item>
        <Form-item label="备注" prop="name">
            <Input v-model="order.remark" placeholder="备注"></Input>
        </Form-item>
        <Form-item>
            <Button type="primary" @click="handleSubmit()">提交</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>

        </Form-item>

    </Form>
  </div>
</template>

<script>
import Util from '../libs/util';
import City from '../libs/city';
import Express from '../libs/express';

export default {
  data () {
        return {
          order: {
                username: '',
                profit: 0
            },
            cityArr: City,
            express: Express,
            device_cost: 0,
            device_id: '',
            device_remain: 0,
            device_types: []
        }
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            Util.ajax.get('device', {}).then((resp) => {
                this.device_types = resp.data;
            })
        },
        handleSubmit () {
            this.order.profit = this.order.price - this.order.express_price - this.device_cost;
            Util.ajax.post('order', this.order).then((resp) => {
                console.log(resp);
                this.countMinus();
                this.$router.push({path: '/'});
            })
        },
        typeChange () {
            console.log('change');
            Util.ajax.get('device/' + this.device_id, {}).then((resp) => {
                console.log(resp.data);
                this.device_cost = resp.data.cost;
                this.device_remain = resp.data.remain;

            })
        },
        countMinus () {
            let remain = this.device_remain - 1;
            Util.ajax.post('device/' + this.device_id, {
                remain: remain,
                _method: 'PUT'
            }).then((resp) => {
                console.log(resp.data);
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
