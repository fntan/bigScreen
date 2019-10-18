$(function () {
    var dom1 = $('.number-item-blue')
    var dom2 = $('.number-item-green')
    numberScroll(dom1)
    numberScroll(dom2)
    zbAjax(function(res){
        console.log(res)
        if(res.success){

        }
    },'cockpit/screen/zbDeposit')
})

function numberScroll(dom) {
    var num = '9,429.5';
    var numArr = num.split('');
    var len = 12-numArr.length;
    if(len > 0){
        for (var i=0;i<len;i++) {
            numArr.unshift('')
        }

    }
    numArr.forEach(function (item,index) {
        !item || isNaN(item) ? dom.eq(index).html(item) : dom.eq(index).find('span').css('transform','translateY(-'+(Number(item)+1)*10+'%)')
    })
    console.log(numArr);
}