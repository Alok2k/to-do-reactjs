import React from 'react'

const NewTodoForm = (props) => {
const[desc,  setDesc] = React.useState("");
const[assigned, setAssigned] = React.useState("");

    const assignedChange = (event)=>{
        
        setAssigned(event.target.value);
    }

    const submitToDo = ()=>{
        if(desc!=='' && assigned !==''){
            props.addTodo(desc, assigned);
            setDesc('');
            setAssigned('');

        }
    }

  return (
   <div className='mt-5'>
    <form>
        <div className='mb-3'>
            <label className='form-label'>Assigned</label>
            <input type='text' className='form-label' required
            onChange={assignedChange}
            value={assigned}
            ></input>

        </div>
        <div className='mb-3'>
            <label className='form-label'>Task Description:</label>
            <textarea className='form-control' rows={4}
             required
             onChange={e =>setDesc(e.target.value)}
             value={desc}
             ></textarea>


        </div>
        <button type='button' className='btn btn-primary mt-3' onClick={submitToDo} >Submit</button>
    </form>
   </div>
  )
}

export default NewTodoForm