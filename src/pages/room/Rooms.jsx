import {Table} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { connectionApi } from '../../services/connectionApi'
import { ButtonDelRoom } from '../../components/ButtonDelRoom.jsx'

export function Rooms(){

    const [data, setData] = useState([])

    useEffect(() => {
        connectionApi.get('/room')
        .then(response => {
            setData(response.data)
        })
    }, [])
        
    return (
        <>
            <h1>Salas</h1>

            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Capacidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(room => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td>{room.description}</td>
                            <td>{room.capacity}</td>
                            <td><ButtonDelRoom id={room.id}/></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )   
}