import React from 'react';

import { applyBodyStyles } from '@app/utils/utils';

import Typography from '@app/components/ReferenceUI/Typography/Typography';
import Colors from '@app/components/ReferenceUI/Colors/Colors';

import { reference } from './ReferenceUI.module.scss';

const ReferenceUI: React.FC = () => {
  applyBodyStyles(reference);

  return (
    <>
      <Typography />
      <Colors />
    </>
  );
};

export default ReferenceUI;
