import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Initiation</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="yellow">In Progress</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="yellow">In Progress</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="red">Suspended</Status>
              </td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
