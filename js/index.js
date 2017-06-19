var ix = 0;
var linumber =$(".lb-list>li").length;
function pp(p) {
	$('.lb-list>li').css({
		"Z-index": "1",
		"opacity": "0"
	});
	$('.lb-list>li').eq(p).css({
		"Z-index": "2",
		"opacity": "1"
	})
}

function dp() {
	pp(ix)
	$(".lb-bottom>ul>li").css("background","rgba(0,0,0,.5)")
	$(".lb-bottom>ul>li").eq(ix).css("background","none")
}
$(".lb-btn").mouseover(function() {
	$(this).css("background", "rgba(0,0,0,.7)")
})
$(".lb-btn").mouseleave(function() {
	$(this).css("background", "rgba(0,0,0,0)")
})
 dp();
function zdb() {
	time = setInterval(
		function() {
			if(ix == linumber - 1) {
				ix = 0;
			} else {
				ix++;
			}
			dp();
		}, 3000)
}
zdb();
$(".lb").mouseover(function() {
	clearInterval(time);

})
$(".lb").mouseleave(function() {
	zdb();

})

$('.lb-bottom>ul>li').click(function() {
	ix = $(this).index();
	dp();
})
$('.lb-btn').eq(0).click(
	function() {
	if(ix== linumber - 1) {
		ix = 0;
	} else {
		ix++;
	}
	dp();
}
)
$('.lb-btn').eq(1).click(
function() {
		if(ix == 0) {
			ix = linumber - 1;
		} else {
			ix--;
		}
		dp();
	}
)
