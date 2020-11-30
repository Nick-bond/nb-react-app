import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHttp } from '../../hooks/http.hook';
import constants from '../../constants';
const { API_URL, API_RATING, API_RATING_UPDATE } = constants;

const MainContext = React.createContext();

function MainProvider({ children }) {
  const { loading, request } = useHttp();
  // const [itemList, setItemList] = useState([]);
  // const [ratings, setRatings] = useState([]);

  const getPosts = async () => {
    try {
      const data = await request(API_URL);
      setItemList(data);
    } catch (err) {
      console.error(err);
    }
  };

  const getRating = async () => {
    try {
      const data = await request(API_RATING);
      setRatings(data);
    } catch (err) {
      console.error(err);
    }
  };

  const onReviewUpdate = async (id, rating) => {
    const body = {
      id,
      rating,
    };

    try {
      await request(API_RATING_UPDATE, 'POST', { ...body });
      await getRating();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPosts();
    getRating();
  }, []);

  return (
    <MainContext.Provider
      value={{ itemList, loading, onReviewUpdate, ratings }}>
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MainProvider, MainContext };
