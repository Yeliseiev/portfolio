import classNames from 'classnames';
import React from 'react';

import { DecorType } from '../types/DecorType';
import { socialItems } from '../utils/config';

type Props = {
  position: DecorType;
};

export const Decor: React.FC<Props> = ({ position }) => (
  <div
    className={classNames(
      'decor',
      { 'decor--left': position === DecorType.LEFT },
      { 'decor--right': position === DecorType.RIGHT },
    )}
  >
    {position === DecorType.LEFT && (
      <ul className="decor__items">
        {socialItems.map(({ fill, url, image }) => (
          <li key={url}>
            <a
              href={url}
              className={`decor__link decor__link--${fill}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image}
            </a>
          </li>
        ))}
      </ul>
    )}

    {position === DecorType.RIGHT && (
      <span className="decor__items">
        <a href="mailto:yeliseiev.kim@gmail.com" className="decor__link">
          yeliseiev.kim@gmail.com
        </a>
      </span>
    )}
  </div>
);
