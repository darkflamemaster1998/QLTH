//Class dialog 
//Created by BQLINH (5/5/2019)
class Dialog {
    //Hàm khởi tạo
    //Tham số (element, width, height, buttons, scope) : (phần tử, độ rộng phần tử, độ cao phần tử, các buttons truyền vào, biến phạm vi) 
    //Created by BQLINH (5/5/2019)
    constructor(element, width, height, scope) {
        this.dialog = $(element).dialog({
            autoOpen: false,
            height: height,
            width: width,
            modal: true,
            buttons: {
                "Giúp": scope.helpDialog,
                "Cất": scope.saveAddCustomer,
                "Hủy bỏ": scope.closeDialog
            },
        });
    }

    //Hàm mở dialog
    //Created by BQLINH (6/5/2019)
    openDialog() {
        this.dialog.dialog("open");
    }

    //Close a dialog
    // Created by NBDUONG (6/5/2019)
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