import { useState, useEffect } from "react"
import { Table } from "react-bootstrap"
import { connectionApi } from "../../services/connectionApi"

export function FindMeet({ idSearch = "" }) {
  const [data, setData] = useState([])

  useEffect(() => {
    connectionApi.get(`/meet/room/${idSearch}`).then((response) => {
      setData(response.data)    
    })
  }, [])

  return (
    <>
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
          {data.map((meet) => (
            <tr key={meet.id}>
              <td>{meet.id}</td>
              <td>{meet.affair}</td>
              <td>{meet.dateMeet}</td>
              <td>{meet.room.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
