<template lang="html">
    <div class="content">
      <Table border :columns='header' :data="devices_arr">

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
                    title: 'ID',
                    key: 'id'
                },
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
                },
                {
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
                                    click: () => {
                                        this.currentId = params.row.id;
                                        this.getById(params.row.id);
                                        this.showPop();
                                    }
                                }
                            }, '添加')
                        ])
                    }
                }
            ],
            devices_arr: [],
            device: {},
            typeArr: [
                {
                    label: 'cx-4',
                    value: '1'
                },
                {
                    label: 'cx-3',
                    value: '0'
                }
            ],
            addCount: 0,
            currentId: 0,
            currentCount: 0,
            currentRemain: 0
        }
    },
    created () {
        this.init();
    },
    methods: {
        init () {
            Util.ajax.get('device', {}).then((resp) => {
                console.log(resp);
                this.devices_arr = resp.data;
                console.log(this.devices_arr);
            });
        },
        showPop () {
            this.$Modal.confirm({
                title: '添加数量',
                render: (h) =>{
                    return h('Input', {
                        props: {
                            value: this.value,
                            autofocus: true,
                            placeholder: '输入要添加的数量'
                        },
                        style: {
                            'margin-top': '20px'
                        },
                        on: {
                            input: (val) => {
                                this.addCount = parseInt(val);
                            }
                        }
                    })
                },
                loading: true,
                onOk: () => {
                    console.log(this.currentId);
                    this.updateCount();
                }
            })
        },
        getById (id) {
            Util.ajax.get('device/' + id, {}).then((resp) => {
                this.currentRemain = resp.data.remain;
                this.currentCount = resp.data.count;
                console.log(this.currentCount);
            });
        },
        updateCount () {
            let newCount = this.currentCount + this.addCount;
            let newRemain = this.currentRemain + this.addCount;
            Util.ajax.post('device/' + this.currentId, {
                count: newCount,
                remain: newRemain,
                _method: 'PUT'
            }).then((resp) => {
                // console.log();
                this.$Modal.remove();
                this.init();
            });
        }
    }
}
</script>

<style lang="css">
    .add-box{
        width:30%;
        margin: 30px auto;
    }
</style>
