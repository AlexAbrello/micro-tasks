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
   return (
      <div>
         <h3>{props.title}</h3>
         <ul>
            {props.tasks.map(e => <li><input type="checkbox" checked={e.isDone}/>{e.title}</li>)}
         </ul>
         <div>List of students:</div>
         <ul>
            {props.students.map(e => <li>{e}</li>)}
         </ul>
      </div>
   )
}

export default Tasks