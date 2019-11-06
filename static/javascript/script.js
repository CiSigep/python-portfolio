$(() => {
    $("#sidebarOpen").click(() => {
        $(".sidebar").addClass("sidebar-active");
    });
    $("#sidebarClose").click(() => {
        $(".sidebar").removeClass("sidebar-active");
    });

    $("." + $("#contentBlock").attr("data-block") + "-link").addClass("active");
    $("#contentBlock").addClass("active-content").css({display: "block", opacity: "0"}).animate({opacity: 1, top: "0px"}, 500);
});