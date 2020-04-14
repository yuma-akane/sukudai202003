var park_img = ["./img/photo/712-534/a1.png", "./img/photo/712-534/a2.png", "./img/photo/712-534/a3.png"]
var take1 = ["./img/photo/712-534/a4.jpg", "./img/photo/712-534/a5.jpg", "./img/photo/712-534/8.png"]
var take2 = ["./img/photo/712-534/b2.png", "./img/photo/712-534/b1.png", "./img/photo/712-534/9.jpg"]
var take3 = ["./img/photo/712-534/6.png", "./img/photo/712-534/7.jpg", "./img/photo/712-534/8.png"]
var i = 0
var park = $(".park").find("li").width()
// =========================================================
$(window).scroll(function () {
    let scrolltop = $(window).scrollTop() / $(document).height() * 100
    let whe = $(document).height()
    console.log(scrolltop)

    title(1, 0)
    title(34, 1)
    title(52, 2)
    function title(show, eq) {
        if (scrolltop > show) { $(".title").eq(eq).addClass("add") }

    }

    atitle(2, 0)
    atitle(16, 1)
    atitle(17, 2)
    atitle(18, 3)
    atitle(23, 4)
    atitle(35, 5)
    function atitle(show, eq) {
        if (scrolltop > show) { $(".a-title").eq(eq).addClass("add") }
    }


    more(8, 20, 0)
    more(28, 38, 1)
    more(50, 62, 2)
    more(60, 67, 3)
    more(66, 76, 4)
    more(87, 100, 5)
    function more(unshow, show, eq) {
        if (scrolltop < unshow) {
            $(".more").eq(eq).find("a").removeClass("add")
        } else if (scrolltop < show) { $(".more").eq(eq).find("a").addClass("add") }
        else { $(".more").eq(eq).find("a").removeClass("add") }
    }

    ttitle(55, 0)
    ttitle(56, 1)
    ttitle(57, 2)
    ttitle(58, 3)
    function ttitle(show, eq) {
        if (scrolltop > show) { $(".t-title").eq(eq).addClass("add") }
    }


})

// ==================== hover ==========================================================================
$(".a-title").hover(function () {
    var atitle = $(this).find("h1").text()
    //h1要用.text ()
    switch (atitle) {
        case "規劃設計":
            $(".hover-change").find("img").attr("src", park_img[0])
            break;
        case "古樹名樹":
            $(".hover-change").find("img").attr("src", park_img[1])
            break;
        case "科研項目":
            $(".hover-change").find("img").attr("src", park_img[2])
            break;
    }
})

// ====================================================================
$(".light").find("img").attr("src", park_img[0])
$(".park").find("ul").css("width", park * 3)

for (i = 0; i < 3; i++) {
    $(".take-1 img").eq(i).attr("src", take1[i])
    $(".take-2 img").eq(i).attr("src", take2[i])
    $(".take-3 img").eq(i).attr("src", take3[i])
}

$(".pic-img").find(".mask-img").click(function () {
    let f = $(".light").find("img").attr("src")
    let pick = $(this).find("img").attr("src")
    console.log(pick)
    $(".light").find("img").attr("src", pick)
    $(".light").find("a").attr("href", pick)
    $(this).find("img").attr("src", f)
})
$(".left ").click(function () {

    if (i > 0) { i = i - 1 }

    else { i = 3 - 1; }
    $(".park").find("ul").css("left", 0 - i * park);
})
$(".right ").click(function () {

    if (i < 2) { i = i + 1; }

    else { i = 0; }
    $(".park").find("ul").css("left", 0 - i * park);

})
// ================================================================================
function boxJump() {
    let down = ""
    var randomDelay = [];
    for (var i = 0; i < 9; i++) {
        randomDelay[i] = Math.random() * 2000 + 1000;
        $(".ink").find("img").eq(i).animate({ opacity: "1" }, randomDelay[i])
            .animate({ opacity: "0" }, randomDelay[i]);

    }
    console.log(randomDelay[0] + "," + randomDelay[1]);
    // $(".ink").find("img").eq(1).animate({ opacity: "1", width: "5%" }, randomDelay).animate({ opacity: "0", width: "20%" }, randomDelay);
    setTimeout(boxJump, 5000);
}
boxJump();

// var monkey = document.querySelector(".ink").find("img");
// monkey.addEventListener("animationend", function () {
//     boxJump();
// }, false);


// ================================================================================

$('.vegas').vegas({
    timer: false,
    delay: 2000,
    slides: [
        { src: './img/photo/Cg-4jlLgiGyICnO3AAa3LUfc0mgAAEHUgHuws8ABrdF253.jpg' },
        { src: './img/photo/Cg-4jVLgiHKISc0aAAYOm_ahfnoAAEHUgKRdckABg6z975.jpg' },
        { src: './img/photo/IMG_1090.JPG' },
    ]
});
