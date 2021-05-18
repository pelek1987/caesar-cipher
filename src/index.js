import caesar13 from './caesar13';
import verify from './utils/verify';

verify(caesar13('PRZEPROGRAMOWANI'), 'CEMRCEBTENZBJNAV');
verify(caesar13('przeprogramowani'), 'cemrcebtenzbjnav');
verify(caesar13('PrZePrOgRaMoWaNi'), 'CeMrCeBtEnZbJnAv');
verify(caesar13('PrZ3Pr0gR4MoWaN1'), 'CeM3Ce0tE4ZbJnA1');
