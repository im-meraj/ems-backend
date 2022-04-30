import { DepartmentModel } from "../../database/allModels";

/**
Route:      /department
Method:     GET
Access:     Private
Description: Get all departments
Params:     none
**/
const getDepartments = async (req, res) => {
    try {
        const departmets = await DepartmentModel.find();
        return res.status(200).json(departmets);
    } catch (error) {
        return res.status(500).json({
            message: 'Error getting departmets',
            error
        });
    }
}

/**
Route:      /department
Method:     POST
Access:     Private
Description: Add a new department
Params:     none
**/
const setDepartment = async (req, res) => {
    try {
        const departmentDetails = req.body;
        console.log(departmentDetails);

        if (!req.body) {
            return res.status(400).json({
                message: 'Details are required',
            });
        }

        const department = await DepartmentModel.create(departmentDetails);
        return res.status(201).json(department);

    } catch (error) {
        return res.status(500).json({
            message: 'Error adding department',
            error
        });
    }
}

/**
Route:      /department:id
Method:     PUT
Access:     Private
Description: Update an department details
Params:     id
**/
const updateDepartment = async (req, res) => {
    try {
        const department = await DepartmentModel.findById(req.params.id);
        if (!department) {
            return res.status(404).json({
                message: 'Department not found',
            });
        }
        const updatedDepartment = await DepartmentModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        return res.status(200).json(updatedDepartment);
    } catch (error) {
        return res.status(500).json({
            message: 'Error updating department',
            error
        });
    }

}

/**
Route:      /department:id
Method:     DELETE
Access:     Private
Description: Delete an department
Params:     id
**/
const deleteDepartment = async (req, res) => {
    const department = await DepartmentModel.findById(req.params.id);
    if (!department) {
        return res.status(404).json({
            message: 'Department not found',
        });
    }
    await department.remove();
    return res.status(200).json({
        message: 'Department deleted successfully',
    });
}

export {
    getDepartments,
    setDepartment,
    updateDepartment,
    deleteDepartment
}