import { Routes, Route } from 'react-router-dom';

// Components
import Login from './pages/Login';
import Home from './pages/Home';

// Lo importamos
// import { useSelector, useDispatch } from 'react-redux';

// import { setUser, unsetUser } from './reducers/user/userSlice'; (esto forma parte del ejemplo)

// Styles
import './App.scss';

function App() {
  // actualizamos el estado del store con el hook useDispatch
  // ej para actualizar el estado email, fullName, token usamos el hook useDispatch que lo vamos a almacenar en una variable (ej linea 24) y despues nos
  // vamos a traer los actions creators que nesecitamos ej en este caso setUser (linea 10) y entre parentesis le vamos a enviar el payload en caso de que lo nesecite
  // Es un hook que te da react-redux para que puedas disparar actions a lo que es el reducer, para que el reducer lo tome y sepa que hacer
  // El dispatch se va a encargar de hacer la actualizacion del estado gracias a los actions
  // Los dispatch se hacen gracias a un event handler, este onClick va a ser una funcion que va a tomar el dispatch, el dispatch va a tomar el action
  // creators setUser y entre parentesis va a mandar un payload, nos fijamos en el setUser que payload nesecita que le envie
  // El dispatch y el action gracias a su payload es como un setState pero en este caso global
  // const dispatch = useDispatch();

  // Entre parentesis lo que hacemos es decir que del estado global, dame el estado que se llama en este caso user
  // const { email, fullName, token } = useSelector(state => state.user);

  return (
    // esto forma parte del ejemplo
    // <>
    //   <h1>Email: {email}</h1>
    //   <h1>FullName: {fullName}</h1>
    //   <h1>Token: {token}</h1>
    //   <button
    //     onClick={() => {
    //       dispatch(
    //         setUser({
    //           email: 'vieyra.gabriel08@gmail.com',
    //           fullName: 'Gabriel Vieyra',
    //           token: '123456789',
    //         })
    //       );
    //     }}
    //   >
    //     Set User
    //   </button>
    //   <button onClick={() => dispatch(unsetUser())}>Unset User</button>
    // </>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;

// Paso 01: Configurar el store, lo primero que tenemos que hacer es configurar el lugar donde se va a almacenar tu store
// Paso 02: Vamos a cargar el provider, cuando trabajamos con context, el context tiene algo que se llama el provider, redux tambien trabaja
// con algo que se llama el provider, pasa que el provider en este caso es global
// el provider es un compompinnete que debe contener a toda tu aplicacion, recibe una prop que se llama store que va a recibir el store que
// creaste previamente
// Paso 03: Crear los slices, los slices son la union de los reducers y de los actions creators
// Paso 04: definimos en el store nuestros reducers
