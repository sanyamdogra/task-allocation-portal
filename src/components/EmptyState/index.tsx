import React from 'react';
import { SentimentVeryDissatisfied } from '@mui/icons-material';

import './styles.scss';

const rootClassName = 'task-allocation-empty-state';

interface Props {
  info: string;
  testId?: string;
}

const EmptyState: React.FC<Props> = ({ info, testId }) => {
  return (
    <div className={rootClassName} data-testid={testId}>
      <SentimentVeryDissatisfied className={`${rootClassName}__icon`} />
      <div className={`${rootClassName}__info`}>{info}</div>
    </div>
  );
};

export default EmptyState;
