import React, { useState } from 'react'
import styled from 'styled-components'

import {useGetItemByNameQuery} from '../../../sevices/pokemon'

const Container = styled.div`
    width: 100%;
    height: 200px;
`

const InputBox = styled.input``

const ItemContainer = styled.div``

const ItemResult = styled.div``

export default function Item() {
    const [itemName, setItemName] = useState<string>('')
    const {data, isLoading, error} = useGetItemByNameQuery(itemName)

    const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItemName(e.target.value)       
    }


    return (
        <Container>
            <ItemContainer>
                <InputBox value={itemName} onChange={handleChangeItemName}/>
                {
                    error ? <div> error. please restart </div>
                    : isLoading ? <div> loading ... </div> :
                        <ItemResult>
                            <h3>{data.name}</h3>
                            <p>{data.cost}</p>
                        </ItemResult>
                }
            </ItemContainer>
        </Container>
    )
}
