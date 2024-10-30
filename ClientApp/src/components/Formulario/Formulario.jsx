import style from '../Formulario/styles.module.scss';
import { FormEvent, useState } from "react";


function Formulario() {
  
   

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    function handleSubmitLogin(event: FormEvent) {
        event.preventDefault()
        console.log(email);
        console.log(senha);
    }
    
    return (
        <aside className={style.article}>
            <section className={style.container} >

                <form onSubmit={handleSubmitLogin}   >    
                 
                    <div className={style.divform}>
                        <label htmlFor="email"> Email:  </label>
                        <input id="email" placeholder=" Digite o Email" value={email}
                            onChange={(event) => setEmail( event.target.value)} type ="text"></input>
                        <label htmlFor="senha"> Senha:  </label>
                        <input id="senha" placeholder=" Digite a senha" value={senha}
                            onChange={(event) => setSenha(event.target.value)} type="text"></input>
                        <button>Entrar</button>
                    </div>


                </form>

            </section>

        </aside>
        
    );
}

export default Formulario;