import React from 'react';

import './styles.scss';

const rootClassName = 'invoice-amount-earned';

const AmountEarned: React.FC = () => {
  return (
    <div>
      <div className={rootClassName} data-testid='invoice-total-amount'>
        <span className={`${rootClassName}__amountLabel`}>Amount Earned:</span>
        1000 €
      </div>
    </div>
  );
};

export default AmountEarned;
