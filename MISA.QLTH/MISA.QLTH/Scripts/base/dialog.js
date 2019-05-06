//Class dialog 
//Created by BQLINH (5/5/2019)
class Dialog {
    //Hàm khởi tạo
    //Tham số (element, width, height, buttons, scope) : (phần tử, độ rộng phần tử, độ cao phần tử, các buttons truyền vào, biến phạm vi) 
    //Created by BQLINH (5/5/2019)
    constructor(element, width, height, buttons, scope) {
        //debugger;
        if (!buttons) {
            buttons = this.buildButtons(scope ? scope : this);
        }
        this.dialog = $(element).dialog({
            autoOpen: true,
            height: height,
            width: width,
            modal: true,
            buttons: buttons,
            close: function () {

            }
        });
    }
    //Hàm tạo buttons
    //Created by BQLINH (5/5/2019)
    buildButtons(scope) {
        var buttons = buttons = [{
            text: 'Cất',
            icons: {
                primary: "ui-icon-check"
            },
            class: "",
            id: "btnSave",
            click: eval(scope)['btnSaveClick']
        }, {
            text: 'Hủy',
            icons: {
                primary: "ui-icon-cancel"
            },
            click: function () {
                $(this).dialog('close');
            }
        },
        {
            text: 'Giúp',
            icons: {
                primary: "ui-icon-cancel"
            },
            click: function () {
                $(this).dialog('close');
            }
        }];
        return buttons;
    }

    //Hàm xử lý khi bấm cất trên dialog
    //Created by BQLINH (5/5/20)
    save() {
        alert('Lưu');
    }

    //Hàm xử lý khi bấm hủy trên dialog
    //Created by BQLINH (5/5/2019)
    close() {
        alert('Hủy');
    }

    //Hàm xử lý khi bấm giúp trên dialog
    //Created by BQLINH (5/5/20)
    help() {
        alert('Giúp');
    }
}