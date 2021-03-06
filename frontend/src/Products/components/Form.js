import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = ( { handleSubmit } ) => {
    const [formValues, setFormValues] = useState({
        name: '',
        stock: '',
        price: '',
        description: ''
    })

    const inputFileRef = useRef()

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValues({ ...formValues, [name]: value })
    }

    const _handleSubmit = (event) => {
        event.preventDefault()
        handleSubmit({ ...formValues , image: inputFileRef.current.files[0] })
        console.log(formValues)
        console.log(inputFileRef.current.files)
    }

    return (
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input 
                        placeholder='Text input'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Stock</Label>
                <Control>
                    <Input 
                        type='number'
                        placeholder='Text input'
                        name='stock'
                        value={formValues.stock}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Price</Label>
                <Control>
                    <Input 
                        type='number'
                        placeholder='Text input'
                        name='price'
                        value={formValues.price}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Description</Label>
                <Control>
                    <Input 
                        placeholder='Text input'
                        name='description'
                        value={formValues.description}
                        onChange={handleChange}
                    />
                </Control>
            </Field>

            <Field>
                <Label>Image</Label>
                <Control>
                    <input type='file' ref={inputFileRef} />
                </Control>
            </Field>
            <Button type='submit' color='primary'>
                Save
            </Button>
        </form>
    )
}

export default Form