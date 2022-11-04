import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"

export function FindAct({ idSearch = "" }) {
  const [data, setData] = useState([])

  useEffect(() => {
    connectionApi.get(`/act/meet/${idSearch}`).then((response) => {
      setData(response.data)    
    })
  }, [])

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descripcion</th>
           
            
          </tr>
        </thead>
        <tbody>
          {data.map((act) => (
            <tr key={act.id}>
              <td>{act.id}</td>
              <td>{act.description}</td>
             
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}