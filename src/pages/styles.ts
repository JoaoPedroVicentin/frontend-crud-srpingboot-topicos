import { styled } from "@/styles/stiches.config";


export const Container = styled('div', {
  backgroundColor: '#1E1E26',
  height: '100vh',
  width: '100%',

  color: 'white',
})

export const Header = styled('div', {
    backgroundColor: '#1F9090',
    height: '18vh',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '1rem',

    padding: '0 3rem',

    
})

export const Body = styled('div', {
    height: '82vh',
    width: '100%',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    alignItems: 'center',
})

export const DataColumn = styled('div', {

    width: 'fit-content',
    height: 'fit-content',

    margin: '0 auto',
    padding: '2rem 0',

    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    input: {
        padding: '0.5rem',
        border: 'none',
        borderBottom: '1px solid white',
        backgroundColor: 'transparent',
        color: 'white',
        margin: '0rem 2rem',
    },

    h2: {
        marginLeft: '2rem',
        marginBottom: '1rem'
    }
})

export const DivElement = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: '100%',

    padding: '1rem 0rem',
    gap: '1rem',

    
})

export const DivButtons = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
})

export const CreateElement = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',

    width: '100%',

    input: {
        width: '100%'
    }
})

export const AddButton = styled('button', {
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'green',

    padding: '0.5rem',

    color: 'white'
})

export const EditButton = styled('button', {
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'blue',

    padding: '0.5rem',

    color: 'white',

    "&:disabled": {
        cursor: 'not-allowed',
        opacity: '0.5'
    }
})

export const DeleteButton = styled('button', {
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: 'red',

    padding: '0.5rem',

    color: 'white'
})



