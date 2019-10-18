    //http://122.112.221.198:8083/cockpit/screen/inflow
    // http://122.112.221.198:8083/cockpit/screen/map
    // http://122.112.221.198:8083/cockpit/screen/scroll
    // http://122.112.221.198:8083/cockpit/screen/zbCustomer
    // http://122.112.221.198:8083/cockpit/screen/zbDeposit
    // http://122.112.221.198:8083/cockpit/screen/zbProduct

(function(window){
    var baseUrl = 'http://122.112.221.198:8083/';
    function Ajax(callback,url){
        $.ajax({
            type:'get',
            url:baseUrl+url,
            timeout:10000,
            dataType:'json',
            success:function(res){
                callback(res)
            },
            error:function(){

            }
        })
    }

    window.zbAjax = Ajax
})(window)