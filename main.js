
import NhanVien from "./QuanLyNhanVien/nhanvien.js";
import {
  validateAccount,
  validateName,
  validateEmail,
  validatePassword,
  validateWorkDay,
  validateBasicSalary,
  validatePosition,
  validateWorkHours
} from "./validation.js";

// Danh sách nhân viên
let employeeList = [];

const accountInput = document.getElementById("tknv");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const workDayInput = document.getElementById("datepicker");
const basicSalaryInput = document.getElementById("luongCB");
const positionInput = document.getElementById("chucvu");
const workHoursInput = document.getElementById("gioLam");
const tableBody = document.getElementById("tableDanhSach");

// Hàm thêm nhân viên
function addEmployee() {
  const account = accountInput.value;
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const workDay = workDayInput.value;
  const basicSalary = parseInt(basicSalaryInput.value);
  const position = positionInput.value;
  const workHours = parseInt(workHoursInput.value);

  if (!validateAccount(account)) {
    alert("Tài khoản phải từ 4 đến 6 ký số");
    return;
  }
  if (!validateName(name)) {
    alert("Tên nhân viên phải là chữ và không để trống");
    return;
  }
  if (!validateEmail(email)) {
    alert("Email không hợp lệ");
    return;
  }
  if (!validatePassword(password)) {
    alert("Mật khẩu phải từ 6 đến 10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa và 1 ký tự đặc biệt");
    return;
  }
  if (!validateWorkDay(workDay)) {
    alert("Ngày làm phải đúng định dạng mm/dd/yyyy");
    return;
  }
  if (!validateBasicSalary(basicSalary)) {
    alert("Lương cơ bản phải từ 1,000,000 đến 20,000,000");
    return;
  }
  if (!validatePosition(position)) {
    alert("Chức vụ phải là Giám đốc, Trưởng Phòng, hoặc Nhân Viên");
    return;
  }
  if (!validateWorkHours(workHours)) {
    alert("Giờ làm trong tháng phải từ 80 đến 200 giờ");
    return;
  }

  // Tạo đối tượng nhân viên mới
  const newEmployee = new NhanVien(account, name, email, password, workDay, basicSalary, position, workHours);


  employeeList.push(newEmployee);
  renderEmployeeList();
  resetForm();
}


function renderEmployeeList() {
  tableBody.innerHTML = "";
  employeeList.forEach((employee, index) => {
    const row = `
      <tr>
        <td>${employee.account}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.workDay}</td>
        <td>${employee.position}</td>
        <td>${employee.calcTotalSalary()}</td>
        <td>${employee.classifyEmployee()}</td>
        <td>
          <button class="btn btn-danger" id="btnXoa" data-index="${index}">Xóa</button>
          <button class="btn btn-warning" id="btnCapNhat1" data-index="${index}">Cập nhật</button>
        </td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}


function deleteEmployee(index) {
  employeeList.splice(index, 1);
  renderEmployeeList();
}


function resetForm() {
  accountInput.value = "";
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  workDayInput.value = "";
  basicSalaryInput.value = "";
  positionInput.value = "Chọn chức vụ";
  workHoursInput.value = "";
}
function editEmployee(index) {
    if (index < 0 || index >= employeeList.length) {
        alert("Nhân viên không tồn tại!");
        return;
    }

    const employee = employeeList[index];


    document.getElementById("accountInput").value = employee.account;
    document.getElementById("nameInput").value = employee.name;
    document.getElementById("emailInput").value = employee.email;
    document.getElementById("passwordInput").value = employee.password;
    document.getElementById("workDayInput").value = employee.workDay;
    document.getElementById("basicSalaryInput").value = employee.basicSalary;
    document.getElementById("positionInput").value = employee.position;
    document.getElementById("workHoursInput").value = employee.workHours;
    const updateButton = document.getElementById("btnCapNhat");
    updateButton.onclick = function () {
        updateEmployee(index);
    };
}


// Hàm cập nhật thông tin nhân viên
function updateEmployee(index) {
  const account = accountInput.value;
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const workDay = workDayInput.value;
  const basicSalary = parseInt(basicSalaryInput.value);
  const position = positionInput.value;
  const workHours = parseInt(workHoursInput.value);

  // Cập nhật thông tin nhân viên
  employeeList[index] = new NhanVien(account, name, email, password, workDay, basicSalary, position, workHours);
  renderEmployeeList();
  resetForm();
}


document.getElementById("btnThemNV").addEventListener("click", addEmployee);

document.getElementById("tableDanhSach").addEventListener("click", function(e) {
  if (e.target && e.target.id === "btnXoa") {
    const index = e.target.getAttribute("data-index"); 
    deleteEmployee(index);
  }
  
});
