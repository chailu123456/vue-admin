<template>
  <div class="do-ui-table">
    <ul class="table-thead">
      <li class="table-thead-bg" v-for="(item,index) in tableData.columns" :style="{width:item.width}" :key="index">
        <section>{{item.title}}</section>
        <div class="all-select" @click="allselect" v-if="item.title==='操作' && !checkdata">
          <input type="checkbox" v-model="checkAll">
        </div>
      </li>
    </ul>
    <ul class="table-body" v-if="tableData.tbodydata.length>0" >
      <li class="table-body-content" :class="{'table-tr-odd': columnIndex%2 != 0}"  v-for="(val, columnIndex) in tableData.tbodydata" :key="columnIndex">
        <section v-for="(column, index) in tableData.columns" :title="column.tip ? title(val, column, index): ''" :style="{width:column.width}" :key="index">
          <span v-if="column.render">
            <em v-for="(item, indexOper) in column.render" v-if="checkdata" :style="{color:item.color}"  @click="operation(val, item)" :key="indexOper" v-html="valSetting(item, indexOper)"></em>
            <input type="checkbox" v-model="checkModel" v-if="!checkdata" :value="val">
          </span>
          <span v-else v-html="valSetting(val, column, columnIndex)"></span>
        </section>
      </li>
    </ul>
    <ul class="table-body" v-else>
      <li style="text-align:center;">暂无数据</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Sheel',
  props:{
    tableData:{
      type: Object,
      require: true,
      default() {
        return {
          tableData:{
            columns:[
              {
                title: '序号',
                width: '10%',
                tip: true,
                key: 'index',
                rule (v) {
                  return v.index
                }
              },
              {
                title: '性别',
                width: '40%',
                tip: true,
                key: 'test1',
                rule (v) {
                  return v.test1
                }
              },
              {
                title: '年龄',
                width: '40%',
                key: 'test2',
                rule (v) {
                  return v.test2
                }
              },
              {
                title: '操作',
                width: '10%',
                key: 'operation',
                render:[
                  {
                    name: '编辑',
                    width: '50%',
                    action:function(v) {
                      console.log
                    }
                  },
                  {
                    name: '新增',
                    width: '50%'
                  }
                ]
              }
            ],
            tbodydata:[
              {
                id:123,
                test1: '李三',
                test2: 21
              },
              {
                id: 456,
                test1: '八戒',
                test2: 44
              }
            ]
          }
        }
      }
    },
    checkdata: {
      type: Boolean,
      default() {
        return true
      }
    },
    opation:{
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      checkAll: false,
      checkModel: []
    }
  },
  created () {
    
  },
  methods: {
    valSetting(val, column, index) {
      if (val.name) {
        return val.name || '-'
      }
      if (column.rule) {
        let compileRule = column.rule({...val, index})
        return compileRule
      }
      return ''
    },
    // 鼠标移上去显示title
    title(val, column) {
      return val[column.key]
    },
    operation(v, item) { 
      this.opation.setting(v, item)
    },
    allselect () {
      this.checkAll = !this.checkAll
      if (this.checkAll) {
        this.tableData.tbodydata.forEach(val => {
          this.checkModel.push(val)
        })
      } else {
        this.checkModel = []
      }
      this.opation.checkClick(this.checkModel)
    }
  },
  watch:{
    checkModel: {
      handler() {
        if (this.checkModel.length == this.tableData.tbodydata.length) {
          this.checkAll = true
        } else {
          this.checkAll = false
        }
        this.opation.checkClick(this.checkModel)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.do-ui-table {
  font-size: 12px;
  .table-thead {
    width: 100%;
    height: 34px;
    line-height: 34px;
    background:#eceffb;
    .table-thead-bg {
      float: left;
      section{
        display: inline;
      }
      .all-select {
        display: inline;
      }
    }
  }
  .table-body {
    .table-body-content {
      min-height: 34px;
      line-height: 34px;
      section{
        display: inline-block;
        span {
          em {
            margin: 0 4px;
          }
        }
      }
    }
    .table-tr-odd {
      background:#f2f2f2;
    }
  }
}
</style>
