import router from '../config/router';
import * as AdminController from '../controller/AdminController';



router.post('/admin-login',AdminController.admin_login);
router.post('/admin-register',AdminController.admin_register);
router.post('/add-user',AdminController.add_user);
router.get('/get-user/:email',AdminController.get_user);
router.post('/update-user',AdminController.update_user);
router.post('/delete-user',AdminController.delete_user);
router.post('/add-project',AdminController.add_project);
router.post('/delete-project',AdminController.delete_project);
router.post('/update-project-state',AdminController.update_project_state);

router.post('/add-team',AdminController.add_team);






module.exports = router;

