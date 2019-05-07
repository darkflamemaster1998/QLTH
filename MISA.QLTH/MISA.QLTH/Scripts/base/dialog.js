//Class dialog 
//Created by BQLINH (5/5/2019)
class Dialog {
    context = this;
    //Hàm khởi tạo
    //Tham số (element, width, height, buttons, scope) : (phần tử, độ rộng phần tử, độ cao phần tử, các buttons truyền vào, biến phạm vi) 
    //Created by BQLINH (5/5/2019)
    constructor(element, width, height, title, buttons, scope) {
        //if (!buttons) {
        //    buttons = this.buildButtons(scope ? scope : this);
        //}
        this.dialog = $(element).dialog({
            autoOpen: true,
            height: height,
            width: width,
            resizable: false,
            modal: true,
            title: title,
            buttons: buttons,
            buttons:
            {
                //"Giúp": scope.helpDialog,
                "Cất": (scope ? scope.btnSaveClick : this.save),
                "Sửa": (scope ? scope.btnSaveClick : this.save),
                "Hủy bỏ": this.closeDialog,
            },
        });

        //đặt icon cho các button
       
    }

    // Xây dựng button
    // Created by BQLINH (7/5/2019)
    buildButtons(scope) {
        var buttons = buttons = [{
            text: 'Cất',
            icons: {
                primary: "ui-icon-check"
            },
            class: "save-button",
            id: "btnSave",
            click: eval(scope)['btnSaveClick']
        },
        {
            text: 'Hủy bỏ',
            icons: {
                primary: "ui-icon-cancel"
            },
            id: "btnCancel",
            click: context.closeDialog

        },
        {
            text: 'Giúp',
            id: "btnHelp",
            icons: {
                primary: "ui-icon-cancel"
            },
            click: eval(scope)['btnHelpClick']
        }];
        return buttons;
    }

    //Hàm mở dialog
    //Created by BQLINH (6/5/2019)
    openDialog() {
        this.dialog.dialog("open");
    }

    //Close a dialog
    // Created by BQLINH(6/5/2019)
    closeDialog() {
        this.dialog.dialog('close');
        //$('#formDetail input').removeClass('border-red');
    }

    //Hàm xử lý khi bấm cất trên dialog
    //Created by BQLINH (6/5/2019)
    save() {
        alert('Lưu');
    }

    //Hàm xử lý khi bấm hủy trên dialog
    //Created by BQLINH (6/5/2019)
    close() {
        alert('Hủy');
    }

    //Hàm xử lý khi bấm giúp trên dialog
    //Created by BQLINH (6/5/2019)
    help() {
        alert('Giúp');
    }
}
var context;