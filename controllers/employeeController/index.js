const { EmployeeModel } = require('../../database/allModels');

/**
Route:      /employee
Method:     GET
Access:     Private
Description: Get all employees
Params:     none
**/
const getEmployees = async (req,res) => {
    try {
        const employees = await EmployeeModel.find();
        return res.status(200).json(employees);
    } catch (error) {
        return res.status(500).json({
            message: 'Error getting employees',
            error
        });
    }
}

/**
Route:      /employee
Method:     POST
Access:     Private
Description: Add a new employee
Params:     none
**/
const setEmployee = async (req,res) => {
    try {
        const employeeDetails = req.body;
        console.log(employeeDetails);
        
        if (!req.body) {
            return res.status(400).json({
                message: 'Details are required',
            });
        }

        const employee = await EmployeeModel.create(employeeDetails);
        return res.status(201).json(employee);

    } catch (error) {
        return res.status(500).json({
            message: 'Error adding employee',
            error
        });
    }
}

/**
Route:      /employee:id
Method:     PUT
Access:     Private
Description: Update an employee details
Params:     id
**/
const updateEmployee = async (req, res) => {
    try {
        const employee = await EmployeeModel.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({
                message: 'Employee not found',
            });
        }
        const updatedEmployee = await EmployeeModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).json(updatedEmployee);
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating employee',
            error
        });
    }
        
    }

/**
Route:      /employee:id
Method:     DELETE
Access:     Private
Description: Delete an employee
Params:     id
**/
const deleteEmployee = async (req, res) => {
    const employee = await EmployeeModel.findById(req.params.id);
    if (!employee) {
        return res.status(404).json({
            message: 'Employee not found',
        });
    }
    await employee.remove();
    return res.status(200).json(updatedEmployee);
}

export {
    getEmployees,
    setEmployee,
    updateEmployee,
    deleteEmployee
}