$(document).ready(function () {
    //$('#txtBirthday').datepicker();
    //$("#cbxGender,#cbxStopFollow").selectmenu();
    //Khởi tạo một object nhà cung cấp
    var supplierJS = new SupplierJS();
})

var context;

class SupplierJS {
    //Hàm khởi tạo
    //Created by BQLINH (5/5/2019)
    constructor() {
        this.initEvents();
        this.dlgResgisterReader = new Dialog('.dlgResgisterReader', 800, 340, this);
        context = this;
    }

    // Xử lý sự kiện
    // Created by BQLINH (5/5/2019)
    initEvents() {
        $('#btnAdd').click(this.btnAddClick);
        $('#btnEdit').click(this.btnEditClick);
        $('#btnDelete').click(this.btnDeleteClick);
        $('#btnRefresh').click(this.btnRefreshClick);
        $('#btnHelp').click(this.btnHelpClick);
    }

    // Xử lý khi click vào nút thêm
    // Created by BQLINH (5/5/2019)
    btnAddClick() {
        //alert("Bạn vừa click vào nút thêm!");
        context.dlgResgisterReader.openDialog();
    }

    // Xử lý khi click vào nút sửa
    // Created by BQLINH (5/5/2019)
    btnEditClick() {
        alert("Bạn vừa click vào nút sửa!");
    }

    // Xử lý khi click vào nút xóa
    // Created by BQLINH (5/5/2019)
    btnDeleteClick() {
        alert("Bạn vừa click vào nút xóa!");
    }

    // Xử lý khi click vào nút nạp
    // Created by BQLINH (5/5/2019)
    btnRefreshClick() {
        alert("Bạn vừa click vào nút nạp!");
    }

    // Xử lý khi click vào nút giúp
    // Created by BQLINH (5/5/2019)
    btnHelpClick() {
        alert("Bạn vừa click vào nút giúp!");
    }
}
