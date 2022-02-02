import React, { useState } from 'react'
import styled from 'styled-components'

import {useGetPokemonByNameQuery} from '../../sevices/pokemon'

const Container = styled.div`
    width: 100%;
    height: 200px;
`

const InputBox = styled.input`
`

const PokemonResult = styled.div``

export default function Pokemon() {
    const [pokemonName, setPokemonName] = useState<string>('pikachu')
    // debounce는 귀찮아서 제외
    const {data, isLoading, error} = useGetPokemonByNameQuery(pokemonName)

    const handleChangePokemonName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)       
    }

    return (
        <Container>
            <InputBox value={pokemonName} onChange={handleChangePokemonName}/>
            {
                error ? <div> error. please restart </div>
                : isLoading ? <div> loading ... </div> :
                    <PokemonResult>
                        <h3>{data.species.name}</h3>
                        <img src={data.sprites.front_shiny} alt={data.species.name} />
                    </PokemonResult>
            }
        </Container>
    )
}
