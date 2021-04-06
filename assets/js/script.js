var menubtn = $(" #menubtn ");
var btnclick = $(" #btnclicker ");
var updown = true;


btnclick.click(function() {
    if (updown === true) {
        menubtn.removeClass('fa-sort-down');
        menubtn.addClass('fa-sort-up');
        updown = false;
    }
    else if (updown === false) {
        menubtn.removeClass('fa-sort-up');
        menubtn.addClass('fa-sort-down');
        updown = true;
    }
});