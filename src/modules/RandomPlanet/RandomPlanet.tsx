import React, { FC, useEffect } from 'react';
import { Card } from '@components/Card';
import { useTypedUseSelector } from '@src/hooks/useTypedUseSelector';
import { useAction } from '@src/hooks/useAction';
import { randomiseUtils } from '@utils/randomise.utils';

const RandomPlanet: FC = () => {
  const { dataRandom, randomCurrentID, loadingRandom } = useTypedUseSelector(
    (state) => state.randomPlanet,
  );
  const { stardbRequest, setRandomCurrentID } = useAction();

  let data;

  if (dataRandom) {
    const { name, population, orbital_period, diameter } = dataRandom;
    data = { name, population, orbital_period, diameter };
  }

  useEffect(() => {
    const random = String(randomiseUtils(2, 19));
    setRandomCurrentID({ randomCurrentID: random });
    stardbRequest(`planets/${random}`);
  }, [setRandomCurrentID, stardbRequest]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      const random = String(randomiseUtils(2, 19));
      setRandomCurrentID({ randomCurrentID: random });
      stardbRequest(`planets/${random}`);
    }, 8000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [randomCurrentID, setRandomCurrentID, stardbRequest]);

  return (
    <Card
      data={{
        ...data,
        id: randomCurrentID,
        type: 'planets',
      }}
      isRandom
      isLoading={loadingRandom}
    />
  );
};

export { RandomPlanet };
