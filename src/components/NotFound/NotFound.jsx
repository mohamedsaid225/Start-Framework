import { Link } from 'react-router-dom'
import NotFoundImg from '../../assets/NotFound.svg'
export default function NotFound() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-8 py-20'>
        <img className='w-96' src={NotFoundImg} alt="" />
        <Link className='text-xl font-bold text-[#2c3e50]' to="/home">Back to Home</Link>
    </div>
  )
}
