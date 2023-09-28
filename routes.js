const express=require('express')
const router=express.Router()
const employee=require('./Employee/employeeController')
const desig=require('./Designation/desigController')
const applicant=require('./Applicant/applicantController')
const jobs=require('./Employee/HR/jobController')
const hr=require('./Employee/HR/hrController')
const pm=require('./Employee/PM/pmController')

//add complaint, view payroll,


//employee routes
router.post('/registerEmployee',employee.registerEmp)//done
router.post('/loginEmployee',employee.login)//done
router.post('/viewEmployees',employee.viewEmps)//done
router.post('/viewEmpById/:id',employee.viewEmpById)//done
router.post('/editEmployeeById/:id',employee.editEmpById)//done
router.post('/forgotPwdEmployee',employee.forgotPwd)//done
router.post('/deleteEmployeeById/:id',employee.deleteUserById)//done
router.post('/viewComplaintStatus/:id',employee.viewComplaintStatus)//done
router.post('/addComplaint/:id',employee.registerComplaint)
router.post('/viewPayrollByEmpId/:id',employee.viewPayrollByEmpId)


//designation
router.post('/viewallDesignationforAdmin',desig.viewAllDesigsforAdmin)
router.post('/addDesignation',desig.addDesig)
router.post("/viewAllDesginayions",desig.viewAllDesigs)
router.post("/editDesignationById/:id",desig.editDesigById)
router.post("/deleteDesignationById/:id",desig.delDesig)
router.post("/viewDesignationById/:id",desig.viewDesigById)
router.post("/viewAllDesigNames",desig.viewAllDesigNames)


//applicant routes
router.post('/registerApplicant',applicant.registerApplicant)//done
router.post('/loginApplicant',applicant.login)//done
router.post('/viewApplicant/:id',applicant.viewApplicantById)//done
router.post('/editApplicantsById/:id',applicant.editApplicantById)
router.post('/forgotPwdApplicant',applicant.forgotPwd)
router.post('/deleteApplicantById/:id',applicant.deleteUserById)//done
router.post('/viewApplicants',applicant.viewApplicants)//done
router.post('/applyJob',applicant.applyJob)
router.post('/viewApplicantInterviewById/:id',applicant.viewApplicantInterviewById)

//job routes
router.post('/addJob',jobs.addJob)
router.post('/viewJobByCat/:category',jobs.viewJobByCat)
router.post('/viewJobById/:id',jobs.viewJobById)
router.post('/deleteJobById/:id',jobs.deleteJobById)


router.post('/viewPendingComplaints',hr.viewPendingComplaints)
router.post('/updateComplaintStatus/:id',hr.updateComplaintStatus)

router.post('/viewPendingApplns',hr.viewPendingApplns)
router.post('/viewInterviews',hr.viewInterviews)
router.post('/scheduleInterview',hr.scheduleInterview)
router.post('/generatPayroll/:id',hr.generatPayroll)
router.post('/searchBySkill',hr.searchBySkill)
router.post('/viewLeavesByEmpid/:id',hr.viewLeavesByEmpid)


//leave and payroll
router.post('/applyLeave/:id',employee.applyLeave)//done

//projects
router.post('/addProject/:id',pm.addProject)
router.post('/viewAllPrjs',pm.viewAllPrjs)
router.post('/viewAllProjectforPm/:id',pm.viewAllProjectforPm)
router.post('/viewProjByEmpId/:id',pm.viewProjByEmpId)
router.post('/editProjyId/:id',pm.editProjyId)
router.post('/delProj/:id',pm.delProj)
router.post('/viewProjById/:id',pm.viewProjById)
router.post('/updatePercentage/:id',pm.updatePercentage)

module.exports=router