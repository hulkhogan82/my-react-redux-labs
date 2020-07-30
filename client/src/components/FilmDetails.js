import React from 'react';
import 'material-design-lite/material';
import { store } from '../store/store';

export const FilmDetails = () => {
    console.log("FilmDetails");
    const state = store.getState();
    const films = state.films;
    const film = films[1] || {};
    return (
        <>
            <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
                <div style={{}}>
                    <h1>{film.title}</h1>
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '1 1 30%' }}>
                        <img src={film.poster_path} alt="" style={styles.poster} />
                    </div>
                    <div style={{ flex: '1 1 70%' }}>
                        <h1>{film.title}</h1>
                        <h2>{film.tagline}</h2>
                        <p>{film.overview}</p>
                        <p>Viewer's ratings: <span>{film.vote_average}</span> / <span>{film.vote_count}</span></p>
                        <p>Released: {film.release_date}</p>
                        <p>{film.runtime}</p>
                        <a href="HOMEPAGE" target="movie_site">{film.homepage}</a>
                            Pick dates will go here
                            Showing times will go here
      </div>
                </div>
            </div>
        </>
    )
}
const styles = {
    poster: {
        backgroundSize: "100% 100%",
        maxWidth: "95%",
        objectFit: "contain",
        width: "200px",
        height: "200px",
        fontWeight: "bold", display: "flex",
        alignItems: "center", justifyContent: "center",
        borderRadius: "10px 10px 0px 0px",
    },
    container: {
        width: '95%', margin: '20px 20px', padding: '20px',
    }, poster: {
        maxWidth: '95%',
        objectFit: 'contain',
    },
    wrapper: {
        marginTop: '20px',
    },
    headline: {
        fontSize: '1.2em',
    },
    showingTimesWrapper: {
        display: 'flex', flexWrap: 'wrap',
    }, tile: {
        background: 'black', color: 'white', fontWeight: 'bold', padding: '20px', margin: '10px',
    },
}