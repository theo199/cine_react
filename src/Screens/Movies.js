import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Media from 'react-bootstrap/Media'
import Button from 'react-bootstrap/Button'

export default function ScreenMovies() {

    let dispatch = useDispatch()

    let { movies } = useSelector((redux) => {
        return redux.global
    })

    return (
        <Container>

            {movies.map((movie, id) => {
                return (<Media>
                    <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={movie.image + "?=" + movie.id}
                        alt="Generic placeholder"
                    />
                    <Media.Body>
                        <h5>{movie.title}</h5>
                        <p>
                        {movie.category}
                        </p>
                        <Button variant="danger" onClick={() => dispatch({ type: 'DELETE_MOVIE', id: id })}>Delete</Button>
                    </Media.Body>
                    </Media>
                )
            })}

        </Container>
    )

}
