<template>
    <div ref="pie">
        
    </div>
</template>

<script>
    //先把数据放到option里面去
    import option from '@/option/pie.js'
    export default {
        name: "pie",
        mounted() {
            //this.$.get()
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.echarts.init(this.$refs.pie);
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
</script>

<style scoped>

</style>