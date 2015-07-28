const SAFETYTHIRD = ["Abra", "Akwasi", "Antonio|Tony", "Bena", "Clare|Claire", "Colombo", "David Wong", "Diits|Aditya", "Elton", "Eman", "Eurah", "Favela|Falafel", "Fish|Ryan", "Harlin", "James", "Jimmy", "Jonathan|Uesato", "Josh Josh", "Josh R.T.", "Julia", "Junda|William", "Justin", "Kristina", "Kyle", "Landon", "Lauren", "Linda", "Melanie", "Noelle", "Norman", "Posh Josh|Frosh Josh|Soph Josh", "Rachel", "Raymond", "Reif", "Runpeng", "Sophie", "Staly", "Tian", "Tiffany", "Tracy", "Tricia", "Victor", "Xuan", "Yaning", "Zoe"];
const ROOT = "https://runpengliu.com/safetythird-ext/img/";

var regexes = [];
var names = [];

for (i in SAFETYTHIRD) {
    regexes.push(new RegExp(SAFETYTHIRD[i], "i"))
    names.push(SAFETYTHIRD[i].toLowerCase().split("|")[0].replace(/[^\w]+/g, ""));
}

var img = document.createElement('img');
var position = -800;

$(img).css({
    "height": "50%",
    "bottom": 0,
    "position": "fixed",
    "z-index": 10000,
    "right": position + "px"
});

var log = "";
var animate;

img.onload = function() {
    animate = setInterval(moveTheImage, 50);
}
img.onerror = function() {
    img.src = ROOT + "upload.png";
    img.onload = function() {
        animate = setInterval(moveTheImage, 50);
    }
}

document.addEventListener('keypress', function(e) {
    if (!$(e.target).is("input") && !$(e.target).is("textarea")) {
        log += String.fromCharCode(e.which);
        for (i in names) {
            if (regexes[i].test(log)) {
                log = "";
                $(img).attr("src", ROOT + names[i] + ".png");
                $(img).show();
                break;
            }
        }
    }
})

var moveTheImage = function() {
    if (position < -1) {
        position *= 0.3;
    } else {
        setTimeout(function() {
            $(img).fadeOut(function() {
                $(img).css("right", "-800px");
            });
        }, 5000);
        clearInterval(animate);
    }
    $(img).css("right", position + "px");
}

$("html").append(img);