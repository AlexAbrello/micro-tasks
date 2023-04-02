import { link } from "fs"

type TasksPropsType = {
   title: string,
   students: Array<string>,
   tasks: Array<TasksType>
}

type TasksType = {
   taskId: number,
   title: string,
   isDone: boolean
}

function Tasks(props: TasksPropsType) {

  const tasks = props.tasks.map((e, index) => <li key={index}><input type="checkbox" checked={e.isDone}/>{e.title}</li>)
  const students = props.students.map((e, index) => <li key={index}>{e}</li>)

   return (
      <div>
         <h3>{props.title}</h3>
         <ul>
           {tasks}
         </ul>
         <div>List of students:</div>
         <ul>
            {students}
         </ul>
      </div>
   )
}

export default Tasks