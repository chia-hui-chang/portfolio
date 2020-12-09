$(document).ready(function(){
	// jQuery(用$代表)文件已經準備執行下列函數
	//header color change
	$(window).on("scroll",function(){
		// 當視窗滾動執行下列函數
		var scrollDistance = $(window).scrollTop();
		// 這個距離多少就會存在scrollDistance(自己命名)
		var $header = $(".js-header");
		// 選取了js-header代表header變化($代表變數)
		if(scrollDistance > 80){
			// 如果滾動距離>80px
			$header.addClass("header--colored");
			// header增加header--colored這個class樣式
		}
		else{
			$header.removeClass("header--colored")
			// 否則就移除此class
		}
	})

	// wow plugin initialize
	if(screen.width > 768){
		new WOW().init();
		// 因為這個插件在行動裝置上會lag，所以寫一個判斷式在768以上才啟用
	}
	
	// fancybox plugin options
	$('[data-fancybox="gallery"]').fancybox({
		loop: true
	});
	// paroller plugin initialize
	if(screen.width > 768){
		$('.my-paroller').paroller();
	}
})