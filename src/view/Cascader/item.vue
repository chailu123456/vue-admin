<template>
    <li>
			<span @click="toggle(model)">
				{{ model.menuName }}
			</span>
			<ul style="margin-left:60px;margin-top:-28px;" v-if="isFolder" v-show="open">
				<items v-for="(item, index) in childrenTree.childTree" :model="item" :key="index"></items>
			</ul>
    </li>
</template>

<script type="text/javascript">
    export default {
        // 组件递归必要条件，name属性
        name: 'items',
        props: ['model'],
        data() {
            return {
                // 控制子列表的显示隐藏
                open: false,
                childrenTree: this.model,
                cur: -1
            }
        },
        computed: {
            // 是否还有子列表需要渲染，作为v-if的判断条件
            isFolder() {
                return this.model.childTree && this.model.childTree.length
            }
        },
        methods: {
            // 切换列表显示隐藏的方法
            toggle(data) {
                console.log(data)
                if (data.id) {
                    this.cur = data.id*1
                }
                if(this.isFolder) {
                    this.open = !this.open
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    li {
			height: 30px;
			line-height: 30px;
			&:hover {
					cursor: pointer;
			}
    }
    .sss {
        display: inline;
    }
    .activeq {
        display: none;
    }
</style>
