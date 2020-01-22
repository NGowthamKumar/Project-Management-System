import router from '../config/router';
import * as EmployeeController from '../controller/EmployeeController';



router.get('/project/:project_name',EmployeeController.get_project);
router.get('/projects',EmployeeController.get_projects);
router.post('/employee-login',EmployeeController.employee_login);
router.post('/employee-register',EmployeeController.employee_register);


module.exports = router;
