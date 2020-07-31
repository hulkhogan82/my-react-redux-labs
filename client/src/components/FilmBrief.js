import React from 'react';
import 'material-design-lite/material';
import { store } from '../store/store';
import {ShowingTimes} from './ShowingTimes';

/* Fix ERROR
export const FilmBrief = ({film, showings, currentDate}) => {
            <div style={styles.innerWrapper} key={film.id}>
                        <div style={styles.posterDiv}>
                            <img src={film.poster_path} alt="" style={styles.poster} />
                        </div>
                        <div style={styles.textDiv}>
                                <div style={styles.title}>{film.title}</div>
                                <div style={styles.runtimeP}>{film.runtimeP}</div>
                                <div style={styles.tagline}>{film.tagline}</div>
                        </div>
                        <ShowingTimes></ShowingTimes>
                        <div style={styles.showings}>
                        {showings && <ShowingTimes showings={showings} currentFilm={film} currentDate={currentDate} key={film.id} />}
                        </div>
                    </div>
  
};
*/
export const FilmBrief = ({film, showings, currentDate}) => (
  <section key={film.id} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
  <div style={styles.innerWrapper}>
    <div style={styles.posterDiv}>
      <img src={film.poster_path} alt="" style={styles.poster} />
    </div>
    <div style={styles.textDiv}>
      <p style={styles.title}>{film.title}</p>
      <p style={styles.runtimeP}>{film.runtime} minutes</p>
      <p style={styles.tagline}>{film.tagline}</p>
    </div>
  </div>
  <div style={styles.showings}>
  {showings && <ShowingTimes showings={showings} 
                             currentFilm={film} currentDate={currentDate} />}
</div>
</section>
);
const styles = {
    header: {
      width: "95vw",
      margin: "10px auto",
      padding: "10px",
    },
    filmsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    wrapper: {
      width: '300px',
      margin: '30px',
      cursor: 'pointer',
    },
    innerWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    poster: {
      maxWidth: '95%',
      objectFit: 'contain',
    },
    posterDiv: {
      flex: '1 1 25%',
      padding: "5px",
    },
    textDiv: {
      flex: '1 1 25%',
      padding: "10px 5px 10px 5px",
    },
    title: {
      fontSize: '1.75rem',
      fontWeight: '900',
      textTransform: 'uppercase',
      margin: '2px',
    },
    tagline: {
      margin: '2px',
      lineHeight: '1em',
    },
    runtimeP: {
      fontSize: "0.75rem",
      margin: '2px',
    },
    pickDateWrapper: {
      backgroundColor: 'rgba(0,0,0,0.1)',
      padding: '1em',
    },
    days: {
      color: 'rgba(0,0,0,0.75)',
      fontSize: '1.2em',
      padding: '1em',
      cursor: 'pointer',
    }
  
  };