import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function UpdateMovie(props) {
  console.log(props);

  const updateMovie = selectedMovie => {
    axios
      .put(
        `http://localhost:5000/api/movies/${selectedMovie.id}`,
        selectedMovie
      )
      .then(res => {
        console.log(res);
        const setMovie = props.setMovie;
        setMovie(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <MovieCard movie={props.movie} />
      <Formik
        key={props.movie.id}
        initialValues={{
          title: props.movie.title,
          director: props.movie.director,
          metascore: props.movie.metascore,
          stars: props.movie.stars
        }}
        onSubmit={({ title, director, metascore, stars }) => {
          const selectedMovie = {
            id: props.movie.id,
            title,
            director,
            metascore,
            stars
          };
          updateMovie(selectedMovie);
        }}
      >
        <Form>
          <Field name="title" />
          <Field name="director" />
          <Field name="metascore" />
          <Field name="stars" />
          <input type="submit" />
        </Form>
      </Formik>
    </div>
  );
}
