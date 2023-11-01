import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query'
import * as S from './styles'
import { IDataReturn } from '@/interface/dataReturn.interface';
import { Trash, Pencil, Plus, GithubLogo } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from "react"

export default function Home() {

  const [isLoading, setIsLoading] = useState(false)

  const [newPais, setNewPais] = useState<string>('')

  const [newEstado, setNewEstado] = useState<string>('')

  const [newCidade, setNewCidade] = useState<string>('')

  const [cidades, setCidades] = useState<IDataReturn[]>()

  const [estados, setEstados] = useState<IDataReturn[]>()

  const [paises, setPaises] = useState<IDataReturn[]>()

  const [thisPais, setThisPais] = useState<string | null>(null)

  const [thisEstado, setThisEstado] = useState<string | null>(null)

  const [thisCidade, setThisCidade] = useState<string | null>(null)

  const { refetch: refetchCidades, isFetching: isFetchingCidades } = useQuery(['cidades'], async () => {
    const response = await api.get('/cidades/');

    setCidades(response.data)

    return response.data;
  }, { initialData:[]});

  const { refetch: refetchEstados, isFetching: isFetchingEstados } = useQuery(['estados'], async () => {
    const response = await api.get('/estados/');

    setEstados(response.data)

    return response.data;
  }, { initialData:[]});

  const { refetch: refetchPaises, isFetching: isFetchingPaises } = useQuery(['paises'], async () => {
    const response = await api.get('/paises/');

    setPaises(response.data)

    return response.data;
  }, { initialData:[]});

  async function createPais(event: FormEvent){

    setIsLoading(true)

    event.preventDefault()

    if(newPais !== ''){
      try {
        await api.post('/paises/', {
          name: newPais
        });
  
        setNewPais('')
  
        refetchPaises()
  
        window.alert('País cadastrado com sucesso')
      } catch (error) {
        return error
      }
    }  else {
      window.alert('Digite um valor válido')
    }

    setIsLoading(false)
  }

  async function createEstado(event: FormEvent){

    setIsLoading(true)

    event.preventDefault()

    if(newEstado !== ''){

      try {
        await api.post('/estados/', {
          name: newEstado
        });
  
        setNewEstado('')
  
        refetchEstados()
  
        window.alert('Estado cadastrado com sucesso')
      } catch (error) {
        return error
      }
      
    } else {
      window.alert('Digite um valor válido')
    }

    setIsLoading(false)
  }

  async function createCidade(event: FormEvent){

    setIsLoading(true)

    event.preventDefault()

      if(newCidade !== ''){
        try {
          await api.post('/cidades/', {
            name: newCidade
          });
    
          setNewCidade('')
    
          refetchCidades()
    
          window.alert('Cidade cadastrada com sucesso')
        } catch (error) {
          return error
        }
      } else {
        window.alert('Digite um valor válido')
      }

      setIsLoading(false)
  }

  async function updatePais(id: string){

    setIsLoading(true)

    if(thisPais !== null){
      try {
        await api.put(`/paises/${id}`, {
          name: thisPais
        });
  
        setThisPais(null)
  
        refetchPaises()
  
        window.alert('País editado com sucesso')
      } catch (error) {
        return error
      }
    }

    setIsLoading(false)
  }

  async function updateEstado(id: string){

    setIsLoading(true)

    if(thisEstado !== null){
      try {
        await api.put(`/estados/${id}`, {
          name: thisEstado
        });
  
        setThisEstado(null)
  
        refetchEstados()
  
        window.alert('Estado editado com sucesso')
      } catch (error) {
        return error
      }
    }

    setIsLoading(false)
  }

  async function updateCidade(id: string){

    setIsLoading(true)

    if(thisCidade !== null){
      try {
        await api.put(`/cidades/${id}`, {
          name: thisCidade
        });
  
        setThisCidade(null)
  
        refetchCidades()
  
        window.alert('Cidade editada com sucesso')
      } catch (error) {
        return error
      }
    }

    setIsLoading(false)
  }

  async function deletePais(id: string){

    setIsLoading(true)

    try {
      await api.delete(`/paises/${id}`);

      refetchPaises()

      window.alert('País deletado com sucesso')
    } catch (error) {
      return error
    }

    setIsLoading(false)
  }

  async function deleteEstado(id: string){

    setIsLoading(true)

    try {
      await api.delete(`/estados/${id}`);

      refetchEstados()

      window.alert('Estado deletado com sucesso')
    } catch (error) {
      return error
    }

    setIsLoading(false)
  }

  async function deleteCidade(id: string){

    setIsLoading(true)

    try {
      await api.delete(`/cidades/${id}`);

      refetchCidades()

      window.alert('Cidade deletada com sucesso')
    } catch (error) {
      return error
    }

    setIsLoading(false)
  }

function handleNewDataChange(event: ChangeEvent<HTMLInputElement>, context: 'pais' | 'cidade' | 'estado'){
  event.target.setCustomValidity('')
  

    if(context === 'pais'){
      setNewPais(event.target.value)
    } else if(context === 'cidade'){
      setNewCidade(event.target.value)
    } else if(context === 'estado'){
      setNewEstado(event.target.value)
    }
  
}


  return (
    <S.Container>

      <S.Header>
        <h1>Trabalho CRUD SpringBoot - Tópicos 4BCC</h1>
        <h2>Aluno: João Pedro Lopes Vicentin</h2>

        <S.Github>
          <a href='https://github.com/JoaoPedroVicentin/frontend-crud-srpingboot-topicos.git' target='_blank'>
            <GithubLogo size={20} />
            Repositório do frontend
          </a>
          <a href='https://github.com/JoaoPedroVicentin/crud-springboot-topicos.git' target='_blank'>
            <GithubLogo size={20} />
            Repositório do backend
          </a>
        </S.Github>
      </S.Header>

      <S.Body>
        {!isFetchingCidades && !isFetchingEstados && !isFetchingPaises ? (
          <>
          <S.DataColumn>
        <h2>Países</h2>
        <S.CreateElement onSubmit={createPais}>
          <input placeholder='Cadastrar novo país' value={newPais}  onChange={(e) => handleNewDataChange(e, 'pais')} />
          <S.DivButtons>
              <S.AddButton type='submit'>
                <Plus size={20} weight='bold' />
              </S.AddButton>
          </S.DivButtons>
        </S.CreateElement>
          {paises && paises.length > 0 ? 
          paises.map((pais, index) => {
            return(
              <S.DivElement key={index}>
                <input onFocus={(e) => (setThisPais(e.target.value))} defaultValue={pais.name} onChange={(e) => setThisPais(e.target.value)} />
                <S.DivButtons>
                <S.EditButton type='button' onClick={() => updatePais(pais.id)}>
                  <Pencil size={20} weight='bold' />
                </S.EditButton>
                <S.DeleteButton type='button' onClick={() => deletePais(pais.id)}>
                  <Trash size={20} weight='bold' />
                </S.DeleteButton>
                </S.DivButtons>
              </S.DivElement>
            )
          })
          : (
            <p>Ainda não possui nenhum dado</p>
          )}
        </S.DataColumn>

        <S.DataColumn>
        <h2>Estados</h2>
        <S.CreateElement onSubmit={createEstado}>
          <input placeholder='Cadastrar novo estado' value={newEstado}  onChange={(e) => handleNewDataChange(e, 'estado')} />
          <S.DivButtons>
              <S.AddButton type='submit'>
                <Plus size={20} weight='bold' />
              </S.AddButton>
          </S.DivButtons>
        </S.CreateElement>
          {estados && estados.length > 0 ? 
            estados.map((estado, index) => {
              return(
                <S.DivElement key={index}>
                  <input onFocus={(e) => (setThisEstado(e.target.value))} defaultValue={estado.name} onChange={(e) => setThisEstado(e.target.value)} />
                  <S.DivButtons>
                  <S.EditButton type='button' onClick={() => updateEstado(estado.id)}>
                    <Pencil size={20} weight='bold' />
                  </S.EditButton>
                  <S.DeleteButton type='button' onClick={() => deleteEstado(estado.id)}>
                    <Trash size={20} weight='bold' />
                  </S.DeleteButton>
                  </S.DivButtons>
                </S.DivElement>
              )
            }
          ) : (
            <p>Ainda não possui nenhum dado</p>
          )}
        </S.DataColumn>

        <S.DataColumn>
          <h2>Cidades</h2>
          <S.CreateElement onSubmit={createCidade}>
            <input placeholder='Cadastrar nova cidade' value={newCidade}  onChange={(e) => handleNewDataChange(e, 'cidade')} />
            <S.DivButtons>
                <S.AddButton type='submit'>
                  <Plus size={20} weight='bold' />
                </S.AddButton>
            </S.DivButtons>
        </S.CreateElement>
          {cidades && cidades.length > 0 ? 
          cidades.map((cidade, index) => {
            return(
              <S.DivElement key={index}>
                <input onFocus={(e) => (setThisCidade(e.target.value))} defaultValue={cidade.name} onChange={(e) => setThisCidade(e.target.value)} />
                <S.DivButtons>
                <S.EditButton type='button' onClick={() => updateCidade(cidade.id)}>
                  <Pencil size={20} weight='bold' />
                </S.EditButton>
                <S.DeleteButton type='button' onClick={() => deleteCidade(cidade.id)}>
                  <Trash size={20} weight='bold' />
                </S.DeleteButton>
                </S.DivButtons>
              </S.DivElement>
            )
          })
          : (
            <p>Ainda não possui nenhum dado</p>
          )}
        </S.DataColumn>
          </>
        ) : 
        <S.LoadingContainer>
          <h1>Carregando dados ...</h1>
        </S.LoadingContainer>
        }
      </S.Body>
      {isLoading && (
        <S.Loading>
          <h3>Carregando ...</h3>
        </S.Loading>
      )}
    </S.Container>
  )
}
