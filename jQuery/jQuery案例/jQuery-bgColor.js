(function($){
    //给$的原型添加bgColor方法
    $.fn.bgColor = function(bgColor){
        //console.log(this); //this是调用这个bgColor这个方法的jQuery对象
        this.css('backgroundColor',bgColor);
        
        return this;
    }
}(jQuery));