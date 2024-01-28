import { useContext } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/Pokédex_logo.png';

export const Navigation = () => {
    const { onInputChange, valueSearch, onResetForm } = useContext(PokemonContext);
    const navigate = useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();

        if (valueSearch.trim() === '') {
            // Muestra una alerta si el campo de búsqueda está vacío
            alert('Por favor, ingrese un nombre de Pokémon para buscar.');
            return;
        }

        navigate('/search', {
            state: valueSearch,
        });

        onResetForm();
    };

    return (
        <>
            <header className='container'>
                <Link to='/' className='logo'>
                    <img
                        src={logo}
                        alt='Logo Pokedex'
                    />
                </Link>

                <form onSubmit={onSearchSubmit}>
                    <div className='form-group'>
                        {/* Icono de búsqueda y campo de entrada */}
                        {/* ... */}
                        <input
                            type='search'
                            name='valueSearch'
                            id=''
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder='Buscar nombre de pokemon'
                        />
                    </div>

                    <button className='btn-search'>Buscar</button>
                </form>
            </header>

            <Outlet />
        </>
    );
};
