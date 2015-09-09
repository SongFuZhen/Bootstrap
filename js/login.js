window.onload = function () {
    var Username = document.getElementById("username");
    var Password = document.getElementById("password");

    var glyphiconuser = document.getElementById("glyphiconuser");
    var glyphiconpass = document.getElementById("glyphiconpass");

    var tipsuser = document.getElementById("tipsuser");
    var tipspass = document.getElementById("tipspass");

    var countuser = document.getElementById("countuser");
    var countpass = document.getElementById("countpass");

    Username.onkeyup = function () {
        countuser.style.visibility = "visible";
        countuser_length = getLength(this.value);
        countuser.innerHTML = countuser_length + "个字符";
    };

    Username.onblur = function () {
        if (this.value != "") {
            tipsuser.style.visibility = "visible";
            glyphiconuser.setAttribute("class", "glyphicon glyphicon-ok");
            glyphiconuser.innerHTML = "OK";
        } else if (this.value == "") {
            tipsuser.style.visibility = "visible";
            glyphiconuser.setAttribute("class", "glyphicon glyphicon-remove");
            glyphiconuser.innerHTML = '用户名不能为空';
        }
    };


    Password.onkeyup = function () {
        countpass.style.visibility = "visible";
        countpass_length = getLength(this.value);
        countpass.innerHTML = countpass_length + "个字符";
    };

    Password.onblur = function () {
        if (this.value != "") {
            tipspass.style.visibility = "visible";
            glyphiconpass.setAttribute("class", "glyphicon glyphicon-ok");
            glyphiconpass.innerHTML = "OK";
        } else if (this.value == "") {
            tipspass.style.visibility = "visible";
            glyphiconpass.setAttribute("class", "glyphicon glyphicon-remove");
            glyphiconpass.innerHTML = '密码不能为空　';
        }
    };


};

function getLength(str) {
    return str.replace(/[^\x00-\xff]/g, "xx").length;
}