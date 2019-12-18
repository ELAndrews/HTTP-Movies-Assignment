import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MovieCard from "./MovieCard";

export default function UpdateMovie(props) {
  console.log(props);

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
      >
        <Form>
          <Field name="title" />
          <Field name="director" />
          <Field name="metascore" />
          <Field name="stars" />
        </Form>
      </Formik>
    </div>
  );
}
