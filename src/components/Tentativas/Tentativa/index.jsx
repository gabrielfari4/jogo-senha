import { useEffect, useState } from 'react';
import styles from './Tentativa.module.css';

/* let senha = "carro"
let senhaArray = senha.split('')
console.log(senhaArray)

let guess = "corre"
let guessArray = guess.split('')

let counts = [0, 0, 0, 0, 0]

for (i = 0; i < senha.length; i++) {
  senhaArray.forEach((letter) => {
   letter === guessArray[i] ? 
     counts[i] += 1 : counts[i]
  })
}

console.log(counts) */

/* const letras = {};

const senha = "corda"
const senhaArray = senha.split('')

senhaArray.map((letra) => {
  letras[letra] ? letras[letra] = letras[letra] + 1 : letras[letra] = 1
})

console.log(letras)

const letrasCertas = {}

const guess = "acaba"
const guessArray = guess.split('')


guessArray.map((letra, index) => {
  const filtro = senhaArray[index] === letra
  
  if ( filtro) {
     letrasCertas[letra] ? letrasCertas[letra] = letrasCertas[letra] + 1 : letrasCertas[letra] = 1
  }
  
  
})

console.log(letrasCertas)
let letraOk = false;
for (const property in letrasCertas) {
  letras[property] === letrasCertas[property] ? console.log(property, true) : console.log(property, false)
} */

const Tentativa = ({ arraySenha, arrayTentativa}) => {
    const [letrasSenha, setLetrasSenha] = useState({})
    const [letrasCertas, setLetrasCertas] = useState({})

    const letrasSenhaTemp = {}

    arraySenha.forEach((letra) => {
        if (letrasSenhaTemp[letra]) {
            letrasSenhaTemp[letra] = letrasSenhaTemp[letra] + 1;
        } else {
            letrasSenhaTemp[letra] = 1
        }

    })

    const letrasCertasTemp = {}

    arrayTentativa.forEach((letra, index) => {
        if (arraySenha[index] === letra) {
            letrasCertasTemp[letra] = (letrasCertasTemp[letra] || 0) + 1;
        }
    })

    useEffect(() => {
        setLetrasSenha(letrasSenhaTemp)
        setLetrasCertas(letrasCertasTemp)

    }, [])
    

    return arrayTentativa.map((letra, index) => {
        const filtro = arraySenha[index] === letra;



        if (arraySenha.includes(letra) && filtro) {
            return (
                <span 
                key={index}
                className={`${styles.letra} ${styles.correta}`}
                >
                    {letra.toUpperCase()}
                </span>
            );
        }
        if (
            (arraySenha.includes(letra) && (!letrasCertas[letra] || letrasCertas[letra] < letrasSenha[letra]))
        ) {
            return (
                <span 
                    key={index}
                    className={`${styles.letra} ${styles.valida}`}
                >
                    {letra.toUpperCase()}
                </span>
            );
        } else if (letrasCertas[letra] === letrasSenha[letra]) {
            return (
                <span 
                    key={index}
                    className={styles.letra}
                >
                    {letra.toUpperCase()}
                </span>
            )
        } else {
            return (
                <span 
                    key={index}
                    className={styles.letra}
                >
                    {letra.toUpperCase()}
                </span>
            )
        }
    })
}

export default Tentativa;