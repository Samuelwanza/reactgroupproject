import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/feature/mission/missionSlice';
import Loader from '../../components/Loader';
import Style from './missions.module.css';

export default function Missions() {
  const { missions, loading } = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const joinMissionHandler = (missionId) => {
    dispatch(joinMission(missionId));
  };
  const leaveMissionHandler = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  useEffect(() => {
    dispatch(fetchMissions());
  }, []);
  return (
    <div>
      {
        loading && <Loader />
      }
      {
        !loading && (
        <table className={`${Style.Table}`}>
          <thead className={`${Style.Thead}`}>
            <tr>
              <th className={`${Style.TD}`}>mission</th>
              <th className={`${Style.TD}`}>description</th>
              <th className={`${Style.TD}`}>status</th>
              <td className={`${Style.TD}`} aria-label="actions" />
            </tr>
          </thead>
          <tbody>
            {
                missions.map((mission) => (
                  <tr className={`${Style.TR}`} key={mission.mission_id}>
                    <td className={`${Style.TD}`}>{mission.mission_name}</td>
                    <td className={`${Style.TD}`}>{mission.description}</td>
                    <td className={`${Style.TD}`}>
                      {
                            mission.reserved && (<p className={`${Style.ActiveBadge}`}>Active Member</p>)
                        }
                      {
                            !mission.reserved && (<p className={`${Style.InActiveBadge}`}>Not A Member</p>)
                        }
                    </td>
                    <td className={`${Style.TD}`}>
                      {
                            mission.reserved && (<button type="button" onClick={() => leaveMissionHandler(mission.mission_id)} className={`${Style.LeaveMissionBtn}`}>Leave Mission</button>)
                        }
                      {
                            !mission.reserved && (<button onClick={() => joinMissionHandler(mission.mission_id)} type="button" className={`${Style.JoinMissionBtn}`}>Join Mission</button>)
                        }
                    </td>
                  </tr>
                ))
               }
          </tbody>
        </table>
        )
      }
    </div>
  );
}
