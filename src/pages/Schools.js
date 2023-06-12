import React, {useLayoutEffect, useState} from 'react'

const Schools = () => {
    const [schools, setSchools] = useState([])

    useLayoutEffect(() => {
        const getSchools = async() => {
            const res =await fetch('api/v1/school')
            const schools = await res.json()
            setSchools(schools)
        }
        getSchools().catch(e => {
            console.log('Error in schools: ' + e);
        })
    })

    return (
        <table>
            <thead>
            <th>School Name</th>
            <th>School Address</th>
            </thead>

            <tbody>
            {schools.map(school => {
                const {
                    schoolName,  schoolAddress} = school;
                return(
                    <tr>
                        <td>{schoolName}</td>
                        <td>{schoolAddress}</td>
                    </tr>
                )
            })}
            </tbody>

        </table>
    )
}

export default Schools;