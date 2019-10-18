$(function () {
    chartPie();
    chartLineBar();
    tabChange();
})
// 饼图
function chartPie() {
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            show:true,
            top:170,
            itemWidth:10,
            itemHeight:10,
            itemGap:0,
            textStyle:{
                color:'#fff',
                fontSize:10
            }
        },
        calculable : true,
        series : [
            {
                name:'面积模式',
                type:'pie',
                color:['#48C9FF','#1F50FD','#521DFF','#921DFF','#D91EFE'],
                radius : [30, 80],
                center : [95, 90],
                roseType : 'area',
                labelLine:{
                  show:false
                },
                label:{
                    show:true,
                    fontSize:12,
                    color:'#fff',
                    formatter:'{c}亿',
                    position:'inside',
                },
                data:[
                    {value:30, name:'保证金'},
                    {value:60, name:'一般定期'},
                    {value:15, name:'众邦宝'},
                    {value:75, name:'一般存期'},
                    {value:100, name:'同业存款'},
                ]
            }
        ]
    };
    var myChart1 = echarts.init(document.getElementById('productEchartPie1'));
    var myChart2 = echarts.init(document.getElementById('productEchartPie2'));
    myChart1.setOption(option);
    myChart2.setOption(option);
}
// 折注混合图
function chartLineBar() {
    var series = []
    var option = {
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //     type: 'cross',
            //     crossStyle: {
            //         color: '#999'
            //     }
            // }
        },
        grid: {
            width:380,
            height:110,
            // left: '3%',
            right: '3px',
            bottom: '-5px',
            containLabel: true
        },
        legend: {
            show:true,
            itemWidth:12,
            itemHeight:12,
            top:-1,
            textStyle:{
                color:'#fff',
                fontSize:'10',
                padding:[2,0,0,0]
            }
        },
        xAxis:{
            type: 'category',
            data: ['00:00','04:00','08:00','12:00','16:00','20:00','24:00'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                fontSize:'8',
                color:'#fff',
                margin:2,
            },
            axisTick:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    opacity: 0.1
                }
            },
        },
        yAxis: [
            {
                type: 'value',
                name: '单位:万元',
                // max:200,
                nameGap:5,
                nameTextStyle:{
                    fontSize:'8',
                    color:'#fff',
                    padding:[0,0,0,0],
                    verticalAlign:'bottom'
                },
                // interval: 50,
                splitNumber:6,
                axisLabel: {
                    fontSize:'8',
                    color:'#fff',
                    formatter: '{value}'
                },
                axisTick:{
                    show:false,
                },
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:'#fff',
                        opacity: 0.1
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#fff',
                        opacity: 0.1
                    }
                }
            },
            {
                type: 'value',
                name: '单位:亿元',
                nameGap:5,
                nameTextStyle:{
                    fontSize:'8',
                    color:'#fff',
                    padding:[10,0,0,0]
                },
                // interval: 5,
                splitNumber:6,
                axisLabel: {
                    fontSize:'8',
                    color:'#fff',
                    formatter: '{value}'
                },
                axisTick:{
                    show:false,
                },
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:'#fff',
                        opacity: 0.1
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:'#fff',
                        opacity: 0.1
                    }
                }
            }
        ],
        series: []
    };


    var myChart1 = echarts.init(document.getElementById('product_tan1_echart1'));
    var myChart2 = echarts.init(document.getElementById('product_tan1_echart2'));
    var myChart3 = echarts.init(document.getElementById('product_tan1_echart3'));
    myChart1.setOption(option);
    myChart1.setOption({
        series:[
            {
            name:'产品余额最近7天趋势',
            type:'line',
            color:'#44E5FF',
            yAxisIndex: 1,
            data:[30, 4, 40, 8, 10, 20, 80]
        },
            {
                name:'购买金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'赎回金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    })
    myChart2.setOption(option);
    myChart2.setOption({
        series:[
            {
                name:'产品余额最近7天趋势',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[30, 4, 40, 8, 10, 20, 80]
            },
            {
                name:'购买金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
        ]
    });
    myChart3.setOption(option);
    myChart3.setOption({
        series:[
            {
                name:'购买金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                yAxisIndex: 1,
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'赎回金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    });

    var myChart4 = echarts.init(document.getElementById('product_tan2_echart1'));
    var myChart5 = echarts.init(document.getElementById('product_tan2_echart2'));
    var myChart6 = echarts.init(document.getElementById('product_tan2_echart3'));
    myChart4.setOption(option);
    myChart4.setOption({
        series:[
            {
                name:'多帮利余额最近7天趋势',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[30, 4, 40, 8, 10, 20, 80]
            },
            {
                name:'多帮利金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'多帮利金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    })
    myChart5.setOption(option);
    myChart5.setOption({
        series:[
            {
                name:'多帮利余额最近7天趋势',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[30, 4, 40, 8, 10, 20, 80]
            },
            {
                name:'多帮利金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
        ]
    });
    myChart6.setOption(option);
    myChart6.setOption({
        series:[
            {
                name:'多帮利金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                yAxisIndex: 1,
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'多帮利金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    });

    var myChart7 = echarts.init(document.getElementById('product_tan3_echart1'));
    var myChart8 = echarts.init(document.getElementById('product_tan3_echart2'));
    var myChart9 = echarts.init(document.getElementById('product_tan3_echart3'));
    myChart7.setOption(option);
    myChart7.setOption({
        series:[
            {
                name:'随心盈余额最近7天趋势',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[30, 4, 40, 8, 10, 20, 80]
            },
            {
                name:'随心盈金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'随心盈金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    })
    myChart8.setOption(option);
    myChart8.setOption({
        series:[
            {
                name:'随心盈余额最近7天趋势',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[30, 4, 40, 8, 10, 20, 80]
            },
            {
                name:'随心盈金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
        ]
    });
    myChart9.setOption(option);
    myChart9.setOption({
        series:[
            {
                name:'随心盈金额',
                type:'bar',
                barWidth:'5px',
                color:'#48C9FF',
                yAxisIndex: 1,
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'随心盈金额',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            }
        ]
    });
}
//tab切换
function tabChange() {
    var index = 0;
    setInterval(function () {
        index >= 2 ? index = 0 : index++;
        $('.product-tab-item').removeClass('product-tab-select').eq(index).addClass('product-tab-select');
        $('.tab-container-item').removeClass('tab-container-select').eq(index).addClass('tab-container-select')
    },3000)

}
