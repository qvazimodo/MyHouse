import React, {useEffect, useState} from 'react';

export const EmployeesList = () => {
    const [employeesList, setEmployeesList] = useState([])

    useEffect(() => {
        fetch('http://localhost/admin/api/employees')
            .then(response => response.json())
            .catch(e => console.log(e))
            .then(employees => setEmployeesList(employees))
    })
    console.log(employeesList)
    return (
        <div className='container'>

        </div>
    )
}
