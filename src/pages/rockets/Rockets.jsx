import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import {
  fetchRockets,
  leaveRockets,
  reserveRockets,
} from '../../redux/feature/rockets/rocketsSlice';

const Rockets = () => {
  const { rockets, loading, fetched } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const ReserveRocket = (id) => dispatch(reserveRockets(id));
  const leaveRocket = (id) => dispatch(leaveRockets(id));
  console.log(rockets);
  useEffect(() => {
    if (!fetched) {
      dispatch(fetchRockets());
    }
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
              <button
                type="button"
                onClick={
                  rocket.reserved
                    ? () => leaveRocket(rocket.id)
                    : () => ReserveRocket(rocket.id)
                }
              >
                {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rockets;