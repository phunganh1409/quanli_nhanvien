
export function validateAccount(account) {
    const regex = /^[0-9]{4,6}$/;
    return regex.test(account);
  }
  
  export function validateName(name) {
    const regex = /^[a-zA-Z\s]+$/;
    return regex.test(name);
  }
  
  export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  
  export function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,10}$/;
    return regex.test(password);
  }
  
  export function validateWorkDay(workDay) {
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    return regex.test(workDay);
  }
  
  export function validateBasicSalary(salary) {
    return salary >= 1000000 && salary <= 20000000;
  }
  
  export function validatePosition(position) {
    return position === "Sếp" || position === "Trưởng phòng" || position === "Nhân viên";
  }
  
  export function validateWorkHours(workHours) {
    return workHours >= 80 && workHours <= 200;
  }
  