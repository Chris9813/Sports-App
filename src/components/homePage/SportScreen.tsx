import { useParams } from 'react-router-dom'

export const SportScreen = () => {


  const {sportId}:any = useParams()

  

  console.log(sportId)


  return (
    <div>SportScreen</div>
  )
}
