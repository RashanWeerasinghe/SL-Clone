const connection = require("../config/connection");
connection.connect();

class amazonModel {
  static getEmployee(companyId, callback) {
    connection.query(
      "select*from employee where company_id=?",
      [companyId],
      callback
    );
  }
  static getEmpProjects(employee_id, callback) {
    connection.query(
      "select project.project_id,project.project_name from project  join project_has_employee on project_has_employee.project_project_id=project.project_id where project_has_employee.employee_id=? ",
      [employee_id],
      callback
    );
  }
  static postEmpProjectCreate(project_id, employee_id, callback) {
    connection.query(
      "insert into project_has_employee(project_project_id,employee_id) values(?,?)",
      [project_id, employee_id],
      callback
    );
  }
}

module.exports = amazonModel;
