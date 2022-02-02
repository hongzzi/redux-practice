import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

import {increment, decrease, incrementByAmount} from '../../slices/counter'
import {RootState} from '../../store'

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ShowValue = styled.p`
    padding: 1rem;
`

const Button = styled.button`
    padding: 1rem 2rem;
`

const InputNumber = styled.input`
`

export default function Counter() {
    const [amount, setAmount] = useState<number>(0)
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    const handleClickIncrease = () => {
        dispatch(increment())
    }

    const handleClickDecrement = () => {
        dispatch(decrease())
    }

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }

    const handleSubmitAmount = () => {
        dispatch(incrementByAmount(amount))
    }

    return (
        <Container>
            <ShowValue>
                {count}
            </ShowValue>
            
            <Button onClick={handleClickIncrease}> + 1 </Button>
            <Button onClick={handleClickDecrement}> - 1 </Button>
            <InputNumber type={'number'} value={amount} onChange={handleChangeAmount}/>
            <Button onClick={handleSubmitAmount}> {amount} </Button>
        </Container>
    )
}
