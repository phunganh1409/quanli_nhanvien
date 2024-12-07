
export default class NhanVien {
    constructor(account, name, email, password, workDay, basicSalary, position, workHours) {
      this.account = account;
      this.name = name;
      this.email = email;
      this.password = password;
      this.workDay = workDay;
      this.basicSalary = basicSalary;
      this.position = position;
      this.workHours = workHours;
    }
  

    calcTotalSalary() {
      let totalSalary = 0;
      if (this.position === "Sếp") {
        totalSalary = this.basicSalary * 3;
      } else if (this.position === "Trưởng phòng") {
        totalSalary = this.basicSalary * 2;
      } else if (this.position === "Nhân viên") {
        totalSalary = this.basicSalary;
      }
      return totalSalary;
    }
  
    
    classifyEmployee() {
      if (this.workHours >= 192) {
        return "Nhân viên xuất sắc";
      } else if (this.workHours >= 176) {
        return "Nhân viên giỏi";
      } else if (this.workHours >= 160) {
        return "Nhân viên khá";
      } else {
        return "Nhân viên trung bình";
      }
    }
  }
  