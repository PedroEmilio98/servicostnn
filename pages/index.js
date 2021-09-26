

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/getServicos')
  const data = await res.json()
  return {
    props: { servicos: data }
  }
}

const index = ({ servicos }) => {


  return (
    <div>
      {servicos.map(servico => (
        <div key={servico.Nome}>{servico.Nome}</div>
      ))}


    </div >
  )
}
export default index
