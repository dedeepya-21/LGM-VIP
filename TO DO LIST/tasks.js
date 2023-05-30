document.getElementById("btn").onclick=function()
{
if(document.getElementById("fortask").value.length==0)
{
    alert("enter a task to your to do list");
}
else{
    document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#fortask').value}
                </span>
                <button class="delete" id="remove">
                <i class="fa fa-close" style="font-size:24px"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }
        document.querySelector("#fortask").value = "";
    }
}
