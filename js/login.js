window.onload = function () {

    /*登陆 用户名  密码控制*/
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


//控制导航栏  切换
    var navbar_tabs = document.getElementById("navbar_tabs").getElementsByTagName('li');
    var tabs_Home_li = navbar_tabs[0];
    var tabs_Profile_li = navbar_tabs[1];
    var tabs_Message_li = navbar_tabs[2];

    tabs_Home_li.onclick = function () {
        tabs_Profile_li.removeAttribute("class");
        tabs_Message_li.removeAttribute("class");
        tabs_Home_li.removeAttribute("class");
        tabs_Home_li.setAttribute("class", "active");
        tabs_Home_li.style.backgroundColor = "bule";
    };

    tabs_Profile_li.onclick = function () {
        tabs_Home_li.removeAttribute("class");
        tabs_Message_li.removeAttribute("class");
        tabs_Profile_li.removeAttribute("class");
        tabs_Profile_li.setAttribute("class", "active");
    };

    tabs_Message_li.onclick = function () {
        tabs_Home_li.removeAttribute("class");
        tabs_Message_li.removeAttribute("class");
        tabs_Profile_li.removeAttribute("class");
        tabs_Message_li.setAttribute("class", "active");
    };


    var navbar = document.getElementById("navbar").getElementsByTagName('li');
    var Home_li = navbar[0];
    var Profile_li = navbar[1];
    var Message_li = navbar[2];

    Home_li.onclick = function () {
        Profile_li.removeAttribute("class");
        Message_li.removeAttribute("class");
        Home_li.removeAttribute("class");
        Home_li.setAttribute("class", "active");
    };

    Profile_li.onclick = function () {
        Home_li.removeAttribute("class");
        Message_li.removeAttribute("class");
        Profile_li.removeAttribute("class");
        Profile_li.setAttribute("class", "active");
    };

    Message_li.onclick = function () {
        Home_li.removeAttribute("class");
        Message_li.removeAttribute("class");
        Profile_li.removeAttribute("class");
        Message_li.setAttribute("class", "active");
    };


    var navbar_pills = document.getElementById("navbar_pills").getElementsByTagName('li');
    var pills_Home_li = navbar_pills[0];
    var pills_Profile_li = navbar_pills[1];
    var pills_Message_li = navbar_pills[2];

    pills_Home_li.onclick = function () {
        pills_Home_li.removeAttribute("class");
        pills_Profile_li.removeAttribute("class");
        pills_Message_li.removeAttribute("class");
        pills_Home_li.setAttribute("class", "active");
    };

    pills_Profile_li.onclick = function () {
        pills_Home_li.removeAttribute("class");
        pills_Message_li.removeAttribute("class");
        pills_Profile_li.removeAttribute("class");
        pills_Profile_li.setAttribute("class", "active");
    };

    pills_Message_li.onclick = function () {
        pills_Home_li.removeAttribute("class");
        pills_Message_li.removeAttribute("class");
        pills_Profile_li.removeAttribute("class");
        pills_Message_li.setAttribute("class", "active");
    };

    //控制进度条
    var Start = document.getElementById("Start");
    var progress = document.getElementById("progress");
    var font_progress = progress.getElementsByTagName('b');
    Start.onclick = function () {
        for (var i = 0; i <= 100; i++) {
            font_progress[0].innerHTML = i + "%";
            progress.style.width = i + "%";
        }
    };

    var Start_Time = document.getElementById("Start_Time");
    var progress_time = document.getElementById("progress_time");
    var font_progress_time = progress_time.getElementsByTagName('b');
    var pro = 0;

    var test = document.getElementById("test");
    test.onclick = function () {
        alert(pro);
    };
    function Fun_Start_Time() {
        font_progress_time[0].innerHTML = pro + "%";
        progress_time.style.width = pro + "%";
        if (pro < 50) {
            progress_time.setAttribute("class", "progress-bar progress-bar-info progress-bar-striped active");
            setTimeout(Fun_Start_Time, 100);
        } else if (pro < 80) {
            progress_time.setAttribute("class", "progress-bar progress-bar-success progress-bar-striped active");
            setTimeout(Fun_Start_Time, 100);
        }
        else if (pro < 100) {
            progress_time.setAttribute("class", "progress-bar progress-bar-danger progress-bar-striped active");
            setTimeout(Fun_Start_Time, 100);
        }
        else {
            Start_Time.disabled = "disabled";
        }
        pro++;
    }

    Start_Time.onclick = function () {
        Fun_Start_Time();
    }
};

//计算汉字字符数  1个汉字=2个字符
function getLength(str) {
    return str.replace(/[^\x00-\xff]/g, "xx").length;
}