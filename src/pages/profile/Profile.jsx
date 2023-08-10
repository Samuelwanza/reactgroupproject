import React from 'react';
import { useSelector } from 'react-redux';
import Style from './Profile.module.css';

export default function Profile() {
  const missions = useSelector(
    (state) => state.mission.missions.filter((mission) => mission.reserved),
  );

  return (
    <div className={`${Style.PageContainer}`}>
      <div className={`${Style.MyMissionContainer}`}>
        <h3>My Missions</h3>
        <div style={{ marginTop: '20px' }}>
          {
            missions.length ? (
              <ul className={`${Style.ListContainer}`}>
                {
                missions.map((mission) => (
                  <li className={`${Style.ListItem}`} key={mission.mission_id}>{mission.mission_name}</li>
                ))
            }
              </ul>
            ) : ''
         }
          {
            !missions.length && (
            <p style={{ color: 'red' }}>No joined missions</p>
            )
         }
        </div>
      </div>
      <div className={`${Style.MyRocketsContainer}`}>
        <h3>My Rockets</h3>
      </div>
    </div>
  );
}
