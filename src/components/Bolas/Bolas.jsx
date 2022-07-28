import { useState } from "react"
import { Bola } from "../index"

export const Bolas = ({ passwords }) => {

  const actives = passwords.map((password, i) => ({ id: i + 1, active: password === 1 ? true : false }))

  const [adivinar, setAdivinar] = useState(passwords.map((password, i) => ({ id: i + 1, active: false })))

  console.log(passwords)
  const handleClick = (id) => {
    setAdivinar(current =>
      current.map(current => current.id === id
        ? { ...current, active: !current.active }
        : current
      ))
  }
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {
        adivinar.map(({ id, active }) => (
          <Bola onClick={() => handleClick(id)} key={id} active={active} />
        ))
      }

      {
        JSON.stringify(actives) === JSON.stringify(adivinar)
          ? <p>Adelante!!!</p>
          : ''
      }
    </div>
  )
}
