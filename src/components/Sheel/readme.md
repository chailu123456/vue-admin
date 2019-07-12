tableData:{
            columns:[
              {
                title: '序号', // 标题
                width: '10%',  // 宽度
                tip: true,    // 鼠标移上去是否显示当前字段
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
                    color: '#1977dc', // 字体颜色
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
        checkdata: {
          type: Boolean,
          default() {
            return true  // 是否批量操作
          }
        },
        textAlign: {
          type: String,  // 文字对齐方式
          default() {
            return 'center'
          }
        },
        opation:{  // 组件接受的值
          type: Object,
          default() {
            return null
          }
        }