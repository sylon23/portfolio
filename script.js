var str = "HTML5 CSS3/Bootstrap JavaScript Vue.Js jQuery Loading...";
var main = document.getElementById("skillsBox")
var spans =  ' <li> <span>' + str.split(/\s+/).join(' </span></li> <li>  <span>') + '</span> </li> ';
console.log(spans)

$(spans).hide().appendTo(main).each(function(i) {
    $(this).delay(1000 * i).fadeIn();
}); 