import { FunctionComponent } from 'react';
import classnames from 'classnames';
import './character-detail.styles.scss';
import { Character } from 'core/api/characters/characters.types';
import Card from 'components/atoms/card';
import Icon from 'components/atoms/icon';

export interface Props {
  className?: string;
  setModalshow?: () => void;
  data?: Character;
}

const CharacterDetail: FunctionComponent<Props> = ({
  className,
  setModalshow,
  data,
  ...otherProps
}) => {
  return (
    <div className={classnames('character-detail', className)} {...otherProps}>
      <Icon
        className="character-detail-close"
        iconName="XIcon"
        color="red"
        onClick={setModalshow}
      />
      {!!data && (
        <div className="character-detail-content">
          {!!data?.image && (
            <Card className="character-detail-image" image={data.image} />
          )}
          <div className="character-detail-info">
            {!!data?.name && (
              <div className="character-detail-name">
                <h3>{data.name}</h3>
              </div>
            )}
            {!!data?.status && (
              <div className="character-detail-info-row">
                <h3>Status:</h3>
                <h3>{data.status}</h3>
              </div>
            )}
            {!!data?.species && (
              <div className="character-detail-info-row">
                <h3>Species:</h3>
                <h3>{data.species}</h3>
              </div>
            )}
            {!!data?.type && (
              <div className="character-detail-info-row">
                <h3>Type:</h3>
                <h3>{data.type}</h3>
              </div>
            )}
            {!!data?.gender && (
              <div className="character-detail-info-row">
                <h3>Gender:</h3>
                <h3>{data.gender}</h3>
              </div>
            )}
            {!!data?.origin && (
              <div className="character-detail-info-row">
                <h3>Origin:</h3>
                <h3>{data.origin}</h3>
              </div>
            )}
            {!!data?.location && (
              <div className="character-detail-info-row">
                <h3>Location:</h3>
                <h3>{data.location}</h3>
              </div>
            )}
            {!!data?.created && (
              <div className="character-detail-info-row">
                <h3>Created:</h3>
                <h3>{data.created.slice(0, 15)}</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

CharacterDetail.displayName = 'CharacterDetail';

export default CharacterDetail;
