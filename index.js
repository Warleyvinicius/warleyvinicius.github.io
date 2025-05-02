const btnaddExp = document.getElementById('addExp')
const btCurso = document.getElementById('emCurso')
const MyJob = document.getElementById('myJob')
const btnAddSch = document.getElementById('adc')
const newAdcInf = document.getElementById('newInfAdc')
const form = document.getElementById('form')
const adcComplement = document.getElementById('adcComplement')
const currentJob = document.getElementById('MyJob')
const labelMyjob = document.getElementById('labelMyjob')
const cep = document.getElementById('cep')
let cont = 0

//------------------------------------------------------------------------/

//Evento do botão Adicionar Emprego Atual

MyJob.addEventListener('click',(e)=>{
  e.preventDefault()
  labelJob()
  myJob()
  bttOff()
})


//Desativar Botao Adicionar Emprego Atual
function bttOff() {
  MyJob.disabled = true
}

//Adicionar Label Emprego Atual
function labelJob () {
  
const labelJob = document.createElement('div')
labelJob.setAttribute('id','mJob')
newExp.appendChild(labelJob)
}

//Adicionar Campos Emprego Atual
function myJob() {
  

  //criando Inputs 


  const labelJobs = document.getElementById('mJob')
   
    // label EMPRESA 
    
  const Empresa = document.createElement('div')
  const titulo = document.createElement('h4')
  titulo.setAttribute('id','tituloMyJob')
  titulo.textContent = 'Meu Emprego Atual'
  Empresa.setAttribute('id','labelMyjob')
  Empresa.setAttribute('class','labelMyjob ')
  Empresa.textContent = 'Empresa: '
  labelJobs.appendChild(titulo)
  labelJobs.appendChild(Empresa)

   
// Input Empresa
  const empresa = document.createElement('input')
  empresa.setAttribute('type','text')
  empresa.setAttribute('name','empresa ')
  empresa.setAttribute('id','empresa') 
  Empresa.append(empresa)
   
   
  // Label Cargo
  const Cargo = document.createElement('label')
  Cargo.setAttribute('for','cargo')
  Cargo.setAttribute('name','Cargo')
  empresa.setAttribute('for','empresa')
  Cargo.setAttribute('id','Cargo')
  Cargo.textContent = 'Função: '
  Empresa.appendChild(Cargo)
  
  // Input Cargo
  const cargo = document.createElement('input')
  cargo.setAttribute('type' , 'text')
  cargo.setAttribute('name', 'cargo')
  cargo.setAttribute('id','cargo')
  Cargo.appendChild(cargo)
  
  // label Atividade
  const Atividade = document.createElement('label')
  Atividade.setAttribute('id','Atividade')
  Atividade.setAttribute('for','atividade')
  Atividade.textContent = 'Atividade: '
  Empresa.appendChild(Atividade)
  
  // Input atividade
  const atividade = document.createElement('textarea')
  atividade.setAttribute('name','atividade')
  atividade.setAttribute('id','atividade')
  Atividade.appendChild(atividade)

   
   
  // label DATA
  
  const Data = document.createElement('label')
  Data.setAttribute('id','data')
  Data.setAttribute('for','data')
  Data.textContent = 'Data Inicio: '
  Empresa.appendChild(Data)
  
  // Input data inicio
  const dataInicio = document.createElement('input')
  dataInicio.setAttribute('type','date')
  dataInicio.setAttribute('name','dataInicio')
  dataInicio.setAttribute('id','dataInicio')
  Data.appendChild(dataInicio)


  //Remover Emprego Atual
  const remJob = document.createElement('button')
  remJob.setAttribute('id','removerMyJob')
  remJob.textContent = 'Remover Emprego Atual'
  Data.appendChild(remJob)


  //Botao Remover Emprego Atual

  remJob.addEventListener('click',(e)=>{
    e.preventDefault()
    myJobOn()
    limparCampos()
    removermyJob()



  //Habilitando Botão Emprego Atual  
  function myJobOn() {
    MyJob.disabled = false
    
  }

  //Limpar Valores dos Inputs MyJob
  function limparCampos() {

  empresa.value =''
  cargo.value =''
  atividade.value =''
  dataInicio.value =''
  }

  //Deletar Campo Emprego Atual
  function removermyJob(){
    labelJobs.remove()

  }

})

}

//Adicionar Experiencia Profissional
let idExp = [1,2,3,4]

btnaddExp.addEventListener('click',()=>{
  if(idExp.length === 0)return

  //Pegar o menor valor do campo
  const id_exp = idExp.shift()

  createLabel()
  createInput(id_exp) 
  lastExperience()
  cont++
  
  
})

 //Funções do botão adicionar Experiencia
//Label

 function createLabel() {
   const newExp = document.getElementById('newExp')
   const labelInputs = document.createElement('div')
   labelInputs.setAttribute('id','labelInputs')
   labelInputs.setAttribute('class','labelInputs') 
   newExp.appendChild(labelInputs)
  
 }

 //Inputs
 function createInput(id_exp) {
 const labelInputs = document.getElementById('labelInputs')

 // label EMPRESA 
 
let Empresa_ = document.createElement('div')
Empresa_.name ='controle'
Empresa_.setAttribute('id',`lastExp_${id_exp}` )
Empresa_.setAttribute('class','labelEmpresa_ ')
Empresa_.setAttribute('value',``)
Empresa_.textContent = 'Empresa: '

labelInputs.appendChild(Empresa_)

 // Input Empresa
const empresa_ = document.createElement('input')
empresa_.setAttribute('type','text')
empresa_.setAttribute('name','empresa_ ')
empresa_.setAttribute('id',`empresa_${id_exp}`) 
empresa_.setAttribute('value','') 
Empresa_.append(empresa_)


 // Label Cargo
const Cargo_ = document.createElement('label')
Cargo_.setAttribute('for','cargo')
Cargo_.setAttribute('name','Cargo')
empresa_.setAttribute('for','empresa')
Cargo_.setAttribute('id','Cargo_')
Cargo_.textContent = 'Função: '
Empresa_.appendChild(Cargo_)

 // Input Cargo
const cargo_ = document.createElement('input')
cargo_.setAttribute('type' , 'text')
cargo_.setAttribute('name', 'cargo')
cargo_.setAttribute('id',`cargo_${id_exp}`)
cargo_.setAttribute('value', '')
Cargo_.appendChild(cargo_)

// label Atividade
const Atividade_ = document.createElement('label')
Atividade_.setAttribute('id',`Atividade_`)
Atividade_.setAttribute('for','atividade')
Atividade_.textContent = 'Atividade: '
Empresa_.appendChild(Atividade_)

 // Input atividade
const atividade = document.createElement('textarea')
atividade.setAttribute('type','text')
atividade.setAttribute('name','atividade')
atividade.setAttribute('id',`atividade_${id_exp}`)
atividade.setAttribute('value', '')
Atividade_.appendChild(atividade)


// label DATA

const Data_exp = document.createElement('label')
Data_exp.setAttribute('id','data_')
Data_exp.setAttribute('for','data')
Data_exp.textContent = 'Data Inicio // Término: '
Empresa_.appendChild(Data_exp)

// Input data inicio
const dataInicio_ = document.createElement('input')
dataInicio_.setAttribute('type','date')
dataInicio_.setAttribute('name','dataInicio')
dataInicio_.setAttribute('id',`dataInicio_${id_exp}`)
dataInicio_.setAttribute('value','')
Data_exp.appendChild(dataInicio_)

// Input data Termino
const dataTermino = document.createElement('input')
dataTermino.setAttribute('type','date')
dataTermino.setAttribute('name','dataTermino')
dataTermino.setAttribute('id',`dataTermino_${id_exp}`)
dataTermino.setAttribute('class','dataTermino_')
dataTermino.checked = false
Data_exp.appendChild(dataTermino)



// function botaoRemover Experiencia 

const buttons = document.createElement('div')
buttons.setAttribute('id','buttons')
Empresa_.appendChild(buttons)
btnRemExp = document.createElement('button')
btnRemExp.setAttribute('id',`btnremover`)
btnRemExp.textContent = 'Remover Experiencia'
buttons.appendChild(btnRemExp)

//evento do botao para remover campos
btnRemExp.addEventListener('click',(e)=>{
   e.preventDefault()
   Empresa_.remove()                 // Remove o bloco da experiência
   idExp.push(id_exp)               // Libera o ID para uso futuro
   idExp.sort((a, b) => a - b)      // Reordena o array para manter o menor valor disponível
   cont--                           // Atualiza o contador total

})
}
function lastExperience () {
}


//------------------------------------------------------------------------/
//Evento do botão Adicionar Escolaridade

let id_esc = [1,2,3,4,5,6,7,8,9,10]

  btnAddSch.addEventListener('click',(e)=>{
    e.preventDefault()

    if (id_esc.length === 0) return

    //Pegar o menor valor do campo
    const id = id_esc.shift()

    createLabelAcademic()
    createInputSch(id)

    if(id_esc.length === 10) btnAddSch.disabled = true

  })

//Funções do botão adicionar Escolaridade

function createLabelAcademic(){
   const newSch = document.getElementById('newSch')

    const labelAcademic = document.createElement('div')
    labelAcademic.setAttribute('id',`labelAcademic`)
    newSch.appendChild(labelAcademic)

}

//Inputs
 function createInputSch(id) {

    const labelAcademic = document.getElementById('labelAcademic')

    //Label Escola
    const academic = document.createElement('div')
    academic.setAttribute('id',`academic_${id}`) 
    academic.textContent = 'Escola:  '
    labelAcademic.appendChild(academic)

    //Input Escola
    const inputAcademic = document.createElement('input')
    inputAcademic.setAttribute('type','text')
    inputAcademic.setAttribute('id',`inputAcademic_${id}`)
    academic.appendChild(inputAcademic)

    //label Formação
    const newForm = document.createElement('label')
    newForm.setAttribute('id','newForm')
    newForm.textContent = 'Formação: '
    academic.appendChild(newForm)

    //input Formação
    const inputForm = document.createElement('input')
    inputForm.setAttribute('type','text')
    inputForm.setAttribute('id',`inputForm_${id}`)
    newForm.appendChild(inputForm)

    //label Data Inicio // Término
    const newDate = document.createElement('label')
    newDate.setAttribute('id','newDate')
    newDate.textContent = 'Ano Início // Término: '
    academic.appendChild(newDate)

    //input Data Início 
    const startDate = document.createElement('input')
    startDate.setAttribute('type','text')
    startDate.setAttribute('id',`startDate_${id}`)
    startDate.setAttribute('placeholder','Ano de ínicio.')
    newDate.appendChild(startDate)

    //input Data Término
    const endDate = document.createElement('input')
    endDate.setAttribute('type','text')
    endDate.setAttribute('id',`endDate_${id}`)
    endDate.setAttribute('placeholder','Ano de Conclusão.')
    newDate.appendChild(endDate)

    //Label 'Em Curso'
    const cursando = document.createElement('span')
    cursando.setAttribute('id','cursando')
    cursando.textContent ='Cursando: '
    newDate.appendChild(cursando)

    //input 'Em Curso'
    const inputCursando = document.createElement('input')
    inputCursando.setAttribute('type','checkbox')
    inputCursando.setAttribute('id',`checkbox_${id}`)
    inputCursando.checked = false
    cursando.appendChild(inputCursando)
    
    }
    
 
//------------------------------------------------------------------------/
// Adicionar Informações Adicionais
let campos = [1,2,3,4,5,6,7,8,9,10] // Arrays para numeros disponiveis para criar campos

const btnAdcinf = document.getElementById('addInfo')

 //Evento do Botão informações Adicionais
  btnAdcinf.addEventListener('click',(e)=>{
   e.preventDefault()

  if (campos.length === 0) return

  //Pegar o menor valor do Campo
  const id = campos.shift()

   adcLabelInf(id) 


  if (campos.length === 0 ) btnAdcinf.disabled = true 
    

  
 })
 

//Label Informações Adicionais
function adcLabelInf(id) {
   const span = document.getElementById('addInfAdc')
   
   const newLi = document.createElement('li')
   newLi.setAttribute('id',`newLi_${id}`) 
   newLi.setAttribute('class',` newLi `)
   span.appendChild(newLi)

   const newInput = document.createElement('input')
   newInput.setAttribute('type','text')
   newInput.setAttribute('id',`infoAdc_${id}`)
   newLi.appendChild(newInput)
    

}

//-----------------------------------------------------------------------------/
// Classe Hide - Pré Visualização Curriculum

const preview = document.getElementById('preview')
const myAdress = document.getElementById('myAdress')
const myName = document.getElementById('myName')
const number = document.getElementById('number')
const neighborhood = document.getElementById('neighborhood')
const city = document.getElementById('city')
const state = document.getElementById('state')
const tell = document.getElementById('tell')
const email = document.getElementById('email')
const typeComplement = document.getElementById('typeComplement')
const cnh = document.getElementById('cnh')
const btview = document.getElementById('view')
const cep2 = document.getElementById('cep2')
const title = document.getElementById('objectiveTitle')
const objectiveText = document.getElementById('objectiveText')


//------------------------------------------------------------------------/
// Evento Botão Pré Vizualizar Curriculum

btview.addEventListener('click',(e)=>{
  e.preventDefault()
  preview.classList.remove('hide') 

  const Name = myName.value
  const Adress = myAdress.value
  const Number = number.value
  const Complement = typeComplement.value
  const Neighborhood = neighborhood.value
  const City = city.value
  const State = state.value
  const Cep = cep.value
  const Cep2 = cep2.value
  const Tell = tell.value
  const Email = email.value
  const Cnh = cnh.value
  const Objective = objectiveText.value

document.getElementById('previewName').textContent = Name
document.getElementById('previewAdress').textContent = Adress
document.getElementById('previewNumber').textContent = Number
document.getElementById('previewtypeComplement').textContent = Complement
document.getElementById('previewNeighborhood').textContent = Neighborhood
document.getElementById('previewCity').textContent = City
document.getElementById('previewState').textContent = State
document.getElementById('previewObjective').textContent = Objective

if(Cep < 0 || Cep2 < 0){
  alert('Insira o Cep corretamente (00000 - 000)')
}else{
document.getElementById('previewCep').textContent = `Cep: ${Cep} - ${Cep2}`}

if(Tell){
  document.getElementById('previewTell').textContent = `Telefone: ${tell.value}`
}
else{
  document.getElementById('previewTell').textContent = ``

}

if(Email){
  document.getElementById(`previewEmail`).textContent = `Email: ${email.value}`
}else{
  document.getElementById(`previewEmail`).textContent = ``

}

cnhValida = ['a','b','c','d','e','ab','ac','ad','ae']
if(cnhValida.includes(Cnh)){
  document.getElementById('previewCnh').textContent = `CNH: ${Cnh.toUpperCase()}`
}
else{document.getElementById('previewCnh').textContent = ''

}


//Emprego Atual


try {

  if(!empresa.value){
    document.getElementById('previewExperience').textContent = ``
    document.getElementById('previewFunction').textContent =''
    document.getElementById('previewActivity').textContent = ''
    document.getElementById('previewDate').textContent =''
    
    }else{

    
    document.getElementById('previewExperience').textContent = `• ${empresa.value}`
    document.getElementById('previewFunction').textContent = `Função: ${cargo.value}`
    document.getElementById('previewActivity').textContent = `Atividade: ${atividade.value}`
    
    //convertendo o Campo data em pt-BR
    const dataMyJob = dataInicio.value
      if(dataMyJob){
        const [ano,mes,dia] = dataMyJob.split('-')
        const data_MyJob = `${dia}/${mes}/${ano}`
        document.getElementById('previewDate').textContent = `Período: ${data_MyJob} - até a presente data.`
      }
  }

//Fazer uma função para atualizar o campo preview
  
} catch (error) {
  //console.log('Campo de Minha função em Branco')
  }



// Experiencias Profissionais

try {

  if (lastExp_1.checked = true) {
    if(!empresa_1.value){
      document.getElementById('previewLastExperience_1').textContent =''
      document.getElementById('previewLastFunction_1').textContent =''
      document.getElementById('previewLastActivity_1').textContent =''
      document.getElementById('previewLastDate_1').textContent =''
      document.getElementById('previewLastDateEnd_1').textContent =''

    }else{
      document.getElementById('previewLastExperience_1').textContent =`• ${empresa_1.value}`
      document.getElementById('previewLastFunction_1').textContent = `Função: ${cargo_1.value}`
      document.getElementById('previewLastActivity_1').textContent = `Atividade: ${atividade_1.value}`


      const datIn_1 = dataInicio_1.value
      const datEn_1 = dataTermino_1.value

      if(datIn_1 && datEn_1){
        const [ano_1, mes_1, dia_1] = datIn_1.split('-')
        const dat_in_1 = `${dia_1}/${mes_1}/${ano_1}`

        const [ano_2, mes_2, dia_2] = datEn_1.split('-')
        const dat_En_1 = `${dia_2}/${mes_2}/${ano_2}`

        document.getElementById('previewLastDate_1').textContent = `Período:${dat_in_1} até ${dat_En_1}`
      
        }
      }

    }  
  


    
  if (lastExp_2.checked = true) {
    if(!empresa_2.value){
      document.getElementById('previewLastExperience_2').textContent =''
      document.getElementById('previewLastFunction_2').textContent =''
      document.getElementById('previewLastActivity_2').textContent =''
      document.getElementById('previewLastDate_2').textContent =''
      document.getElementById('previewLastDateEnd_2').textContent =''

      }else{
        document.getElementById('previewLastExperience_2').textContent =`• ${empresa_2.value}`
        document.getElementById('previewLastFunction_2').textContent = `Função: ${cargo_2.value}`
        document.getElementById('previewLastActivity_2').textContent = `Atividade: ${atividade_2.value}`

        const datIn_2 = dataInicio_2.value
        const datEn_2 = dataTermino_2.value
  
        if(datIn_2 && datEn_2){
          const [ano_1, mes_1, dia_1] = datIn_2.split('-')
          const dat_in_2 = `${dia_1}/${mes_1}/${ano_1}`
  
          const [ano_2, mes_2, dia_2] = datEn_2.split('-')
          const dat_En_2 = `${dia_2}/${mes_2}/${ano_2}`
  
          document.getElementById('previewLastDate_2').textContent = `Período:${dat_in_2} até ${dat_En_2}`
        
          }
        

      }
    }



  if (lastExp_3.checked = true) {
      if(!empresa_3.value){
        document.getElementById('previewLastExperience_3').textContent =''
        document.getElementById('previewLastFunction_3').textContent =''
        document.getElementById('previewLastActivity_3').textContent =''
        document.getElementById('previewLastDate_3').textContent =''
        document.getElementById('previewLastDateEnd_3').textContent =''

        }else{
          document.getElementById('previewLastExperience_3').textContent =`• ${empresa_3.value}`
          document.getElementById('previewLastFunction_3').textContent = `Função: ${cargo_3.value}`
          document.getElementById('previewLastActivity_3').textContent = `Atividade: ${atividade_3.value}`

          const datIn_3 = dataInicio_3.value
          const datEn_3 = dataTermino_3.value
    
          if(datIn_3 && datEn_3){
            const [ano_1, mes_1, dia_1] = datIn_3.split('-')
            const dat_in_3 = `${dia_1}/${mes_1}/${ano_1}`
    
            const [ano_2, mes_2, dia_2] = datEn_3.split('-')
            const dat_En_3 = `${dia_2}/${mes_2}/${ano_2}`
    
            document.getElementById('previewLastDate_3').textContent = `Período:${dat_in_3} até ${dat_En_3}`
          
            }
        }
      }


    if (lastExp_4.checked = true) {  
        if(!empresa_4.value){
          document.getElementById('previewLastExperience_4').textContent =''
          document.getElementById('previewLastFunction_4').textContent =''
          document.getElementById('previewLastActivity_4').textContent =''
          document.getElementById('previewLastDate_4').textContent =''
          document.getElementById('previewLastDateEnd_4').textContent =''

        }else{
        document.getElementById('previewLastExperience_4').textContent =`• ${empresa_4.value}`
        document.getElementById('previewLastFunction_4').textContent = `Função: ${cargo_4.value}`
        document.getElementById('previewLastActivity_4').textContent = `Atividade: ${atividade_4.value}`
        document.getElementById('previewLastDate_4').textContent =`Período: ${dataInicio_4.value} até ${dataTermino_4.value}`

        const datIn_4 = dataInicio_4.value
        const datEn_4 = dataTermino_4.value
  
        if(datIn_4 && datEn_4){
          const [ano_1, mes_1, dia_1] = datIn_4.split('-')
          const dat_in_4 = `${dia_1}/${mes_1}/${ano_1}`
  
          const [ano_2, mes_2, dia_2] = datEn_4.split('-')
          const dat_En_4 = `${dia_2}/${mes_2}/${ano_2}`
  
          document.getElementById('previewLastDate_4').textContent = `Período:${dat_in_4} até ${dat_En_4}`
        
          }
      }
    }
  } catch (error) {

  }




//Escolaridade


try {
  if (academic_1) {
    if(!inputAcademic_1.value){
      school_1.textContent = ''
      formation_1.textContent =''
      datInicio_1.textContent =''
      datFim_1.textContent = '' 
      cursando_1.textContent = ''
      // valor do checkbox nao esta saindo quando o campo fica vazio
      
    }
    else{
    school_1.textContent = ` ${inputAcademic_1.value} (${startDate_1.value} / ${endDate_1.value})`
    formation_1.textContent = `• ${inputForm_1.value}`
    if(checkbox_1.checked){
      cursando_1.textContent = '*Cursando'
    }else{
      cursando_1.textContent = ''
    }
    
  }
  
}

  if(academic_2){
    if(!inputAcademic_2.value){
      school_2.textContent = ''
      formation_2.textContent =''
      datInicio_2.textContent =''
      datFim_2.textContent = ''
      cursando_2.textContent =''
    }
    else{
      school_2.textContent = `${inputAcademic_2.value} (${startDate_2.value} / ${endDate_2.value})`
      formation_2.textContent =`• ${inputForm_2.value}`
     if(checkbox_2.checked){
      cursando_2.textContent = '*Cursando'
    }else{
      cursando_2.textContent = ''
    }
  }
}

  if(academic_3){
    if(!inputAcademic_3.value){
      school_3.textContent = ''
      formation_3.textContent = ''
      datInicio_3.textContent = ''
      datFim_3.textContent = ''
      cursando_3.textContent =''
    }
    else{
      school_3.textContent = `${inputAcademic_3.value} (${startDate_3.value} / ${endDate_3.value})`
      formation_3.textContent =`• ${inputForm_3.value}`
      if(checkbox_3.checked){
        cursando_3.textContent = '*Cursando'
      }else{
      cursando_3.textContent = ''
    }
  }
}
  
  if(academic_4){
    if(!inputAcademic_4.value){
      school_4.textContent = ''
      formation_4.textContent = ''
      datInicio_4.textContent = ''
      datFim_4.textContent = ''
      cursando_4.textContent = false
    }
    else{
      school_4.textContent = `${inputAcademic_4.value} (${startDate_4.value} / ${endDate_4.value})`
      formation_4.textContent =`• ${inputForm_4.value}`
      if(checkbox_4.checked){
        cursando_4.textContent = '*Cursando'
      }else{
      cursando_4.textContent = ''
    }
  }
}
  
  if(academic_5){
    if(!inputAcademic_5.value){
      school_5.textContent = ''
      formation_5.textContent = ''
      datInicio_5.textContent = ''
      datFim_5.textContent = ''
    }
    else{
      school_5.textContent = `${inputAcademic_5.value} (${startDate_5.value} / ${endDate_5.value})`
      formation_5.textContent =`• ${inputForm_5.value}`
      if(checkbox_5.checked){
        cursando_5.textContent = '*Cursando'
      }else{
      cursando_5.textContent = ''
    }
  }
}
  
  if(academic_6){
    if(!inputAcademic_6.value){
      school_6.textContent = ''
      formation_6.textContent = ''
      datInicio_6.textContent = ''
      datFim_6.textContent = ''
    }
    else{
      school_6.textContent = `${inputAcademic_6.value} (${startDate_6.value} / ${endDate_6.value})`
      formation_6.textContent =`• ${inputForm_6.value}`
      if(checkbox_6.checked){
        cursando_6.textContent = '*Cursando'
      }else{
      cursando_6.textContent = ''
    }
  }
}
  
  if(academic_7){
    if(!inputAcademic_7.value){
      school_7.textContent = ''
      formation_7.textContent = ''
      datInicio_7.textContent = ''
      datFim_7.textContent = ''
    }
    else{
      school_7.textContent = ` ${inputAcademic_7.value} (${startDate_7.value} / ${endDate_7.value})`
      formation_7.textContent =`• ${inputForm_7.value}`
      if(checkbox_7.checked){
        cursando_7.textContent = '*Cursando'
      }else{
      cursando_7.textContent = ''
    }
  }
}
  
  if(academic_8){
    if(!inputAcademic_8.value){
      school_8.textContent = ''
      formation_8.textContent = ''
      datInicio_8.textContent = ''
      datFim_8.textContent = ''
    }
    else{
      school_8.textContent = `${inputAcademic_8.value} (${startDate_8.value} / ${endDate_.value})`
      formation_8.textContent =`• ${inputForm_8.value}`
      if(checkbox_8.checked){
        cursando_8.textContent = '*Cursando'
      }else{
      cursando_8.textContent = ''
    }
  }
}
    
  if(academic_9){
    if(!inputAcademic_9.value){
      school_9.textContent = ''
      formation_9.textContent = ''
      datInicio_9.textContent = ''
      datFim_9.textContent = ''
    }
    else{
      school_9.textContent = `${inputAcademic_9.value} (${startDate_9.value} / ${endDate_9.value})`
      formation_9.textContent =`• ${inputForm_9.value}`
      if(checkbox_9.checked){
        cursando_9.textContent = '*Cursando'
      }else{
      cursando_9.textContent = ''
    }
  }
}


  
  if(academic_10){
    if(!inputAcademic_10.value){
      school_10.textContent = ''
      formation_10.textContent = ''
      datInicio_10.textContent = ''
      datFim_10.textContent = ''
    }
    else{
      school_10.textContent = `${inputAcademic_10.value} (${startDate_10.value} / ${endDate_10.value})`
      formation_10.textContent =`• ${inputForm_10.value}`
      if(checkbox_10.checked){
        cursando_10.textContent = '*Cursando'
      }else{

      cursando_10.textContent = ''
      }
    }
  }
 }
 catch (e) {
  // console.log('Campo Vazio')
  }



// Inf.Adicionais

try{
  if(!infoAdc_1.value){
    inf_1.textContent =''
  }else{
    inf_1.textContent = `• ${infoAdc_1.value}`
  }
  
  if(!infoAdc_2.value){
    inf_2.textContent =''
  }else{
    inf_2.textContent = `• ${infoAdc_2.value}`

  }
  
  if(!infoAdc_3.value){
    inf_3.textContent =''
  }else{
    inf_3.textContent = `• ${infoAdc_3.value}`

  }

  if(!infoAdc_4.value){
    inf_4.textContent =''
  }else{
    inf_4.textContent = `• ${infoAdc_4.value}`

  }

  if(!infoAdc_5.value){
    inf_5.textContent =''
  }else{
    inf_5.textContent = `• ${infoAdc_5.value}`

  }
  
  if(!infoAdc_6.value){
    inf_6.textContent =''
  }else{
    inf_6.textContent = `• ${infoAdc_6.value}`

  }

  if(!infoAdc_7.value){
    inf_7.textContent =''
  }else{
    inf_7.textContent = `• ${infoAdc_7.value}`

  }

  if(!infoAdc_8.value){
    inf_8.textContent =''
  }else{
    inf_8.textContent = `• ${infoAdc_8.value}`

  }

  if(!infoAdc_9.value){
    inf_9.textContent =''
  }else{
    inf_9.textContent = `• ${infoAdc_9.value}`

  }

  if(!infoAdc_10.value){
    inf_10.textContent =''
  }else{
    inf_10.textContent = `• ${infoAdc_10.value}`

  }
}
catch(e){
  // console.log('Campos Inf.Adc.Vazio')
}

})



//----------------------------------
// Confirmação para fechar a janela

 window.addEventListener('beforeunload',function(event){
    event.returnValue = null
 })



//------------------------------------------------------------------------/
//Botão Gerar PDF


const btnGenerate = document.getElementById('generate');
const divCurriculum = document.getElementById('preview');

btnGenerate.addEventListener('click', (e) => {
  e.preventDefault();

  const opc = {
    margin:       20, // mm
    filename:     'formulario.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  }
  document.body.classList.add('sem-fundo');
html2pdf().set(opc).from(divCurriculum).toPdf().get('pdf').then(function (pdf) {
  const blobUrl = pdf.output('bloburl');
  window.open(blobUrl, '_blank');
  document.body.classList.remove('sem-fundo');
  }); 
})
