import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'



export default function ScreenAddMovie() {

  let dispatch = useDispatch()


  let [name, setName] = useState(' ')

    return (
        <div>
              <p>titre du film :</p>
              <input type= "text" value={name} onChange={(event) => setName(event.target.value)} /><br /><br />
              <Button variant="primary" onClick={() => dispatch({type : 'ADD_MOVIE', titre: name }) } >add</Button>

        </div>
    )

}
