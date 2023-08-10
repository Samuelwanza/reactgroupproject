import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import { fetchRockets } from '../../redux/feature/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, loading } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  console.log(rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading
        && rockets.map((rocket) => (
          <div key={rocket.id}>
            <img src={rocket.flickr_images} alt="rocket" srcSet="" />
            <div>
              <h2>{rocket.title}</h2>
              <p>{rocket.description}</p>
              <button type="button">button</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rockets;
