(function ($) {
    /**
     * 给$的fn添加一个tabs方法. 用来做tab栏切换的
     * options 参数对象
     * options.tabHeads       页签选择器
     * options.tabHeadsClass  选中的页签要添加的类
     * options.tabBodys       页面选择器
     * options.tabBodysClass  选中的页面要添加的类
     */
    $.fn.tabs = function (options) {
        var $bigBox = this; //调用这个tabs这个方法的大盒子. 
        //通过参数传递进来的页签选择器找到这些页签,设置点击事件. 
        $(options.tabHeads).on('click', function () {
            //当前点击的页签添加options.tabHeadsClass类,其他的页签移除这个类. 
            $(this).addClass(options.tabHeadsClass).siblings().removeClass(options.tabHeadsClass);
            //获取当前点击的页签的索引
            var idx = $(this).index();
            //找到和索引一致的页面,添加options.tabBodysClass,其他的页面移除这个类. 
            $(options.tabBodys).eq(idx).addClass(options.tabBodysClass).siblings().removeClass(options.tabBodysClass);
        })

        //返回调用这个方法的jQuery对象
        return $bigBox;
    }

}(jQuery));