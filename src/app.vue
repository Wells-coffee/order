
<template lang="html">
  <div class="container">
    <Row type="flex">
      <Col span="5" class="nav">
        <div class="logo-left"></div>
        <Menu theme="dark" active-name="1" width="auto">
            <Menu-item name="1">
                <Icon type="document-text"></Icon>

                <router-link to="/">订单管理</router-link>
            </Menu-item>
            <Menu-item name="2">
                <Icon type="document-text"></Icon>

                <router-link to="/add">添加订单</router-link>

            </Menu-item>
            <Menu-item name="3">
                <Icon type="document-text"></Icon>

                <router-link to="/device">设备管理</router-link>

            </Menu-item>
        </Menu>
      </Col>
      <Col span="19" class="right">
        <div class="header"></div>
        <router-view></router-view>
        <!-- <div class="content">
          <div class="title"></div>
          <div class="main"></div>
        </div> -->
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="Less">
  .container{
    width: 100%;
    height: 100%;
    background: #f5f7f9;
    .logo-left{
      width: 90%;
      margin: 15px auto;
      height: 30px;
      background: #5b6270;
      border-radius: 3px;
    }
    .nav{
      min-height: 600px;
      background: #464c5b;
    }
    .right{
      /*height: 400px;*/
      /*background: #9ba7b5;*/
    }
    .header{
      height: 60px;
      box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
  }
</style>
