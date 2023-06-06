import { HistoryContainer, HistoryList } from './styles'

export function History() {
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
              <td>Completed</td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>Completed</td>
            </tr>

            <tr>
              <td>Task</td>
              <td>20 minutes</td>
              <td>Two months ago</td>
              <td>Completed</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
