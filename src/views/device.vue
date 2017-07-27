<template lang="html">
    <div class="content">
      <Table border :columns='header' :data="devices">

      </Table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            header: [
                {
                    title: '机型',
                    key: 'type'
                },
                {
                    title: '单机成本',
                    key: 'cost'
                },
                {
                    title: '数量',
                    key: 'count'
                },
                {
                    title: '剩余',
                    key: 'remain'
                }
            ],
            devices: []
        }
    },
    created () {
        this.init();
    },
    methods: {
        init: () => {
            console.log('init');
        }
    }
}
</script>

<style lang="css">
</style>
