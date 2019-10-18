
$(function () {
    waveChart(); //水波图表
    circleChart(); //环形图表
    // preChart();  //饼图
    echart1()  //横向柱状图
    echart2() //折注混合图
})
// 水波图表
function waveChart() {
    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleColor = "#4F91D6";
    config1.textColor = "#B7F0FC";
    config1.waveTextColor = "#B7F0FC";
    config1.waveColor = "#3CE0EB";
    config1.circleThickness = 0.08;
    config1.textVertPosition = 0.2;
    config1.waveAnimateTime = 2000;
    var gauge1 = loadLiquidFillGauge("fillgauge1", 80,config1);
    var gauge2 = loadLiquidFillGauge("fillgauge2", 80,config1);
}
// 环形图
function circleChart() {
    var option = {
        value:0, //当前值
        size:90, //圆环大小
        widthRatio:0.1, //进度条宽度比
        color:'', //进度条颜色
        backgroundColor:'transparent',  //圆环背景色
        counterclockwise:false, //旋转顺序  true-逆时针 false-顺时针
        startAngle:75, //圆形进度条开始角度
        text:'',  //文字显示
        relativeTextSize:'12px', //文字大小
        redraw: false
    }
    var circleChart1 = $('#circleChart1')
    var circleChart2 = $('#circleChart2')
    circleChart1.circleChart(Object.assign({},option,{
        value:100,
        text:'50%',
        color:'#84EEFF'
    }))
    circleChart2.circleChart(Object.assign({},option,{
        value:50,
        text:'50%',
        color:'#84EEFF'
    }))
}
//饼图
function preChart() {
    var salesData=[
        {label:"Basic", color:"#3366CC"},
        {label:"Plus", color:"#DC3912"},
        {label:"Lite", color:"#FF9900"},
        {label:"Elite", color:"#109618"},
        {label:"Delux", color:"#990099"}
    ];
    var svg = d3.select("body").append("svg").attr("width",180).attr("height",80);

    // svg.append("g").attr("id","salesDonut");
    svg.append("g").attr("id","quotesDonut");

    // Donut3D.draw("salesDonut", randomData(), 150, 150, 130, 100, 30, 0.4);
    Donut3D.draw("quotesDonut", randomData(), 90, 40, 70, 60, 80, 0);

    // function changeData(){
    //     Donut3D.transition("salesDonut", randomData(), 130, 100, 30, 0.4);
    //     Donut3D.transition("quotesDonut", randomData(), 130, 100, 30, 0);
    // }

    function randomData(){
        return salesData.map(function(d){
            return {label:d.label, value:1000*Math.random(), color:d.color};});
    }
}


var chart = Highcharts.chart('cus_piechart', {
    colors:['#1F50FD','#48C9FF','#521DFF','#921DFF','#D91EFE','#FF4DC5'],
    credits:{
        enabled:false
    },
	chart: {
		type: 'pie',
		options3d: {
			enabled: true,
			alpha: 60,
            beta: 0
        },
        // width:200,
        // height:200,
        backgroundColor:'transparent'
    },
    legend:{
        enabled:false,
        // itemWidth:100,
        // lineHeight:10,
        // itemDistance:0,
        // y:-100,
        width:200,
        symbolHeight:10,
        symbolWidth:10,
        title:{
            // text:'111',
            style:{'color':'#fff'}
        }
    },
	title: {
		 text: ' '
	},
	tooltip: {
		//pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
            depth:10,
            center:['25%','50%'],
			dataLabels: {
                enabled: true,
                distance:-20,
                connectorColor:'#fff',
                format: '{y}%',
                crop:false,
                inside:false,
                style:{
                    color:'#fff',
                    fontSize:10,
                    fontWeight:0,
                    textOutline:'none'
                }
            },
            showInLegend: false,
            size:'300%'
		}
	},
	series: [{
		type: 'pie',
		name: '浏览器占比',
		data: [
            {
                name:'0岁-25岁',
                y:20
            },
            {
                name:'26岁-35岁',
                y:40
            },
            {
                name:'36岁-45岁',
                y:15
            },
            {
                name:'46岁-55岁',
                y:10
            },
            {
                name:'56岁-65岁',
                y:10
            },
            {
                name:'66岁以上',
                y:5
            }
		]
	}]
});


//横向柱状图
function echart1() {
    var option = {
        tooltip: {
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        legend: {
            show:true,
            top:0,
            itemWidth:10,
            itemHeight:10,
            textStyle:{
                color:'#fff',
                fontSize:'10',
                padding:[2,0,0,0]
            }
        },
        grid: {
            width:180,
            height:120,
            // left: '3%',
            right: '3px',
            bottom: '20px',
            // containLabel: true
        },
        xAxis: {
            type: 'value',
            scale:true,
            axisLine:{
                lineStyle:{
                    color:'#fff',
                    shadowOffsetX:3,
                    opacity: 0.1
                }
            },
            axisLabel:{
                fontSize:'8',
                color:'#fff',
                margin:2,
            },
            axisTick:{
                show:false,
            },
            splitLine:{
                lineStyle:{
                    color:'#fff',
                    opacity: 0.1
                }
            }
        },
        yAxis: {
            show:false,
            type: 'category',
            axisTick:{
                show:false,
            },
            axisLine:{
                lineStyle:{
                    opacity:0.1
                }
            },
        },
        series: []
    };

    var myChart1 = echarts.init(document.getElementById('customerEchart1'));
    myChart1.setOption(option);
    myChart1.setOption({
        legend:{
          right:-10,
        },
        xAxis:{
            inverse:true
        },
        series: [
            {
                name: '存款余额(万元)',
                type: 'bar',
                barWidth:'5px',
                barCategoryGap:'0%',
                color:'#1F50FD',
                data: [100, 1000, 100, 150, 2000, 250]
            }
        ]
    });

    var myChart2 = echarts.init(document.getElementById('customerEchart2'));
    myChart2.setOption(option);
    myChart2.setOption({
        legend:{
            left:0,
        },
        xAxis:{
            inverse:false
        },
        grid:{
            right: '9px'
        },
        series: [
            {
                name: '存款户数(万户)',
                type: 'bar',
                barWidth:'5px',
                barCategoryGap:'0%',
                color:'#48C9FF',
                data: [100, 1000, 100, 150, 2000, 250]
            }
        ]
    })

}
//折注混合图
function echart2() {
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
            height:100,
            // left: '3%',
            right: '3px',
            bottom: '0px',
            containLabel: true
        },
        legend: {
            show:true,
            itemWidth:12,
            itemHeight:12,
            top:-6,
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
                nameGap:5,
                nameTextStyle:{
                    fontSize:'8',
                    color:'#fff',
                    padding:[0,0,0,0],
                    verticalAlign:'bottom'
                },
                // interval: 50,
                // splitNumber:6,
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
                name: '单位:户数',
                nameGap:5,
                nameTextStyle:{
                    fontSize:'8',
                    color:'#fff',
                    padding:[10,0,0,0]
                },
                // interval: 5,
                // splitNumber:6,
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
        series: [
            {
                name:'购买客户数',
                type:'bar',
                barWidth:'5px',
                color:'#1F50FD',
                data:[10, 50, 30, 100, 200, 150, 190]
            },
            {
                name:'购买总额度',
                type:'line',
                color:'#44E5FF',
                yAxisIndex: 1,
                data:[2, 4, 6, 8, 10, 20, 50]
            }
        ]
    };
    var myChart = echarts.init(document.getElementById('customerEchart3'));
    myChart.setOption(option);
}
