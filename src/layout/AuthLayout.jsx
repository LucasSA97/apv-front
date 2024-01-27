import { useEffect } from "react";
import { Outlet } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AuthLayout = () => {

  useEffect(() => {
    Swal.fire({
      icon: "info",
      title: "¡Bienvenido a la App para Administrar tus Pacientes!",
      text: "Correo de prueba: correo@correo.com , Password de prueba: password"
     
    });
    // const MySwal = withReactContent(Swal);

    // MySwal.fire({
    //   title: <p>¡Bienvenido a la App para Administrar tus Pacientes!</p>,
    //   didOpen: () => {
    //     MySwal;
    //   },
    // }).then(() => {
    //   MySwal.fire(<p>Shorthand works too</p>);
    // });
  }, []); 

  return (
    <>
        <main className="container items-center mx-auto md:grid md:grid-cols-2 mt-11 gap-10 p-5">
            <Outlet/>
        </main>

    </>
  )
}

export default AuthLayout