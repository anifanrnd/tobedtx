
var urlData = (function () {
    var url = "https://script.google.com/macros/s/AKfycbxhguxFUlY7yCZF4w-ogy1rX2MJY1xayDM8yHfmJ62pHyqlDhc/exec";
    return {
        get: function () {
            return url;
        }
    }
})();


var objdata = {
    obj: {
        title: '',
        content: '',
        email: ''
    },
    check: false,
    set setObj(val) {
        this.obj.title = val[0];
        this.obj.content = val[1];
        this.obj.email = val[2];
        if (this.obj.content == '' || this.obj.title == '' || this.obj.email == '') {
            this.check = false;
            return this.check;
        } else {
            this.check = true;
            return this.check;
        }
    },
    get getObj() {
        return this.obj;
    },
    get checkObj() {
        return this.check;
    },

}

function submit() {
    var title = document.getElementById('contactTit').value;
    var content = document.getElementById('contactTxt').value;
    var phone = document.getElementById('userMail').value;
    console.log(title, content)
    objdata.setObj = [title, content, phone]
    if (!objdata.checkObj) {
        alert('내용을 전부 채워주세요')
        return;
    } else {
        $.ajax({
            url: urlData.get(),
            data: objdata.getObj,
            type: "POST",
            success: successAjax()
        });
    }
}
function successAjax() {
    console.log(123123)
    alert('이메일이 전송되었습니다.');
    document.getElementById('contactTit').value = "";
    document.getElementById('contactTxt').value = "";
    document.getElementById('userMail').value = "";
}
