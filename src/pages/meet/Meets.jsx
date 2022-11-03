import {Table} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { connectionApi } from '../../services/connectionApi'
import { ButtonDelMeet } from '../../components/ButtonDelMeet.jsx'

export function Meets(){

    const [data, setData] = useState([])

    useEffect(() => {
        connectionApi.get('/meet')
        .then(response => {
            setData(response.data)
        })
    }, [])
        
    return (
        <>
            <h1>Reuniones</h1>

            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Asunto</th>
                        <th>Fecha y hora</th>
                        <th>Sala</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(meet => (
                        <tr key={meet.id}>
                            <td>{meet.id}</td>
                            <td>{meet.affair}</td>
                            <td>{meet.dateMeet}</td>
                            <td>{meet.room.description}</td>
                            <td><ButtonDelMeet id={meet.id}/></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )  
}     