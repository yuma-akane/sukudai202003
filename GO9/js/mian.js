var nav_height = $(".navbar").height()

$(".menu").click(function () {
    $(this).toggleClass("active")

})
var last = 0;
$(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (last > scroll) {
        $(".navbar").css("top", "0")
    } else {
        $(".navbar").css("top", `-${nav_height}`)
    }
    last = scroll;

})
console.log(nav_height)
$(".nav-item").css("height", nav_height)
// ======================================================
/*絕對路近時使用
let pageUrl = window.location.pathname;
// 取得目前造訪網頁的路徑
// 參考https://medium.com/@chienrongkhor/%E5%A6%82%E4%BD%95%E7%94%A8javascript%E5%8F%96%E5%BE%97%E7%B6%B2%E5%9D%80-url-d0c69934d2a9
pageUrl = pageUrl.replace("/", "");
// replace替換字元(替成,被替換)*/
var get_id = $("body").attr("id") + ".html"
console.log(get_id)

$(`a[href="${get_id}"]`).closest("li").addClass("bg-ff")
// ====================================================
$(".index-head").find(".bg_image_full").animate({ filter: "brightness(2)" }, 1000)

$(function () {
    $('.index-secend .text').find("h1").textillate();
    $('.index-third .text').find("h1").textillate();
})
