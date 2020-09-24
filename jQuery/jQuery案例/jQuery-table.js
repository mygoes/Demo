(function($){
    /**
     * 给$的原型添加一个table方法
     * arrThead 数组,用来生成表格头部的
     * arrTbody 数组,用来生成表格主体数据的
     */
    $.fn.table = function(arrThead,arrTbody){
        //生成表格
        var list = ['<table>'];
        //生成头部
        list.push('<thead>');
        list.push('<tr>');
        for(var i = 0; i<arrThead.length; i++){
            list.push('<th>');
            list.push(arrThead[i]);
            list.push('</th>');
        }
        list.push('</tr>');
        list.push('</thead>');
        //生成主体部分
        list.push('<tbody>');
        for(var i = 0; i < arrTbody.length; i++){
            list.push('<tr>');
            for(var key in arrTbody[i]){
                list.push('<td>')
                list.push(arrTbody[i][key]);
                list.push('</td>')
            }
            list.push('</tr>');
        }
        list.push('</tbody>');
        list.push('</table>');


        this.html(list.join(""));
        return this;
    }

}(jQuery));