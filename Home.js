import { useNavigate } from 'react-router';

export const Home = () => {
   const navigate = useNavigate()
    return (
        <>
        <div>Home Page </div>
        <button onClick={() => navigate('oder-summary', { replace: true})}>Place order</button>
        </>
    )
}
