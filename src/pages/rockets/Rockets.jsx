import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader';
import {
  fetchRockets,
  leaveRockets,
  reserveRockets,
} from '../../redux/feature/rockets/rocketsSlice';
import style from './Rockets.module.css';

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
    <div className={style.rocketContainer}>
      {loading && <Loader />}
      {!loading
        && rockets.map((rocket) => (
          <div key={rocket.id} className={style.rocketCard}>
            <img src={rocket.flickr_images} alt="rocket" srcSet="" />
            <div className={style.rightSection}>
              <h2>{rocket.rocket_name}</h2>
              <p>
                {rocket.reserved ? <span>reserved</span> : ''}
                {rocket.description}
              </p>
              <button
                className={rocket.reserved ? style.reserved : style.button}
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
