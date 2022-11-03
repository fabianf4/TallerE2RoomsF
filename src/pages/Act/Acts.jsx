import {Table} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import { connectionApi } from '../../services/connectionApi'
import { ButtonDelAct } from '../../components/ButtonDelAct.jsx'

export function Acts(){

    const [data, setData] = useState([])

    useEffect(() => {
        connectionApi.get('/act')
        .then(response => {
            setData(response.data)
        })
    }, [])
        
    return (
        <>
            <h1>Actas</h1>

            <Table>
                <thead>
                    <tr>    
                        <th>Id</th>
                        <th>Descripcion</th>
                        <th>Reunion</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(act => (
                        <tr key={act.id}>
                            <td>{act.id}</td>
                            <td>{act.description}</td>
                            <td>{act.meet.affair}</td>
                            
                            <td><ButtonDelAct id={act.id}/></td>
                        </tr>
                    ))}
                </tbody>

            </Table>
        </>
    )  
}     