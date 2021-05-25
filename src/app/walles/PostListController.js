ftitAppModule.controller('PostListController',
    function ($scope) {
        // 设置轮播图图片间隔
        $scope.myInterval = 5000;
        // 轮播图数据初始化
        var slides = $scope.slides = [];
        // 添加轮播图源
        slides.push({ image: '/Content/images/carousel_1.png', text: '亲爱的你，情人节快乐' });
        slides.push({ image: '/Content/images/carousel_1.png', text: '亲爱的你，情人节快乐' });
});