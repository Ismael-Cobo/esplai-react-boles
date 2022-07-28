
export const Bola = ({ active, onClick }) => {
  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        borderRadius: '100%',
        backgroundColor: `${active ? 'orange' : 'gray'}`
      }}
      onClick={onClick}
    />
  )
}
