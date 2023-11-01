import { api } from '@/lib/axios';
import { useQuery } from '@tanstack/react-query'
import * as S from './styles'
import { useState } from 'react';
import { IDataReturn } from '@/interface/dataReturn.interface';
import { Trash, Pencil, Plus } from 'phosphor-react';

export default function Home() {

  const [cidades, setCidades] = useState<IDataReturn[]>()

  const [estados, setEstados] = useState<IDataReturn[]>()

  const [paises, setPaises] = useState<IDataReturn[]>()

  const [thisPais, setThisPais] = useState<string | null>(null)

  const [thisEstado, setThisEstado] = useState<string | null>(null)

  const [thisCidade, setThisCidade] = useState<string | null>(null)

  const { refetch: refetchCidades } = useQuery(['cidades'], async () => {
    const response = await api.get('/cidades/');

    setCidades(response.data)

    return response.data;
  }, { initialData:[]});

  const { refetch: refetchEstados } = useQuery(['estados'], async () => {
    const response = await api.get('/estados/');

    setEstados(response.data)

    return response.data;
  }, { initialData:[]});

  const { refetch: refetchPaises } = useQuery(['paises'], async () => {
    const response = await api.get('/paises/');

    setPaises(response.data)

    return response.data;
  }, { initialData:[]});

  async function createPais(){
    if(thisPais !== null){
      try {
        await api.post('/paises/', {
          name: thisPais
        });
  
        setThisPais(null)
  
        refetchPaises()
  
        window.alert('País cadastrado com sucesso')
      } catch (error) {
        return error
      }
    }
  }

  async function createEstado(){
    if(thisEstado !== null){
      try {
        await api.post('/estados/', {
          name: thisEstado
        });
  
        setThisEstado(null)
  
        refetchEstados()
  
        window.alert('Estado cadastrado com sucesso')
      } catch (error) {
        return error
      }
    }
  }

  async function createCidade(){
    if(thisCidade !== null){
      try {
        await api.post('/cidades/', {
          name: thisCidade
        });
  
        setThisCidade(null)
  
        refetchCidades()
  
        window.alert('Cidade cadastrada com sucesso')
      } catch (error) {
        return error
      }
    }
  }

  async function updatePais(id: string){
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
  }

  async function updateEstado(id: string){
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
  }

  async function updateCidade(id: string){
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
  }

  async function deletePais(id: string){
    try {
      await api.delete(`/paises/${id}`);

      refetchPaises()

      window.alert('País deletado com sucesso')
    } catch (error) {
      return error
    }
  }

  async function deleteEstado(id: string){
    try {
      await api.delete(`/estados/${id}`);

      refetchEstados()

      window.alert('Estado deletado com sucesso')
    } catch (error) {
      return error
    }
  }

  async function deleteCidade(id: string){
    try {
      await api.delete(`/cidades/${id}`);

      refetchCidades()

      window.alert('Cidade deletada com sucesso')
    } catch (error) {
      return error
    }
  }


  return (
    <S.Container>

      <S.Header>
        <h1>Trabalho CRUD SpringBoot - Tópicos 4BCC</h1>
        <h2>Aluno: João Pedro Lopes Vicentin</h2>
      </S.Header>

      <S.Body>
        <S.DataColumn>
        <h2>Países</h2>
        <S.CreateElement>
          <input placeholder='Cadastrar novo país' onFocus={(e) => (setThisPais(e.target.value))} onChange={(e) => setThisPais(e.target.value)} />
          <S.DivButtons>
              <S.AddButton type='button' onClick={() => createPais()}>
                <Plus size={20} weight='bold' />
              </S.AddButton>
          </S.DivButtons>
        </S.CreateElement>
          {paises?.map((pais, index) => {
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
          })}
        </S.DataColumn>

        <S.DataColumn>
        <h2>Estados</h2>
        <S.CreateElement>
          <input placeholder='Cadastrar novo estado' onFocus={(e) => (setThisEstado(e.target.value))} onChange={(e) => setThisEstado(e.target.value)} />
          <S.DivButtons>
              <S.AddButton type='button' onClick={() => createEstado()}>
                <Plus size={20} weight='bold' />
              </S.AddButton>
          </S.DivButtons>
        </S.CreateElement>
          {estados?.map((estado, index) => {
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
          })}
        </S.DataColumn>

        <S.DataColumn>
          <h2>Cidades</h2>
          <S.CreateElement>
          <input placeholder='Cadastrar nova cidade' onFocus={(e) => (setThisCidade(e.target.value))} onChange={(e) => setThisCidade(e.target.value)} />
          <S.DivButtons>
              <S.AddButton type='button' onClick={() => createCidade()}>
                <Plus size={20} weight='bold' />
              </S.AddButton>
          </S.DivButtons>
        </S.CreateElement>
          {cidades?.map((cidade, index) => {
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
          })}
        </S.DataColumn>
      </S.Body>
    </S.Container>
  )
}
