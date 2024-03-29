
window.addEventListener('load', () => {
    const form = document.querySelector(".new_form");
    const input = document.querySelector(".new_task");
    const tasks = document.querySelector(".tasks");
   
    
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert('The Task Section Can Not Be Empty!');
            return;
        }
        else{
            const task_el = document.createElement('div');
            task_el.classList.add("task")



            const task_check_el = document.createElement("input");
            task_check_el.classList.add("checkbox");
            task_check_el.type = "checkbox";
            const task_input_el = document.createElement("input");
            task_input_el.classList.add("content");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");
            
            task_el.appendChild(task_check_el);
            task_el.appendChild(task_input_el);

            

            const task_actions_el = document.createElement("div");
            task_actions_el.classList.add("actions");
            
            const task_edit_el = document.createElement("button");
            task_edit_el.classList.add("edit");
            task_edit_el.innerText = "EDIT";

            const task_delete_el = document.createElement("button");
            task_delete_el.classList.add("delete");
            task_delete_el.innerText = "DELETE"
            
            task_actions_el.appendChild(task_edit_el);
            task_actions_el.appendChild(task_delete_el);

            task_el.appendChild(task_actions_el);

            


            tasks.appendChild(task_el);

            input.value = "";




            task_edit_el.addEventListener('click', () =>{
                if(task_edit_el.innerText == "EDIT"){
                    task_input_el.removeAttribute("readonly");
                    task_input_el.focus();
                    task_edit_el.innerText = "Save";
                }
                else{
                    task_input_el.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "EDIT";
                }
            })

            task_delete_el.addEventListener('click', () =>{
                tasks.removeChild(task_el);
            })

            let checkbox = task_check_el;
            checkbox.addEventListener( "change", () => {
                if(checkbox.checked){
                    task_input_el.classList.replace("content", "checked_content");
                    task_edit_el.classList.replace("edit", "disabled_edit");
                    task_edit_el.disabled = true;
                }
                else{
                    task_input_el.classList.replace("checked_content", "content");
                    task_edit_el.classList.replace("disabled_edit", "edit");
                    task_edit_el.disabled = false;
                }
            });
        }
    })
})

