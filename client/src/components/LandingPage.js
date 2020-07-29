import React from 'react';
import 'material-design-lite/material';
import { store } from '../store/store';

export const LandingPage = () => {
    const currentDate = new Date();
    const state = store.getState();
    const films = state.films;
    const film = films[1] || {};
    console.log("LandingPage");
    console.log(film);
    return (
        <>
            <section style={styles.header} className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
                </div>
            </section>
            <section style={styles.filmsWrapper}>

                <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
                    <div style={styles.innerWrapper}>
                        <div style={styles.posterDiv}>
                            <img src={film.poster_path} alt="" style={styles.poster} />
                        </div>
                        <div style={styles.textDiv}>
                            <p style={styles.title}>{film.title}</p>
                            <p style={styles.runtimeP}>{film.runtimeP}</p>
                            <p style={styles.tagline}>{film.tagline}</p>
                        </div>
                    </div>
                    <div style={styles.showings}>
                        Showing times will go here
      </div>
                </section>

            </section>
        </>
    )
}

const styles = {
    poster: {
        backgroundSize: "100% 100%",
        width: "200px",
        height: "200px",
        fontWeight: "bold", display: "flex",
        alignItems: "center", justifyContent: "center",
        borderRadius: "10px 10px 0px 0px",
    },
}