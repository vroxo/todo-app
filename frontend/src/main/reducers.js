import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({ 
        descrption: "Ler livro.",
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão.',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe às 10h',
            done: false    
        }, {
            _id: 3,
            description: 'Consulta médicas na terça depois do almoço.',
            done: false    
        }]
     })
})

export default rootReducer