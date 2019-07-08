(function(){
    addFunctionButton()

    var $formulario = document.querySelector('#form-square')

    var $campoTarefa = document.querySelector('#cTarefa')
    var $avisoDisplay = document.getElementsByTagName('small')[0]

        $formulario.addEventListener('submit', function(event){
            event.preventDefault()
            if($campoTarefa.value == ""){
                $avisoDisplay.style.display = 'block'
            }else{
                $avisoDisplay.style.display = 'none'
                createTask()
                addFunctionButton()
                $campoTarefa.value = ""
            }   
        })

    function createTask(){

        var $table = document.getElementById('table-body')
        var task = $campoTarefa.value
        
        var $tr = document.createElement('tr')
            $tr.classList.add("task-row")

        var $td1 = document.createElement('td')
            $td1.classList.add("task")
            $td1.innerText = task

        var $td2 = document.createElement('td')
        var $buttonRemove = document.createElement('button')
            $buttonRemove.classList.add("button-remove")
            $buttonRemove.innerText = 'Remover'
            $td2.appendChild($buttonRemove)

            $tr.append($td1, $td2)
        
            $table.appendChild($tr)
            console.log($tr)
    }

    function addFunctionButton(){
        var $table = document.getElementById('table-body')
        var $buttonsRemove = document.querySelectorAll('.button-remove')
        var $tdsTasks = document.querySelectorAll('.task')
        var $trs = document.querySelectorAll('.task-row')
    
        for(let i=0; i<$tdsTasks.length;i++){
            $tdsTasks[i].addEventListener('click', function(event){
                event.stopImmediatePropagation()
                $tdsTasks[i].classList.toggle('through')
            })

            $buttonsRemove[i].addEventListener('click', function(evt){
                evt.stopImmediatePropagation()
                console.log('Excluimos a tarefa: '+$trs[i].innerText)
                $table.removeChild($trs[i])
                
            })
        }
    }



})()