import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`movie/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.log(error);
        return alert("Poster 정보 없음"), navigate(-1);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <section>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt="poster"
      />
    </section>
  );
};

export default DetailPage;
