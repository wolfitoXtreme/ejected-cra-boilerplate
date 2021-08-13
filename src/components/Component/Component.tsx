import React from 'react';

import classNames from 'clsx';

import { root, rootVariant } from './Component.module.scss';

interface ComponentInt {
  text: string;
}

const Component: React.FC<ComponentInt> = ({ text }) => (
  <>
    <h1>Ejected CRA Boilerplate</h1>

    <section>
      <p className={classNames(root)}>
        Fermentum neque, sed ultrices dui. Sed ut lorem vel magna fermentum
        eleifend non ac erat.
      </p>
      <p className={classNames(root, rootVariant)}>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia Curae; Nunc odio lorem, ultrices at metus in, ullamcorper
        fringilla libero.
      </p>
    </section>
  </>
);

export default Component;
